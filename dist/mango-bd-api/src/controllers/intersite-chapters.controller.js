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
const intersite_mangas_controller_1 = __importDefault(require("./intersite-mangas.controller"));
const AdditionalProps_service_1 = __importDefault(require("../services/AdditionalProps.service"));
class IntersiteChaptersController {
    constructor() {
        this.prisma = new client_1.PrismaClient();
    }
    getAll(props) {
        return __awaiter(this, void 0, void 0, function* () {
            const { pageSize, pageNumber, take, skip } = AdditionalProps_service_1.default.page(props);
            const { chapterTitle, chapterNumber } = AdditionalProps_service_1.default.intersiteChaptersQuery(props);
            const intersiteChapters = yield this.prisma.intersiteChapter.findMany({
                skip,
                take,
                where: {
                    formattedName: props.formattedName,
                    intersiteManga: {
                        formattedName: props.intersiteMangaFormattedName,
                    },
                    chapters: {
                        every: {
                            src: {
                                in: props.srcs,
                            },
                            title: {
                                contains: chapterTitle,
                                mode: "insensitive",
                            },
                            number: {
                                contains: chapterNumber,
                                mode: "insensitive",
                            },
                        },
                    },
                },
                include: {
                    intersiteManga: {
                        select: {
                            id: true,
                            formattedName: true,
                        },
                    },
                    chapters: true,
                },
            });
            return {
                elements: intersiteChapters.map((ic) => PrismaConverter_service_1.default.PrismaIntersiteChapterToIntersiteChapter(ic, ic.intersiteManga, ic.chapters)),
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
            const intersiteChapter = yield this.prisma.intersiteChapter.findFirst({
                where,
                include: { intersiteManga: true, chapters: true },
            });
            return intersiteChapter === null
                ? undefined
                : PrismaConverter_service_1.default.PrismaIntersiteChapterToIntersiteChapter(intersiteChapter, intersiteChapter.intersiteManga, intersiteChapter.chapters);
        });
    }
    save(intersiteChapterData) {
        return __awaiter(this, void 0, void 0, function* () {
            //CREATE INTERSITE_MANGA IF NOT EXIST
            let intersiteManga = yield intersite_mangas_controller_1.default.get({
                formattedName: intersiteChapterData.mangaFormattedName,
            });
            if (!intersiteManga) {
                intersiteManga = yield intersite_mangas_controller_1.default.save({
                    formattedName: intersiteChapterData.mangaFormattedName,
                });
            }
            //CREATE INTERSITE_CHAPTER
            const intersiteChapter = yield this.prisma.intersiteChapter.create({
                data: {
                    formattedName: intersiteChapterData.formattedName,
                    intersiteMangaId: intersiteManga.id,
                },
            });
            return PrismaConverter_service_1.default.PrismaIntersiteChapterToIntersiteChapter(intersiteChapter, intersiteManga, []);
        });
    }
}
exports.default = new IntersiteChaptersController();
