import { pool } from "../database/connection.js";

const add = async (id_peluqueria, id_auxiliar, id_tarea, anotacion) => {
    const query = `INSERT INTO tarea_cita (id_peluqueria, id_auxiliar, id_tarea, anotacion) VALUES ($1, $2, $3, $4) RETURNING *`;
    const {rows} = await pool.query(query, [id_peluqueria, id_auxiliar, id_tarea, anotacion]);
    return rows[0];
};

const del = async (id_tarea_cita) => {
    const query = `SELECT * FROM tarea_cita WHERE id_tarea_cita = $1  AND tarea_finalizada = false RETURNING *`;
    const {rows} = await pool.query(query, [id_tarea_cita]);
    return rows[0];
};

const findAllByFechaAfecha = async (id_peluqueria, id_fechad, id_fechah) => {
    const query = `SELECT * FROM tarea_cita WHERE id_peluqueria = $1 AND tarea_finalizada = true AND fecha BETWEEN $2 AND $3`;
    const {rows} = await pool.query(query, [id_peluqueria, id_fechad, id_fechah]);
    return rows;
};

const finalizarTarea = async (id_asignacion) => {
    const query = `UPDATE tarea_cita SET tarea_finalizada = true, hora_finalizacion = CURRENT_TIME WHERE id_asignacion = $1 RETURNING *`;
    const {rows} = await pool.query(query, [id_asignacion]);
    return rows[0];
};

const findAllByAuxiliarFechaAfecha = async (id_auxiliar, id_fechad, id_fechah) => {
    const query = `SELECT * FROM tarea_cita WHERE id_auxiliar = $1 AND tarea_finalizada = true AND fecha BETWEEN $2 AND $3`;
    const {rows} = await pool.query(query, [id_auxiliar, id_fechad, id_fechah]);
    return rows;
};

const findAllAsignaciones = async (id_peluqueria) => {
    const query = `SELECT * FROM tarea_cita WHERE id_peluqueria = $1 AND tarea_finalizada = false`;
    const {rows} = await pool.query(query, [id_peluqueria]);
    return rows;
};

const findAllPendientes = async (id_auxiliar) => {
    const query = `SELECT * FROM tarea_cita WHERE id_auxiliar = $1 AND tarea_finalizada = false`;
    const {rows} = await pool.query(query, [id_auxiliar]);
    return rows;
};



export const tareaCitaModel = {
    add,
    del,
    findAllByFechaAfecha,
    finalizarTarea,
    findAllByAuxiliarFechaAfecha,
    findAllAsignaciones,
    findAllPendientes
};