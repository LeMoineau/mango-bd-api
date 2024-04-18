import {
  IntersiteChapter,
  IntersiteChapterCore,
} from "../../../shared/src/types/IntersiteChapter";
import {
  ChapterFormattedName,
  isUUID,
  MangaFormattedName,
  SourceName,
  UUID,
} from "../../../shared/src/types/primitives/Identifiers";
import { ResponsePage } from "../../../shared/src/types/responses/ResponsePage";
import { DefaultValues } from "../config/default-values";
import { PrismaClient } from "../config/prisma/generated/client";
import PrismaConverterService from "../services/PrismaConverter.service";
import intersiteMangasController from "./intersite-mangas.controller";

class IntersiteChaptersController {
  private prisma;

  constructor() {
    this.prisma = new PrismaClient();
  }

  public async getAll(props: {
    srcs?: SourceName[];
    pageNumber?: number;
    pageSize?: number;
    chapterFormattedName?: string;
    mangaFormattedName?: string;
  }): Promise<ResponsePage<IntersiteChapter>> {
    const pageSize = props.pageSize ?? DefaultValues.PAGE_SIZE;
    const pageNumber = props.pageNumber ?? 1;
    const intersiteChapters = await this.prisma.intersiteChapter.findMany({
      skip: (pageNumber - 1) * pageSize,
      take: pageSize,
      where: {
        formattedName: props.chapterFormattedName,
        intersiteManga: {
          formattedName: props.mangaFormattedName,
        },
        chapters: {
          every: {
            src: {
              in: props.srcs,
            },
          },
        },
      },
      include: {
        intersiteManga: {
          select: {
            id: true,
            formattedName: true,
          },
        },
        chapters: true,
      },
    });
    return {
      elements: intersiteChapters.map((ic) =>
        PrismaConverterService.PrismaIntersiteChapterToIntersiteChapter(
          ic,
          ic.intersiteManga!,
          ic.chapters!
        )
      ),
      pageNumber,
      pageSize,
    };
  }

  public async get(
    props: UUID | { formattedName: ChapterFormattedName }
  ): Promise<IntersiteChapter | undefined> {
    let where = {};
    if (isUUID(props)) {
      where = { id: props };
    } else {
    }
    const intersiteChapter = await this.prisma.intersiteChapter.findFirst({
      where,
      include: { intersiteManga: true, chapters: true },
    });
    return intersiteChapter === null
      ? undefined
      : PrismaConverterService.PrismaIntersiteChapterToIntersiteChapter(
          intersiteChapter,
          intersiteChapter.intersiteManga!,
          intersiteChapter.chapters
        );
  }

  public async save(
    intersiteChapterData: IntersiteChapterCore & {
      mangaFormattedName: MangaFormattedName;
    }
  ): Promise<IntersiteChapter> {
    //CREATE INTERSITE_MANGA IF NOT EXIST
    let intersiteManga = await intersiteMangasController.get({
      formattedName: intersiteChapterData.mangaFormattedName,
    });
    if (!intersiteManga) {
      intersiteManga = await intersiteMangasController.save({
        formattedName: intersiteChapterData.mangaFormattedName,
      });
    }

    //CREATE INTERSITE_CHAPTER
    const intersiteChapter = await this.prisma.intersiteChapter.create({
      data: {
        formattedName: intersiteChapterData.formattedName,
        intersiteMangaId: intersiteManga.id,
      },
    });

    return PrismaConverterService.PrismaIntersiteChapterToIntersiteChapter(
      intersiteChapter,
      intersiteManga,
      []
    );
  }
}

export default new IntersiteChaptersController();
