import { pool } from "../database/connection.js";

const findAll = async (id_peluqueria) => {
    const query = 'SELECT * FROM categoria_egreso WHERE id_peluqueria = $1';
    const {rows} = await pool.query(query, [id_peluqueria]);
    return rows;
};

const findById = async (id_categoria) => {
    const query = 'SELECT * FROM categoria_egreso WHERE id_categoria = $1';
    const {rows} = await pool.query(query, [id_categoria]);
    return rows[0];
};

const update = async (id_categoria, nombre, descripcion) => {
    const query = 'UPDATE categoria_egreso SET nombre = $1, descripcion = $2 WHERE id_categoria = $2 RETURNING *';
    const {rows} = await pool.query(query, [nombre, descripcion, id_categoria]);
    return rows[0];
};

const create = async (id_peluqueria, tipo) => {
    const query = 'INSERT INTO categoria_egreso (id_peluqueria, tipo) VALUES ($1, $2) RETURNING *';
    const {rows} = await pool.query(query, [id_peluqueria, tipo]);
    return rows[0];
};

export const categoriaEgresoModel = {
    findAll,
    findById,
    update,
    create,
};