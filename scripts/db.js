import { config } from "dotenv";
import { executeStockCrudOperations } from "./connectionToMongoDB.js"

config();
console.log(process.env.DB_URI);

