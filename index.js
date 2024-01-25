import Express from "express";
import "dotenv/config";
import peluqueriaRoute from "./routes/peluqueria.route.js";
import clienteRoute from "./routes/cliente.route.js";
import productoRoute from "./routes/producto.route.js";
import tipoProductoRoute from "./routes/tipoProducto.route.js";
import empleadoRoute from "./routes/empleado.route.js";
import rolRoute from "./routes/rol.route.js";
import rolAsignadoRoute from "./routes/rolAsignado.route.js";
import citaRoute from "./routes/cita.route.js";
import categoriaEgresoRoute from "./routes/categoriaEgreso.route.js";
// import egresoRoute from "./routes/egreso.route.js";
// import mercanciaRoute from "./routes/mercancia.route.js";

const app = new Express();

app.use(Express.json());

app.use("/api/peluqueria", peluqueriaRoute);

app.use("/api/cliente", clienteRoute); 

app.use("/api/producto", productoRoute);

app.use("/api/tipo", tipoProductoRoute);

app.use("/api/empleado", empleadoRoute);

app.use("/api/rol", rolRoute);

app.use("/api/rolasignado", rolAsignadoRoute);

app.use("/api/cita", citaRoute);

app.use("/api/categoriaegreso", categoriaEgresoRoute);

// app.use("/api/egreso", egresoRoute);

// app.use("/api/mercancia", mercanciaRoute);

// app.use("/api/categoriaservicio", categoriaServicioRoute);

// app.use("/api/servicio", servicioRoute);

// app.use("/api/alergia", alergiaRoute);

// app.use("/api/patologia", patologiaRoute);

// app.use("/api/tarea", tareaRoute);

// app.use("/api/tareacita", tareaCitaRoute);

// app.use("/api/servicioprestado", servicioPrestadoRoute);

// app.use("/api/pruebacapilar", pruebaCapilarRoute);

// app.use("/api/serviciocita", servicioCitaRoute);

// app.use("/api/productocita", productoCitaRoute);

// app.use("/api/ventamercancia", ventaMercanciaRoute);

// app.use("/api/detalleventa", detalleVentaRoute);

// app.use("/api/transacion", transacionRoute);














const port = process.env.PORT || 5000;
app.listen(port, () => {
    console.log(`Server running on port ${port}`);
});
