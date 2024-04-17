import {
  Chapter,
  ScrapedChapter,
  StoredChapter,
} from "../../../shared/src/types/Chapter";
import { UUID } from "../../../shared/src/types/primitives/id";
import {
  isUUID,
  SourceName,
} from "../../../shared/src/types/primitives/Identifiers";
import { ResponsePage } from "../../../shared/src/types/responses/ResponsePage";
import { TextFormatUtils } from "../../../shared/src/utils/text-format-utils";
import config from "../config/config";
import { DefaultValues } from "../config/default-values";
import { PrismaClient } from "../config/prisma/generated/client";
import PrismaConverterService from "../services/PrismaConverter.service";
import intersiteChaptersController from "./intersite-chapters.controller";
import mangasController from "./mangas-controller";

class ChaptersController {
  private prisma;

  constructor() {
    this.prisma = new PrismaClient();
  }

  public async getAll(props: {
    srcs?: SourceName[];
    gte_date?: Date;
    pageNumber?: number;
    pageSize?: number;
  }): Promise<ResponsePage<StoredChapter>> {
    const pageSize = props.pageSize ?? DefaultValues.PAGE_SIZE;
    const pageNumber = props.pageNumber ?? 1;
    const chapters = await this.prisma.chapter.findMany({
      skip: (pageNumber - 1) * pageSize,
      take: pageSize,
      where: { src: { in: props.srcs } },
      orderBy: { releaseDate: "desc" },
      include: {
        manga: {
          select: {
            id: true,
            title: true,
            endpoint: true,
          },
        },
      },
    });
    return {
      elements: chapters.map((c) =>
        PrismaConverterService.PrismaChapterToStoredChapter(c, c.manga!)
      ),
      pageNumber,
      pageSize,
    };
  }

  public async get(props: UUID | {}): Promise<StoredChapter | undefined> {
    let where = {};
    if (isUUID(props)) {
      where = { id: props };
    }
    const chapter = await this.prisma.chapter.findFirst({
      where,
      include: {
        manga: true,
      },
    });
    return chapter === null
      ? undefined
      : PrismaConverterService.PrismaChapterToStoredChapter(
          chapter,
          chapter.manga!
        );
  }

  public async save(chapter: ScrapedChapter) {
    //CHECK IF CHAPTER ALREADY EXIST
    const checking = await this.prisma.chapter.findFirst({
      where: {
        src: chapter.src,
        endpoint: chapter.endpoint,
      },
      include: { manga: true },
    });
    if (checking !== null) {
      return PrismaConverterService.PrismaChapterToStoredChapter(
        checking,
        checking.manga!
      );
    }

    //CREATING MANGA IF NOT EXIST
    let manga = await mangasController.get({
      endpoint: chapter.manga.endpoint,
      src: chapter.src,
    });
    if (!manga) {
      manga = await mangasController.save({
        src: chapter.src,
        endpoint: chapter.manga.endpoint,
        title: chapter.manga.title,
      });
    }

    //CREATING INTERSITE_CHAPTER IF NOT EXIST
    let intersiteChapter = await intersiteChaptersController.get({
      formattedName: TextFormatUtils.formatChapterName(
        chapter.number,
        chapter.manga.title
      ),
    });
    if (!intersiteChapter) {
      intersiteChapter = await intersiteChaptersController.save({
        formattedName: TextFormatUtils.formatChapterName(
          chapter.number,
          chapter.manga.title
        ),
        mangaFormattedName: TextFormatUtils.formatMangaTitle(
          chapter.manga.title
        ),
      });
    }

    //CREATING CHAPTER
    const res = await this.prisma.chapter.create({
      data: {
        endpoint: chapter.endpoint,
        src: chapter.src,
        title: chapter.title,
        number: chapter.number,
        image: chapter.image,
        releaseDate: chapter.releaseDate,
        mangaId: manga.id,
        intersiteChapterId: intersiteChapter.id,
      },
    });
    return PrismaConverterService.PrismaChapterToStoredChapter(res, {
      id: manga.id,
      endpoint: manga.endpoint,
      title: manga.title,
    });
  }

  // public async saveAll(src: SourceName, chapters: Chapter[]) {
  //   for (let c of chapters) {
  //     await this.save(src, c);
  //   }
  // }
}

export default new ChaptersController();
