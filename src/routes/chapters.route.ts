import { Router, Request, Response } from "express";
import { RoutingUtils } from "./../../../shared/src/utils/routing-utils";
import config from "./../config/config";

const router = Router();

router.post("/", async (req: Request, res: Response) => {
  console.log("body", req.body);
  res.send("ok");
});

router.get("/", async (req: Request, res: Response) => {
  try {
    const query = RoutingUtils.convertQueryParamToString(req.query.query);
    const srcs = RoutingUtils.convertQueryParamToArray(req.query.srcs);
    const ids = RoutingUtils.convertQueryParamToArray(req.query.ids);
    if (!query && !ids && !srcs) {
      res
        .status(400)
        .send(
          "/mangas request must contains 'query', 'srcs' or/and 'ids' params"
        );
      return;
    }
    if (ids && srcs && ids.length > 0 && srcs.length !== ids.length) {
      res
        .status(400)
        .send(
          "when ids is specified, srcs and ids array must have the same size"
        );
      return;
    }
    if (srcs && !config.areValidSrcs(srcs)) {
      res.status(400).send("srcs must be valid source names");
      return;
    }
    try {
      res
        .send
        // await mangasController.getAll({
        //   query,
        //   srcs: srcs && (srcs as SourceName[]),
        //   ids,
        // })
        ();
    } catch (error) {
      console.error(error);
      res.status(500).send(error);
    }
  } catch (error) {
    res
      .status(400)
      .send(
        "/mangas request must contains 'query', 'srcs' or/and 'ids' params"
      );
  }
});

export default router;
