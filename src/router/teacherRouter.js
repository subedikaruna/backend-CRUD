import { Router } from "express";
import { createTeacherController, deleteTeacherController, readSpecificTeacherController, readTeacherController, updateTeacherController } from "../controller/teacherController.js";


let teacherRouter=Router()
teacherRouter
.route("/")
.post(createTeacherController)
.get(readTeacherController)

teacherRouter
.route("/:id")//localhost:8000/65fc2b8c5e221037a5a5b4cc
.get(readSpecificTeacherController)
.patch(updateTeacherController)
.delete(deleteTeacherController)




export default teacherRouter