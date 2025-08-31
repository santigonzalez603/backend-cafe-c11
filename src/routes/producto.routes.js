import { Router } from "express";
import { crearProducto, leerProductoPorId, leerProductos, test } from "../controllers/productos.controllers";

const router = Router();
//get, past, put, delete
router.route('/test').get(test)
router.route('/').get(leerProductos).post(crearProducto)
router.route('/:id').get(leerProductoPorId)

export default router;