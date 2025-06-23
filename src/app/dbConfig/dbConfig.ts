import mongoose from 'mongoose';

export default async function connectToDatabase() {
    try {
        await mongoose.connect(process.env.MONGODB_URI!);
        const connection = mongoose.connection;

        connection.once('open', () => {
            console.log("Database connection established successfully.");
        });
    }
    catch(error) {
        console.error("Database connection failed:", error);
    }
}