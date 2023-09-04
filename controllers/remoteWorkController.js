const RemoteWorkResource = require("../models/RemoteWorkResource");

exports.getAll = async (req, res) => {
  const resources = await RemoteWorkResource.find();
  console.log(resources);
  res.json(resources);
};

exports.create = async (req, res) => {
  const newResource = new RemoteWorkResource(req.body);
  await newResource.save();
  res.json(newResource);
};

exports.updateById = async (req, res) => {
  const updatedResource = await RemoteWorkResource.findByIdAndUpdate(
    req.params.id,
    req.body,
    { new: true }
  );
  res.json(updatedResource);
};

exports.partialUpdate = async (req, res) => {
  const updatedResource = await RemoteWorkResource.findByIdAndUpdate(
    req.params.id,
    req.body,
    { new: true }
  );
  res.json(updatedResource);
};

exports.deleteById = async (req, res) => {
  await RemoteWorkResource.findByIdAndDelete(req.params.id);
  res.json({ message: "Deleted successfully" });
};
