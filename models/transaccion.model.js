import { pool } from "../database/connection.js";

const agregar = async (id_peluqueria, id_cliente, tipo_transaccion, monto, anotacion, referencia ) => {
    const query = "INSERT INTO transaccion(id_peluqueria, id_cliente, tipo_transaccion, monto, anotacion, referencia) VALUES ($1, $2, $3, $4, $5, $6) RETURNING *;";
    const {rows} = await pool.query(query, [id_peluqueria, id_cliente, tipo_transaccion, monto, anotacion, referencia]);
    return rows[0];
}

const deudaCliente = async (id_cliente) => {
    const query = "SELECT dc.* FROM transaccion dc WHERE dc.id_cliente = $1 AND dc.vigente = true AND (dc.tipo_transaccion = 'Pago a crédito de mercancía' OR dc.tipo_transaccion = 'Pago a crédito de atención')";
    const {rows} = await pool.query(query, [id_cliente]);
    return rows;
}

const deudaActivas = async (id_peluqueria) => {
    const query = "SELECT dc.* FROM transaccion dc WHERE dc.id_peluqueria = $1 AND dc.vigente = true AND (dc.tipo_transaccion = 'Pago a crédito de mercancía' OR dc.tipo_transaccion = 'Pago a crédito de atención')";
    const {rows} = await pool.query(query, [id_peluqueria]);
    return rows;
}

const detalleTransaccion = async (id_transaccion) => {
    const query = "SELECT * FROM transaccion WHERE id_transaccion = $1";
    const {rows} = await pool.query(query, [id_transaccion]);
    return rows[0];
}

const transaccionesFechaAFecha = async (id_peluqueria, fecha_inicio, fecha_fin) => {
    const query = "SELECT * FROM transaccion WHERE id_peluqueria = $1 AND fecha BETWEEN $2 AND $3";
    const {rows} = await pool.query(query, [id_peluqueria, fecha_inicio, fecha_fin]);
    return rows;
}

export const transaccionModel = {
    agregar,
    deudaCliente,
    deudaActivas,
    detalleTransaccion,
    transaccionesFechaAFecha
};