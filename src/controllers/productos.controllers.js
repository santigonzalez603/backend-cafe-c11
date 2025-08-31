import Producto from "../models/producto";


export const test = (req, res)=>{
    res.status(200);
    res.stand('Primera prueba desde el cmd')
}

export const leerProductos = async (req, res)=>{
    try{
        //1- buscar todos los productos en la base de datos
        const listaProductos = await Producto.find()
        //2. enviar la respuesta al front
        res.status(200).json(listaProductos)
    }catch (error){
        console.error(error);
        res.status(500).json({mensaje: 'Error al leer los producto'})
    }
}
//agregar funcion para crear producto
export const crearProducto = async (req, res)=>{
    try{
        //1- recibir el objeto que tengo que agregar a la BD
        //2- validar los datos del objetos
        //3- guardar el objeto en la base de datos
        const nuevoProducto = new Producto(req.body);
        await nuevoProducto.save();
        //4- enviar respuesta
        res.status(201).json({mensaje: 'El producto fue creado exitosamente'})
    } catch (error){
        console.error(error)
        res.status(500).json({mensaje: 'Error al crear el producto'})
    }
}

//agregar funcion para editar producto