import express from "express";
import "dotenv/config";
import authRouter from "./routes/auth.js";
import { connectDb } from "./config/db.js";

const PORT = process.env.PORT || 3000;

const app = express();

// Middlewares
app.use(express.json());

// Routes
app.get("/", (req, res) => {
  res.send("Hello world");
});
app.use("/api/auth", authRouter);

// Run server
connectDb()
  .then(() => {
    app.listen(PORT, () => {
      console.log(`Server is running on port ${PORT}`);
    });
  })
  .catch((err) => console.log(err));
