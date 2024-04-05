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
import egresoRoute from "./routes/egreso.route.js";
import mercanciaRoute from "./routes/mercancia.route.js";
import categoriaServicioRoute from "./routes/categoriaServicio.route.js";
import servicioRoute from "./routes/servicio.route.js";
import alergiaRoute from "./routes/alergia.route.js";
import patologiaRoute from "./routes/patologia.route.js";
import tareaRoute from "./routes/tarea.route.js";
import tareaCitaRoute from "./routes/tareaCita.route.js";
import atencionRoute from "./routes/atencion.route.js";
import servicioCitaRoute from "./routes/servicioCita.route.js";
import productoCitaRoute from "./routes/productoCita.route.js";
import ventaMercanciaRoute from "./routes/ventaMercancia.route.js";
import detalleVentaRoute from "./routes/detalleVenta.route.js";
import transaccionRoute from "./routes/transaccion.route.js";
import pruebaCapilarRoute from "./routes/pruebaCapilar.route.js";
import cors from "cors";

const app = new Express();

app.use(cors());

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

app.use("/api/egreso", egresoRoute);

app.use("/api/mercancia", mercanciaRoute);

app.use("/api/categoriaservicio", categoriaServicioRoute);

app.use("/api/servicio", servicioRoute);

app.use("/api/alergia", alergiaRoute);

app.use("/api/patologia", patologiaRoute);

app.use("/api/tarea", tareaRoute);

app.use("/api/tareacita", tareaCitaRoute);

app.use("/api/atencion", atencionRoute);

app.use("/api/serviciocita", servicioCitaRoute);

app.use("/api/productocita", productoCitaRoute);

app.use("/api/ventamercancia", ventaMercanciaRoute);

app.use("/api/detalleventa", detalleVentaRoute);

app.use("/api/transaccion", transaccionRoute);

app.use("/api/pruebacapilar", pruebaCapilarRoute);

const port = process.env.PORT || 5000;
app.listen(port, () => {
    console.log(`Server running on port ${port}`);
});
