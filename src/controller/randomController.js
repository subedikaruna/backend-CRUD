import { Random } from "../schema/model.js";

export let createRandomController = async (req, res, next) => {
  let data = req.body; //{name:"".....}

  try {
    let result = await Random.create(data);
    res.status(200).json({
      success: true,
      message: "Random created successfully.",
      result: result,
    });
  } catch (error) {
    res.status(400).json({
      success: false,
      message: error.message,
    });
  }
};
export let readRandomController = async (req, res, next) => {
  //get random from database
  try {
    let result = await Random.find({});
    res.status(200).json({
      success: true,
      message: "random read successfully",
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

export let readSpecificRandomController = async (req, res, next) => {
  try {
    let result = await Random.findById(req.params.id);
    res.status(200).json({
      success: true,
      message: "random read successfully",
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
export let updateRandomController = async (req, res, next) => {
  try {
    let result = await Random.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
    });

    res.status(200).json({
      success: true,
      message: "random read successfully",
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
export let deleteRandomController = async (req, res, next) => {
  try {
    let result = await Random.findByIdAndDelete(req.params.id);

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
