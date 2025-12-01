import dontev from "dotenv";
import { Servidor } from "./servidor/server.js";
dontev.config();

console.log("puerto que usaremos:",process.env.API_PORT)
const servidor = new Servidor();
servidor.listen();