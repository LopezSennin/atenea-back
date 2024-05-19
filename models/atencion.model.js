import { pool } from "../database/connection.js";

const add = async (id_peluqueria, id_cita, precio, detalle, id_estilista) => {
    const query = `INSERT INTO atencion (id_peluqueria, id_cita, precio, detalle, id_estilista) VALUES ($1, $2, $3, $4, $5) RETURNING *`;
    const {rows} = await pool.query(query, [id_peluqueria, id_cita, precio, detalle, id_estilista]);
    return rows[0];
};

const findAllByIdCliente = async (id_cliente) => {
    const query = `SELECT id_atencion, detalle, TO_CHAR(fecha, 'YYYY-MM-DD') AS fecha FROM buscar_atenciones_por_cliente($1)`;
    const {rows} = await pool.query(query, [id_cliente]);
    return rows;
}

const findSinFinalizar = async (id_peluqueria) => {
    const query = `SELECT * FROM atencion WHERE id_peluqueria = $1 AND finalizacion_servicio is null `;
    const {rows} = await pool.query(query, [id_peluqueria]);
    return rows;
}

const findSinFinalizarByEstilista = async (id_estilista) => {
    const query = `SELECT * FROM atencion WHERE id_estilista = $1 AND finalizacion_servicio is null `;
    const {rows} = await pool.query(query, [id_estilista]);
    return rows;
}

const findAllAtencionesFinalizadas = async (id_peluqueria) => {
    const query = `SELECT * FROM atencion WHERE id_peluqueria = $1 AND finalizacion_servicio is not null `;
    const {rows} = await pool.query(query, [id_peluqueria]);
    return rows;
}

const cambiarPrecio = async (id_atencion, precio) => {
    const query = `UPDATE atencion SET precio = $2 WHERE id_atencion = $1 RETURNING *`;
    const {rows} = await pool.query(query, [id_atencion, precio]);
    return rows[0]; 
};

const finalizarServicio = async (id_atencion) => {
    const query = 'SELECT finalizar_atencion($1)';
    const {rows} = await pool.query(query, [id_atencion]);
    return rows[0];
};

const findServiciosPrestadosPorFecha = async (id_pelqueria, fechadesde, fechahasta) => {
    const query = `SELECT * FROM atencion WHERE id_peluqueria = $1 AND fecha BETWEEN $2 AND $3`;
    const {rows} = await pool.query(query, [id_pelqueria, fechadesde, fechahasta]);
    return rows;
};

const findServicioPrestadoPorId = async (id_atencion) => {
    const query = `SELECT * FROM atencion WHERE id_atencion = $1`;
    const {rows} = await pool.query(query, [id_atencion]);
    return rows[0];
};

const findServiciosPorCita = async (id_cita) => {
    const query = `SELECT * FROM atencion WHERE id_cita = $1`;
    const {rows} = await pool.query(query, [id_cita]);
    return rows;
};

const registrarCostoServicioPrestado = async (id_atencion, costo) => {
    const query = `UPDATE atencion SET costo = $2 WHERE id_atencion = $1 RETURNING *`;
    const {rows} = await pool.query(query, [id_atencion, costo]);
    return rows[0];
};

const findServiciosPorEmpleado = async (id_empleado, fecha_desde, fecha_hasta) => {
    const query = `SELECT * from buscar_atenciones_por_empleado($1, $2, $3)`;
    const {rows} = await pool.query(query, [id_empleado, fecha_desde, fecha_hasta]);
    return rows;
};

const cambiarDetalle = async (id_atencion, detalle) => {
    const query = `UPDATE atencion SET detalle = $2 WHERE id_atencion = $1 RETURNING *`;
    const {rows} = await pool.query(query, [id_atencion, detalle]);
    return rows[0];
};
export const atencionModel = {
    add,
    findSinFinalizar,
    cambiarPrecio,
    finalizarServicio,
    findServiciosPrestadosPorFecha,
    findServicioPrestadoPorId,
    registrarCostoServicioPrestado,
    findServiciosPorEmpleado,
    findServiciosPorCita,
    findAllByIdCliente,
    findSinFinalizarByEstilista,
    cambiarDetalle,
    findAllAtencionesFinalizadas
};