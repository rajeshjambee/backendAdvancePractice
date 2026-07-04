import dotenv from "dotenv";
import connectDB from "./db/index.js";
import { app } from "./app.js";

dotenv.config({
  path: "./.env",
});

const port = process.env.PORT || 8000;

connectDB()
  .then(() => {
    app.listen(port, () => {
      console.log(`⚙️ Server is running at port : ${port}`);
    });
  })
  .catch((err) => {
    console.log("MONGO db connection failed !!! ", err);
  });

// import express from "express";

// const app = express();

// app.get("/", (req, res) => {
//   res.send("Hello World");
// });

// const PORT = 8000;

// app.listen(PORT, () => {
//   console.log(`Listening on ${PORT}`);
// });
