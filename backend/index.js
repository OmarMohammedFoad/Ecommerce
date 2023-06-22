import  express  from "express";
import mongoose from "mongoose";
import produdctrouter from "./routes/products.js"
const app = express();
 


const connectMongo = async ()=>
{
    try {
        await mongoose.connect('mongodb+srv://Omar:dVpszQEHVc8F2tTP@bookingapp.xttmsrx.mongodb.net/');
        console.log("Database is connected");
      } catch (error) {
        console.log(error);
      }
}

mongoose.connection.on("disconnected", () => {
  console.log("mongoDB disconnected!");
});

app.use(express.json())
/* middlewares */

app.use("/api/product",produdctrouter)


app.listen(8800,()=>
{
    connectMongo()
    console.log("the server is running in port 8800");
})