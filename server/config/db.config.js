import * as dotenv from 'dotenv'; // see https://github.com/motdotla/dotenv#how-do-i-use-dotenv-with-import
dotenv.config();
const url = `mongodb+srv://dangvhh:${process.env.PASSWORD_DB}@cluster0.etuebed.mongodb.net/Todolist-MERN-DB`;
export { url };