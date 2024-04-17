import { Request, Response, Router } from "express";
import latestChaptersRoute from "./latest-chapters-routes";
// import mangasRoute from "./mangas-routes";
import settingsRoute from "./settings-routes";
// import bySrcRoute from "./by-src-routes";
import chaptersRoute from "./chapters.route";
import intersiteChapterRouter from "./intersite-chapters.route";
import mangasRouter from "./mangas-routes";
import intersiteMangasRouter from "./intersite-mangas.route";

const router = Router();

router.get("/", (_: Request, res: Response) => {
  res.send("Mango-api ready!");
});

router.use("/latestchapters", latestChaptersRoute);
router.use("/chapters", chaptersRoute);
router.use("/mangas", mangasRouter);
router.use("/intersiteChapters", intersiteChapterRouter);
router.use("/intersiteMangas", intersiteMangasRouter);
router.use("/settings", settingsRoute);

export default router;
