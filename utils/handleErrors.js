const handleHttpErrors = (res, message = "algo sucecdio ", code = 403) => {
  res.status(code);
  res.send({ error: message });
};

module.exports = { handleHttpErrors };
