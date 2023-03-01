import { Router } from "express";
import { tweetsRouter } from "./tweets-route";
import { usersRouter } from "./users-route";

const router = Router();

router.use(usersRouter).use(tweetsRouter);

export { router };
