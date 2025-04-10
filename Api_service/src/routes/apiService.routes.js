import express, { Router } from "express";
const router = Router();
import { createApiService } from "../controllers/apiService.controller.js";

router.route("/").post(createApiService);

export default router;
