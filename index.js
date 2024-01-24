import Express from "express";
import "dotenv/config";
import peluqueriaRoute from "./routes/peluqueria.route.js";
import clienteRoute from "./routes/cliente.route.js";
import productoRoute from "./routes/producto.route.js";
import tipoProductoRoute from "./routes/tipoProducto.route.js";
import empleadoRoute from "./routes/empleado.route.js";
import rolRoute from "./routes/rol.route.js";
import rolAsignadoRoute from "./routes/rolAsignado.route.js";

const app = new Express();

app.use(Express.json());

app.use("/api/peluqueria", peluqueriaRoute);

app.use("/api/cliente", clienteRoute); 

app.use("/api/producto", productoRoute);

app.use("/api/tipo", tipoProductoRoute);

app.use("/api/empleado", empleadoRoute);

app.use("/api/rol", rolRoute);

app.use("/api/rolasignado", rolAsignadoRoute);

const port = process.env.PORT || 5000;
app.listen(port, () => {
    console.log(`Server running on port ${port}`);
});
