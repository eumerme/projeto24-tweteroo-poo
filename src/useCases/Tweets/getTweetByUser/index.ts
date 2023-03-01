import { TweetRepository } from "../../../repositories/tweet-repository";
import GetTweetsByUserController from "./get-tweets-by-user-controller";
import GetTweetsByUserService from "./get-tweets-by-user-service";

const tweetRepository = TweetRepository.getInstance();
const getTweetsByUserService = new GetTweetsByUserService(tweetRepository);
export const getTweetsByUserController = new GetTweetsByUserController(getTweetsByUserService);
