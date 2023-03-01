import { TweetRepository } from "../../../repositories/tweet-repository";
import CreateTweetController from "./create-tweet-controller";
import CreateTweetService from "./create-tweet-service";

const tweetRepository = TweetRepository.getInstance();
const createTweetService = new CreateTweetService(tweetRepository);
export const createTweetController = new CreateTweetController(createTweetService);
