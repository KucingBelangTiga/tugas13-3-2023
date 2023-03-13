import { sequelize } from "../models/init-models.js";

const findAll = async (req, res) => {
  try {
    const job = await req.context.models.jobs.findAll();
    return res.send(job);
  } catch (error) {
    return res.status(400).send(error);
  }
};

const findOne = async (req, res) => {
  try {
    const job = await req.context.models.jobs.findOne({
      where: { job_id: req.params.id },
    });
    return res.send(job);
  } catch (error) {
    return res.status(400).send(error);
  }
};

const create = async (req, res) => {
  try {
    const job = await req.context.models.jobs.create({
      job_id: req.body.job_id,
      job_title: req.body.job_title,
      min_salary: req.body.min_salary,
      max_salary: req.body.max_salary,
    });
    return res.send(job);
  } catch (error) {
    return res.status(400).send(error);
  }
};

const update = async (req, res) => {
  try {
    const job = await req.context.models.jobs.update(
      {
        job_title: req.body.job_title,
      },
      { returning: true, where: { job_id: req.params.id } }
    );
    return res.send(job);
  } catch (error) {
    return res.status(400).send(error);
  }
};

const deleted = async (req, res) => {
  try {
    const job = await req.context.models.jobs.destroy({
      where: { job_id: req.params.id },
    });
    return res.send(`delete ${job} rows`);
  } catch (error) {
    return res.status(400).send(error);
  }
};

// const qureySQL = async (req, res) => {
//   try {
//     const query = await sequelize.query(
//       "SELECT * from jobs where job_id = :id",
//       { replacements: { id: req.params.id }, type: sequelize.QueryTypes.SELECT }
//     );
//     return res.send(query);
//   } catch (error) {
//     return res.status(400).send(error);
//   }
// };

export default {
  findAll,
  findOne,
  create,
  update,
  deleted,
  // qureySQL,
};
