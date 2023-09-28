import express from "express";
import dotenv from "dotenv";
import dbConnection from "./config/dbConnect.js";

dotenv.config();

const app = express();
app.use(express.json());

const PORT = process.env.PORT;

app.listen(PORT, () => {
  console.log(`Server running on port: ${PORT}`);
});

dbConnection();
