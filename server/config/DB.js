import mongoose from "mongoose";

const connectDB = async () => {
    try {
        await mongoose.connect(process.env.MONGODB_URL);
        console.log("DB Connection Success");
    } catch (error) {
        console.log("DB Connection Loss");
        console.log(error);
    }
};

export default connectDB;
