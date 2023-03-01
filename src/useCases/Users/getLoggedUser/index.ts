import { UserRepository } from "../../../repositories/user-repository";
import { GetLoggedUserService } from "./get-logged-user-service";

const userRepository = UserRepository.getInstance();
export const getLoggedUserService = new GetLoggedUserService(userRepository);
