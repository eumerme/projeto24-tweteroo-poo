import { Router } from "express";
import { signUp } from "../controllers/index.js";

const usersRouter = Router();

usersRouter.post("/sign-up", signUp);

export { usersRouter };
