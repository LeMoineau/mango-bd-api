import {
  IntersiteChapter,
  IntersiteChapterCore,
} from "../../../shared/src/types/basics/IntersiteChapter";
import {
  ChapterFormattedName,
  isUUID,
  MangaFormattedName,
  SourceName,
  UUID,
} from "../../../shared/src/types/primitives/Identifiers";
import { ResponsePage } from "../../../shared/src/types/responses/ResponsePage";
import { PrismaClient } from "../config/prisma/generated/client";
import PrismaConverterService from "../services/PrismaConverter.service";
import intersiteMangasController from "./intersite-mangas.controller";
import AdditionalPropsService from "../services/AdditionalProps.service";

class IntersiteChaptersController {
  private prisma;

  constructor() {
    this.prisma = new PrismaClient();
  }

  public async getAll(props: {
    srcs?: SourceName[];
    pageNumber?: number;
    pageSize?: number;
    formattedName?: string;
    intersiteMangaFormattedName?: string;
    chapterTitle?: string;
    chapterNumber?: string;
  }): Promise<ResponsePage<IntersiteChapter>> {
    const { pageSize, pageNumber, take, skip } =
      AdditionalPropsService.page(props);
    const { chapterTitle, chapterNumber } =
      AdditionalPropsService.intersiteChaptersQuery(props);
    const intersiteChapters = await this.prisma.intersiteChapter.findMany({
      skip,
      take,
      where: {
        formattedName: props.formattedName,
        intersiteManga: {
          formattedName: props.intersiteMangaFormattedName,
        },
        chapters: {
          every: {
            src: {
              in: props.srcs,
            },
            title: {
              contains: chapterTitle,
              mode: "insensitive",
            },
            number: {
              contains: chapterNumber,
              mode: "insensitive",
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
      where = { formattedName: props.formattedName };
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
