import { Manga, StoredManga } from "../../../shared/src/types/Manga";
import { UUID } from "../../../shared/src/types/primitives/id";
import {
  isUUID,
  MangaEndpoint,
  SourceName,
} from "../../../shared/src/types/primitives/Identifiers";
import { TextFormatUtils } from "../../../shared/src/utils/text-format-utils";
import { PrismaClient } from "../config/prisma/generated/client";
import PrismaConverterService from "../services/PrismaConverter.service";
import intersiteMangasController from "./intersite-mangas.controller";

class MangasController {
  private prisma;

  constructor() {
    this.prisma = new PrismaClient();
  }

  public async get(
    props: UUID | { endpoint: MangaEndpoint; src: SourceName }
  ): Promise<StoredManga | undefined> {
    let where = {};
    if (isUUID(props)) {
      where = { id: props };
    } else {
      where = { endpoint: props.endpoint, src: props.src };
    }
    const manga = await this.prisma.manga.findFirst({
      where,
    });
    return manga === null
      ? undefined
      : PrismaConverterService.PrismaMangaToStoredManga(manga);
  }

  public async save(manga: Manga): Promise<StoredManga> {
    const mangaFormattedName = TextFormatUtils.formatMangaTitle(manga.title);
    let intersiteManga = await intersiteMangasController.get({
      formattedName: mangaFormattedName,
    });
    if (!intersiteManga) {
      intersiteManga = await intersiteMangasController.save({
        formattedName: mangaFormattedName,
      });
    }
    const newManga = await this.prisma.manga.create({
      data: {
        src: manga.src,
        endpoint: manga.endpoint,
        title: manga.endpoint,
        intersiteMangaId: intersiteManga.id,
      },
    });
    return {
      id: newManga.id,
      src: newManga.src,
      endpoint: newManga.endpoint,
      title: newManga.title,
      author: newManga.author ?? undefined,
      image: newManga.image ?? undefined,
    };
  }

  //   public async getAll({
  //     query,
  //     srcs,
  //     ids,
  //   }: {
  //     query?: string;
  //     srcs?: SourceName[];
  //     ids?: string[];
  //   }): Promise<IntersiteMangaInfos[]> {
  //     let mangas: { [src in SourceName]?: MangaSearchInfos[] } = {};
  //     if (!ids && query) {
  //       // Par recherche
  //       for (let src of srcs ? srcs : config.getEnabledSource()) {
  //         mangas[src] = await config.getScraperOfSrc(src).getMangas({
  //           q: query,
  //         });
  //       }
  //     } else if (srcs && ids && srcs.length === ids.length) {
  //       // Par sources et ids
  //       for (let i = 0; i < srcs.length; i++) {
  //         mangas[srcs[i]] = [
  //           await config.getScraperOfSrc(srcs[i]).getManga(ids[i]),
  //         ];
  //       }
  //     }
  //     const intersiteMangasInfos =
  //       IntersiteUtils.convertMangasInfosToIntersiteMangasInfos(mangas);
  //     mangaIdsCacherService.saveFormattedNamesFromMangasInfos(
  //       intersiteMangasInfos
  //     );
  //     return intersiteMangasInfos;
  //   }

  //   public async getByFormattedName({
  //     formattedName,
  //     srcs,
  //     dontDigIn,
  //   }: {
  //     formattedName: string;
  //     srcs?: SourceName[];
  //     dontDigIn?: boolean;
  //   }): Promise<IntersiteManga | undefined> {
  //     const mangaIds = await mangaIdsCacherService.getMangaIdsFromFormattedName(
  //       formattedName,
  //       dontDigIn
  //     );
  //     if (!mangaIds) {
  //       return;
  //     }
  //     const mangasBySrc: { [key in SourceName]?: Manga[] } = {};
  //     for (let src of Object.keys(mangaIds) as SourceName[]) {
  //       if (srcs && !srcs.includes(src)) {
  //         continue;
  //       }
  //       mangasBySrc[src] = [await this.getById(src, mangaIds[src])];
  //     }
  //     const intersiteMangas =
  //       IntersiteUtils.convertMangasToIntersiteMangas(mangasBySrc);
  //     if (intersiteMangas.length <= 0) {
  //       return;
  //     }
  //     const targetIntersiteManga = intersiteMangas[0];
  //     for (let c of targetIntersiteManga.chapters) {
  //       chapterIdsCacherService.assignChapterIdsToFormattedKeys(
  //         targetIntersiteManga.formattedName,
  //         c.formattedNumber,
  //         c.id
  //       );
  //     }
  //     return targetIntersiteManga;
  //   }

  //   public async getById(src: SourceName, mangaId: MangaId): Promise<Manga> {
  //     return await config.getScraperOfSrc(src).getManga(mangaId);
  //   }

  //   public async getChapterByFormattedKey({
  //     formattedName,
  //     formattedNumber,
  //     srcs,
  //     dontDigIn,
  //   }: {
  //     formattedName: FormattedName;
  //     formattedNumber: FormattedNumber;
  //     srcs?: SourceName[];
  //     dontDigIn?: boolean;
  //   }): Promise<IntersiteChapterViewer | undefined> {
  //     const mangaIds = await mangaIdsCacherService.getMangaIdsFromFormattedName(
  //       formattedName,
  //       dontDigIn ?? true
  //     );
  //     if (!mangaIds) {
  //       console.log("pas de mangaIds");
  //       return;
  //     }
  //     const chapterIds = chapterIdsCacherService.getChapterIdsFromFormattedKeys(
  //       formattedName,
  //       formattedNumber
  //     );
  //     if (!chapterIds) {
  //       console.log("pas de chapter ids");
  //       return;
  //     }
  //     const chapterViewerBySrc: { [src in SourceName]?: ChapterViewer } = {};
  //     for (let src of srcs ?? (Object.keys(chapterIds) as SourceName[])) {
  //       chapterViewerBySrc[src] = await this.getChapterById(
  //         src,
  //         mangaIds[src],
  //         chapterIds[src]
  //       );
  //     }
  //     return IntersiteUtils.convertChapterViewerBySrcToIntersiteChapterViewer(
  //       chapterViewerBySrc,
  //       formattedNumber
  //     );
  //   }

  //   public async getChapterById(
  //     src: SourceName,
  //     mangaId: MangaId,
  //     chapterId: ChapterId
  //   ): Promise<ChapterViewer> {
  //     const chapterViewer = await config
  //       .getScraperOfSrc(src)
  //       .getChapterViewer(mangaId, chapterId);
  //     chapterViewerCacherService.saveNewChapterViewer(
  //       src,
  //       mangaId,
  //       chapterId,
  //       chapterViewer
  //     );
  //     return chapterViewer;
  //   }

  //   public async getChapterPageById(
  //     src: SourceName,
  //     mangaId: MangaId,
  //     chapterId: ChapterId,
  //     pageNb: number
  //   ): Promise<Buffer | undefined> {
  //     let chapterViewer = chapterViewerCacherService.getChapterViewer(
  //       src,
  //       mangaId,
  //       chapterId
  //     );
  //     if (!chapterViewer) {
  //       chapterViewer = await this.getChapterById(src, mangaId, chapterId);
  //     }
  //     if (pageNb <= 0 && pageNb > chapterViewer.pages.length) {
  //       return;
  //     }
  //     return await config.getScraperOfSrc(src).getPage(chapterViewer, pageNb);
  //   }
}

export default new MangasController();
