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

app.get("/api/job", (req, res) => {
  pool.query("select *  from jobs", [], (error, result) => {
    if (error) {
      throw error;
    }
    res.status(200).json(result.rows);
  });
});

app.get("/api/job/:id", (req, res) => {
  const { id } = req.params;
  pool.query("select * from jobs where job_id = $1", [id], (error, result) => {
    if (error) {
      throw error;
    }
    res.status(200).json(result.rows);
  });
});

app.post("/api/job/", (req, res) => {
  const { job_id, job_title, min_salary, max_salary } = req.body;
  pool.query(
    "insert into jobs (job_id,job_title,min_salary,max_salary) values ($1,$2,$3,$4)",
    [job_id, job_title, min_salary, max_salary],
    (error, result) => {
      if (error) {
        throw error;
      }
      res.status(200).json(result.rowCount);
    }
  );
});

app.put("/api/job/:id", (req, res) => {
  const { id } = req.params;
  const { name } = req.body;

  pool.query(
    "update jobs set job_title = $1 where job_id = $2",
    [name, id],
    (error, result) => {
      if (error) {
        throw error;
      }
      res.status(200).end("Data berhasil update");
    }
  );
});

app.delete("/api/job/:id", (req, res) => {
  const { id } = req.params;

  pool.query("delete from jobs where job_id = $1", [id], (error, result) => {
    if (error) {
      throw error;
    }
    res.status(200).end("Data berhasil dihapus");
  });
});
