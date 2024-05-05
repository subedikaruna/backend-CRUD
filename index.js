import express, { json } from "express";
process.env.NODE_TLS_REJECT_UNAUTHORIZED = "0";

import bikeRouter from "./src/router/bikeRouter.js";

import connectToMongoDb from "./src/connectdb/connectToMongodb.js";
import studentRouter from "./src/router/studentRouter.js";
import bookRouter from "./src/router/bookRouter.js";
import productRouter from "./src/router/productRouter.js";
import userRouter from "./src/router/userRouter.js";
import reviewRouter from "./src/router/reviewRouter.js";
import weatherRouter from "./src/router/weatherRouter.js";
import teacherRouter from "./src/router/teacherRouter.js";
import traineeRouter from "./src/router/traineeRouter.js";
import randomRouter from "./src/router/randomRouter.js";

import webUserRouter from "./src/router/webUserRouter.js";
import fileRouter from "./src/router/fileRouter.js";
// import { config } from "dotenv";
// import webUserRouter from "./src/router/webUserRouter.js";
import  cors  from "cors";


//make express application
let expressApp = express();
expressApp.use(express.static("./public")); 
// localhost:8000/download.jpg

expressApp.use(cors())
expressApp.use(json()); //this code makes our system to take json data always place express.use(json())just below expressApp

// config()
// console.log(process.env.FULL_NAME)
// console.log(process.env.AGE)
// console.log(process.env.IS_MARRIED)
// console.log(typeof(process.env.IS_MARRIED))

connectToMongoDb()


// expressApp.use(
//   (req,res,next)=>{
// console.log("i am application middleware 1")
// next()
// },
// (req,res,next)=>{
//   console.log("i am application middleware 2")
//   next()
//   }
// )

expressApp.use("/bikes", bikeRouter); //localhost:8000/bikes

expressApp.use("/books", bookRouter); //localhost:8000/books
expressApp.use("/students", studentRouter); 
expressApp.use("/products", productRouter);
expressApp.use("/users", userRouter);
expressApp.use("/reviews", reviewRouter);
expressApp.use("/weathers",weatherRouter);
expressApp.use("/teachers",teacherRouter);
expressApp.use("/teachers",teacherRouter);
expressApp.use("/trainees",traineeRouter);
expressApp.use("/randoms",randomRouter);
expressApp.use("/files",fileRouter );
 expressApp.use("/web-users",webUserRouter);




//attach port to that
expressApp.listen(8000, () => {
  console.log("express application is listening at port 8000");
});
