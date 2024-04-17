import { Router, Request, Response } from "express";
import { RoutingUtils } from "../../../shared/src/utils/routing-utils";
import config from "../config/config";
import mangasController from "../controllers/mangas-controller";
import {
  isSourceName,
  SourceName,
} from "../../../shared/src/types/primitives/Identifiers";
import { Manga } from "../config/prisma/generated/client";
import { isManga } from "../../../shared/src/types/Manga";
import chaptersController from "../controllers/chapters.controller";
// import mangasController from "../controllers/mangas-controller";
// import { RoutingUtils } from "../utils/routing-utils";
// import { SourceName } from "@shared/types/primitives/id";

const mangasRouter = Router();

mangasRouter.get("/", async (req: Request, res: Response) => {
  try {
    const srcs = RoutingUtils.convertQueryParamToArray(req.query.srcs);
    const pageNumber = RoutingUtils.convertQueryParamToNumber(req.query.page);
    const pageSize = RoutingUtils.convertQueryParamToNumber(req.query.limit);
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
      const manga = await mangasController.getChaptersOf(id, {
        srcs: srcs as SourceName[],
        pageNumber,
        pageSize,
      });
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

// router.get("/", async (req: Request, res: Response) => {
//   try {
//     const query = RoutingUtils.convertQueryParamToString(req.query.query);
//     const srcs = RoutingUtils.convertQueryParamToArray(req.query.srcs);
//     const ids = RoutingUtils.convertQueryParamToArray(req.query.ids);
//     if (!query && !ids && !srcs) {
//       res
//         .status(400)
//         .send(
//           "/mangas request must contains 'query', 'srcs' or/and 'ids' params"
//         );
//       return;
//     }
//     if (ids && srcs && ids.length > 0 && srcs.length !== ids.length) {
//       res
//         .status(400)
//         .send(
//           "when ids is specified, srcs and ids array must have the same size"
//         );
//       return;
//     }
//     if (srcs && !RoutingUtils.areValidSrcs(srcs)) {
//       res.status(400).send("srcs must be valid source names");
//       return;
//     }
//     try {
//       res.send(
//         await mangasController.getAll({
//           query,
//           srcs: srcs && (srcs as SourceName[]),
//           ids,
//         })
//       );
//     } catch (error) {
//       console.error(error);
//       res.status(500).send(error);
//     }
//   } catch (error) {
//     res
//       .status(400)
//       .send(
//         "/mangas request must contains 'query', 'srcs' or/and 'ids' params"
//       );
//   }
// });

// router.get("/:formattedName", async (req: Request, res: Response) => {
//   try {
//     const formattedName = RoutingUtils.convertQueryParamToString(
//       req.params.formattedName
//     )!;
//     try {
//       const srcs = RoutingUtils.convertQueryParamToArray(req.query.srcs);
//       const dontDigIn = RoutingUtils.convertQueryParamToBoolean(
//         req.query.dontDigIn
//       );
//       try {
//         if (srcs && !RoutingUtils.areValidSrcs(srcs)) {
//           res.status(400).send("srcs must be valid src");
//           return;
//         }
//         const manga = await mangasController.getByFormattedName({
//           formattedName,
//           srcs: srcs && (srcs as SourceName[]),
//           dontDigIn,
//         });
//         if (!manga) {
//           res
//             .status(404)
//             .send(
//               `manga not found. Try making a global search at /mangas?query=YOUR_MANGA`
//             );
//           return;
//         }
//         res.send(manga);
//       } catch (error) {
//         console.error(error);
//         res.status(500).send("server error");
//       }
//     } catch (err) {
//       console.error(err);
//       res
//         .status(400)
//         .send(
//           "query parameters possible are srcs (SourceName[]) and dontDigIn (boolean)"
//         );
//     }
//   } catch (err) {
//     console.error(err);
//     res.status(400).send("formattedName must be a string");
//   }
// });

// router.get(
//   "/:formattedName/chapters/:formattedNumber",
//   async (req: Request, res: Response) => {
//     try {
//       const formattedName = RoutingUtils.convertQueryParamToString(
//         req.params.formattedName
//       )!;
//       const formattedNumber = RoutingUtils.convertQueryParamToString(
//         req.params.formattedNumber
//       )!;
//       const dontDigIn = RoutingUtils.convertQueryParamToBoolean(
//         req.query.dontDigIn
//       );
//       try {
//         const intersiteChapterViewer =
//           await mangasController.getChapterByFormattedKey({
//             formattedName,
//             formattedNumber,
//             dontDigIn,
//           });
//         if (!intersiteChapterViewer) {
//           res.status(404).send("chapter viewer not found");
//         }
//         res.send(intersiteChapterViewer);
//       } catch (error) {
//         console.error(error);
//         res.status(500).send(error);
//       }
//     } catch (err) {
//       res
//         .status(400)
//         .send(
//           "wrong arguments: formattedName and formattedNumber must be string"
//         );
//     }
//   }
// );

export default mangasRouter;
