import { Schema } from "mongoose";

let bookSchema = Schema({
  name: {
    type: String,
    trim:true,
    //lowercase:true,
    // uppercase:true,
    //default:"karuna",
   required:[true,"name field is required"],
   minLength:[3,"name must be at least 3 characters"],
   maxLength:[30,"name must be at most 30 characters"],
   validate:(value)=>{
     let isValidName=/^[a-zA-Z]+$/.test(value)
     if(isValidName){

     }
     else{
      let error=new Error("name must be in alphabet")
      throw error
     }
   }
  },
  author: {
    type: String,
    trim:true,
    //lowercase:true,
    // uppercase:true,
    //default:"karuna",
   required:[true,"author field is required"],
   minLength:[3,"author must be at least 3 characters"],
   maxLength:[30,"author must be at most 30 characters"],
   validate:(value)=>{
     let isValidName=/^[a-zA-Z]+$/.test(value)
     if(isValidName){

     }
     else{
      let error=new Error("name must be in alphabet")
      throw error
     }
   }
  },
  price:{
    type:Number,
    required:[true,"price field is required"],
    validate:(value)=>{
      let isValidPrice=/^\d+(\.\d{1,2})?$/.test(value)
      if(isValidPrice){
 
      }
      else{
       let error=new Error("name must be in alphabet")
       throw error
      }
    }
  },
  
  
  
    isAvailable: {
      type: Boolean,
      required: [true, "isAvailable field is required"],
    },
  });
  export default bookSchema