import express from "express";
import dotenv from "dotenv";
import mongoose from "mongoose";
import cors from "cors";
import restaurantRouter from "./api/restaurants.route.js"

dotenv.config();
const port = process.env.PORT || 8000;


const app = express();
app.use(express.json());
app.use(
  cors({
    origin: `http://localhost:${port}`,
    method: ["GET", "POST", "DELETE", "PUT"],
    headers: ["Content-Type"],
  })
);

// base URL
app.use("/restaurants", restaurantRouter)
app.use("*", (req, res) => (res.status(404).json({error: "Route does not exist"})));

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
