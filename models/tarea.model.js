import { pool } from "../database/connection.js";

const findall = async (id_peluqueria) => {
    const query = `SELECT * FROM tarea WHERE id_peluqueria = $1`;
    const {rows} = await pool.query(query, [id_peluqueria]);
    return rows;
};

const findone = async (id_tarea) => {
    const query = `SELECT * FROM tarea WHERE id_tarea = $1`;
    const {rows} = await pool.query(query, [id_tarea]);
    return rows[0];
};

const add = async (id_peluqueria, codigo, nombre, detalle, costo) => {
    const query = `INSERT INTO tarea (id_peluqueria, codigo, nombre, detalle, costo) VALUES ($1, $2, $3, $4, $5) RETURNING *`;
    const {rows} = await pool.query(query, [id_peluqueria, codigo, nombre, detalle, costo]);
    return rows[0];
};

const update = async (id_tarea, codigo, nombre, detalle, costo) => {
    const query = `UPDATE tarea SET codigo = $1, nombre = $2, detalle = $3, costo = $4 WHERE id_tarea = $5 RETURNING *`;
    const {rows} = await pool.query(query, [codigo, nombre, detalle, costo, id_tarea]);
    return rows[0];
};

const del = async (id_tarea) => {
    const query = `SELECT eliminar_tarea($1)`;
    const {rows} = await pool.query(query, [id_tarea]);
    return rows[0];
};

export const tareaModel = {
    findall,
    findone,
    add,
    update,
    del
};