import { Tweet } from "../../../models/Tweet";
import { TweetRepository } from "../../../repositories/tweet-repository";

export default class GetTweetsByUserService {
	constructor(private tweetRepository: TweetRepository) {}

	execute(username: string): Tweet[] {
		console.log(username);
		return this.tweetRepository.getByUser(username);
	}
}
