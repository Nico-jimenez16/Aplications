import { Router } from "express";
import { usersRoutes } from "./users/users.js";
export class AppRoutesV1 {
  static get routes() {
    const router = Router();

    router.use("/users", usersRoutes);

    return router;
  }
}
