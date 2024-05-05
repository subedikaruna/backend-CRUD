import { Router } from "express";
import { createReviewController, deleteReviewController, readReviewController, readSpecificReviewController, updateReviewController } from "../controller/reviewController.js";



let reviewRouter=Router()
reviewRouter
.route("/")
.post(createReviewController)
.get(readReviewController)

reviewRouter
.route("/:id")//localhost:8000/65fc2b8c5e221037a5a5b4cc
.get(readSpecificReviewController)
.patch(updateReviewController)
.delete(deleteReviewController)




export default reviewRouter