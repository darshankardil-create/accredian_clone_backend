import dotenv from "dotenv";
import cors from "cors";
import express from "express";
import { connectDB } from "./mongodb_config.js";
import router from "./routes.js";

dotenv.config();

connectDB();

const app = express();

app.use(express.json())

app.use(cors({ origin: ["http://localhost:3000"] }));

app.use("/", router);

const Port = process.env.PORT;

app.listen(Port, () => {
  console.log(`Server is live on port ${Port}`);
});
