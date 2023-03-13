import dotenv from "dotenv";

const express = require("express");
dotenv.config();

const Pool = require("pg").Pool;
const pool = new Pool({
  host: "localhost",
  user: "postgres",
  password: "coba1234",
  port: 5432,
  database: "HR",
});

const app = express();
app.use(express.json());
const port = process.env.PORT || 3005;

app.listen(port, () => console.log(`Server listening on port ${port}`));

app.get("/api/country/", (req, res) => {
  pool.query("select *  from countries", [], (error, result) => {
    if (error) {
      throw error;
    }
    res.status(200).json(result.rows);
  });
});

app.get("/api/country/:id", (req, res) => {
  const { id } = req.params;
  pool.query(
    "select * from countries where country_id = $1",
    [id],
    (error, result) => {
      if (error) {
        throw error;
      }
      res.status(200).json(result.rows);
    }
  );
});

app.post("/api/country/", (req, res) => {
  const { id, name } = req.body;
  pool.query(
    "insert into countries (country_id,country_name) values ($1,$2)",
    [id, name],
    (error, result) => {
      if (error) {
        throw error;
      }
      res.status(200).json(result.rowCount);
    }
  );
});

app.put("/api/country/:id", (req, res) => {
  const { id } = req.params;
  const { name } = req.body;

  pool.query(
    "update countries set country_name = $1 where country_id = $2",
    [name, id],
    (error, result) => {
      if (error) {
        throw error;
      }
      res.status(200).end("Data berhasil update");
    }
  );
});

app.delete("/api/country/:id", (req, res) => {
  const { id } = req.params;

  pool.query(
    "delete from countries where country_id = $1",
    [id],
    (error, result) => {
      if (error) {
        throw error;
      }
      res.status(200).end("Data berhasil dihapus");
    }
  );
});
