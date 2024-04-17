import {
  IntersiteChapter,
  IntersiteChapterCore,
} from "../../../shared/src/types/IntersiteChapter";
import { SourceName, UUID } from "../../../shared/src/types/primitives/id";
import {
  ChapterFormattedName,
  isUUID,
  MangaFormattedName,
} from "../../../shared/src/types/primitives/Identifiers";
import { PrismaClient } from "../config/prisma/generated/client";
import PrismaConverterService from "../services/PrismaConverter.service";
import intersiteMangasController from "./intersite-mangas.controller";

class IntersiteChaptersController {
  private prisma;

  constructor() {
    this.prisma = new PrismaClient();
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
