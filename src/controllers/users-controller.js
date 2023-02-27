import { User } from "../models/index.js";
import { users } from "../repositories/index.js";

export function signUp(req, res) {
	const { username, avatar } = req.body;

	if (!username || !avatar) {
		return res.status(400).send("Todos os campos são obrigatórios!");
	}

	const newUser = new User({ username, avatar });
	users.push(newUser);

	return res.status(200).send("OK deu tudo certo");
}
