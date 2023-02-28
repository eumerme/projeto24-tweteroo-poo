import userController from "./user-controller.js";

class TweetController {
	constructor() {
		this.tweets = [];
		this.create = this.create.bind(this);
		this.getByUser = this.getByUser.bind(this);
		this.getAll = this.getAll.bind(this);
		this.reverseTweets = this.reverseTweets.bind(this);
	}

	create(req, res) {
		const { tweet, username } = req.body;

		if (!username || !tweet) {
			return res.status(400).send("Todos os campos são obrigatórios!");
		}

		const { avatar } = userController.getLoggedUser(username);

		this.tweets.push({ username, tweet, avatar });

		return res.status(201).send("OK, seu tweet foi criado");
	}

	getByUser(req, res) {
		const { username } = req.params;

		const tweets = this.tweets.filter((t) => t.username === username);

		return res.status(200).send(tweets);
	}

	getAll(req, res) {
		const { page } = req.query;

		if (page && page < 1) {
			return res.status(400).send("Informe uma página válida!");
		}

		const limit = 10;
		const start = (page - 1) * limit;
		const end = page * limit;

		if (this.tweets.length <= 10) {
			return res.send(this.reverseTweets());
		}

		return res.status(200).send([...this.tweets].reverse().slice(start, end));
	}

	reverseTweets() {
		return [...this.tweets].reverse();
	}
}

export default new TweetController();