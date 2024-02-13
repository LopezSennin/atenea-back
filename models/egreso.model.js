import { pool } from "../database/connection.js";

const findAll = async (id_peluqueria) => {
    const query = 'SELECT * FROM egreso WHERE id_peluqueria = $1';
    const {rows} = await pool.query(query, [id_peluqueria]);
    return rows;
};

const findAllByDate = async (id_peluqueria, fechadesde, fechahasta) => {
    const query = 'SELECT * FROM egreso WHERE id_peluqueria = $1 AND fecha BETWEEN $2 AND $3';
    const {rows} = await pool.query(query, [id_peluqueria, fechadesde, fechahasta]);
    return rows;
};

const findById = async (id_egreso) => {
    const query = 'SELECT * FROM egreso WHERE id_egreso = $1';
    const {rows} = await pool.query(query, [id_egreso]);
    return rows[0];
};

const update = async (id_egreso, id_categoria, valor, fecha, descripcion) => {
    const query = 'UPDATE egreso SET id_categoria = $1, valor = $2, fecha = $3, descripcion = $4 WHERE id_egreso = $5 RETURNING *';
    const {rows} = await pool.query(query, [ id_categoria, valor, fecha, descripcion, id_egreso]);
    return rows[0];
};

const create = async (id_peluqueria, id_categoria, valor, fecha, descripcion) => {
    const query = 'INSERT INTO egreso (id_peluqueria, id_categoria, valor, fecha, descripcion) VALUES ($1, $2, $3, $4, $5) RETURNING *';
    const {rows} = await pool.query(query, [id_peluqueria, id_categoria, valor, fecha, descripcion]);
    return rows[0];
};


export const egresoModel = {
    findAll,
    findById,
    findAllByDate,
    update,
    create,
};