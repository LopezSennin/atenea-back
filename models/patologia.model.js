import { pool } from "../database/connection.js";

const findByIdCliente = async (id_cliente) => {
    const query = 'SELECT * FROM patologia WHERE id_cliente = $1';
    const {rows} = await pool.query(query, [id_cliente]);
    return rows;
};

const findByIdPatologia = async (id_patologia) => {
    const query = 'SELECT * FROM patologia WHERE id_patologia = $1';
    const {rows} = await pool.query(query, [id_patologia]);
    return rows[0];
};

const findProductosAlergia = async (id_cliente) => {
    const query = 'SELECT * FROM obtener_productos_alergia_por_cliente($1)';
    const {rows} = await pool.query(query, [id_cliente]);
    return rows;
};

const create = async (id_peluqueria, id_cliente, nombre, detalle) => {
    const query = 'INSERT INTO patologia (id_peluqueria, id_cliente, nombre, detalle) VALUES ($1, $2, $3, $4) RETURNING *';
    const {rows} = await pool.query(query, [id_peluqueria, id_cliente, nombre, detalle]);
    return rows[0];
};

const updateById = async (id_patologia, nombre, detalle, estado) => {
    const query = 'UPDATE patologia SET nombre = $1, detalle = $2, estado = $3 WHERE id_patologia = $4 RETURNING *';
    const {rows} = await pool.query(query, [nombre, detalle, estado, id_patologia]);
    return rows[0];
};

const deleteById = async (id_patologia) => {
    const query = 'SELECT eliminar_patologia($1)';
    const {rows} = await pool.query(query, [id_patologia]);
    return rows[0];
};

export const patologiaModel = {
    findByIdCliente,
    findByIdPatologia,
    findProductosAlergia,
    create,
    updateById,
    deleteById,
};