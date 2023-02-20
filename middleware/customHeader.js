const customHeader = (req, res, next) => {
  try {
    const apiKey = req.headers.api_key;
    if (apiKey === "leifer-01") {
      next();
    } else {
      res.status(403).send({ error: "Apy key no es correcta" });
    }
  } catch (e) {
    res.status(403).send({ error: "Algo Ocurrio en el Custom Header" });
  }
};

module.exports = customHeader;
