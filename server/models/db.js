import { url } from "../config/db.config.js";
import mongoose from "mongoose";
import { Item } from "./todolist.model.js";
mongoose.Promise = global.Promise;

const db = {
  "mongoose": mongoose,
  "url": url,
  "items": Item
};

export { db };
