import { Request, Response } from "express";
import GetTweetsByUserService from "./get-tweets-by-user-service";

export default class GetTweetsByUserController {
	constructor(private getTweetsByUserService: GetTweetsByUserService) {}

	handle(req: Request, res: Response): Response {
		const { username } = req.params;
		console.log(username);

		const tweets = this.getTweetsByUserService.execute(username);

		return res.status(200).send(tweets);
	}
}
