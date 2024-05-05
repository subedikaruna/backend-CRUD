import { Router } from "express";
import { createWeatherController, deleteWeatherController, readSpecificWeatherController, readWeatherController, updateWeatherController } from "../controller/weatherController.js";




let weatherRouter=Router()
weatherRouter
.route("/")
.post(createWeatherController)
.get(readWeatherController)
weatherRouter
.route("/:id")//localhost:8000/65fc2b8c5e221037a5a5b4cc
.get(readSpecificWeatherController)
.patch(updateWeatherController)
.delete(deleteWeatherController)




export default weatherRouter