import { Router } from "express";

let bikeRouter=Router()

// let createBike=(req,res,next)=>{
// console.log("bike created successfully")
// }

let createBike=(a,b)=>{
return (req,res,next)=>{
console.log("bike created successfully")
}

}

bikeRouter
.route("/")//here / is localhost:8000/bikes as in index.js
// .post((req,res,next)=>{
//     console.log(req.body)//it takes data from postman
//     res.json("bike post")
// })
// .post(createBike)
.post(createBike(1,2))
.get((req,res,next)=>{
    console.log(req.query)
    /*
name="karuna"
age=25"
query is always on string
    */
    res.json("bike get")
})

.patch((req,res,next)=>{
    res.json("bike patch")
})
.delete((req,res,next)=>{
    res.json("a")
    console.log("i am middleware 1")
    let erro=new Error("i am error")
    next(erro)
    },
    (req,res,next)=>{
        console.log("i am middleware 2")
        let erro=new Error("i am error 2")
        next()
    },
    (err,req,res,next)=>{
        console.log("i am middleware 3")
        console.log(err.message)
    }
)

bikeRouter
.route("/:id")//localhost:8000/bikes/id
.post((req,res,next)=>{
    console.log(req.params)
    /*
    req.params gives dynamuc route parameter in the form of object
id:1234
    */
    res.json("learn dynamic route params")
})
.get((req,res,next)=>{
    res.json("get dynamic route params")
})
bikeRouter
.route("/a/:id1/name/:id2")//localhost:8000/bikes/a/any/name/any
.post((req,res,next)=>{
    console.log(req.params)
    //id1:1234
    //id2:234
    res.json("hello")
})



//here a and name are static route params
//and id1 and id2 are dynamic route params
export default bikeRouter