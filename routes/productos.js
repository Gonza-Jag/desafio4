const express = require ("express");
const productsRouter = express.Router();
const Contenedor = require("../contenedorProductos");

const contenedorProductos = new Contenedor("camisetas.txt");

//Ruta de getAll
productsRouter.get("/", async (req, res)=>{
    try{
        const products =  await contenedorProductos.getAll();
        res.send(products)
    } catch(error) {
        res.status(500).send("Hubo un error en el servidor")
    }
})
//RUTA DE ID

productsRouter.get("/:id", async (req, res)=>{
    try{
        const idProducto = req.params.id
        const products = await contenedorProductos.getAll();
        const product = await products.filter(product=>{

            if(product.id == idProducto) { return product}
           
          
        })
        console.log(product)
        res.send(product)
        
    } catch{

    }
    

})
// POST

productsRouter.post("/",async (req, res)=>{
    try{
        const productoNuevo = req.body;
     const producto = await   contenedorProductos.save(productoNuevo);
     res.status(200).send(productoNuevo)


    }catch{

    }

})
//UPDATE BY ID

productsRouter.put("/:id", async (req, res)=>{
    
        const {id} =  req.params;
        const productoAct = req.body;
       const productosActualizados = await  contenedorProductos.updateById(parseInt(id), productoAct);
        res.json({
            message: `el producto con el id ${id} fue actualizado`,
            response: productosActualizados
        })
        
    

    
})

//DELETE

productsRouter.delete("/:id", async(req,res)=>{
    try{
        const id = req.params.id;
       const productoEliminado =  await contenedorProductos.deleteById(parseInt(id));
        res.send(productoEliminado)

    }catch{

    }

})














module.exports = productsRouter;