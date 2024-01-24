import { pool } from "../database/connection.js";

const findAll = async (id_peluqueria) => {
    const query = 'SELECT * FROM tipo_producto WHERE id_peluqueria = $1';
    const {rows} = await pool.query(query, [id_peluqueria]);
    return rows;
};

const findById = async (id_tipo) => {
    const query = 'SELECT * FROM tipo_producto WHERE id_tipo = $1';
    const {rows} = await pool.query(query, [id_tipo]);
    return rows[0];
};

const update = async (id_tipo, tipo) => {
    const query = 'UPDATE tipo_producto SET tipo = $1 WHERE id_tipo = $2 RETURNING *';
    const {rows} = await pool.query(query, [tipo, id_tipo]);
    return rows[0];
};

const create = async (id_peluqueria, tipo) => {
    const query = 'INSERT INTO tipo_producto (id_peluqueria, tipo) VALUES ($1, $2) RETURNING *';
    const {rows} = await pool.query(query, [id_peluqueria, tipo]);
    return rows[0];
};

export const tipoProductoModel = {
    findAll,
    findById,
    update,
    create,
};