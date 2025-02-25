import mongoose from 'mongoose';


const productsSchema = mongoose.Schema({
    id: { type: Number, require: true, unique: true },
    nombre: { type: String, require: true },
    precio: { type: Number, require: true },
    stock: { type: Number, require: true },
    detalles: { type: String, require: true },
    category: { type: String, require: true },
    img: { type: String, require: true }
})

const Product = mongoose.model('Product', productsSchema);

export default Product;