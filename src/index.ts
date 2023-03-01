import chalk from "chalk";
import cors from "cors";
import express, { json } from "express";
import { router } from "./routes/index";

const app = express();

app.use(cors()).use(json()).use(router);

const PORT = process.env.PORT || 5001;
app.listen(PORT, () => console.log(chalk.bold.blue(`Server is running on port: ${PORT}`)));
