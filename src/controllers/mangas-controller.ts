import { IdentifiedChapter } from "../../../shared/src/types/Chapter";
import { Manga, StoredManga } from "../../../shared/src/types/Manga";
import { UUID } from "../../../shared/src/types/primitives/id";
import {
  isUUID,
  MangaEndpoint,
  SourceName,
} from "../../../shared/src/types/primitives/Identifiers";
import { ResponsePage } from "../../../shared/src/types/responses/ResponsePage";
import { TextFormatUtils } from "../../../shared/src/utils/text-format-utils";
import { DefaultValues } from "../config/default-values";
import { PrismaClient } from "../config/prisma/generated/client";
import PrismaConverterService from "../services/PrismaConverter.service";
import intersiteMangasController from "./intersite-mangas.controller";

class MangasController {
  private prisma;

  constructor() {
    this.prisma = new PrismaClient();
  }

  public async getAll(props: {
    srcs?: SourceName[];
    pageNumber?: number;
    pageSize?: number;
  }): Promise<ResponsePage<StoredManga>> {
    const pageSize = props.pageSize ?? DefaultValues.PAGE_SIZE;
    const pageNumber = props.pageNumber ?? 1;
    const mangas = await this.prisma.manga.findMany({
      skip: (pageNumber - 1) * pageSize,
      take: pageSize,
      where: { src: { in: props.srcs } },
    });
    return {
      elements: mangas.map((m) =>
        PrismaConverterService.PrismaMangaToStoredManga(m)
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
    });
    return manga === null
      ? undefined
      : PrismaConverterService.PrismaMangaToStoredManga(manga);
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
      title: manga.title,
      intersiteMangaId: intersiteManga.id,
      author: manga.author,
      image: manga.image,
    };
    const newManga = await this.prisma.manga.upsert({
      where: { src: manga.src, endpoint: manga.endpoint },
      create: newMangaData,
      update: newMangaData,
    });
    return PrismaConverterService.PrismaMangaToStoredManga(newManga);
  }

  public async getChaptersOf(
    id: UUID,
    props: { srcs?: SourceName[]; pageNumber?: number; pageSize?: number }
  ): Promise<ResponsePage<IdentifiedChapter>> {
    const pageSize = props.pageSize ?? DefaultValues.PAGE_SIZE;
    const pageNumber = props.pageNumber ?? 1;
    const mangas = await this.prisma.chapter.findMany({
      skip: (pageNumber - 1) * pageSize,
      take: pageSize,
      where: { src: { in: props.srcs }, manga: { id } },
      orderBy: { releaseDate: "desc" },
    });
    return {
      elements: mangas.map((m) =>
        PrismaConverterService.PrismaChapterToIdentifiedChapter(m)
      ),
      pageNumber,
      pageSize,
    };
  }
}

export default new MangasController();
