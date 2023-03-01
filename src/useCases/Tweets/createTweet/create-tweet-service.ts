import { TweetRepository } from "../../../repositories/tweet-repository";
import { getLoggedUserService } from "../../Users/getLoggedUser";

interface IRequestTweet {
	username: string;
	tweet: string;
}

export default class CreateTweetService {
	constructor(private tweetRepository: TweetRepository) {}

	execute({ username, tweet }: IRequestTweet): void {
		if (!username || !tweet) {
			throw new Error("All fields are mandatory!");
		}

		const user = getLoggedUserService.execute(username);
		if (!user) {
			throw new Error("User not found!");
		}

		this.tweetRepository.create({ username, tweet, avatar: user.avatar });
	}
}
