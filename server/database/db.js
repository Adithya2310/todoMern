import mongoose from "mongoose";
import dotenv from "dotenv";

dotenv.config();

const user=process.env.DB_USER;
const password=process.env.DB_PASS;



  

export const connection= ()=>{
    mongoose.connect(`mongodb+srv://${user}:${password}@cluster0.ejmaaoq.mongodb.net/todoDB`, { useNewUrlParser: true });
    mongoose.connection.on("connected",()=>console.log("sucessfully connected"));
    mongoose.connection.on("disconnected",()=>console.log("disconnected"));
    mongoose.connection.on("error",()=>console.log("error is detected ",error.message));
}

// item1.save();
