const Kost = require("../../models/Kost");

const {matchedData} = require('express-validator');

const SEARCH_RESULT_LIMIT = 20;

module.exports = {
  add(req, res) {
    const data = matchedData(req);
    const kost = new Kost(data);

    kost
      .save()
      .then((_) => res.status(204).end())
      .catch((err) => {
        console.error(err);
        res.status(500).send(err);
      });
  },

  delete(req, res) {
    const { id } = req.params;

    Kost.deleteOne({ _id: id })
      .then((_) => res.status(204).end())
      .catch((err) => {
        console.error(err);
        res.status(500).send(err);
      });
  },

  read(req, res) {
    const { id } = req.params;

    if (id) {
      Kost.findOne({ _id: id })
        .then((kost) => res.json(kost))
        .catch((err) => res.status(500).send(err));
      return;
    }

    const { q: name } = req.query;

    if (name) {
      Kost.find().byName(name).limit(SEARCH_RESULT_LIMIT).exec()
        .then((kost) => res.json(kost))
        .catch((err) => res.status(500).send(err));
      return;
    }

    Kost.find()
      .then((kosts) => res.json(kosts))
      .catch((err) => res.status(500).send(err));
  },

  put(req, res) {
    const { id } = req.params;
    const newData = matchedData(req);

    Kost.replaceOne({ _id: id }, newData)
      .then((_) => res.status(204).end())
      .catch((err) => {
        console.error(err);
        res.status(500).send(err);
      });
  },
};

