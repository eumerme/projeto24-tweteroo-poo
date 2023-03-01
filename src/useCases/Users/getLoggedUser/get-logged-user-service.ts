import { User } from "../../../models/User";
import { UserRepository } from "../../../repositories/user-repository";

export class GetLoggedUserService {
	constructor(private userRepository: UserRepository) {}

	execute(username: string): User {
		return this.userRepository.getLoggedUser(username);
	}
}
