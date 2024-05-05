import { Book } from "../schema/model.js";

export let createBookController = async (req, res, next) => {
  let data = req.body; //{name:"".....}

  try {
    let result = await Book.create(data);
    res.status(200).json({
      success: true,
      message: "Book created successfully.",
      result: result,
    });
  } catch (error) {
    res.status(400).json({
      success: false,
      message: error.message,
    });
  }
};
export let readBookController = async (req, res, next) => {
  //get book from database
  try {
    let result = await Book.find({});
    res.status(200).json({
      success: true,
      message: "book read successfully",
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

export let readSpecificBookController = async (req, res, next) => {
  try {
    let result = await Book.findById(req.params.id);
    res.status(200).json({
      success: true,
      message: "book read successfully",
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
export let updateBookController = async (req, res, next) => {
  try {
    let result = await Book.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
    });

    res.status(200).json({
      success: true,
      message: "book read successfully",
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
export let deleteBookController = async (req, res, next) => {
  try {
    let result = await Book.findByIdAndDelete(req.params.id);

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
