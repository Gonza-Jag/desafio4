const express = require ("express");
const productsRouter = require("./routes/productos");
const app = express();


app.use(express.json());
app.use(express.urlencoded({ extended: true }))

app.use("/api/productos", productsRouter);

app.listen(8080, ()=>{console.log("server listening on port8080")

})