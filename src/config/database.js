const mongoose = require("mongoose");

const DEV_MONGODB_URI = "mongodb://127.0.0.1:27017/kost_katalog_moklet_dev";
const MONGODB_URI = process.env.MONGODB_URI || DEV_MONGODB_URI;

module.exports = {
  async initialize() {
    await mongoose.connect(MONGODB_URI);
  },
};
