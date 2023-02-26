import chalk from "chalk";
import cors from "cors";
import express, { json } from "express";
import { router } from "./routes/index.js";

const app = express();

app.use(cors()).use(json()).use(router);

app.listen(5001, () => {
	console.log(chalk.bold.blue("Servidor funfando de boas!!!"));
});
