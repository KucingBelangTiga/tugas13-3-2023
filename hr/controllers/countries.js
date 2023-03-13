import { sequelize } from "../models/init-models.js";

const findAll = async (req, res) => {
  try {
    const country = await req.context.models.countries.findAll();
    //   {
    //   include: [
    //     {
    //       model: req.context.models.countries,
    //       as: "countries",
    //     },
    //   ],
    // }

    return res.send(country);
  } catch (error) {
    return res.status(400).send(error);
  }
};

const findOne = async (req, res) => {
  try {
    const country = await req.context.models.countries.findOne({
      where: { country_id: req.params.id },
    });
    return res.send(country);
  } catch (error) {
    return res.status(400).send(error);
  }
};

const create = async (req, res) => {
  try {
    const country = await req.context.models.countries.create({
      country_id: req.body.country_id,
      country_name: req.body.country_name,
      region_id: req.params.region_id,
    });
    return res.send(country);
  } catch (error) {
    return res.status(400).send(error);
  }
};

const update = async (req, res) => {
  try {
    const country = await req.context.models.countries.update(
      {
        country_name: req.body.country_name,
      },
      { returning: true, where: { country_id: req.params.id } }
    );
    return res.send(country);
  } catch (error) {
    return res.status(400).send(error);
  }
};

const deleted = async (req, res) => {
  try {
    const country = await req.context.models.countries.destroy({
      where: { country_id: req.params.id },
    });
    return res.send(`delete ${country} rows`);
  } catch (error) {
    return res.status(400).send(error);
  }
};

// const qureySQL = async (req, res) => {
//   try {
//     const query = await sequelize.query(
//       "SELECT * from countries where region_id = :id",
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
