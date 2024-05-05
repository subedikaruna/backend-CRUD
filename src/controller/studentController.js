import { Student } from "../schema/model.js";

export let createStudentController = async (req, res, next) => {
  let data = req.body; //{name:"".....}

  try {
    let result = await Student.create(data);
    res.status(200).json({
      success: true,
      message: "Student created successfully.",
      result: result,
    });
  } catch (error) {
    res.status(400).json({
      success: false,
      message: error.message,
    });
  }
};
export let readStudentController = async (req, res, next) => {
  //get product from database
  try {
    let result = await Student.find({});
    res.status(200).json({
      success: true,
      message: "student read successfully",
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

export let readSpecificStudentController = async (req, res, next) => {
  try {
    let result = await Student.findById(req.params.id);
    res.status(200).json({
      success: true,
      message: "student read successfully",
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
export let updateStudentController = async (req, res, next) => {
  try {
    let result = await Student.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
    });

    res.status(200).json({
      success: true,
      message: "student updated successfully",
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
export let deleteStudentController = async (req, res, next) => {
  try {
    let result = await Student.findByIdAndDelete(req.params.id);
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
