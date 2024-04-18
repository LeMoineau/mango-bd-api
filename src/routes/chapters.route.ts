import { Router, Request, Response } from "express";
import { RoutingUtils } from "./../../../shared/src/utils/routing-utils";
import config from "./../config/config";
import chaptersController from "../controllers/chapters.controller";
import { SourceName } from "../../../shared/src/types/primitives/Identifiers";
import {
  isScrapedChapter,
  ScrapedChapter,
} from "../../../shared/src/types/Chapter";

const router = Router();

router.post("/", async (req: Request, res: Response) => {
  if (!req.body || !req.body.chapter) {
    res
      .status(400)
      .send(
        "miss paramters: request body must contains chapter (ScrapedChapter)"
      );
    return;
  }
  try {
    const chapter: ScrapedChapter = req.body.chapter!;
    if (!isScrapedChapter(chapter)) {
      res.status(400).send("chapter must be a ScrapedChapter");
      return;
    }
    if (!config.isValidSrc(chapter.src)) {
      res.status(400).send("src must be a valid src");
      return;
    }
    try {
      res.send(await chaptersController.save(chapter));
    } catch (err) {
      console.error(err);
      res.status(500).send(err);
    }
  } catch (err) {
    console.error(err);
    res
      .status(400)
      .send(
        "wrong paramters: request body must contains chapter (ScrapedChapter)"
      );
  }
});

router.get("/", async (req: Request, res: Response) => {
  try {
    const srcs = RoutingUtils.convertQueryParamToArray(req.query.srcs);
    const pageNumber = RoutingUtils.convertQueryParamToNumber(req.query.page);
    const pageSize = RoutingUtils.convertQueryParamToNumber(req.query.limit);
    const mangaTitle = RoutingUtils.convertQueryParamToString(
      req.query.mangaTitle
    );
    const number = RoutingUtils.convertQueryParamToString(req.query.number);
    const title = RoutingUtils.convertQueryParamToString(req.query.title);
    if (srcs && !config.areValidSrcs(srcs)) {
      res.status(400).send("srcs must be valid source names");
      return;
    }
    try {
      res.send(
        await chaptersController.getAll({
          srcs: srcs as SourceName[],
          pageNumber,
          pageSize,
          mangaTitle,
          title,
          number,
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
        "wrong paramters: request query could contains page, limit and srcs (SourceName[])"
      );
  }
});

router.get("/:id", async (req: Request, res: Response) => {
  try {
    const id = RoutingUtils.convertQueryParamToString(req.params.id);
    if (!id) {
      res.status(400).send("id must be a valid uuid");
      return;
    }
    try {
      const chapter = await chaptersController.get(id);
      if (!chapter) {
        res.status(404).send("chapter not found");
        return;
      }
      res.send(chapter);
    } catch (error) {
      console.error(error);
      res.status(500).send(error);
    }
  } catch (error) {
    res
      .status(400)
      .send(
        "wrong paramters: request query could contains page, limit and srcs (SourceName[])"
      );
  }
});

export default router;
