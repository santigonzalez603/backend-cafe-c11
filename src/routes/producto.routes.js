import { Router } from "express";
import { test } from "../controllers/productos.controllers";

const router = Router();
//get, past, put, delete
router.route('/test').get(test)

export default router;