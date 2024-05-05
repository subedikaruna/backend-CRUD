// import { User } from "../schema/model.js"

import { User } from "../schema/model.js";
import bcrypt from "bcrypt";
import { sendEmail } from "../utils/sendMail.js";
export let createUserController = async (req, res, next) => {
  let data = req.body; //{name:"".....}
  let password = data.password;
  let hashPassword = await bcrypt.hash(password, 10);
  data.password = hashPassword;

  try {
    let result = await User.create(data);
    await sendEmail({
      from: "Unique hello<uniquehk@gmail.com>",
      to: ["karyanna7@gmail.com", "confessionthoughts8@gmail.com"],
      // to: [req.body.email],
      subject: "Registration",
      html: `
        You have successfully registered.
        `,
    });

    res.status(200).json({
      success: true,
      message: "User created successfully.",
      result: result,
    });
  } catch (error) {
    res.status(400).json({
      success: false,
      message: error.message,
    });
  }
};
export let readUserController = async (req, res, next) => {
  /*
searching=>find,select
sort=>
pagination=>limit and skip


*/

  //get user from database
  try {
    //let result=await User.find({})
    //find output are in[{},{},{}] array of object

    // let result=await User.find({name:"karuna"});
    // let result=await User.find({age:25});
    // let result=await User.find({age:{$gte:25}});
    // let result=await User.find({age:{$lte:25}});
    // let result=await User.find({age:{$lt:25}});
    //let result=await User.find({age:{$gt:25}});
    // let result=await User.find({age:{$ne:"nitan"}});
    //let result=await User.find({age:{$gte:15,$lte:17}});
    // let result=await User.find({name:{$in:["nitan","ram","hari"]}});//name includes nitan,ram,hari
    //let result=await User.find({name:{$nin:["nitan","ram","hari"]}});//name doesnot includes nitan,ram,hari
    //let result=await User.find({name:/nitan/});//name that includes nitan
    //  let result=await User.find({name:/nitan/i});//name that includes nitan whether any letter is capital or small
    //let result=await User.find({name:/^nitan/});//name that includes ni which starts with ni
    //let result=await User.find({name:/nitan$/});//name that includes ni which ends with ni

    //let result=await User.find({}).sort("name")//sort by name
    //let result=await User.find({}).sort("name age")//sort by name and after that age
    //let result=await User.find({}).sort("-name")//sort by name in descending order
    //let result=await User.find({}).sort("-name age")//sort by name in descending and after that age in ascending
    //let result=await User.find({}).sort("-name -age")//sort by name in descending and after that age in descending
    //let result=await User.find({}).select("name -_id")//displays name field and _id shows itself in exception
    //let result=await User.find({}).select("name ")//displays name field and excludes _id
    //let result=await User.find({}).select("name email -_id")//displays name,email field and excludes _id //valid
    //let result=await User.find({}).select("-name -email password")//invalid cause we cannot use negative positive in same except for -_id
    //skip
    //let result=await User.find({}).skip(2)//it skips first n 9no. of values we can use both no.or string example skip("2")
    //let result=await User.find({}).limit(2)//it shows only first n no of values
    //let result=await User.find({}).limit("5").skip("2")//find({}.skip("2").limit("5"))
    //let result=await User.find({name:/n/i}).limit("5").skip("1")//find({name with n with capital small both}.skip("2").limit("5"))
    //whatever the order mongoose follow following sequencee
    //find,sort,select,skip,limit
    //find has control over object whereas select has control over object property
    res.status(200).json({
      success: true,
      message: "user read successfully",
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

export let readSpecificUserController = async (req, res, next) => {
  try {
    let result = await User.findById(req.params.id);
    res.status(200).json({
      success: true,
      message: "user read successfully",
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
export let updateUserController = async (req, res, next) => {
  try {
    let result = await User.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
    });

    res.status(200).json({
      success: true,
      message: "user read successfully",
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
export let deleteUserController = async (req, res, next) => {
  try {
    let result = await User.findByIdAndDelete(req.params.id);

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
