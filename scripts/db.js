import mongoose from "mongoose";

mongoose.connect('mongodb+srv://uzziahgenella:th6jBkfA4yXvk3Vs@cluster0.v7yuu.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0')
        .then(() => console.log('Connected to MongoDB'))
        .catch(err => console.error('Could not connect to MongoDB:', err));

export default mongoose;