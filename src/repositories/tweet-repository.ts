import { Tweet } from "../models/Tweet";

interface IStartEndPages {
	start: number;
	end: number;
}

export class TweetRepository {
	private tweets: Tweet[];
	private static INSTANCE: TweetRepository;

	private constructor() {
		this.tweets = [];
	}

	public static getInstance(): TweetRepository {
		if (!this.INSTANCE) {
			this.INSTANCE = new TweetRepository();
		}
		return this.INSTANCE;
	}

	create({ username, tweet, avatar }: Tweet): void {
		this.tweets.push({ username, tweet, avatar });
	}

	getAll({ start, end }: IStartEndPages): Tweet[] {
		if (this.tweets.length <= 10) {
			return this.reverseTweets();
		}
		return this.reverseTweets().slice(start, end);
	}

	getByUser(username: string): Tweet[] {
		return this.tweets.filter((t) => t.username === username);
	}

	private reverseTweets(): Tweet[] {
		return [...this.tweets].reverse();
	}
}
