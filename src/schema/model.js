import { model } from "mongoose";
import studentSchema from "./studentSchema.js";

import bookSchema from "./bookSchema.js";

import productSchema from "./productSchema.js";
import userSchema from "./userSchema.js";
import reviewSchema from "./reviewSchema.js";

import weatherSchema from "./weatherSchema.js";
import teacherSchema from "./teacherSchema.js";
import traineeSchema from "./traineeSchema.js";
import randomSchema from "./randomSchema.js";
import webUserSchema from "./webUserSchema.js";

export let Book=model("Book",bookSchema)
export let Trainee=model("Trainee",traineeSchema)

export let User=model("User",userSchema)

 export let Student=model("Student",studentSchema)
 
 export let Product=model("Product",productSchema)
 export let Random=model("Random",randomSchema)

 export let Teacher=model("Teacher",teacherSchema)

 export let Review=model("Review",reviewSchema)
  export let Weather=model("Weather",weatherSchema)
  export let WebUser=model("WebUser",webUserSchema)
/*
variable name must be same as model name
model name must be of first letter capital
model name must be singular
*/