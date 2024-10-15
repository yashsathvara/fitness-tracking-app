import express from "express";
import * as dotenv from "dotenv";
import cors from "cors";
import UserRoutes from "./routes/User.js";
import connectDB from "./config/DB.js";

dotenv.config(); // Ensure this is at the top
const app = express();

app.use(cors());
app.use(express.json({ limit: "50mb" }));
app.use(express.urlencoded({ extended: true }));

app.use("/api/user/", UserRoutes);

app.use((err, req, res, next) => {
  const status = err.status || 500;
  const message = err.message || "Something went wrong";
  return res.status(status).json({
    success: false,
    status,
    message,
  });
});

app.get("/", async (req, res) => {
  res.status(200).json({
    message: "Hello developers from GFG",
  });
});

connectDB();
app.listen(process.env.PORT || 8080, () => console.log(`Server started on PORT: ${process.env.PORT || 8080}`));
