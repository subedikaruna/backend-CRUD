import { Router } from "express";
import { createProductController, deleteProductController, readProductController, readSpecificProductController, updateProductController } from "../controller/productController.js";

let productRouter=Router()
productRouter
.route("/")
.post(createProductController)
.get(readProductController)

productRouter
.route("/:id")//localhost:8000/65fc2b8c5e221037a5a5b4cc
.get(readSpecificProductController)
.patch(updateProductController)
.delete(deleteProductController)




export default productRouter