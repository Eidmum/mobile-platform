const { set } = require("../app");
const Fan = require("../models/fanModel");
exports.getState = async (req, res) => {
  const state = await Fan.findOne({ name: "fan" });
  res.status(200).json({ state });
};
exports.updateState = async (req, res) => {
  const a = await Fan.updateOne({ name: req.body.name }, { $set: req.body });
  console.log(a);
  res.status(200).json({ message: "successfull" });
};
