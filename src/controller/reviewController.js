import { Review } from "../schema/model.js";

export let createReviewController = async (req, res, next) => {
  let data = req.body; //{name:"".....}

  try {
    let result = await Review.create(data);
    res.status(200).json({
      success: true,
      message: "Review created successfully.",
      result: result,
    });
  } catch (error) {
    res.status(400).json({
      success: false,
      message: error.message,
    });
  }
};
export let readReviewController = async (req, res, next) => {
  //get review from database
  try {
    let result = await Review.find({})
      .populate("productId", "name price")
      .populate("userId");
    res.status(200).json({
      success: true,
      message: "review read successfully",
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

export let readSpecificReviewController = async (req, res, next) => {
  try {
    let result = await Review.findById(req.params.id);
    res.status(200).json({
      success: true,
      message: "review read successfully",
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
export let updateReviewController = async (req, res, next) => {
  try {
    let result = await Review.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
    });

    res.status(200).json({
      success: true,
      message: "review read successfully",
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
export let deleteReviewController = async (req, res, next) => {
  try {
    let result = await Review.findByIdAndDelete(req.params.id);

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
