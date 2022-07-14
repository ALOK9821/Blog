import express from 'express';
import dotenv from 'dotenv';
import mongoose from 'mongoose';
import router from './routes/user-routes';


const app = express();
app.use("/api/user",router);
app.use(express.json());
dotenv.config();
mongoose
  .connect(
    process.env.MONGO
  )
  .then(() => app.listen(5000))
  .then(() =>
    console.log("Connected TO Database and Listening TO Localhost 5000")
  )
  .catch((err) => console.log(err));