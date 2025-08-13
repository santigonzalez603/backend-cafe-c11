export const test = (req, res)=>{
    res.status(200);
    res.stand('Primera prueba desde el cmd')
}

export const leerProductos = (req, res)=>{

}
//agregar funcion para crear producto
export const crearProducto =(req, res)=>{
    try{
        //1- recibir el objeto que tengo que agregar a la BD
        console.log(req.body)
        //2- validar los datos del objetos
        //3- guardar el objeto en la base de datos
        //4- enviar respuesta
    } catch (error){
        console.error(error)
    }
}

//agregar funcion para editar producto