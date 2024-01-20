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
    try {
      const stageThree = {
        $project: {
          _id: 0,
          username: 1,
          email: 1,
          createdAt: 1,
          updatedAt: 1,
          role: 1,
        },
      };

      const stageOne = {
        $lookup: {
          from: "roles",
          localField: "role",
          foreignField: "_id",
          as: "role",
        },
      };
      const stagetwo = {
        $unwind: {
          path: "$role",
          preserveNullAndEmptyArrays: true,
        },
      };

      const users = await User.aggregate([stageOne, stagetwo, stageThree]);
      return res.json(users);
    } catch (err) {
      console.error(err);
      return res.status(500).json({ error: "Internal Server Error" });
    }
  }

  // async findUsers(req, res) {
  //   try {
  //     const stageOne = {
  //       $project: {
  //         _id: 0,
  //         username: 1,
  //         email: 1,
  //         password: 0,
  //         createdAt: 1,
  //         updatedAt: 1,
  //         role: 1,
  //       },
  //     };
  //     const users = await User.aggregate(stageOne);
  //     return res.json(users);
  //   } catch (err) {
  //     console.error(err);
  //   }
  // }
  async findUser(req, res) {
    try {
      const { id } = req.body;
      const user = await User.findById(id);
      return res.status(200).json(user);
    } catch (err) {
      console.error(err);
    }
  }
  async deleteUser(req, res) {
    try {
      const { id } = req.body;
      await User.deleteOne(id);
      return res.status(200).json("deleted user:");
    } catch (err) {
      console.error(err);
    }
  }
  async updateUser(req, res) {
    return res.json({
      user: "updateUser",
    });
  }
}
