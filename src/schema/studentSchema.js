import { Schema } from "mongoose";

let studentSchema = Schema({
  name: {
    type: String,
    trim:true,
    //lowercase:true,
    // uppercase:true,
    //default:"karuna",
   required:[true,"name field is required"],
   minLength:[3,"name must be at least 3 characters"],
  //  maxLength:[30,"name must be at most 30 characters"],
  //  validate:(value)=>{
  //    let isValidName=/^[a-zA-Z]+$/.test(value)
  //    if(isValidName){

  //    }
  //    else{
  //     let error=new Error("name must be in alphabet")
  //     throw error
  //    }
  //  }
  },
 
  age: {
      type: Number,
      trim:true,
      //lowercase:true,
      // uppercase:true,
      //default:"karuna",
     required:[true,"age field is required"],
    //  min:[3,"age must be less than 50"],
    //  max:[30,"age must more than 25"],
    //  validate:(value)=>{
    //    let isValidAge=/^(?:[1-9][0-9]?|1[01][0-9]|120)$ /.test(value)
    //    if(isValidAge){
  
    //    }
    //    else{
    //     let error=new Error("name must be in alphabet")
    //     throw error
    //    }
    //  }
    },
isMarried:{
  type:Boolean
},
});
export default studentSchema
