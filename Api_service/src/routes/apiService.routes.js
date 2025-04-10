import express, { Router } from "express";
const router = Router();
import {
  createApiService,
  getApiServise,
  getApiServises,
} from "../controllers/apiService.controller.js";

router.route("/").get(getApiServises);
router.route("/").post(createApiService);

router.route("/:id").get(getApiServise);

export default router;
