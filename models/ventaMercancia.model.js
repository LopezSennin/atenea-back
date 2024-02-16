import { pool } from "../database/connection.js";

const iniciar = async (id_peluqueria, id_cliente, id_vendedor, valor) => {
    const query = 'INSERT INTO venta_mercancia (id_peluqueria, id_cliente, id_vendedor, valor, fecha) VALUES ($1, $2, $3, $4, CURRENT_TIMESTAMP) RETURNING *';
    const {rows} = await pool.query(query, [id_peluqueria, id_cliente, id_vendedor, valor]);
    return rows[0];
}

const listarFechaAFecha = async (id_peluqueria, fecha1, fecha2) => {
    const query = 'SELECT * FROM venta_mercancia WHERE id_peluqueria = $1 AND fecha BETWEEN $2 AND $3';
    const {rows} = await pool.query(query, [id_peluqueria, fecha1, fecha2]);
    return rows;
}

const listarFechaAFechaVendedor = async (id_vendedor, fecha1, fecha2) => {
    const query = 'SELECT * FROM venta_mercancia WHERE id_vendedor = $1 AND fecha BETWEEN $2 AND $3';
    const {rows} = await pool.query(query, [id_vendedor, fecha1, fecha2]);
    return rows;
}

const listarFechaAFechaCliente = async (id_cliente, fecha1, fecha2) => {
    const query = 'SELECT * FROM venta_mercancia WHERE id_cliente = $1 AND fecha BETWEEN $2 AND $3';
    const {rows} = await pool.query(query, [id_cliente, fecha1, fecha2]);
    return rows;
}

export const ventaMercanciaModel = {
    iniciar,
    listarFechaAFecha,
    listarFechaAFechaVendedor,
    listarFechaAFechaCliente
};