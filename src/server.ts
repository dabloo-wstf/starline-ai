import express from "express";
import "dotenv/config";
import cors from "cors";
import waitlistRoutes from "./routes/waitListRoutes";
import { connectDB } from "./db/db";

const app = express();
const port = process.env.PORT || 8080;

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use("/api/v1", waitlistRoutes);

app.get("/", (req, res) => {
  res.status(200).json({ message: "API is running ✅" });
});
app.listen(port, () => {
  console.log(`Server up and running on port ${port}`);
});
connectDB();
