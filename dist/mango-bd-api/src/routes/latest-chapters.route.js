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
const chapters_controller_1 = __importDefault(require("../controllers/chapters.controller"));
const latestChaptersRouter = (0, express_1.Router)();
latestChaptersRouter.get("/", (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const srcs = routing_utils_1.RoutingUtils.convertQueryParamToArray(req.query.srcs);
        const langs = routing_utils_1.RoutingUtils.convertQueryParamToArray(req.query.langs);
        const pageNumber = routing_utils_1.RoutingUtils.convertQueryParamToNumber(req.query.page);
        const pageSize = routing_utils_1.RoutingUtils.convertQueryParamToNumber(req.query.limit);
        const mangaTitle = routing_utils_1.RoutingUtils.convertQueryParamToString(req.query.mangaTitle);
        const number = routing_utils_1.RoutingUtils.convertQueryParamToString(req.query.number);
        const title = routing_utils_1.RoutingUtils.convertQueryParamToString(req.query.title);
        if (srcs && !config_1.default.areValidSrcs(srcs)) {
            res.status(400).send("srcs must be valid source names");
            return;
        }
        try {
            res.send(yield chapters_controller_1.default.getLatestChapters({
                srcs: srcs,
                pageNumber,
                pageSize,
                mangaTitle,
                title,
                number,
                langs,
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
exports.default = latestChaptersRouter;
