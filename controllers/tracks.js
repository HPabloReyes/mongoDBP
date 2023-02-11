const { tracksModel } = require("../models");

const getItems = async (req, res) => {
  const data = await tracksModel.find({});

  res.send({ data });
};

const postItems = (req, res) => {};

const getItem = (req, res) => {};

const createItem = async (req, res) => {
  const { body } = req;
  console.log("createItem", body);
  const data = await tracksModel.create(body);
  res.send({ data });
};

const updateItems = (req, res) => {};

const deleteItems = (req, res) => {};

module.exports = {
  getItems,
  postItems,
  getItem,
  createItem,
  updateItems,
  deleteItems,
};
