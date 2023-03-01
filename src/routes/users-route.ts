import { Router } from "express";
import userController from "../controllers/user-controller";

const usersRouter = Router();

usersRouter.post("/sign-up", userController.signin);

export { usersRouter };
