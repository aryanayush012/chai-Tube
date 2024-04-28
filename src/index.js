import dotenv from "dotenv";
import connectDB from "./db/index.js";

dotenv.config({ path: "./env" });

connectDB()
  .then(() => {
    app.listen(process.env.PORT || 3000, () => {
      console.log(`app is listening on port ${process.env.PORT}`);
    });
  })
  .catch((error) => {
    console.log("Mongo DB Cnnection Failed");
  });
