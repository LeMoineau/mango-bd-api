import { IdentifiedMangaNested } from "../../../shared/src/types/attributes/MangaNested";
import {
  Chapter,
  ChapterCore,
  IdentifiedChapter,
  StoredChapter,
} from "../../../shared/src/types/Chapter";
import { IntersiteChapter } from "../../../shared/src/types/IntersiteChapter";
import { IntersiteManga } from "../../../shared/src/types/IntersiteManga";
import {
  IdentifiedMangaCore,
  Manga,
  StoredManga,
} from "../../../shared/src/types/Manga";
import {
  Chapter as PrismaChapter,
  IntersiteChapter as PrismaIntersiteChapter,
  Manga as PrismaManga,
  IntersiteManga as PrismaIntersiteManga,
} from "../config/prisma/generated/client";

class PrismaConverter {
  public PrismaChapterToStoredChapter<T extends IdentifiedMangaNested>(
    chapter: PrismaChapter,
    manga: T
  ): StoredChapter {
    return {
      id: chapter.id,
      src: chapter.src,
      endpoint: chapter.endpoint,
      title: chapter.title,
      number: chapter.number,
      image: chapter.image ?? undefined,
      releaseDate: chapter.releaseDate ?? undefined,
      manga: {
        id: manga.id,
        endpoint: manga.endpoint,
        title: manga.title,
      },
    };
  }

  public PrismaMangaToStoredManga(manga: PrismaManga): StoredManga {
    return {
      id: manga.id,
      src: manga.src,
      endpoint: manga.endpoint,
      title: manga.title,
      author: manga.author ?? undefined,
      image: manga.image ?? undefined,
    };
  }

  public PrismaIntersiteChapterToIntersiteChapter(
    intersiteChapter: PrismaIntersiteChapter,
    intersiteManga: PrismaIntersiteManga,
    chapters: PrismaChapter[]
  ): IntersiteChapter {
    return {
      id: intersiteChapter.id,
      formattedName: intersiteChapter.formattedName,
      intersiteManga: {
        id: intersiteManga.id,
        formattedName: intersiteManga.formattedName,
      },
      chapters: chapters.map((c) => ({
        id: c.id,
        endpoint: c.endpoint,
        src: c.src,
        title: c.title,
        number: c.number,
        image: c.image ?? undefined,
        releaseDate: c.releaseDate ?? undefined,
      })),
    };
  }

  public PrismaIntersiteMangaToIntersiteManga(
    intersiteManga: PrismaIntersiteManga,
    mangas: PrismaManga[]
  ): IntersiteManga {
    return {
      id: intersiteManga.id,
      formattedName: intersiteManga.formattedName,
      mangas: mangas.map((m) => ({
        id: m.id,
        endpoint: m.endpoint,
        src: m.src,
        title: m.title,
        author: m.author ?? undefined,
        image: m.image ?? undefined,
      })),
    };
  }
}

export default new PrismaConverter();
