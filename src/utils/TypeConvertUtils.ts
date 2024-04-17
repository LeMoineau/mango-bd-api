import { DefaultArgs } from "@prisma/client/runtime/library";
import IntersiteChapter from "../../../shared/src/types/intersite/IntersiteChapter";
import {
  FormattedName,
  MangaEndpoint,
  SourceName,
  UUID,
} from "../../../shared/src/types/primitives/id";
import { ArrayUtils } from "../../../shared/src/utils/array-utils";
import { TextFormatUtils } from "../../../shared/src/utils/text-format-utils";
import {
  Manga as MangaModel,
  Chapter as ChapterModel,
  Prisma,
} from "../config/prisma/generated/client";
import { IntersiteUtils } from "../../../shared/src/utils/intersite-utils";

export namespace TypeConvertUtils {
  /**
   * Convert Chapter to Prisma Chapter Model
   * @returns Chapter format for prisma Chapter Model
   */
  // export function ChapterToChapterData(
  //   c: Chapter,
  //   src: SourceName,
  //   mangaId: UUID
  // ): Prisma.ChapterCreateManyInput {
  //   return {
  //     endpoint: c.chapterEndpoint,
  //     src: src,
  //     title: c.title,
  //     number: c.number,
  //     image: c.image ?? null,
  //     releaseDate: c.releaseDate ?? null,
  //     formattedNumber: c.formattedNumber,
  //     mangaId,
  //   };
  // }
  /**
   * Convert chapter to manga creatable model
   * @param c Chapter
   * @param src source name
   * @returns Chapter format to create new chapter with Prisma
   */
  // export function ChapterToMangaData(
  //   c: Chapter,
  //   src: SourceName
  // ): Prisma.MangaCreateManyInput {
  //   return {
  //     mangaEndpoint: c.manga.mangaEndpoint,
  //     src,
  //     formattedName: c.manga.formattedName,
  //     title: c.manga.title,
  //   };
  // }
}
