const { tracksModel } = require("../models");

const getItems = async (req, res) => {
  const data = await tracksModel.find({});

  res.send({ data });
};

const postItems = (req, res) => {};

const getItem = (req, res) => {};

const createItems = (req, res) => {};

const updateItems = (req, res) => {};

const deleteItems = (req, res) => {};

module.exports = {
  getItems,
  postItems,
  getItem,
  createItems,
  updateItems,
  deleteItems,
};
