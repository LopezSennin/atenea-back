import { pool } from "../database/connection.js";

const iniciar = async (id_peluqueria, id_cliente, id_vendedor, valor) => {
    const query = 'INSERT INTO venta_mercancia (id_peluqueria, id_cliente, id_vendedor) VALUES ($1, $2, $3) RETURNING *';
    const {rows} = await pool.query(query, [id_peluqueria, id_cliente, id_vendedor]);
    return rows[0];
}

const getVentaMercanciaDetalle = async (id_venta) => {
    const query = 'SELECT * FROM venta_mercancia WHERE id_venta = $1';
    const {rows} = await pool.query(query, [id_venta]);
    return rows[0];
}

const listarVentasFinalizadas = async (id_peluqueria) => {
    const query = 'SELECT * FROM venta_mercancia WHERE id_peluqueria = $1 AND finalizada = true';
    const {rows} = await pool.query(query, [id_peluqueria]);
    return rows;
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

const finalizar = async (id_venta, id_peluqueria) => {
    const query = 'select finalizar_venta($1, $2)';
    const {rows} = await pool.query(query, [id_venta, id_peluqueria]);
    return rows[0];
}

const getVentasSinFinalizarVendedor = async (id_vendedor) => {
    const query = 'SELECT * FROM venta_mercancia WHERE id_vendedor = $1 AND finalizada = false';
    const {rows} = await pool.query(query, [id_vendedor]);
    return rows;
}

const eliminar = async (id_venta) => {
    const query = 'DELETE FROM venta_mercancia WHERE id_venta = $1';
    await pool.query(query, [id_venta]);
}

export const ventaMercanciaModel = {
    iniciar,
    listarFechaAFecha,
    listarFechaAFechaVendedor,
    listarFechaAFechaCliente,
    finalizar,
    getVentasSinFinalizarVendedor,
    eliminar,
    getVentaMercanciaDetalle,
    listarVentasFinalizadas
};