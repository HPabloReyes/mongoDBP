const fs = require("fs");
const { matchedData } = require("express-validator");
const { storageModel } = require("../models");
const { handleHttpErrors } = require("../utils/handleErrors");

const PUBLIC_URL = process.env.PUBLIC_URL;
const MEDIA_PATH = `${__dirname}/../storage`;

const createItem = async (req, res) => {
  try {
    const { body, file } = req;
    const fileData = {
      filename: file.filename,
      url: `${PUBLIC_URL}${file.filename}`,
    };

    const data = await storageModel.create(fileData);
    res.send({ data });
    console.log("createItem", data);
  } catch (e) {
    handleHttpErrors(res, "ERROR_CREATE_ITEM");
  }
};

const deleteItem = async (req, res) => {
  try {
    const { id } = matchedData(req);
    const dataFile = await storageModel.deleteOne(id);
    const { filename } = dataFile;
    const filePath = `${MEDIA_PATH}/${filename}`;

    fs.unlinkSync(filePath);
    const data = { filePath, deleted: 1 };

    res.send({ data });
  } catch (e) {
    handleHttpErrors(res, "ERROR_DELETE_ITEMS");
  }
};

const getItem = async (req, res) => {
  try {
    const { id } = req;
    const data = await tracksModel.findById(id);
    res.send({ data });
  } catch (e) {
    handleHttpErrors(res, "ERROR_GET_ITEM");
  }
};

const getItems = async (req, res) => {
  try {
    const data = await storageModel.find({});
    res.send({ data });
  } catch (e) {
    handleHttpErrors(res, "  ERRPR_GET_ITEMS");
  }
};

module.exports = {
  createItem,
  deleteItem,
  getItem,
  getItems,
};
