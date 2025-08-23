import mongoose, {Schema} from "mongoose";

const productoSchema = new Schema({
    nombreProducto: {
        type: String,
        required: true,
        minLenght: 2,
        maxLenght: 100,
        unique: true
    },
    precio: {
        type: Number,
        required: true,
        enum: ["Infusiones", "Batidos", "Dulce", "Salado"]
    },
    imagen: {
        type: String,
        required: true,
        validate: {
            validator: (valor)=>{
                return /^(https?:\/\/)?([\da-z\.-]+)\.([a-z\.]{2,6})([\/\w \.-]*)*\/?(\.(jpg|jpeg|png|webp))$/.test(valor);
            }
        }
    },
     descripcion_breve: {
        type: String,
        required: true,
        minLenght: 5,
        maxLenght: 250,    
    },
     descripcion_amplia: {
        type: String,
        required: true,
        minLenght: 10,
        maxLenght: 500,
        unique: true
    },
});

const Producto = mongoose.model("producto", productoSchema);

export default Producto;