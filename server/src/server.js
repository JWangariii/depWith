import express from "express";
import dotenv from "dotenv";
import connectDB from "./database/connect-db.js";

dotenv.configDotenv();
connectDB();

const app = express();

app.get("/", (req, res) => {
  console.log("request received");
  res.json({
    message: "Hello world from server running on Joyce's machine",
  });
});

app.listen(3005, () => {
  console.log("server is running on port 3005");
});
