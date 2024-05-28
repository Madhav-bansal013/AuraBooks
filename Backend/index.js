import express from "express";
import dotenv from "dotenv";
import mongoose from "mongoose";
import bookRoute from "./routes/Aurabookroute.js"
import userRoute from "./routes/Userroute.js"
import cors from "cors" //it is used bec backend and frontend are working on different ports so to allow backend data to show on frontend


dotenv.config();
//new js can have import syntax instead of require type="module" we have to add in package.json
const app = express();

const PORT = process.env.PORT || 3000;
const URI = process.env.MONG_URI;

app.use(cors()) //middleware
app.use(express.json()) //parse data into json that we are sending from body

app.use("/book" , bookRoute)
app.use("/user" , userRoute)

//connect to mongo

mongoose.connect(URI)
.then(()=>{
    //listen for requests only when db is connected
    app.listen(process.env.PORT,()=>{ //process is a global obj available in node
        console.log(`Connected to db & listening on port ${PORT}!!`)
    })
    
})
.catch((err)=>{
    console.log(err)
})