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

app.get("/api/region", (req, res) => {
  pool.query("select *  from regions", [], (error, result) => {
    if (error) {
      throw error;
    }
    res.status(200).json(result.rows);
  });
});

app.get("/api/region/:id", (req, res) => {
  const { id } = req.params;
  pool.query(
    "select * from regions where region_id = $1",
    [id],
    (error, result) => {
      if (error) {
        throw error;
      }
      res.status(200).json(result.rows);
    }
  );
});

app.post("/api/region/", (req, res) => {
  const { id, name } = req.body;
  pool.query(
    "insert into regions (region_id,region_name) values ($1,$2)",
    [id, name],
    (error, result) => {
      if (error) {
        throw error;
      }
      res.status(200).json(result.rowCount);
    }
  );
});

app.put("/api/region/:id", (req, res) => {
  const { id } = req.params;
  const { name } = req.body;

  pool.query(
    "update regions set region_name = $1 where region_id = $2",
    [name, id],
    (error, result) => {
      if (error) {
        throw error;
      }
      res.status(200).end("Data berhasil update");
    }
  );
});

app.delete("/api/region/:id", (req, res) => {
  const { id } = req.params;

  pool.query(
    "delete from regions where region_id = $1",
    [id],
    (error, result) => {
      if (error) {
        throw error;
      }
      res.status(200).end("Data berhasil dihapus");
    }
  );
});

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
  const { id, name, region } = req.body;
  pool.query(
    "insert into countries (country_id,country_name,region_id) values ($1,$2,$3)",
    [id, name, region],
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

app.get("/api/department", (req, res) => {
  pool.query("select *  from departments", [], (error, result) => {
    if (error) {
      throw error;
    }
    res.status(200).json(result.rows);
  });
});

app.get("/api/department/:id", (req, res) => {
  const { id } = req.params;
  pool.query(
    "select * from departments where department_id = $1",
    [id],
    (error, result) => {
      if (error) {
        throw error;
      }
      res.status(200).json(result.rows);
    }
  );
});

app.post("/api/department/", (req, res) => {
  const { id, name, loc } = req.body;
  pool.query(
    "insert into departments (department_id,department_name,location_id) values ($1,$2,$3)",
    [id, name, loc],
    (error, result) => {
      if (error) {
        throw error;
      }
      res.status(200).json(result.rowCount);
    }
  );
});

app.put("/api/department/:id", (req, res) => {
  const { id } = req.params;
  const { name } = req.body;

  pool.query(
    "update department set department_name = $1 where department_id = $2",
    [name, id],
    (error, result) => {
      if (error) {
        throw error;
      }
      res.status(200).end("Data berhasil update");
    }
  );
});

app.delete("/api/department/:id", (req, res) => {
  const { id } = req.params;

  pool.query(
    "delete from departments where department_id = $1",
    [id],
    (error, result) => {
      if (error) {
        throw error;
      }
      res.status(200).end("Data berhasil dihapus");
    }
  );
});

app.get("/api/employee", (req, res) => {
  pool.query("select *  from employees", [], (error, result) => {
    if (error) {
      throw error;
    }
    res.status(200).json(result.rows);
  });
});

app.get("/api/employee/:id", (req, res) => {
  const { id } = req.params;
  pool.query(
    "select * from employees where employee_id = $1",
    [id],
    (error, result) => {
      if (error) {
        throw error;
      }
      res.status(200).json(result.rows);
    }
  );
});

app.post("/api/employee/", (req, res) => {
  const {
    id,
    first_name,
    last_name,
    email,
    phone,
    hire_date,
    salary,
    job_id,
    manager_id,
    department_id,
  } = req.body;
  pool.query(
    "insert into employees (employee_id,first_name,last_name,email,phone_number,hire_date,salary,job_id,manager_id,department_id) values ($1,$2,$3,$4,$5,$6,$7,$8,$9,$10)",
    [
      id,
      first_name,
      last_name,
      email,
      phone,
      hire_date,
      salary,
      job_id,
      manager_id,
      department_id,
    ],
    (error, result) => {
      if (error) {
        throw error;
      }
      res.status(200).json(result.rowCount);
    }
  );
});

app.put("/api/employee/:id", (req, res) => {
  const { id } = req.params;
  const { name } = req.body;

  pool.query(
    "update employees set first_name = $1 where employee_id = $2",
    [name, id],
    (error, result) => {
      if (error) {
        throw error;
      }
      res.status(200).end("Data berhasil update");
    }
  );
});

app.delete("/api/employee/:id", (req, res) => {
  const { id } = req.params;

  pool.query(
    "delete from employees where employee_id = $1",
    [id],
    (error, result) => {
      if (error) {
        throw error;
      }
      res.status(200).end("Data berhasil dihapus");
    }
  );
});

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

app.get("/api/location", (req, res) => {
  pool.query("select *  from locations", [], (error, result) => {
    if (error) {
      throw error;
    }
    res.status(200).json(result.rows);
  });
});

app.get("/api/location/:id", (req, res) => {
  const { id } = req.params;
  pool.query(
    "select * from locations where location_id = $1",
    [id],
    (error, result) => {
      if (error) {
        throw error;
      }
      res.status(200).json(result.rows);
    }
  );
});

app.post("/api/location/", (req, res) => {
  const {
    location_id,
    street_address,
    postal_code,
    city,
    state_province,
    country_id,
  } = req.body;
  pool.query(
    "insert into locations (location_id, street_address, postal_code, city, state_province, country_id) values ($1,$2,$3,$4,$5,$6)",
    [
      location_id,
      street_address,
      postal_code,
      city,
      state_province,
      country_id,
    ],
    (error, result) => {
      if (error) {
        throw error;
      }
      res.status(200).json(result.rowCount);
    }
  );
});

app.put("/api/location/:id", (req, res) => {
  const { id } = req.params;
  const { name } = req.body;

  pool.query(
    "update locations set street_address = $1 where location_id = $2",
    [name, id],
    (error, result) => {
      if (error) {
        throw error;
      }
      res.status(200).end("Data berhasil update");
    }
  );
});

app.delete("/api/location/:id", (req, res) => {
  const { id } = req.params;

  pool.query(
    "delete from locations where location_id = $1",
    [id],
    (error, result) => {
      if (error) {
        throw error;
      }
      res.status(200).end("Data berhasil dihapus");
    }
  );
});
