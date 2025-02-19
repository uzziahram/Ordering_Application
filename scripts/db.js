import { config } from "dotenv";
import { executeStockCrudOperations } from "./connectedToMongoDB.js";

config();
console.log(process.env.DB_URI);

