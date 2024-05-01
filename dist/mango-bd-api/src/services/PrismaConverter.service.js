"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class PrismaConverter {
    PrismaChapterToIdentifiedChapter(chapter) {
        var _a, _b;
        return {
            id: chapter.id,
            src: chapter.src,
            endpoint: chapter.endpoint,
            url: chapter.url,
            title: chapter.title,
            number: chapter.number,
            image: (_a = chapter.image) !== null && _a !== void 0 ? _a : undefined,
            releaseDate: (_b = chapter.releaseDate) !== null && _b !== void 0 ? _b : undefined,
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
        var _a, _b;
        return {
            id: manga.id,
            src: manga.src,
            endpoint: manga.endpoint,
            url: manga.url,
            title: manga.title,
            author: (_a = manga.author) !== null && _a !== void 0 ? _a : undefined,
            image: (_b = manga.image) !== null && _b !== void 0 ? _b : undefined,
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
                var _a, _b;
                return ({
                    id: c.id,
                    src: c.src,
                    endpoint: c.endpoint,
                    url: c.url,
                    title: c.title,
                    number: c.number,
                    image: (_a = c.image) !== null && _a !== void 0 ? _a : undefined,
                    releaseDate: (_b = c.releaseDate) !== null && _b !== void 0 ? _b : undefined,
                });
            }),
        };
    }
    PrismaIntersiteChapterToIntersiteChapter(intersiteChapter, intersiteManga, chapters) {
        return Object.assign(Object.assign({}, this.PrismaIntersiteChapterToParentlessIntersiteChapter(intersiteChapter, chapters)), { intersiteManga: {
                id: intersiteManga.id,
                formattedName: intersiteManga.formattedName,
            } });
    }
    PrismaIntersiteMangaToIntersiteManga(intersiteManga, mangas) {
        return {
            id: intersiteManga.id,
            formattedName: intersiteManga.formattedName,
            mangas: mangas.map((m) => {
                var _a, _b;
                return ({
                    id: m.id,
                    endpoint: m.endpoint,
                    url: m.url,
                    src: m.src,
                    title: m.title,
                    author: (_a = m.author) !== null && _a !== void 0 ? _a : undefined,
                    image: (_b = m.image) !== null && _b !== void 0 ? _b : undefined,
                });
            }),
        };
    }
}
exports.default = new PrismaConverter();
