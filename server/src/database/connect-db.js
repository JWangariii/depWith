import mongoose from "mongoose";

const connectDataBase = async () => {
  try {
    await mongoose.connect(process.env.MONGODB_URI);
    console.log("database connected successfully");
  } catch (error) {
    console.error("database connection error", error);
  }
};

export default connectDataBase;
