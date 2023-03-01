import { Router } from "express";
import { createTweetController } from "../useCases/Tweets/createTweet";
import { getAllTweetsController } from "../useCases/Tweets/getAllTweets";
import { getTweetsByUserController } from "../useCases/Tweets/getTweetByUser";

const tweetsRouter = Router();

tweetsRouter
	.post("/tweets", (req, res) => {
		createTweetController.handle(req, res);
	})
	.get("/tweets", (req, res) => {
		getAllTweetsController.handle(req, res);
	})
	.get("/tweets/:username", (req, res) => {
		getTweetsByUserController.handle(req, res);
	});

export { tweetsRouter };
