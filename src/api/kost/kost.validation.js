// Validation Schema of Kost

const {checkSchema, validationResult} = require('express-validator');

const kostValidationSchema = {
  name: {
    in: ["body"],
    isLength: {
      options: { min: 0, max: 255 },
    },
  },
  description: {
    in: ["body"],
    isLength: {
      options: { min: 0, max: 1000 },
    },
  },
  address: {
    in: ["body"],
    isLength: {
      options: { min: 0, max: 1000 },
    },
  },
  imageUrl: {
    in: ["body"],
    isLength: {
      options: { min: 0, max: 300 },
    },
  },
  genderRestriction: {
    in: ["body"],
    isIn: {
      options: [["Male", "Female", "No Restriction"]],
    }
  },
  totalBedrooms: {
    in: ["body"],
    isInt: {
      options: { min: 1 },
    },
  },
  availableBedrooms: {
    in: ["body"],
    isInt: {
      options: { min: 0 },
    },
  },
  price: {
    in: ["body"],
    isInt: {
      options: { min: 0 },
    },
  },
  contact: {
    in: ["body"],
  },
};

exports.validateKost = [
  checkSchema(kostValidationSchema),
  (req, res, next) => {
    const errors = validationResult(req);

    if (!errors.isEmpty()) {
      return res.status(400).json({errors: errors.array()});
    }

    next();
  }
];
