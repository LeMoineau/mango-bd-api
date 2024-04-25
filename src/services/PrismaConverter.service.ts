import { IdentifiedMangaNested } from "../../../shared/src/types/attributes/MangaNested";
import {
  IdentifiedChapter,
  StoredChapter,
} from "../../../shared/src/types/Chapter";
import {
  IntersiteChapter,
  ParentlessIntersiteChapter,
} from "../../../shared/src/types/IntersiteChapter";
import { IntersiteManga } from "../../../shared/src/types/IntersiteManga";
import {
  IdentifiedMangaCore,
  StoredManga,
} from "../../../shared/src/types/Manga";
import {
  IntersiteChapter as PrismaIntersiteChapter,
  IntersiteManga as PrismaIntersiteManga,
} from "../config/prisma/generated/client";
import { PrismaChapter } from "../types/prisma/PrismaChapter";
import { PrismaManga } from "../types/prisma/PrismaManga";

class PrismaConverter {
  public PrismaChapterToIdentifiedChapter(
    chapter: PrismaChapter
  ): IdentifiedChapter {
    return {
      id: chapter.id,
      src: chapter.src,
      endpoint: chapter.endpoint,
      url: chapter.url,
      title: chapter.title,
      number: chapter.number,
      image: chapter.image ?? undefined,
      releaseDate: chapter.releaseDate ?? undefined,
    };
  }

  public PrismaChapterToStoredChapter<T extends IdentifiedMangaNested>(
    chapter: PrismaChapter,
    manga: T
  ): StoredChapter {
    return {
      ...this.PrismaChapterToIdentifiedChapter(chapter),
      manga: {
        id: manga.id,
        endpoint: manga.endpoint,
        url: manga.url,
        title: manga.title,
      },
    };
  }

  public PrismaMangaToStoredManga(
    manga: PrismaManga,
    intersiteManga: PrismaIntersiteManga
  ): StoredManga {
    return {
      id: manga.id,
      src: manga.src,
      endpoint: manga.endpoint,
      url: manga.url,
      title: manga.title,
      author: manga.author ?? undefined,
      image: manga.image ?? undefined,
      intersiteManga: {
        id: intersiteManga.id,
        formattedName: intersiteManga.formattedName,
      },
    };
  }

  public PrismaIntersiteChapterToParentlessIntersiteChapter<
    T extends PrismaChapter,
  >(
    intersiteChapter: PrismaIntersiteChapter,
    chapters: T[]
  ): ParentlessIntersiteChapter {
    return {
      id: intersiteChapter.id,
      formattedName: intersiteChapter.formattedName,
      chapters: chapters.map((c) => ({
        id: c.id,
        src: c.src,
        endpoint: c.endpoint,
        url: c.url,
        title: c.title,
        number: c.number,
        image: c.image ?? undefined,
        releaseDate: c.releaseDate ?? undefined,
      })),
    };
  }

  public PrismaIntersiteChapterToIntersiteChapter<T extends PrismaChapter>(
    intersiteChapter: PrismaIntersiteChapter,
    intersiteManga: PrismaIntersiteManga,
    chapters: T[]
  ): IntersiteChapter {
    return {
      ...this.PrismaIntersiteChapterToParentlessIntersiteChapter(
        intersiteChapter,
        chapters
      ),
      intersiteManga: {
        id: intersiteManga.id,
        formattedName: intersiteManga.formattedName,
      },
    };
  }

  public PrismaIntersiteMangaToIntersiteManga<
    T extends IdentifiedMangaCore & {
      image: string | null;
      author: string | null;
    },
  >(intersiteManga: PrismaIntersiteManga, mangas: T[]): IntersiteManga {
    return {
      id: intersiteManga.id,
      formattedName: intersiteManga.formattedName,
      mangas: mangas.map((m) => ({
        id: m.id,
        endpoint: m.endpoint,
        url: m.url,
        src: m.src,
        title: m.title,
        author: m.author ?? undefined,
        image: m.image ?? undefined,
      })),
    };
  }
}

export default new PrismaConverter();
