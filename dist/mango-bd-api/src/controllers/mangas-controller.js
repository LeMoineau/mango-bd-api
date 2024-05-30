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
const intersite_mangas_controller_1 = __importDefault(require("./intersite-mangas.controller"));
const AdditionalProps_service_1 = __importDefault(require("../services/AdditionalProps.service"));
class MangasController {
    constructor() {
        this.prisma = new client_1.PrismaClient();
    }
    getAll(props) {
        return __awaiter(this, void 0, void 0, function* () {
            const { pageSize, pageNumber, take, skip } = AdditionalProps_service_1.default.page(props);
            const { title, author } = AdditionalProps_service_1.default.mangaQuery(props);
            const mangas = yield this.prisma.manga.findMany({
                skip,
                take,
                where: {
                    src: { in: props.srcs },
                    title: { contains: title, mode: "insensitive" },
                    author: { contains: author, mode: "insensitive", not: author && null },
                },
                include: {
                    intersiteManga: true,
                },
            });
            return {
                elements: mangas.map((m) => PrismaConverter_service_1.default.PrismaMangaToStoredManga(m, m.intersiteManga)),
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
            else {
                where = { endpoint: props.endpoint, src: props.src };
            }
            const manga = yield this.prisma.manga.findFirst({
                where,
                include: {
                    intersiteManga: true,
                },
            });
            return manga === null
                ? undefined
                : PrismaConverter_service_1.default.PrismaMangaToStoredManga(manga, manga.intersiteManga);
        });
    }
    save(manga) {
        return __awaiter(this, void 0, void 0, function* () {
            const mangaFormattedName = text_format_utils_1.TextFormatUtils.formatMangaTitle(manga.title);
            let intersiteManga = yield intersite_mangas_controller_1.default.get({
                formattedName: mangaFormattedName,
            });
            if (!intersiteManga) {
                intersiteManga = yield intersite_mangas_controller_1.default.save({
                    formattedName: mangaFormattedName,
                });
            }
            const newMangaData = {
                src: manga.src,
                endpoint: manga.endpoint,
                url: manga.url,
                title: manga.title,
                intersiteMangaId: intersiteManga.id,
                author: manga.author,
                image: manga.image,
            };
            const newManga = yield this.prisma.manga.upsert({
                where: { src: manga.src, endpoint: manga.endpoint },
                create: newMangaData,
                update: newMangaData,
                include: {
                    intersiteManga: true,
                },
            });
            return PrismaConverter_service_1.default.PrismaMangaToStoredManga(newManga, newManga.intersiteManga);
        });
    }
    getChaptersOf(id, props) {
        return __awaiter(this, void 0, void 0, function* () {
            const { pageSize, pageNumber, take, skip } = AdditionalProps_service_1.default.page(props);
            const chapters = yield this.prisma.chapter.findMany({
                skip,
                take,
                where: { src: { in: props.srcs }, manga: { id } },
                orderBy: { number: "desc" },
            });
            return {
                elements: chapters.map((m) => PrismaConverter_service_1.default.PrismaChapterToIdentifiedChapter(m)),
                pageNumber,
                pageSize,
            };
        });
    }
}
exports.default = new MangasController();
