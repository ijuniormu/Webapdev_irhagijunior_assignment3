import mongoose from "mongoose";

const connectDB = async (uri) => {
  try {
    await mongoose.connect(uri, { dbName: "Skeleton" });
    console.log("✅ MongoDB connected");
  } catch (err) {
    console.error("❌ MongoDB connection error:", err.message);
    process.exit(1);
  }
};

export default connectDB;
