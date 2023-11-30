import express from "express";
import dotenv from "dotenv";
import mongoose from "mongoose";
import cors from "cors";

dotenv.config();
const app = express();
app.use(express.json());
const port = process.env.PORT || 8000;

app.use(
  cors({
    origin: `http://localhost:${port}`,
    method: ["GET", "POST", "DELETE", "PUT"],
    headers: ["Content-Type"],
  })
);

app.get("*", (req, res) => {
  res.send("Got Request!");
});

// app.listen(port, ()=>{
//     console.log(`Listening at port ${port}`);
// })

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
