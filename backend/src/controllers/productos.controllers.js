import getConnection from "./../db/database.js"
const updateProductos = async(req, res) =>{
    try {
        const {id} = req.params
        const {ProductoNombre, PrecioUnitario} = req.body;
        const products = {ProductoNombre, PrecioUnitario}
        const connection = await getConnection();
        const result = await connection.query("UPDATE productos SET ? WHERE ProductoID = ?",[products, id]) 
        res.json(result)
        
    } catch (error) {
        console.error("Error 500");  
        
    }
}

export const methodHTTP = {
    updateProductos
}