import { Request, Response } from "express";
import CreateTweetService from "./create-tweet-service";

export default class CreateTweetController {
	constructor(private createTweetService: CreateTweetService) {}

	handle(req: Request, res: Response): Response {
		const { tweet, username } = req.body;

		this.createTweetService.execute({ username, tweet });

		return res.sendStatus(201);
	}
}
