import { add, deleteItem, getAll } from "../controllers/todolist.controller.js";
import express from "express";
const router = express.Router();

router.post("/", add);
router.get("/", getAll);
router.delete("/:id", deleteItem);

export default router;