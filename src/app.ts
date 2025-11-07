import express from "express";
import "reflect-metadata";
import { sequelize } from "./config/database";
import studentController from "./controllers/studentController";

const app = express();
app.use(express.json());
app.use("/students", studentController);

const PORT = 3000;

(async () => {
  await sequelize.sync({ alter: true }); // sincroniza tablas
  app.listen(PORT, () =>
    console.log(`🚀 Server running on http://localhost:${PORT}`)
  );
})();