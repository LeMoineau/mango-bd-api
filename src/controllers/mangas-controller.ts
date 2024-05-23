import { IdentifiedChapter } from "../../../shared/src/types/basics/Chapter";
import { Manga, StoredManga } from "../../../shared/src/types/basics/Manga";
import { UUID } from "../../../shared/src/types/primitives/Identifiers";
import {
  isUUID,
  MangaEndpoint,
  SourceName,
} from "../../../shared/src/types/primitives/Identifiers";
import { ResponsePage } from "../../../shared/src/types/responses/ResponsePage";
import { TextFormatUtils } from "../../../shared/src/utils/text-format-utils";
import { PrismaClient } from "../config/prisma/generated/client";
import PrismaConverterService from "../services/PrismaConverter.service";
import intersiteMangasController from "./intersite-mangas.controller";
import AdditionalPropsService from "../services/AdditionalProps.service";

class MangasController {
  private prisma;

  constructor() {
    this.prisma = new PrismaClient();
  }

  public async getAll(props: {
    srcs?: SourceName[];
    pageNumber?: number;
    pageSize?: number;
    title?: string;
    author?: string;
  }): Promise<ResponsePage<StoredManga>> {
    const { pageSize, pageNumber, take, skip } =
      AdditionalPropsService.page(props);
    const { title, author } = AdditionalPropsService.mangaQuery(props);
    const mangas = await this.prisma.manga.findMany({
      skip,
      take,
      where: {
        src: { in: props.srcs },
        title: { contains: title, mode: "insensitive" },
        author: { contains: author, mode: "insensitive", not: author && null },
      },
      include: {
        intersiteManga: true,
      },
    });
    return {
      elements: mangas.map((m) =>
        PrismaConverterService.PrismaMangaToStoredManga(m, m.intersiteManga!)
      ),
      pageNumber,
      pageSize,
    };
  }

  public async get(
    props: UUID | { endpoint: MangaEndpoint; src: SourceName }
  ): Promise<StoredManga | undefined> {
    let where = {};
    if (isUUID(props)) {
      where = { id: props };
    } else {
      where = { endpoint: props.endpoint, src: props.src };
    }
    const manga = await this.prisma.manga.findFirst({
      where,
      include: {
        intersiteManga: true,
      },
    });
    return manga === null
      ? undefined
      : PrismaConverterService.PrismaMangaToStoredManga(
          manga,
          manga.intersiteManga!
        );
  }

  public async save(manga: Manga): Promise<StoredManga> {
    const mangaFormattedName = TextFormatUtils.formatMangaTitle(manga.title);
    let intersiteManga = await intersiteMangasController.get({
      formattedName: mangaFormattedName,
    });
    if (!intersiteManga) {
      intersiteManga = await intersiteMangasController.save({
        formattedName: mangaFormattedName,
      });
    }
    const newMangaData = {
      src: manga.src,
      endpoint: manga.endpoint,
      url: manga.url,
      title: manga.title,
      intersiteMangaId: intersiteManga.id,
      author: manga.author,
      image: manga.image,
    };
    const newManga = await this.prisma.manga.upsert({
      where: { src: manga.src, endpoint: manga.endpoint },
      create: newMangaData,
      update: newMangaData,
      include: {
        intersiteManga: true,
      },
    });
    return PrismaConverterService.PrismaMangaToStoredManga(
      newManga,
      newManga.intersiteManga!
    );
  }

  public async getChaptersOf(
    id: UUID,
    props: { srcs?: SourceName[]; pageNumber?: number; pageSize?: number }
  ): Promise<ResponsePage<IdentifiedChapter>> {
    const { pageSize, pageNumber, take, skip } =
      AdditionalPropsService.page(props);
    const chapters = await this.prisma.chapter.findMany({
      skip,
      take,
      where: { src: { in: props.srcs }, manga: { id } },
      orderBy: { number: "desc" },
    });
    return {
      elements: chapters.map((m) =>
        PrismaConverterService.PrismaChapterToIdentifiedChapter(m)
      ),
      pageNumber,
      pageSize,
    };
  }
}

export default new MangasController();
