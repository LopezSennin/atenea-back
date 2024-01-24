import { pool } from "../database/connection.js";

const findAll = async (id_peluqueria) => {
    const query = 'SELECT * FROM rol WHERE id_peluqueria = $1';
    const {rows} = await pool.query(query, [id_peluqueria]);
    return rows;
};

const findById = async (id_rol) => {
    const query = 'SELECT * FROM rol WHERE id_rol = $1';
    const {rows} = await pool.query(query, [id_rol]);
    return rows[0];
};

const update = async (id_rol, nombre, descripcion ) => {
    const query = 'UPDATE rol SET nombre = $1, descripcion = $2 WHERE id_rol = $3 RETURNING *';
    const {rows} = await pool.query(query, [nombre, descripcion, id_rol]);
    return rows[0];
};

const create = async (id_peluqueria, nombre, descripcion) => {
    const query = 'INSERT INTO rol (id_peluqueria, nombre, descripcion) VALUES ($1, $2, $3) RETURNING *';
    const {rows} = await pool.query(query, [id_peluqueria, nombre, descripcion]);
    return rows[0];
};
export const rolModel = {
    findAll,
    findById,
    update,
    create,
};