import { Router } from "express";
import { createTweet, getTweets, getUserTweets } from "../controllers/index.js";

const tweetsRouter = Router();

tweetsRouter.post("/tweets", createTweet).get("/tweets/:username", getUserTweets).get("/tweets", getTweets);

export { tweetsRouter };
