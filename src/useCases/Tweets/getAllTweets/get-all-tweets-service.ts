import { Tweet } from "../../../models/Tweet";
import { TweetRepository } from "../../../repositories/tweet-repository";

export default class GetAllTweetsService {
	constructor(private tweetRepository: TweetRepository) {}

	execute(page: number): Tweet[] {
		const limit = 10;
		const start = (page - 1) * limit;
		const end = page * limit;

		return this.tweetRepository.getAll({ start, end });
	}
}
