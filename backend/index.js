import  express  from "express";
import mongoose from "mongoose";
const app = express();


const connectMongo = async ()=>
{
    try {
        await mongoose.connect('mongodb+srv://Omar:dVpszQEHVc8F2tTP@bookingapp.xttmsrx.mongodb.net/');
      } catch (error) {
        console.log(error);
      }
}



app.listen(8800,()=>
{
    connectMongo()
    console.log("the server is running in port 8800");
})