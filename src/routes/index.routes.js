import productosRoutes from "./producto.routes.js";
import { Router } from "express";

const router = Router();
router.use('/productos', productosRoutes)

export default router;
