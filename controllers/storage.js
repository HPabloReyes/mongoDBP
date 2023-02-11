const { storageModel } = require("../models");

const PUBLIC_URL = process.env.PUBLIC_URL;

const createItem = async (req, res) => {
  const { body, file } = req;
  const fileData = {
    filename: file.filename,
    url: `${PUBLIC_URL}${file.filename}`,
  };

  const data = await storageModel.create(fileData);
  res.send({ data });
  console.log("createItem", data);
};

module.exports = {
  createItem,
};
