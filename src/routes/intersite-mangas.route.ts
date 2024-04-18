import { Request, Response, Router } from "express";
import { RoutingUtils } from "../../../shared/src/utils/routing-utils";
import config from "../config/config";
import intersiteMangasController from "../controllers/intersite-mangas.controller";
import { SourceName } from "../../../shared/src/types/primitives/Identifiers";

const intersiteMangasRouter = Router();

intersiteMangasRouter.get("/", async (req: Request, res: Response) => {
  try {
    const srcs = RoutingUtils.convertQueryParamToArray(req.query.srcs);
    const pageNumber = RoutingUtils.convertQueryParamToNumber(req.query.page);
    const pageSize = RoutingUtils.convertQueryParamToNumber(req.query.limit);
    const formattedName = RoutingUtils.convertQueryParamToString(
      req.query.formattedName
    );
    const mangaTitle = RoutingUtils.convertQueryParamToString(
      req.query.mangaTitle
    );
    const mangaAuthor = RoutingUtils.convertQueryParamToString(
      req.query.mangaAuthor
    );
    if (srcs && !config.areValidSrcs(srcs)) {
      res.status(400).send("srcs must be valid source names");
      return;
    }
    try {
      res.send(
        await intersiteMangasController.getAll({
          srcs: srcs as SourceName[],
          pageNumber,
          pageSize,
          formattedName,
          mangaTitle,
          mangaAuthor,
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

intersiteMangasRouter.get("/:id", async (req: Request, res: Response) => {
  try {
    const id = RoutingUtils.convertQueryParamToString(req.params.id);
    if (!id) {
      res.status(400).send("id must be a valid uuid");
      return;
    }
    try {
      const intersiteManga = await intersiteMangasController.get(id);
      if (!intersiteManga) {
        res.status(404).send("intersiteManga not found");
        return;
      }
      res.send(intersiteManga);
    } catch (error) {
      console.error(error);
      res.status(500).send(error);
    }
  } catch (error) {
    res.status(400).send("wrong paramters: request params must contains id");
  }
});

intersiteMangasRouter.get(
  "/:id/intersiteChapters",
  async (req: Request, res: Response) => {
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
          await intersiteMangasController.getIntersiteChaptersOf(id, {
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
  }
);

export default intersiteMangasRouter;
