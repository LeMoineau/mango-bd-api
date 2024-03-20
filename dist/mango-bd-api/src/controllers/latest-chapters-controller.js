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
Object.defineProperty(exports, "__esModule", { value: true });
const client_1 = require("./../config/prisma/generated/client");
class LatestChaptersController {
    constructor() {
        this.prisma = new client_1.PrismaClient();
    }
    get({ srcs, }) {
        return __awaiter(this, void 0, void 0, function* () {
            const chaptersBySrc = {};
            const chapters = this.prisma.chapter.findMany({
                where: {
                    src: { in: ["MANGAPLUS", "MANGASAKI"] },
                    OR: [{ releaseDate: { gte: new Date() } }, { releaseDate: null }],
                },
            });
            console.log(chapters);
            return [];
        });
    }
}
exports.default = new LatestChaptersController();
