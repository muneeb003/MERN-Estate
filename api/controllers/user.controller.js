import User from "../models/User.model.js";
export const getUsers = async (req, res) => {
  const Users = await User.find();
  res.status(200).json(Users);
};
