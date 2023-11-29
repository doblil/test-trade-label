import { Router } from "express";
import { handleApp } from "../controllers/app.controller.js";

const appRouter = Router();

appRouter.get('/', handleApp);

export {appRouter}