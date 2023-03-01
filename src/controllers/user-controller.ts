import { Request, Response } from "express";
import { User } from "../models/User";

class UserController {
	private users: User[];

	constructor() {
		this.users = [];
		this.signin = this.signin.bind(this);
		this.getLoggedUser = this.getLoggedUser.bind(this);
	}

	signin(req: Request, res: Response): Response {
		const { username, avatar } = req.body;

		if (!username || !avatar) {
			return res.status(400).send("Todos os campos são obrigatórios!");
		}

		const usernameExists = this.getLoggedUser(username);
		if (usernameExists) {
			return res.status(409).send("Nome de usuário já cadastrado!");
		}

		this.users.push({ username, avatar });

		return res.status(200).send("OK deu tudo certo");
	}

	getLoggedUser(username: string): User {
		const user = this.users.find((user) => user.username === username);
		return user!;
	}
}

export default new UserController();
