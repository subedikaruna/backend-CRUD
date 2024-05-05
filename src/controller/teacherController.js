import { Teacher } from "../schema/model.js"


export let createTeacherController=async(req,res,next)=>{
    let data=req.body//{name:"".....}
    
    try{
     let result=await Teacher.create(data)
     res.status(200).json({
        success:true,
        message:"Teacher created successfully.",
        result:result
    })
}
catch(error){
    res.status(400).json({
        success:false,
        message:error.message,
       
    })
}
}
export let readTeacherController=async(req,res,next)=>{
    //get teacher from database
    try {
        let result=await Teacher.find({});
        res.status(200).json({
          success:true,
          message:"teacher read successfully",
          result:result
        })
    } catch (error) {
        res.status(400).json({
            success:false,
            message:error.message,
           
        })
    }
 
  //give data to postman

}

export let readSpecificTeacherController=async(req,res,next)=>{
  
    try {
        let result=await Teacher.findById(req.params.id);
        res.status(200).json({
          success:true,
          message:"teacher read successfully",
          result:result
        })
    } catch (error) {
        res.status(400).json({
            success:false,
            message:error.message,
           
        })
    }
 
  //give data to postman

}
export let updateTeacherController=async(req,res,next)=>{
  
    try {
        let result=await Teacher.findByIdAndUpdate(req.params.id,req.body, {new:true});
      
        res.status(200).json({
          success:true,
          message:"teacher read successfully",
          result:result,
         
        })
    } catch (error) {
        res.status(400).json({
            success:false,
            message:error.message,
           
        })
    }
 
  //give data to postman

}
export let deleteTeacherController=async(req,res,next)=>{
  
    try {
        let result=await Teacher.findByIdAndDelete(req.params.id);
        res.status(200).json({
          success:true,
          message:"deleted successfully",
          result:result
        })
    } catch (error) {
        res.status(400).json({
            success:false,
            message:error.message,
           
        })
    }
 
  //give data to postman

}