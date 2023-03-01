import { User } from "../../../models/User";
import { UserRepository } from "../../../repositories/user-repository";

export default class CreateUserService {
	constructor(private userRepository: UserRepository) {}

	execute({ username, avatar }: User) {
		if (!username || !avatar) {
			throw new Error("All fields are mandatory!");
		}

		const usernameExists = this.userRepository.getLoggedUser(username);
		if (usernameExists) {
			throw new Error("Username already registered!");
		}

		this.userRepository.create({ username, avatar });
	}
}
