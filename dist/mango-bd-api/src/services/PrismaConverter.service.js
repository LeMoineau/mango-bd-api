"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const IntersiteChapter_1 = require("../../../shared/src/types/basics/IntersiteChapter");
const IntersiteManga_1 = require("../../../shared/src/types/basics/IntersiteManga");
const default_values_1 = require("../config/default-values");
class PrismaConverter {
    PrismaChapterToIdentifiedChapter(chapter) {
        var _a, _b, _c;
        return {
            id: chapter.id,
            src: chapter.src,
            endpoint: chapter.endpoint,
            url: chapter.url,
            title: chapter.title,
            lang: (_a = chapter.lang) !== null && _a !== void 0 ? _a : default_values_1.DefaultValues.CHAPTER_LANG,
            number: chapter.number,
            image: (_b = chapter.image) !== null && _b !== void 0 ? _b : undefined,
            releaseDate: (_c = chapter.releaseDate) !== null && _c !== void 0 ? _c : undefined,
        };
    }
    PrismaChapterToStoredChapter(chapter, manga) {
        return Object.assign(Object.assign({}, this.PrismaChapterToIdentifiedChapter(chapter)), { manga: {
                id: manga.id,
                endpoint: manga.endpoint,
                url: manga.url,
                title: manga.title,
            } });
    }
    PrismaMangaToStoredManga(manga, intersiteManga) {
        var _a, _b, _c;
        return {
            id: manga.id,
            src: manga.src,
            endpoint: manga.endpoint,
            url: manga.url,
            title: manga.title,
            lang: (_a = manga.lang) !== null && _a !== void 0 ? _a : default_values_1.DefaultValues.MANGA_LANG,
            author: (_b = manga.author) !== null && _b !== void 0 ? _b : undefined,
            image: (_c = manga.image) !== null && _c !== void 0 ? _c : undefined,
            intersiteManga: {
                id: intersiteManga.id,
                formattedName: intersiteManga.formattedName,
            },
        };
    }
    PrismaIntersiteChapterToParentlessIntersiteChapter(intersiteChapter, chapters) {
        return {
            id: intersiteChapter.id,
            formattedName: intersiteChapter.formattedName,
            chapters: chapters.map((c) => {
                var _a, _b, _c;
                return ({
                    id: c.id,
                    src: c.src,
                    endpoint: c.endpoint,
                    url: c.url,
                    title: c.title,
                    number: c.number,
                    lang: (_a = c.lang) !== null && _a !== void 0 ? _a : default_values_1.DefaultValues.CHAPTER_LANG,
                    image: (_b = c.image) !== null && _b !== void 0 ? _b : undefined,
                    releaseDate: (_c = c.releaseDate) !== null && _c !== void 0 ? _c : undefined,
                });
            }),
        };
    }
    PrismaIntersiteChapterToIntersiteChapter(intersiteChapter, intersiteManga, chapters) {
        const parentlessIntersiteChapter = this.PrismaIntersiteChapterToParentlessIntersiteChapter(intersiteChapter, chapters);
        return new IntersiteChapter_1.IntersiteChapter(parentlessIntersiteChapter.id, parentlessIntersiteChapter.formattedName, {
            id: intersiteManga.id,
            formattedName: intersiteManga.formattedName,
        }, parentlessIntersiteChapter.chapters);
    }
    PrismaIntersiteMangaToIntersiteManga(intersiteManga, mangas) {
        return new IntersiteManga_1.IntersiteManga(intersiteManga.id, intersiteManga.formattedName, mangas.map((m) => {
            var _a, _b;
            return ({
                id: m.id,
                endpoint: m.endpoint,
                url: m.url,
                src: m.src,
                title: m.title,
                lang: m.lang,
                author: (_a = m.author) !== null && _a !== void 0 ? _a : undefined,
                image: (_b = m.image) !== null && _b !== void 0 ? _b : undefined,
            });
        }));
    }
}
exports.default = new PrismaConverter();
