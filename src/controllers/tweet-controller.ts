import { Request, Response } from "express";
import { Tweet } from "../models/Tweet";
import { getLoggedUserService } from "../useCases/Users/getLoggedUser";

class TweetController {
	private tweets: Tweet[];

	constructor() {
		this.tweets = [];
		this.create = this.create.bind(this);
		this.getByUser = this.getByUser.bind(this);
		this.getAll = this.getAll.bind(this);
		this.reverseTweets = this.reverseTweets.bind(this);
	}

	create(req: Request, res: Response): Response {
		const { tweet, username } = req.body;

		if (!username || !tweet) {
			return res.status(400).send("Todos os campos são obrigatórios!");
		}

		const user = getLoggedUserService.execute(username);
		if (!user) {
			return res.status(404).send("Usuário não encontrado");
		}

		this.tweets.push({ username, tweet, avatar: user.avatar });

		return res.status(201).send("OK, seu tweet foi criado");
	}

	getByUser(req: Request, res: Response): Response {
		const { username } = req.params;

		const tweets = this.tweets.filter((t) => t.username === username);

		return res.status(200).send(tweets);
	}

	getAll(req: Request, res: Response): Response {
		const page = +req.query.page!;

		if (page && page < 1) {
			return res.status(400).send("Informe uma página válida!");
		}

		const limit = 10;
		const start = (page - 1) * limit;
		const end = page * limit;

		if (this.tweets.length <= 10) {
			return res.send(this.reverseTweets());
		}

		return res.status(200).send(this.reverseTweets().slice(start, end));
	}

	private reverseTweets(): Tweet[] {
		return [...this.tweets].reverse();
	}
}

export default new TweetController();
