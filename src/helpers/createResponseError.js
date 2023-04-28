module.exports = (res, error) => {
  console.log(error);
  return res.status(error.status || 500).json({
    ok: false,
    error: {
      status: error.status || 500,
      message: error.message || "Ocurrio un Error!",
    }
  });
};
