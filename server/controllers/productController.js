// import fs from "fs";
// import Product from "../models/Product.js";
// import { isValidObjectId } from "mongoose";
// const path = "D:\\downloadsD\\flower.json";
// const data = fs.readFileSync(path, "utf8");
// let sData = JSON.parse(data)


import mongoose from 'mongoose';
import Product from '../models/Product.js';

const displayAll = async (req, res) => {
    try {
        const products = await Product.find({}); // جلب جميع المنتجات
        
        if (!products || products.length === 0) {
            return res.status(404).json({ 
                success: false,
                message: "No products found" 
            });
        }

        return res.status(200).json({
            success: true,
            data: products
        });

    } catch (error) {
        console.error("Error fetching products:", error);
        res.status(500).json({
            success: false,
            message: "Server Error",
            error: error.message
        });
    }
};

const searchByName = async (req, res) => {
    try {
        const { name } = req.params;
        
        if (!name || name.trim() === '') {
            return res.status(400).json({ 
                success: false,
                msg: "Name Is Required" 
            });
        }

        // البحث غير حساس لحالة الأحرف
        const product = await Product.findOne({
            name: { $regex: name, $options: 'i' }
        });

        if (!product) {
            return res.status(404).json({ 
                success: false,
                message: "Product Not Found" 
            });
        }

        return res.status(200).json({
            success: true,
            product: product
        });

    } catch (error) {
        console.error("Search Error:", error);
        return res.status(500).json({
            success: false,
            error: error.message // ✅ تصحيح الخطأ هنا
        });
    }
};

const filterByCategory = async (req, res) => {
    try {
        const { category } = req.params;
        
        if (!category || category.trim() === '') {
            return res.status(400).json({ 
                success: false,
                msg: "Category is required" 
            });
        }

        // البحث غير حساس لحالة الأحرف
        const products = await Product.find({
            category: { $regex: new RegExp(`^${category}$`), $options: 'i' }
        });

        if (!products || products.length === 0) {
            return res.status(404).json({ 
                success: false,
                msg: "Category does not exist or has no products" 
            });
        }

        return res.status(200).json({
            success: true,
            count: products.length,
            products: products
        });

    } catch (error) {
        console.error("Filter Error:", error);
        return res.status(500).json({
            success: false,
            msg: "Server Error",
            error: error.message
        });
    }
};
const filterByColor=async (req,res)=>{
    try{
    let {color}=req.params
    if(!color) return res.status(400).json({msg:"Color Is Required"})
        const product= await Product.find({color:{ $regex: new RegExp(`^${color}$`), $options: 'i' }})
    if(!product||product.length===0) return res.status(400).json({msg:"No products found with color: " + color})
    return res.status(200).json({Products: product})
}catch(error){
    console.error("Filter By Color Failed",error);
    return res.status(500).json({success:false,
        error:error.message
    })
}
}

const sortByPrice = async (req, res) => {
    try {
        const products=await Product.find({})
            .select("-__v").sort({price:-1})

        if (!products || products.length === 0) {
            return res.status(404).json({
                success: false,
                message: "No products found"
            });
        }

        return res.status(200).json({
            success: true,
            products: products
        });

    } catch (error) {
        console.error("Sort Error:", error);
        return res.status(500).json({
            success: false,
            message: "Server Error",
            error: error.message
        });
    }
};

const addNewProduct = async (req, res) => {
    try {
        const {
            name,
            type,
            description,
            category,
            size,
            color,
            material,
            price,
            stock,
            images
        } = req.body;

        // التحقق من الحقول المطلوبة (بدون id)
        if (!name || !description || !category || !size || !color || !material || !price || !stock || !images) {
            return res.status(400).json({
                success: false,
                msg: "All fields are required"
            });
        }

        // إنشاء المنتج الجديد (بدون id)
        const newProduct = new Product({
            name,
            type,
            description,
            category,
            size,
            color,
            material,
            price,
            stock,
            images,
            ratings: []
        });

        const savedProduct = await newProduct.save();

        return res.status(201).json({
            success: true,
            msg: "Product added successfully",
            product: savedProduct // سيحتوي على _id تلقائي
        });

    } catch (error) {
        
        console.error("Add Product Error: ",error);
        return res.status(500).json({
            success:false,
            error:error.message
        })
        
    }
};

const updateProduct=async(req,res)=>{
    try{
    const {id}=req.params
    if(!id) return res.status(400).json({msg:"ID Is Required"})
    if(!mongoose.isValidObjectId(id))  return res.status(400).json({msg:"Invalid ID"})
      const updates=Object.keys(req.body)
    if(updates.length==0) return res.status(400).json({msg:"No Fields To Update!"})
        const product=await Product.findById(id)
    if(!product) return res.status(404).json({msg:"Product Dosen't Exist!"})
      updates.forEach(field=>{product[field]=req.body[field]})
     await product.save()
     return res.status(200).json({success:true,message:"Product: "+product.name+" Is Updated",data:product})
    }
    catch(error){
                if (error.name === 'ValidationError') {
            return res.status(400).json({
                success: false, // ✅ boolean
                msg: "Validation Error",
                errors: error.errors
            });
                }
        console.log("Error in Update",error)
        res.status(500).json({success:false,msg:"Server Error"})

    }
}

const deleteProduct=async(req,res)=>{
    try{
const{id}=req.params
if(!id) return res.status(400).json({msg:"ID Is Required",Deleted:"False"})
    const productToDelete= await Product.findById(id)
if(!productToDelete) return res.status(404).json({msg:"This Product Doesn't Exist"})
    await Product.deleteOne(productToDelete)
    return res.status(200).json({msg:"Product Is Deleted",Product:productToDelete})
    }catch(error){
        console.error("Delet Error",error);
        res.status(500).json({success:"False",msg:"Server Error"})
    }

}

export default {displayAll,searchByName,filterByCategory,filterByColor,sortByPrice,addNewProduct,updateProduct,deleteProduct}
