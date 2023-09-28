import express from "express";
import dotenv from "dotenv";
import dbConnection from "./config/dbConnect.js";
import productRoute from "./routes/product.route.js";

dotenv.config();

const app = express();
app.use(express.json());

dbConnection();

const PORT = process.env.PORT;

app.use("/api/v1/", productRoute);

app.listen(PORT, () => {
  console.log(`Server running on port: ${PORT}`);
});
