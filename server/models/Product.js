import mongoose from "mongoose";

const productSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
        unique: true
    },
    type:{
        type:String
    },
    description: {
        type: String,
        required: true
    },
    category: {
        type: String,
        required: true
    },
    size: {
        type: String,
        required: true    
    },
    color: {
        type: String,
        required: true    
    },
    material: {
        type: String,
        required: true    
    },
    price: {
        type: Number,
        required: true    
    },
    stock: {
        type: Number,
        required: true    
    },
    images: {
        type: [String], // ◀️ مصفوفة من روابط الصور
        required: true    
    },
    ratings: [{
        value: { 
            type: Number, 
            min: 1, 
            max: 5 
        },
        comment: String,
        userId: String,
        createdAt: { 
            type: Date, 
            default: Date.now 
        }
    }]
}, { 
    timestamps: true // ◀️ يضيف createdAt و updatedAt تلقائياً
});

export default mongoose.model("Product", productSchema);