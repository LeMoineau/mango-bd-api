import { IdentifiedMangaNested } from "../../../shared/src/types/attributes/MangaNested";
import {
  IdentifiedChapter,
  StoredChapter,
} from "../../../shared/src/types/basics/Chapter";
import {
  IntersiteChapter,
  ParentlessIntersiteChapter,
} from "../../../shared/src/types/basics/IntersiteChapter";
import { IntersiteManga } from "../../../shared/src/types/basics/IntersiteManga";
import {
  IdentifiedMangaCore,
  StoredManga,
} from "../../../shared/src/types/basics/Manga";
import { DefaultValues } from "../config/default-values";
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
      lang: chapter.lang ?? DefaultValues.CHAPTER_LANG,
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
      lang: manga.lang ?? DefaultValues.MANGA_LANG,
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
        lang: c.lang ?? DefaultValues.CHAPTER_LANG,
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
    const parentlessIntersiteChapter =
      this.PrismaIntersiteChapterToParentlessIntersiteChapter(
        intersiteChapter,
        chapters
      );
    return new IntersiteChapter(
      parentlessIntersiteChapter.id,
      parentlessIntersiteChapter.formattedName,
      {
        id: intersiteManga.id,
        formattedName: intersiteManga.formattedName,
      },
      parentlessIntersiteChapter.chapters
    );
  }

  public PrismaIntersiteMangaToIntersiteManga<
    T extends IdentifiedMangaCore & {
      lang: string | null;
      image: string | null;
      author: string | null;
    },
  >(intersiteManga: PrismaIntersiteManga, mangas: T[]): IntersiteManga {
    return new IntersiteManga(
      intersiteManga.id,
      intersiteManga.formattedName,
      mangas.map((m) => ({
        id: m.id,
        endpoint: m.endpoint,
        url: m.url,
        src: m.src,
        title: m.title,
        lang: m.lang,
        author: m.author ?? undefined,
        image: m.image ?? undefined,
      }))
    );
  }
}

export default new PrismaConverter();
