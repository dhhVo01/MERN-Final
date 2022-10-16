import axios from "axios";

export default axios.create({
  baseURL: "https://pacific-badlands-00579.herokuapp.com/api",
  headers: {'X-Requested-With': 'XMLHttpRequest'}
});