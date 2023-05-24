// import { connection } from '../db/connection';
const connection = require('../db/connection');

const average = async (req, resp) => {
  try {
    let table = await connection();
    let response = await table.find({}).toArray();
    resp.status(200).json({ msg: 'sent', data: response });
  } catch (err) {
    resp.status(400).json({ msg: 'err' });
  }
};

const energy = async (req, resp) => {
  try {
    let table = await connection();
    let response = await table.find({ sector: 'Energy' }).toArray();
    resp.status(200).json({ msg: 'energy sent', data: response });
  } catch (err) {
    resp.status(400).json({ msg: 'err' });
  }
};

const manufacturing = async (req, resp) => {
  try {
    let table = await connection();
    let response = await table.find({ sector: 'Manufacturing' }).toArray();
    resp.status(200).json({ msg: 'manufacturing sent', data: response });
  } catch (err) {
    resp.status(400).json({ msg: 'err' });
  }
};

const aero = async (req, resp) => {
  try {
    let table = await connection();
    let response = await table
      .find({ sector: 'Aerospace & defence' })
      .toArray();
    resp.status(200).json({ msg: 'aero sent', data: response });
  } catch (err) {
    resp.status(400).json({ msg: 'err' });
  }
};

const gas = async (req, resp) => {
  try {
    let table = await connection();
    let response = await table.find({ topic: 'gas' }).toArray();
    resp.status(200).json({ msg: 'gas sent', data: response });
  } catch (err) {
    resp.status(400).json({ msg: 'err' });
  }
};

const oil = async (req, resp) => {
  try {
    let table = await connection();
    let response = await table.find({ topic: 'oil' }).toArray();
    resp.status(200).json({ msg: 'oil sent', data: response });
  } catch (err) {
    resp.status(400).json({ msg: 'err' });
  }
};

const consumption = async (req, resp) => {
  try {
    let table = await connection();
    let response = await table.find({ topic: 'consumption' }).toArray();
    resp.status(200).json({ msg: 'consumption sent', data: response });
  } catch (err) {
    resp.status(400).json({ msg: 'err' });
  }
};

const world = async (req, resp) => {
  try {
    let table = await connection();
    let response = await table.find({ region: 'World' }).toArray();
    resp.status(200).json({ msg: 'world sent', data: response });
  } catch (err) {
    resp.status(400).json({ msg: 'err' });
  }
};

const northernamerica = async (req, resp) => {
  try {
    let table = await connection();
    let response = await table.find({ region: 'Northern America' }).toArray();
    resp.status(200).json({ msg: 'northernamerica sent', data: response });
  } catch (err) {
    resp.status(400).json({ msg: 'err' });
  }
};

const centralamerica = async (req, resp) => {
  try {
    let table = await connection();
    let response = await table.find({ region: 'Central America' }).toArray();
    resp.status(200).json({ msg: 'centralamerica sent', data: response });
  } catch (err) {
    resp.status(400).json({ msg: 'err' });
  }
};

// const india = async (req, resp) => {
//   try {
//     let table = await connection();
//     let response = await table.find({ country: 'India' }).toArray();
//     resp.status(200).json({ msg: 'India sent', data: response });
//   } catch (err) {
//     resp.status(400).json({ msg: 'err' });
//   }
// };

const usa = async (req, resp) => {
  try {
    let table = await connection();
    let response = await table
      .find({ country: 'United States of America' })
      .toArray();
    resp.status(200).json({ msg: 'USA sent', data: response });
  } catch (err) {
    resp.status(400).json({ msg: 'err' });
  }
};

const russia = async (req, resp) => {
  try {
    let table = await connection();
    let response = await table.find({ country: 'Russia' }).toArray();
    resp.status(200).json({ msg: 'Russia sent', data: response });
  } catch (err) {
    resp.status(400).json({ msg: 'err' });
  }
};

const political = async (req, resp) => {
  try {
    let table = await connection();
    let response = await table.find({ pestle: 'Political' }).toArray();
    resp.status(200).json({ msg: 'political sent', data: response });
  } catch (err) {
    resp.status(400).json({ msg: 'err' });
  }
};

const technological = async (req, resp) => {
  try {
    let table = await connection();
    let response = await table.find({ pestle: 'Technological' }).toArray();
    resp.status(200).json({ msg: 'political sent', data: response });
  } catch (err) {
    resp.status(400).json({ msg: 'err' });
  }
};

const test = async (req, res) => {
  await within(india, res, 7000);
};

async function within(fn, res, duration) {
  const id = setTimeout(
    () =>
      res.json({
        message: 'There was an error with the upstream service!',
      }),
    duration
  );

  try {
    let data = await fn();
    clearTimeout(id);
    res.json(data);
  } catch (e) {
    res.status(500).json({ message: e.message });
  }
}

async function india(req, resp) {
  // return let india = async (req, resp) => {
  try {
    let table = await connection();
    let response = await table.find({ country: 'India' }).toArray();
    resp.status(200).json({ msg: 'India sent', data: response });
  } catch (err) {
    resp.status(400).json({ msg: 'err' });
  }
}
// }

module.exports = {
  average,
  energy,
  manufacturing,
  aero,
  gas,
  oil,
  consumption,
  world,
  northernamerica,
  centralamerica,
  india,
  usa,
  russia,
  political,
  technological,
  test,
};
