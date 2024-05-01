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
const express_1 = require("express");
const routing_utils_1 = require("../../../shared/src/utils/routing-utils");
const config_1 = __importDefault(require("../config/config"));
const mangas_controller_1 = __importDefault(require("../controllers/mangas-controller"));
const Manga_1 = require("../../../shared/src/types/basics/Manga");
const mangasRouter = (0, express_1.Router)();
mangasRouter.get("/", (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const srcs = routing_utils_1.RoutingUtils.convertQueryParamToArray(req.query.srcs);
        const pageNumber = routing_utils_1.RoutingUtils.convertQueryParamToNumber(req.query.page);
        const pageSize = routing_utils_1.RoutingUtils.convertQueryParamToNumber(req.query.limit);
        const title = routing_utils_1.RoutingUtils.convertQueryParamToString(req.query.title);
        const author = routing_utils_1.RoutingUtils.convertQueryParamToString(req.query.author);
        if (srcs && !config_1.default.areValidSrcs(srcs)) {
            res.status(400).send("srcs must be valid source names");
            return;
        }
        try {
            res.send(yield mangas_controller_1.default.getAll({
                srcs: srcs,
                pageNumber,
                pageSize,
                title,
                author,
            }));
        }
        catch (error) {
            console.error(error);
            res.status(500).send(error);
        }
    }
    catch (error) {
        res
            .status(400)
            .send("wrong paramters: request query could contains page, limit and srcs (SourceName[])");
    }
}));
mangasRouter.post("/", (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    if (!req.body || !req.body.manga) {
        res
            .status(400)
            .send("miss paramters: request body must contains manga (Manga)");
        return;
    }
    try {
        const manga = req.body.manga;
        if (!(0, Manga_1.isManga)(manga)) {
            res.status(400).send("manga must be a Manga");
            return;
        }
        try {
            res.send(yield mangas_controller_1.default.save(manga));
        }
        catch (err) {
            console.error(err);
            res.status(500).send(err);
        }
    }
    catch (err) {
        console.error(err);
        res
            .status(400)
            .send("wrong paramters: request body must contains chapter (ScrapedChapter)");
    }
}));
mangasRouter.get("/:id", (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const id = routing_utils_1.RoutingUtils.convertQueryParamToString(req.params.id);
        if (!id) {
            res.status(400).send("id must be a valid uuid");
            return;
        }
        try {
            const manga = yield mangas_controller_1.default.get(id);
            if (!manga) {
                res.status(404).send("manga not found");
                return;
            }
            res.send(manga);
        }
        catch (error) {
            console.error(error);
            res.status(500).send(error);
        }
    }
    catch (error) {
        res.status(400).send("wrong paramters: request params must contains id");
    }
}));
mangasRouter.get("/:id/chapters", (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const id = routing_utils_1.RoutingUtils.convertQueryParamToString(req.params.id);
        const srcs = routing_utils_1.RoutingUtils.convertQueryParamToArray(req.query.srcs);
        const pageNumber = routing_utils_1.RoutingUtils.convertQueryParamToNumber(req.query.page);
        const pageSize = routing_utils_1.RoutingUtils.convertQueryParamToNumber(req.query.limit);
        if (!id) {
            res.status(400).send("id must be a valid uuid");
            return;
        }
        if (srcs && !config_1.default.areValidSrcs(srcs)) {
            res.status(400).send("srcs must be valid source names");
            return;
        }
        try {
            res.send(yield mangas_controller_1.default.getChaptersOf(id, {
                srcs: srcs,
                pageNumber,
                pageSize,
            }));
        }
        catch (error) {
            console.error(error);
            res.status(500).send(error);
        }
    }
    catch (error) {
        res.status(400).send("wrong paramters: request params must contains id");
    }
}));
exports.default = mangasRouter;
