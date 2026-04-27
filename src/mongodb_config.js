import mongoose from "mongoose";

export async function connectDB() {
  try {
   await mongoose.connect(process.env.MONGODB_URL);
   console.log("connected to mongodb successfully")
  } catch (error) {
    console.log(error);
  }
}

