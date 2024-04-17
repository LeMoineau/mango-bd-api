import { ParentlessIntersiteChapter } from "../../../shared/src/types/IntersiteChapter";
import {
  IntersiteManga,
  IntersiteMangaCore,
} from "../../../shared/src/types/IntersiteManga";
import { UUID } from "../../../shared/src/types/primitives/id";
import {
  isUUID,
  MangaFormattedName,
  SourceName,
} from "../../../shared/src/types/primitives/Identifiers";
import { ResponsePage } from "../../../shared/src/types/responses/ResponsePage";
import { DefaultValues } from "../config/default-values";
import { PrismaClient } from "../config/prisma/generated/client";
import PrismaConverterService from "../services/PrismaConverter.service";

class IntersiteMangasController {
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
  }): Promise<ResponsePage<IntersiteManga>> {
    const pageSize = props.pageSize ?? DefaultValues.PAGE_SIZE;
    const pageNumber = props.pageNumber ?? 1;
    const intersiteMangas = await this.prisma.intersiteManga.findMany({
      skip: (pageNumber - 1) * pageSize,
      take: pageSize,
      where: {
        formattedName: props.chapterFormattedName,
        mangas: {
          every: {
            src: {
              in: props.srcs,
            },
          },
        },
      },
      include: {
        mangas: {
          select: {
            id: true,
            src: true,
            endpoint: true,
            title: true,
            author: true,
            image: true,
          },
        },
      },
    });
    return {
      elements: intersiteMangas.map((im) =>
        PrismaConverterService.PrismaIntersiteMangaToIntersiteManga(
          im,
          im.mangas!
        )
      ),
      pageNumber,
      pageSize,
    };
  }

  public async get(
    props: UUID | { formattedName: MangaFormattedName }
  ): Promise<IntersiteManga | undefined> {
    let where = {};
    if (isUUID(props)) {
      where = { id: props };
    } else {
      where = { formattedName: props.formattedName };
    }
    const intersiteManga = await this.prisma.intersiteManga.findFirst({
      where,
      include: {
        mangas: true,
      },
    });
    return intersiteManga === null
      ? undefined
      : PrismaConverterService.PrismaIntersiteMangaToIntersiteManga(
          intersiteManga,
          intersiteManga.mangas
        );
  }

  public async save(
    intersiteMangaCore: IntersiteMangaCore
  ): Promise<IntersiteManga> {
    const res = await this.prisma.intersiteManga.create({
      data: {
        ...intersiteMangaCore,
      },
    });
    return {
      ...res,
      mangas: [],
    };
  }

  public async getIntersiteChaptersOf(
    id: UUID,
    props: { srcs?: SourceName[]; pageNumber?: number; pageSize?: number }
  ): Promise<ResponsePage<ParentlessIntersiteChapter>> {
    const pageSize = props.pageSize ?? DefaultValues.PAGE_SIZE;
    const pageNumber = props.pageNumber ?? 1;
    const intersiteChapters = await this.prisma.intersiteChapter.findMany({
      skip: (pageNumber - 1) * pageSize,
      take: pageSize,
      where: {
        intersiteManga: { id },
        chapters: { every: { src: { in: props.srcs } } },
      },
      include: {
        chapters: {
          select: {
            id: true,
            title: true,
            number: true,
            src: true,
            endpoint: true,
            image: true,
            releaseDate: true,
          },
        },
      },
    });
    return {
      elements: intersiteChapters.map((ic) =>
        PrismaConverterService.PrismaIntersiteChapterToParentlessIntersiteChapter(
          ic,
          ic.chapters!
        )
      ),
      pageNumber,
      pageSize,
    };
  }
}

export default new IntersiteMangasController();
