const User = require("../models/user");
async function handleGetAllUsers(req, res) {
  const allDbUsers = await User.find({});
  return res.status(200).json(allDbUsers);
}
const handleGetUserById = async (req, res) => {
  const user = await User.findById(req.params.id);
  if (!user) {
    return res.status(404).json({
      error: "user not found",
    });
  }
  return res.json(user);
};
const handleUpdateUserById = async (req, res) => {
  await User.findByIdAndUpdate(req.params.id, { lastName: "Aloo" });
  return res.json({
    message: "Success",
  });
};
const handleDeleteUserById = async (req, res) => {
  await User.findByIdAndDelete(req.params.id);
  return res.json({
    message: "Deleted",
  });
};
const handleCreateNewUser = async (req, res) => {
  const body = req.body;
  if (
    !body ||
    !body.firstName ||
    !body.lastName ||
    !body.jobTitle ||
    !body.gender ||
    !body.email
  ) {
    return res.status(400).json({
      message: "All fields are required",
    });
  }
  const result = await User.create({
    firstName: body.firstName,
    lastName: body.lastName,
    email: body.email,
    jobTitle: body.jobTitle,
    gender: body.gender,
  });

  return res.status(201).json({
    id: result._id,
  });
};
module.exports = {
  handleGetAllUsers,
  handleGetUserById,
  handleUpdateUserById,
  handleDeleteUserById,
  handleCreateNewUser,
};
