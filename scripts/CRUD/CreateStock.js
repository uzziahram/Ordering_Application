

export const createStock = async (collection) => {
    const newStock = {
        name: "Fried Rice",
        category: "meal",
        price: "1.99"
    };
    await collection.insertOne(newStock);
} 

createStock();