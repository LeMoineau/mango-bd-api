"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const latest_chapters_routes_1 = __importDefault(require("./latest-chapters-routes"));
// import mangasRoute from "./mangas-routes";
const settings_routes_1 = __importDefault(require("./settings-routes"));
// import bySrcRoute from "./by-src-routes";
const chapters_route_1 = __importDefault(require("./chapters.route"));
const router = (0, express_1.Router)();
router.get("/", (_, res) => {
    res.send("Mango-api ready!");
});
router.use("/chapters", chapters_route_1.default);
router.use("/latestchapters", latest_chapters_routes_1.default);
// router.use("/mangas", mangasRoute);
router.use("/settings", settings_routes_1.default);
// router.use("/srcs", bySrcRoute);
exports.default = router;
