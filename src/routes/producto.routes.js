import { Router } from "express";

const router = Router();
router.use('/test', (req, res, next)=>{
    res.status(200);
    res.send('primera prueba desde el backend')
})

export default router;