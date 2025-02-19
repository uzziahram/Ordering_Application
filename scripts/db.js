import { config } from "dotenv";
import { executeStockCrudOperations } from "./mongodbOperations.js"

config();
await executeStockCrudOperations();




