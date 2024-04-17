import { Request, Response, Router } from "express";
import settingsRoute from "./settings-routes";
import chaptersRoute from "./chapters.route";
import intersiteChapterRouter from "./intersite-chapters.route";
import mangasRouter from "./mangas-routes";
import intersiteMangasRouter from "./intersite-mangas.route";

const router = Router();

router.get("/", (_: Request, res: Response) => {
  res.send("Mango-api ready!");
});

router.use("/chapters", chaptersRoute);
router.use("/mangas", mangasRouter);
router.use("/intersiteChapters", intersiteChapterRouter);
router.use("/intersiteMangas", intersiteMangasRouter);
router.use("/settings", settingsRoute);

export default router;
