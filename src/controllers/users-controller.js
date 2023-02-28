class UserController {
	constructor() {
		this.users = [];
		this.signin = this.signin.bind(this);
	}

	signin(req, res) {
		const { username, avatar } = req.body;

		if (!username || !avatar) {
			return res.status(400).send("Todos os campos são obrigatórios!");
		}

		this.users.push({ username, avatar });

		return res.status(200).send("OK deu tudo certo");
	}
}

export default new UserController();
