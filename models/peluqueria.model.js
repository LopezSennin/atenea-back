import { pool } from "../database/connection.js";

const findAll = async () => {
    const {rows} = await pool.query(`SELECT * FROM peluqueria`);
    return rows;
};

const create = async (nombre, nit, email, nombre_ceo, telefono, direccion) => {
    const query = 'INSERT INTO peluqueria (nombre, nit, email, nombre_ceo, telefono, direccion) VALUES ($1, $2, $3, $4, $5, $6) RETURNING *';
    const {rows} = await pool.query(query, [nombre, nit, email, nombre_ceo, telefono, direccion]);
    return rows[0];
};

const findById = async (id_peluqueria) => {
    const query = 'SELECT * FROM peluqueria WHERE id_peluqueria = $1';
    const {rows} = await pool.query(query, [id_peluqueria]);
    return rows[0];
};

const update = async (id_peluqueria, nombre, nit, email, nombre_ceo, telefono, direccion) => {
    const query = 'UPDATE peluqueria SET nombre = $1, nit = $2, email = $3, nombre_ceo = $4, telefono = $5, direccion = $6 WHERE id_peluqueria = $7 RETURNING *';
    const {rows} = await pool.query(query, [nombre, nit, email, nombre_ceo, telefono, direccion, id_peluqueria]);
    return rows[0];
};
export const peluqueriaModel = {
    findAll,
    create,
    findById,
    update,
};