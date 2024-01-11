import User from "../../models/user.js";
import Role from "../../models/role.js";

export class UserController {
  async createUser(req, res) {
    try {
      const { username, email, password, roles } = req.body;

      const rolesFound = await Role.find({ name: { $in: roles } });

      // creating a new User
      const user = new User({
        username,
        email,
        password,
        roles: rolesFound.map((role) => role._id),
      });

      // encrypting password
      user.password = await User.encryptPassword(user.password);

      // saving the new user
      const savedUser = await user.save();

      return res.status(200).json({
        _id: savedUser._id,
        username: savedUser.username,
        email: savedUser.email,
        roles: savedUser.roles,
      });
    } catch (err) {
      console.error(err);
    }
  }
  async findUsers(req, res) {
    return res.json({
      user: "findUsers",
    });
  }
  async deleteUser(req, res) {
    return res.json({
      user: "deleteUser",
    });
  }
  async updateUser(req, res) {
    return res.json({
      user: "updateUser",
    });
  }
}
