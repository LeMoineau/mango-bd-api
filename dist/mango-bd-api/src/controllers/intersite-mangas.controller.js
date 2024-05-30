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
const client_1 = require("../config/prisma/generated/client");
const PrismaConverter_service_1 = __importDefault(require("../services/PrismaConverter.service"));
const AdditionalProps_service_1 = __importDefault(require("../services/AdditionalProps.service"));
class IntersiteMangasController {
    constructor() {
        this.prisma = new client_1.PrismaClient();
    }
    getAll(props) {
        return __awaiter(this, void 0, void 0, function* () {
            const { pageSize, pageNumber, take, skip } = AdditionalProps_service_1.default.page(props);
            const { mangaTitle, mangaAuthor } = AdditionalProps_service_1.default.intersiteMangasQuery(props);
            const intersiteMangas = yield this.prisma.intersiteManga.findMany({
                skip,
                take,
                where: {
                    formattedName: props.formattedName,
                    mangas: {
                        some: {
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
                        where: {
                            src: { in: props.srcs },
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
                elements: intersiteMangas.map((im) => PrismaConverter_service_1.default.PrismaIntersiteMangaToIntersiteManga(im, im.mangas)),
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
                where = { formattedName: props.formattedName };
            }
            const intersiteManga = yield this.prisma.intersiteManga.findFirst({
                where,
                include: {
                    mangas: true,
                },
            });
            return intersiteManga === null
                ? undefined
                : PrismaConverter_service_1.default.PrismaIntersiteMangaToIntersiteManga(intersiteManga, intersiteManga.mangas);
        });
    }
    save(intersiteMangaCore) {
        return __awaiter(this, void 0, void 0, function* () {
            const res = yield this.prisma.intersiteManga.create({
                data: Object.assign({}, intersiteMangaCore),
            });
            return Object.assign(Object.assign({}, res), { mangas: [] });
        });
    }
    getIntersiteChaptersOf(id, props) {
        return __awaiter(this, void 0, void 0, function* () {
            const { pageSize, pageNumber, take, skip } = AdditionalProps_service_1.default.page(props);
            const intersiteChapters = yield this.prisma.intersiteChapter.findMany({
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
                    .map((ic) => PrismaConverter_service_1.default.PrismaIntersiteChapterToParentlessIntersiteChapter(ic, ic.chapters)),
                pageNumber,
                pageSize,
            };
        });
    }
}
exports.default = new IntersiteMangasController();
