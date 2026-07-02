import connectionDB from "./db/index.js";
import dotenv from "dotenv";

dotenv.config({
  path: "./env",
});

const port = process.env.PORT || 8000;

connectionDB()
  .then(() => {
    app.listen(port, () => {
      console.log(`Server is running at port ${port}`);
    });
  })
  .catch((error) => {
    console.log(`Error: ${error}`);
  });
