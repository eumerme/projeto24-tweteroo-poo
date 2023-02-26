import { Router } from "express";
import { tweetsRouter } from "./tweets-route.js";
import { usersRouter } from "./users-route.js";

const router = Router();

router.use(usersRouter).use(tweetsRouter);

export { router };
