import mongoose from "mongoose";
const DB_URI = `mongodb+srv://${process.env.DB_USERNAME}:${process.env.DB_PASSWORD}@cluster0.cabgh.mongodb.net/${process.env.DB_NAME}?retryWrites=true&w=majority`;

const connectDb = async () => {
  try {
    return await mongoose.connect(DB_URI);
  } catch (error) {
    console.log(error);
  }
};
export { connectDb };
