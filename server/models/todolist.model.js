import mongoose from "mongoose";
const todolistShema = new mongoose.Schema({
    value: String
});
const Item = mongoose.model("Item", todolistShema, "todolist");

export { Item };
