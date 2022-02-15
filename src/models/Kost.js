const mongoose = require("mongoose");

const kostSchema = new mongoose.Schema({
  name: String,
  description: String,
  address: String,
  imageUrl: String,
  genderRestriction: {
    type: String,
    enum: ["Male", "Female", "No Restriction"],
    default: "No Restriction",
  },
  totalBedrooms: Number,
  availableBedrooms: Number,
  price: Number,
  contact: String,
});

kostSchema.query.byName = function(name) {
  return this.where({ name: new RegExp(name, 'i') });
}

module.exports = mongoose.model("Kost", kostSchema);
