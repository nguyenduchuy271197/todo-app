import { Router } from "express";
import {
  getSigninController,
  postSigninController,
  getSignoutController,
} from "../controllers/auth.js";

const router = Router();

router.get("/signin", getSigninController);
router.post("/signin", postSigninController);
router.get("/singout", getSignoutController);

export default router;
