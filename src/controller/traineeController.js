import { Trainee } from "../schema/model.js";

export let createTraineeController = async (req, res, next) => {
  let data = req.body; //{name:"".....}

  try {
    let result = await Trainee.create(data);
    res.status(200).json({
      success: true,
      message: "Trainee created successfully.",
      result: result,
    });
  } catch (error) {
    res.status(400).json({
      success: false,
      message: error.message,
    });
  }
};
export let readTraineeController = async (req, res, next) => {
  //get trainee from database
  try {
    let result = await Trainee.find({});
    res.status(200).json({
      success: true,
      message: "trainee read successfully",
      result: result,
    });
  } catch (error) {
    res.status(400).json({
      success: false,
      message: error.message,
    });
  }

  //give data to postman
};

export let readSpecificTraineeController = async (req, res, next) => {
  try {
    let result = await Trainee.findById(req.params.id);
    res.status(200).json({
      success: true,
      message: "trainee read successfully",
      result: result,
    });
  } catch (error) {
    res.status(400).json({
      success: false,
      message: error.message,
    });
  }

  //give data to postman
};
export let updateTraineeController = async (req, res, next) => {
  try {
    let result = await Trainee.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
    });

    res.status(200).json({
      success: true,
      message: "trainee read successfully",
      result: result,
    });
  } catch (error) {
    res.status(400).json({
      success: false,
      message: error.message,
    });
  }

  //give data to postman
};
export let deleteTraineeController = async (req, res, next) => {
  try {
    let result = await Trainee.findByIdAndDelete(req.params.id);

    res.status(200).json({
      success: true,
      message: "deleted successfully",
      result: result,
    });
  } catch (error) {
    res.status(400).json({
      success: false,
      message: error.message,
    });
  }

  //give data to postman
};
