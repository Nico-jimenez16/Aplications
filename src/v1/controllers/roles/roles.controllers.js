import Role from "../../models/role.js";
export class RolesController {
  async CreateRoles(req, res) {
    try {
      const { name } = req.body;

      const role = new Role({
        name,
      });

      const savedRole = await role.save();

      return res.status(200).json({
        _id: savedRole._id,
        name: savedRole.name
      });
    } catch (err) {
        console.error(err)
    }
  }
}
