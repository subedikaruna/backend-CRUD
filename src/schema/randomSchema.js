import { Schema } from "mongoose";

let randomSchema = Schema({
  name: {
    type: String,
    //required: [true, "name field is required"],
  },
 age: {
    type: Number,
    //required: [true, "age field is required"],
  },

  password: {
    type: String,
    //required: [true, "password field is required"],
  },
  phoneNumber: {
    type: Number,
    //required: [true, "phoneNumber field is required"],
  },
  roll: {
    type: Number,
    //required: [true, "roll field is required"],
  },
  age: {
    type: Number,
    //required: [true, "age field is required"],
  },
  spouseName: {
    type: String,
    //required: [true, "spouseName field is required"],
  },
  email: {
    type: String,
    //required: [true, "email field is required"],
  },
  gender: {
    type: String,
    //required: [true, "gender field is required"],
  },
  dob: {
    type: Date,
    //required: [true, "dob field is required"],
  },
  location: {
    country: {
      type:String,
    },
    exactLocation: {
      type:String,
    },
  },
  favTeacher:[
    {
      type:String
    }
  ],
  favSubject:[
    {
      bookName:{
        type:String,
      },
      bookAuthor:{
        type:String
      }
    }
  ]
});
export default randomSchema
