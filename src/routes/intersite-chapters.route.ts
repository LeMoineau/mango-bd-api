import { Request, Response, Router } from "express";
import { RoutingUtils } from "../../../shared/src/utils/routing-utils";
import config from "../config/config";
import intersiteChaptersController from "../controllers/intersite-chapters.controller";
import { SourceName } from "../../../shared/src/types/primitives/Identifiers";

const intersiteChapterRouter = Router();

intersiteChapterRouter.get("/", async (req: Request, res: Response) => {
  try {
    const srcs = RoutingUtils.convertQueryParamToArray(req.query.srcs);
    const pageNumber = RoutingUtils.convertQueryParamToNumber(req.query.page);
    const pageSize = RoutingUtils.convertQueryParamToNumber(req.query.limit);
    const formattedName = RoutingUtils.convertQueryParamToString(
      req.query.formattedName
    );
    const intersiteMangaFormattedName = RoutingUtils.convertQueryParamToString(
      req.query.intersiteMangaFormattedName
    );
    const chapterTitle = RoutingUtils.convertQueryParamToString(
      req.query.chapterTitle
    );
    const chapterNumber = RoutingUtils.convertQueryParamToString(
      req.query.chapterNumber
    );
    if (srcs && !config.areValidSrcs(srcs)) {
      res.status(400).send("srcs must be valid source names");
      return;
    }
    try {
      res.send(
        await intersiteChaptersController.getAll({
          srcs: srcs as SourceName[],
          pageNumber,
          pageSize,
          formattedName,
          intersiteMangaFormattedName,
          chapterTitle,
          chapterNumber,
        })
      );
    } catch (error) {
      console.error(error);
      res.status(500).send(error);
    }
  } catch (error) {
    res
      .status(400)
      .send(
        "wrong paramters: request query could contains page, limit and srcs (SourceName[]), chapterFormattedName and mangaFormattedName"
      );
  }
});

intersiteChapterRouter.get("/:id", async (req: Request, res: Response) => {
  try {
    const id = RoutingUtils.convertQueryParamToString(req.params.id);
    if (!id) {
      res.status(400).send("id must be a valid uuid");
      return;
    }
    try {
      const intersiteChapter = await intersiteChaptersController.get(id);
      if (!intersiteChapter) {
        res.status(404).send("intersiteChapter not found");
        return;
      }
      res.send(intersiteChapter);
    } catch (error) {
      console.error(error);
      res.status(500).send(error);
    }
  } catch (error) {
    res.status(400).send("wrong paramters: request params must contains id");
  }
});

export default intersiteChapterRouter;
