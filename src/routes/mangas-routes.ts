import { Router, Request, Response } from "express";
import { RoutingUtils } from "../../../shared/src/utils/routing-utils";
import config from "../config/config";
import mangasController from "../controllers/mangas-controller";
import { SourceName } from "../../../shared/src/types/primitives/Identifiers";
import { Manga } from "../config/prisma/generated/client";
import { isManga } from "../../../shared/src/types/basics/Manga";

const mangasRouter = Router();

mangasRouter.get("/", async (req: Request, res: Response) => {
  try {
    const srcs = RoutingUtils.convertQueryParamToArray(req.query.srcs);
    const pageNumber = RoutingUtils.convertQueryParamToNumber(req.query.page);
    const pageSize = RoutingUtils.convertQueryParamToNumber(req.query.limit);
    const title = RoutingUtils.convertQueryParamToString(req.query.title);
    const author = RoutingUtils.convertQueryParamToString(req.query.author);
    if (srcs && !config.areValidSrcs(srcs)) {
      res.status(400).send("srcs must be valid source names");
      return;
    }
    try {
      res.send(
        await mangasController.getAll({
          srcs: srcs as SourceName[],
          pageNumber,
          pageSize,
          title,
          author,
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

mangasRouter.post("/", async (req: Request, res: Response) => {
  if (!req.body || !req.body.manga) {
    res
      .status(400)
      .send("miss paramters: request body must contains manga (Manga)");
    return;
  }
  try {
    const manga: Manga = req.body.manga;
    if (!isManga(manga)) {
      res.status(400).send("manga must be a Manga");
      return;
    }
    try {
      res.send(await mangasController.save(manga));
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

mangasRouter.get("/:id", async (req: Request, res: Response) => {
  try {
    const id = RoutingUtils.convertQueryParamToString(req.params.id);
    if (!id) {
      res.status(400).send("id must be a valid uuid");
      return;
    }
    try {
      const manga = await mangasController.get(id);
      if (!manga) {
        res.status(404).send("manga not found");
        return;
      }
      res.send(manga);
    } catch (error) {
      console.error(error);
      res.status(500).send(error);
    }
  } catch (error) {
    res.status(400).send("wrong paramters: request params must contains id");
  }
});

mangasRouter.get("/:id/chapters", async (req: Request, res: Response) => {
  try {
    const id = RoutingUtils.convertQueryParamToString(req.params.id);
    const srcs = RoutingUtils.convertQueryParamToArray(req.query.srcs);
    const pageNumber = RoutingUtils.convertQueryParamToNumber(req.query.page);
    const pageSize = RoutingUtils.convertQueryParamToNumber(req.query.limit);
    if (!id) {
      res.status(400).send("id must be a valid uuid");
      return;
    }
    if (srcs && !config.areValidSrcs(srcs)) {
      res.status(400).send("srcs must be valid source names");
      return;
    }
    try {
      res.send(
        await mangasController.getChaptersOf(id, {
          srcs: srcs as SourceName[],
          pageNumber,
          pageSize,
        })
      );
    } catch (error) {
      console.error(error);
      res.status(500).send(error);
    }
  } catch (error) {
    res.status(400).send("wrong paramters: request params must contains id");
  }
});

export default mangasRouter;
