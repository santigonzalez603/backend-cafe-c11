import { Router } from "express";
import { crearProducto, leerProductos, test } from "../controllers/productos.controllers";

const router = Router();
//get, past, put, delete
router.route('/test').get(test)
router.route('/').get(leerProductos).post(crearProducto)

export default router;