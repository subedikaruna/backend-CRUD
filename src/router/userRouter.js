import { Router } from "express";
import { createUserController, deleteUserController, readSpecificUserController, readUserController, updateUserController } from "../controller/userController.js";



let userRouter=Router()



// let m0=(value)=>{
// return(req,res,next)=>{
// console.log("i  am middleware 0")
// if(value){
//     next()
// }
// else{

// }
// }
// }
// let m1=(req,res,next)=>{
//     console.log("i am middleware 1")
// }
//without function call (use if you dont want to pass value)(req,res,next)=>{}
//with function call (use if you want to pass value)()=>{return(req,res,next)={}}

let isAuthorized=(value)=>{
    return(req,res,next)=>{

    if(value==="admin"||value==="superadmin"){
        next()
    }
    else{
    console.log("you cannot delete user")
    }
    }
}
    let deleteUser=(req,res,next)=>{
        console.log("user deleted successfully")
    }


userRouter
.route("/")
.post(createUserController)
// .post(m0(true),m1)
//.post(isAuthorized("custom"),deleteUser)

.get(readUserController)
userRouter
.route("/:id")//localhost:8000/65fc2b8c5e221037a5a5b4cc
.get(readSpecificUserController)
.patch(updateUserController)
.delete(deleteUserController)




export default userRouter