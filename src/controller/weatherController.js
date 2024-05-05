import { Weather } from "../schema/model.js";

export let createWeatherController = async (req, res, next) => {
  let data = req.body; // { city: "", temperature: "", description: "" }

  try {
    let result = await Weather.create(data);
    res.status(200).json({
      success: true,
      message: "Weather data created successfully.",
      result: result,
    });
  } catch (error) {
    res.status(400).json({
      success: false,
      message: error.message,
    });
  }
};

export let readWeatherController = async (req, res, next) => {
  // Get weather data from the database
  try {
    let result = await Weather.find({});
    res.status(200).json({
      success: true,
      message: "Weather data read successfully",
      result: result,
    });
  } catch (error) {
    res.status(400).json({
      success: false,
      message: error.message,
    });
  }
};

export let readSpecificWeatherController = async (req, res, next) => {
  try {
    let result = await Weather.findById(req.params.id);
    res.status(200).json({
      success: true,
      message: "Weather data read successfully",
      result: result,
    });
  } catch (error) {
    res.status(400).json({
      success: false,
      message: error.message,
    });
  }
};

export let updateWeatherController = async (req, res, next) => {
  try {
    let result = await Weather.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
    });
    res.status(200).json({
      success: true,
      message: "Weather data updated successfully",
      result: result,
    });
  } catch (error) {
    res.status(400).json({
      success: false,
      message: error.message,
    });
  }
};

export let deleteWeatherController = async (req, res, next) => {
  try {
    let result = await Weather.findByIdAndDelete(req.params.id);
    res.status(200).json({
      success: true,
      message: "Weather data deleted successfully",
      result: result,
    });
  } catch (error) {
    res.status(400).json({
      success: false,
      message: error.message,
    });
  }
};
