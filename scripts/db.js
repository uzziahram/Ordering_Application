import { config } from "dotenv";
import { executeStockCrudOperations } from "./mongodbOperations.js"


export const connectionToApi = async () => {
    config();
    return await executeStockCrudOperations();
}

connectionToApi();




