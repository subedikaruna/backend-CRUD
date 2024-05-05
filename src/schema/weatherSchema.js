import { Schema } from "mongoose";
/*
manipulation
trim
lowecase
upperacse
default

validation 
required

*****for string****
minLength
maxLength
****for number***
min 
max

*/
let weatherSchema = Schema({
    city: {
        type: String,
        required: true,
        validate:(value)=>{
          let isValidTemperature=/^[\p{L}\s.'-]+$/u.test(value)
          if(isValidTemperature){
     
          }
          else{
           let error=new Error("invalid city name")
           throw error
          }
        }
      },
      temperature: {
        type: String,
        trim:true,
        //lowercase:true,
        // uppercase:true,
        //default:"karuna",
       required:[true,"temperature field is required"],
     
       validate:(value)=>{
         let isValidTemperature=/^-?\d{1,3}(?:\.\d{1,2})?°(?:C|F)?$/i.test(value)
         if(isValidTemperature){
    
         }
         else{
          let error=new Error("invalid temperature ")
          throw error
         }
       }
      },
      description: {
        type: String,
        required: true
      },
      date: {
        type: Date,
        required:true,
        default: Date.now
   
      }
});
export default weatherSchema
