const express = require("express");
const fs = require("fs");
const router = express.Router();

const PATH_ROUTES = __dirname;

const removeExtension = (fileName) => {
  //Todo tracks.js [tracks,js]
  return fileName.split(".").shift();
};

fs.readdirSync(PATH_ROUTES).filter((file) => {
  const name = removeExtension(file); //Todo users,storage,tracks
  if (name !== "index") {
    router.use(`/${name}`, require(`./${file}`));
  }
});

module.exports = router;
