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
const config_1 = __importDefault(require("../config/config"));
const default_values_1 = require("../config/default-values");
const client_1 = require("../config/prisma/generated/client");
class SettingsController {
    constructor() {
        this.prisma = new client_1.PrismaClient();
    }
    get() {
        return __awaiter(this, void 0, void 0, function* () {
            return {
                scrapersEnabled: config_1.default.getEnabledSources(),
                languagesSupported: yield this.getLanguagesSupported(),
            };
        });
    }
    getLanguagesSupported() {
        return __awaiter(this, void 0, void 0, function* () {
            const langs = yield this.prisma.chapter.groupBy({
                by: ["lang"],
                having: {
                    NOT: {
                        lang: null,
                    },
                },
            });
            return langs.map((l) => { var _a; return (_a = l.lang) !== null && _a !== void 0 ? _a : default_values_1.DefaultValues.CHAPTER_LANG; });
        });
    }
}
exports.default = new SettingsController();
