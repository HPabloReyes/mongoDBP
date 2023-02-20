const { check } = require("express-validator");
const validateResults = require("../utils/handleValidator");

const validatorGetteItem = [
  check("mediaId").exists().notEmpty().isMongoId(),

  (req, res, next) => {
    return validateResults(req, res, next);
  },
];

module.exports = { validatorGetteItem };
