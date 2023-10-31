const Led = require("../models/ledModel");
exports.getState = async (req, res) => {
  const state = await Led.findOne({ name: "led-1" });
  res.status(200).json({ state });
};
