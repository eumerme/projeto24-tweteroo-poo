import { usuarios } from "../repositories/index.js";

export function signUp(req, res) {
	const { username, avatar } = req.body;

	if (!username || !avatar) {
		return res.status(400).send("Todos os campos são obrigatórios!");
	}

	usuarios.push({ username, avatar });

	console.log("users-controller ", usuarios);

	return res.status(200).send("OK deu tudo certo");
}
