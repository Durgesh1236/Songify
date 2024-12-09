import mongoose from "mongoose";

const connectDB = async () => {
    mongoose.connection.on("connected", () => {
        console.log("DB connect");
        
    })
    await mongoose.connect(`${process.env.MONGODB_URI}/songify`)
}

export default connectDB;