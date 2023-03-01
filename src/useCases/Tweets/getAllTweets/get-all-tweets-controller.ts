import { Request, Response } from "express";
import GetAllTweetsService from "./get-all-tweets-service";

export default class GetAllTweetsController {
	constructor(private getAllTweetsService: GetAllTweetsService) {}

	handle(req: Request, res: Response): Response {
		const page = +req.query.page!;

		if (page && page < 1) {
			return res.status(400).send("Informe uma página válida!");
		}

		const tweets = this.getAllTweetsService.execute(page);

		return res.status(200).send(tweets);
	}
}
