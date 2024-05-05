import { Router } from "express";

import { createBookController, deleteBookController, readBookController, readSpecificBookController, updateBookController } from "../controller/bookController .js";

let bookRouter=Router()
bookRouter
.route("/")
.post(createBookController)
.get(readBookController)

bookRouter
.route("/:id")//localhost:8000/65fc2b8c5e221037a5a5b4cc
.get(readSpecificBookController)
.patch(updateBookController)
.delete(deleteBookController)




export default bookRouter