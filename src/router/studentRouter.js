import { Router } from "express";
import { Student } from "../schema/model.js";
import { createStudentController, deleteStudentController, readSpecificStudentController, readStudentController, updateStudentController } from "../controller/studentController.js";

let studentRouter=Router()
studentRouter
.route("/")
.post(createStudentController)
.get(readStudentController)

studentRouter
.route("/:id")//localhost:8000/65fc2b8c5e221037a5a5b4cc
.get(readSpecificStudentController)
.patch(updateStudentController)
.delete(deleteStudentController)




export default studentRouter