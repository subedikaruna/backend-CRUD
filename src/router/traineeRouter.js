import { Router } from "express";
import { createTraineeController, deleteTraineeController, readSpecificTraineeController, readTraineeController, updateTraineeController } from "../controller/traineeController.js";


let traineeRouter=Router()
traineeRouter
.route("/")
.post(createTraineeController)
.get(readTraineeController)

traineeRouter
.route("/:id")//localhost:8000/65fc2b8c5e221037a5a5b4cc
.get(readSpecificTraineeController)
.patch(updateTraineeController)
.delete(deleteTraineeController)




export default traineeRouter