class UserController {
	constructor() {
		this.users = [];
		this.signin = this.signin.bind(this);
		this.getLoggedUser = this.getLoggedUser.bind(this);
	}

	signin(req, res) {
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

	getLoggedUser(username) {
		return this.users.find((user) => user.username === username);
	}
}

export default new UserController();
