module.exports = (res, { data, ...props } = {}) => {
  res.status(200).json({ ok: true, data, ...props });
};
