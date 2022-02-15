const Kost = require("../../models/Kost");

const {matchedData} = require('express-validator');

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
    } else {
      Kost.find().then((kosts) => res.json(kosts));
    }
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

