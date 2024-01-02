export class UserController {
  async createUser(req, res) {
    const user = req.body
    
    return res.status(200).json({
      user
    });
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
