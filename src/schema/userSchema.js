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
let userSchema = Schema({
  // productImage: {
  //   type: String,
  //   required: [true, "productImage field is required"],
  // },
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
  address:{
    type:String,
    required:[true]
  }
//   password: {
//     type: String,
//     required:[true,"password field is required"],
//     // validate:(value)=>{
//     //   let isValidPassword=/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[!@#$%^&*()_+])[A-Za-z\d!@#$%^&*()_+]{8,}$/.test(value)
//     //   if(isValidPassword){
 
//     //   }
//     //   else{
//     //    let error=new Error("password must have at least one uppercase,one lowercase,one number,one special character,minimum 8 character and maximum 20 character")
//     //    throw error
//     //   }
//     // }
//   },
//   email:{
//     type:String,
//     unique:true,
//     required:[true,"email field is required"],
//     validate:(value)=>{
//       let isValidEmail=/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/.test(value)
//       if(isValidEmail){
 
//       }
//       else{
//        let error=new Error("email is not validated")
//        throw error
//       }
//     }
//   },
// phoneNumber:{
//   type:Number,
//   required:[true,"phoneNumber field is required"],
//   validate:(value)=>{
// let strNumber=String(value)
// let length=strNumber.length
// if(length!==10){
//   let error=new Error("phone num must be exact 10 character")
//   throw error
// }
//   }
// },
// roll:{
//   type:Number,
//   min:[10,"rollNumber must be at least 10"],
//   max:[100,"rollNumber must be at most 100"],
// },
// isMarried:{
//   type:Boolean
// },
// spouseName:{
//   type:String,
// },

// gender:{
//   type:String,
//   validate:(value)=>{
   
//     if(value==="male"||value==="female"||value==="other"){
//     }
// else{
//   let error=new Error("gender is not valid")
//   throw error

//     }
//       }
// },
// dob:{
//   type:Date,
// },
// location: {
//   country: {
//     type:String,
//   },
//   exactLocation: {
//     type:String,
//   },
// },
// favTeacher:[
//   {
//     type:String
//   }
// ],
// favSubject:[
//   {
//     bookName:{
//       type:String,
//     },
//     bookAuthor:{
//       type:String
//     }
//   }
// ]
});
export default userSchema
