import express from "express";
import dotenv from "dotenv";
import mongoose from "mongoose";
import cors from "cors";
import restaurantRouter from "./api/restaurants.route.js"

dotenv.config();
const port = process.env.PORT;


const app = express();
app.use(express.json());
app.use(
  cors({
    origin: "http://localhost:3000",
    method: ["GET", "POST", "DELETE", "PUT"]
  })
);

// base URL
app.use("/restaurants", restaurantRouter)
app.use("*", (req, res) => (res.status(404).json({ error: "Route does not exist" })));
console.log("index.js running");
mongoose
  .connect(process.env.DBURL)
  .then(() => {
    //Only listen to port when database is connected.
    console.log(`Connected to MongoDB`);
    app.listen(port, () => {
      console.log(`App is listening to port: ${port}`);
    });
  })
  .catch((error) => {
    console.log(error);
  });
