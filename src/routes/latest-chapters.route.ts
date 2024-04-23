import { Request, Response, Router } from "express";
import { RoutingUtils } from "../../../shared/src/utils/routing-utils";
import config from "../config/config";
import chaptersController from "../controllers/chapters.controller";
import { SourceName } from "../../../shared/src/types/primitives/Identifiers";

const latestChaptersRouter = Router();

latestChaptersRouter.get("/", async (req: Request, res: Response) => {
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
        await chaptersController.getLatestChapters({
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

export default latestChaptersRouter;
