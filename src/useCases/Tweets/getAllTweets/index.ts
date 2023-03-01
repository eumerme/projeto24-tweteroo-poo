import { TweetRepository } from "../../../repositories/tweet-repository";
import GetAllTweetsController from "./get-all-tweets-controller";
import GetAllTweetsService from "./get-all-tweets-service";

const tweetRepository = TweetRepository.getInstance();
const getAllTweetsService = new GetAllTweetsService(tweetRepository);
export const getAllTweetsController = new GetAllTweetsController(getAllTweetsService);
