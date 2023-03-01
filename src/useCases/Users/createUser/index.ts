import { UserRepository } from "../../../repositories/user-repository";
import CreateUserController from "./create-user-controller";
import CreateUserService from "./create-user-service";

const userRepository = UserRepository.getInstance();
const createUserService = new CreateUserService(userRepository);
export const createUserController = new CreateUserController(createUserService);
