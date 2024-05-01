"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const settings_routes_1 = __importDefault(require("./settings-routes"));
const chapters_route_1 = __importDefault(require("./chapters.route"));
const intersite_chapters_route_1 = __importDefault(require("./intersite-chapters.route"));
const mangas_routes_1 = __importDefault(require("./mangas-routes"));
const intersite_mangas_route_1 = __importDefault(require("./intersite-mangas.route"));
const latest_chapters_route_1 = __importDefault(require("./latest-chapters.route"));
const router = (0, express_1.Router)();
router.get("/", (_, res) => {
    res.send("Mango-bd-api ready!");
});
router.use("/chapters", chapters_route_1.default);
router.use("/mangas", mangas_routes_1.default);
router.use("/intersiteChapters", intersite_chapters_route_1.default);
router.use("/intersiteMangas", intersite_mangas_route_1.default);
router.use("/settings", settings_routes_1.default);
router.use("/latestchapters", latest_chapters_route_1.default);
exports.default = router;
