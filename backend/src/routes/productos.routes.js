import {Router} from "express";
import { methodHTTP as productosController  } from "../controllers/productos.controllers.js";

const router = Router();

router.put("/:id", productosController.updateProductos);


export default router;