import { Sequelize } from "sequelize";
import Sequelize from "sequelize";
import { config } from "./config";

const sequelize = new Sequelize(
  config.db_name,
  config.db_username,
  config.db_pass,
  {
    dialect: "postgres",
  }
);

sequelize
  .authenticate()
  .then(() => console.log("connection has successfully authenticated"))
  .catch((err) => console.error(err));

export { sequelize };
