import { pool } from "../database/connection.js";

const findAll = async (id_peluqueria) => {
    const query = 'SELECT * FROM servicio WHERE id_peluqueria = $1';
    const {rows} = await pool.query(query, [id_peluqueria]);
    return rows;
};

const findAllByCode = async (id_peluqueria, codigo) => {
    const query = 'SELECT * FROM servicio WHERE id_peluqueria = $1 AND codigo = $2';
    const {rows} = await pool.query(query, [id_peluqueria, codigo]);
    return rows;
};

const findById = async (id_servicio) => {
    const query = 'SELECT * FROM servicio WHERE id_servicio = $1';
    const {rows} = await pool.query(query, [id_servicio]);
    return rows[0];
};

const update = async (id_servicio, id_categoria, codigo, descripcion, nombre) => {
    const query = 'UPDATE servicio SET id_categoria = $1, codigo = $2, descripcion = $3, nombre = $4 WHERE id_servicio = $5 RETURNING *';
    const {rows} = await pool.query(query, [ id_categoria, codigo, descripcion, nombre, id_servicio]);
    return rows[0];
};

const create = async (id_peluqueria, id_categoria, codigo, descripcion, nombre) => {
    const query = 'INSERT INTO servicio (id_peluqueria, id_categoria, codigo, descripcion, nombre) VALUES ($1, $2, $3, $4, $5) RETURNING *';
    const {rows} = await pool.query(query, [id_peluqueria, id_categoria, codigo, descripcion, nombre]);
    return rows[0];
};

export const servicioModel = {
    findAll,
    findById,
    findAllByCode,
    update,
    create,
};