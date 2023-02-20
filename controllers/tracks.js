const { matchedData, body } = require("express-validator");
const { tracksModel } = require("../models");
const { handleHttpErrors } = require("../utils/handleErrors");

const getItems = async (req, res) => {
  try {
    const data = await tracksModel.find({});
    res.send({ data });
  } catch (e) {
    handleHttpErrors(res, "ERROR_GET_ITEMS");
  }
};

const postItems = (req, res) => {};

const getItem = async (req, res) => {
  try {
    const { id } = req;
    const data = await tracksModel.findById(id);
    res.send({ data });
  } catch (e) {
    handleHttpErrors(res, "ERROR_GET_ITEM");
  }
};

const createItem = async (req, res) => {
  try {
    const body = matchedData(req);
    const data = await tracksModel.create(body);
    res.send({ data });
    console.log("createItem", body);
  } catch (e) {
    handleHttpErrors(res, "ERROR_CREATE_ITEMS");
  }
};

const updateItems = async (req, res) => {
  try {
    const { id, ...body } = matchedData(req);
    const data = await tracksModel.findOneAndUpdate(id, body);
    res.send({ data });
    console.log("createItem", body);
  } catch (e) {
    handleHttpErrors(res, "ERROR_UPDATE_ITEMS");
  }
};

const deleteItems = async (req, res) => {
  try {
    const { id } = req;
    const data = await tracksModel.deleteOne({ _id: id });
    res.send({ data });
  } catch (e) {
    handleHttpErrors(res, "ERROR_DETELTE_ITEMS");
  }
};

module.exports = {
  getItems,
  postItems,
  getItem,
  createItem,
  updateItems,
  deleteItems,
};
