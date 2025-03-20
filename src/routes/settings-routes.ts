import { Router, Request, Response } from "express";
import settingsController from "../controllers/settings-controller";

const router = Router();

router.get("/", async (_: Request, res: Response) => {
  res.send(await settingsController.get());
});

export default router;
