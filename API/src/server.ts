import express from "express";
import AuthRouter from "./routes/AuthRoutes";

import UserRouter from "./routes/UserRoutes";

const app = express();
app.use(express.json());

app.use(UserRouter);
app.use(AuthRouter);

app.listen(3333, function () {
  console.log("Servidor rodando na porta 3333");
});
