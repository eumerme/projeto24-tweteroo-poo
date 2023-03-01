import { Router } from "express";
import tweetController from "../controllers/tweet-controller";

const tweetsRouter = Router();

tweetsRouter
	.post("/tweets", tweetController.create)
	.get("/tweets", tweetController.getAll)
	.get("/tweets/:username", tweetController.getByUser);

export { tweetsRouter };
