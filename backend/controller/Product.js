import Product from "../models/product.js"

export const AddProduct = async(req,res)=>
{
    const newProduct = new Product(req.body);
    try 
    {
       const  saveproduct = await newProduct.save();
       log
        res.status(200).json(saveproduct)   
    } catch (error) {
        console.log(error);
    }
}