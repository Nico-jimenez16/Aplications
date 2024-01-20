import mongoose from "mongoose";
import {PERMISSIONS} from "./types.js";

const roleSchema = new mongoose.Schema({
  name: {
    required: true,
    type: String,
  },
  description: String,
  permissions: {
    required: true,
    type: [String],
    enum: PERMISSIONS,
  },
});

export default mongoose.model("Role", roleSchema);
