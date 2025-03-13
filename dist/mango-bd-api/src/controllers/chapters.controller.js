"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const Identifiers_1 = require("../../../shared/src/types/primitives/Identifiers");
const text_format_utils_1 = require("../../../shared/src/utils/text-format-utils");
const client_1 = require("../config/prisma/generated/client");
const PrismaConverter_service_1 = __importDefault(require("../services/PrismaConverter.service"));
const intersite_chapters_controller_1 = __importDefault(require("./intersite-chapters.controller"));
const mangas_controller_1 = __importDefault(require("./mangas-controller"));
const AdditionalProps_service_1 = __importDefault(require("../services/AdditionalProps.service"));
class ChaptersController {
    constructor() {
        this.prisma = new client_1.PrismaClient();
    }
    getAll(props) {
        return __awaiter(this, void 0, void 0, function* () {
            const { pageSize, pageNumber, take, skip } = AdditionalProps_service_1.default.page(props);
            const { mangaTitle, number, title } = AdditionalProps_service_1.default.chapterQuery(props);
            const chapters = yield this.prisma.chapter.findMany({
                skip,
                take,
                where: {
                    src: { in: props.srcs },
                    title: { contains: title, mode: "insensitive" },
                    number: { contains: number, mode: "insensitive" },
                    manga: {
                        title: { contains: mangaTitle, mode: "insensitive" },
                    },
                },
                orderBy: { releaseDate: "desc" },
                include: {
                    manga: {
                        select: {
                            id: true,
                            title: true,
                            endpoint: true,
                            url: true,
                        },
                    },
                },
            });
            return {
                elements: chapters.map((c) => PrismaConverter_service_1.default.PrismaChapterToStoredChapter(c, c.manga)),
                pageNumber,
                pageSize,
            };
        });
    }
    get(props) {
        return __awaiter(this, void 0, void 0, function* () {
            let where = {};
            if ((0, Identifiers_1.isUUID)(props)) {
                where = { id: props };
            }
            const chapter = yield this.prisma.chapter.findFirst({
                where,
                include: {
                    manga: true,
                },
            });
            return chapter === null
                ? undefined
                : PrismaConverter_service_1.default.PrismaChapterToStoredChapter(chapter, chapter.manga);
        });
    }
    save(chapter) {
        return __awaiter(this, void 0, void 0, function* () {
            //CHECK IF CHAPTER ALREADY EXIST
            const checking = yield this.prisma.chapter.findFirst({
                where: {
                    src: chapter.src,
                    endpoint: chapter.endpoint,
                },
                include: { manga: true },
            });
            if (checking !== null) {
                return PrismaConverter_service_1.default.PrismaChapterToStoredChapter(checking, checking.manga);
            }
            //CREATING MANGA IF NOT EXIST
            let manga = yield mangas_controller_1.default.get({
                endpoint: chapter.manga.endpoint,
                src: chapter.src,
            });
            if (!manga) {
                manga = yield mangas_controller_1.default.save({
                    src: chapter.src,
                    endpoint: chapter.manga.endpoint,
                    url: chapter.manga.url,
                    title: chapter.manga.title,
                    lang: chapter.lang,
                });
            }
            //CREATING INTERSITE_CHAPTER IF NOT EXIST
            let intersiteChapter = yield intersite_chapters_controller_1.default.get({
                formattedName: text_format_utils_1.TextFormatUtils.formatChapterName(chapter.number, chapter.manga.title),
            });
            if (!intersiteChapter) {
                intersiteChapter = yield intersite_chapters_controller_1.default.save({
                    formattedName: text_format_utils_1.TextFormatUtils.formatChapterName(chapter.number, chapter.manga.title),
                    mangaFormattedName: text_format_utils_1.TextFormatUtils.formatMangaTitle(chapter.manga.title),
                });
            }
            //CREATING CHAPTER
            const res = yield this.prisma.chapter.create({
                data: {
                    endpoint: chapter.endpoint,
                    src: chapter.src,
                    url: chapter.url,
                    title: chapter.title,
                    number: chapter.number,
                    image: chapter.image,
                    releaseDate: chapter.releaseDate,
                    mangaId: manga.id,
                    intersiteChapterId: intersiteChapter.id,
                },
            });
            return PrismaConverter_service_1.default.PrismaChapterToStoredChapter(res, {
                id: manga.id,
                endpoint: manga.endpoint,
                url: manga.url,
                title: manga.title,
            });
        });
    }
    getLatestChapters(props) {
        return __awaiter(this, void 0, void 0, function* () {
            const { pageSize, pageNumber, take, skip } = AdditionalProps_service_1.default.page(props);
            const { mangaTitle, number, title } = AdditionalProps_service_1.default.chapterQuery(props);
            const chapters = yield this.prisma.chapter.findMany({
                skip,
                take,
                where: {
                    src: { in: props.srcs },
                    title: { contains: title, mode: "insensitive" },
                    number: { contains: number, mode: "insensitive" },
                    manga: {
                        title: { contains: mangaTitle, mode: "insensitive" },
                    },
                    releaseDate: {
                        not: null,
                    },
                },
                orderBy: { releaseDate: "desc" },
                include: {
                    manga: {
                        select: {
                            id: true,
                            title: true,
                            endpoint: true,
                            url: true,
                        },
                    },
                },
            });
            return {
                elements: chapters.map((c) => PrismaConverter_service_1.default.PrismaChapterToStoredChapter(c, c.manga)),
                pageNumber,
                pageSize,
            };
        });
    }
}
exports.default = new ChaptersController();
