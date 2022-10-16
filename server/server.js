import express from "express";
import cors from "cors";
import bodyParser from "body-parser";
import { db } from "./models/db.js";
const app = express();
const PORT = process.env.PORT || 3001;

app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));


main().catch(err => console.log(err));

async function main() {
  await db.mongoose.connect(db.url);
  console.log("MongoDB Connected");
}

import todolistRouter from "./routes/todolist.routes.js";

app.use("/api/todolist", todolistRouter);


app.listen(PORT, function(){
    console.log(`Server is running on port ${PORT}.`);
});