import { Router } from "express";
import { createRandomController, deleteRandomController, readRandomController, readSpecificRandomController, updateRandomController } from "../controller/randomController.js";
import Joi from "joi";
import validation from "../middleware/validation.js";
import randomValidation from "../validation/randomValidation.js";


let randomRouter=Router()






randomRouter
.route("/")
.post(validation(randomValidation), createRandomController)
.get(readRandomController)

randomRouter
.route("/:id")//localhost:8000/65fc2b8c5e221037a5a5b4cc
.get(readSpecificRandomController)
.patch(updateRandomController)
.delete(deleteRandomController)




export default randomRouter