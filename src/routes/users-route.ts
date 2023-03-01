import { Router } from "express";
import { createUserController } from "../useCases/Users/createUser";

const usersRouter = Router();

usersRouter.post("/sign-up", (req, res) => createUserController.handle(req, res));

export { usersRouter };
