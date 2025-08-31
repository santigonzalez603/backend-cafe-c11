import { Router } from "express";
import { crearProducto, borrarProductoPorId, leerProductoPorId, leerProductos, test, editarProductoPorId } from "../controllers/productos.controllers";

const router = Router();
//get, past, put, delete solicitud, request
router.route('/test').get(test)
router.route('/').get(leerProductos).post(crearProducto)
router.route('/:id').get(leerProductoPorId).delete(borrarProductoPorId).put(editarProductoPorId)

export default router;