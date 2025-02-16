import mongoose from "mongoose";

export async function connectToDB() {
    const connection = process.env.MONGODB_URI;

    if (!connection) {
        throw new Error("MONGODB_URI is not defined");
    }

    await mongoose
        .connect(connection)
        .then(() => {
            console.log("Connected to Database");
        })
        .catch((err) => {
            console.log(err);
        });
}