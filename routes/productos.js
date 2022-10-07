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
    try{
        const productoAct = req.body;
        const id = req.params.id;
        await contenedorProductos.updateById(id, productoAct);
        
    }catch{

    }
})

//DELETE

productsRouter.delete("/:id", async(req,res)=>{
    try{
        const id = req.params.id;
       const productoEliminado =  await contenedorProductos.deleteById(id);
        res.send(productoEliminado)

    }catch{

    }

})














module.exports = productsRouter;