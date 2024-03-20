import { Router, Request, Response } from "express";
import latestChapters from "../controllers/latest-chapters-controller";
import { SourceName } from "@shared/types/primitives/id";
import config from "./../config/config";
import { RoutingUtils } from "./../../../shared/src/utils/routing-utils";

const router = Router();

router.get("/", async (req: Request, res: Response) => {
  try {
    const srcs = RoutingUtils.convertQueryParamToArray(req.query.srcs);
    try {
      if (srcs && !config.areValidSrcs(srcs)) {
        res.status(400).send("srcs must be valid source names");
        return;
      }
      res.send(
        await latestChapters.get({ srcs: srcs && (srcs as SourceName[]) })
      );
    } catch (error) {
      console.error(error);
      res.status(500).send(error);
    }
  } catch (err) {
    console.error(err);
    res.status(400).send("wrong parameter: srcs must be string array");
  }
});

export default router;
