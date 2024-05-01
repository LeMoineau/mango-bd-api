import { ParentlessIntersiteChapter } from "../../../shared/src/types/basics/IntersiteChapter";
import {
  IntersiteManga,
  IntersiteMangaCore,
} from "../../../shared/src/types/basics/IntersiteManga";
import { UUID } from "../../../shared/src/types/primitives/Identifiers";
import {
  isUUID,
  MangaFormattedName,
  SourceName,
} from "../../../shared/src/types/primitives/Identifiers";
import { ResponsePage } from "../../../shared/src/types/responses/ResponsePage";
import { PrismaClient } from "../config/prisma/generated/client";
import PrismaConverterService from "../services/PrismaConverter.service";
import AdditionalPropsService from "../services/AdditionalProps.service";

class IntersiteMangasController {
  private prisma;

  constructor() {
    this.prisma = new PrismaClient();
  }

  public async getAll(props: {
    srcs?: SourceName[];
    pageNumber?: number;
    pageSize?: number;
    formattedName?: string;
    mangaTitle?: string;
    mangaAuthor?: string;
  }): Promise<ResponsePage<IntersiteManga>> {
    const { pageSize, pageNumber, take, skip } =
      AdditionalPropsService.page(props);
    const { mangaTitle, mangaAuthor } =
      AdditionalPropsService.intersiteMangasQuery(props);
    const intersiteMangas = await this.prisma.intersiteManga.findMany({
      skip,
      take,
      where: {
        formattedName: props.formattedName,
        mangas: {
          every: {
            src: {
              in: props.srcs,
            },
            title: {
              contains: mangaTitle,
              mode: "insensitive",
            },
            author: {
              contains: mangaAuthor,
              mode: "insensitive",
              not: mangaAuthor && null,
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
            url: true,
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
    const { pageSize, pageNumber, take, skip } =
      AdditionalPropsService.page(props);
    const intersiteChapters = await this.prisma.intersiteChapter.findMany({
      where: {
        intersiteManga: { id },
        chapters: { every: { src: { in: props.srcs } } },
      },
      include: {
        chapters: {
          select: {
            id: true,
            title: true,
            url: true,
            number: true,
            src: true,
            endpoint: true,
            image: true,
            releaseDate: true,
          },
          orderBy: {
            number: "asc",
          },
        },
      },
    });
    return {
      elements: intersiteChapters
        .filter((_, index) => index >= skip && index < skip + take)
        .map((ic) =>
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
