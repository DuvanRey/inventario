import express from "express";
import cors from "cors"
import categoriaRoutes from "./routes/categorias.routes.js"

const app = express();
app.set("port", 5000)  /*setear el puerto*/

app.use(cors());

app.use("/api/categorias", categoriaRoutes)
export default app; 
