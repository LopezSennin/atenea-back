import { pool } from "../database/connection.js";

const add = async (id_peluqueria, id_auxiliar, id_tarea, anotacion, id_atencion) => {
    const query = `INSERT INTO tarea_cita (id_peluqueria, id_auxiliar, id_tarea, anotacion, id_atencion) VALUES ($1, $2, $3, $4, $5) RETURNING *`;
    const {rows} = await pool.query(query, [id_peluqueria, id_auxiliar, id_tarea, anotacion, id_atencion]);
    return rows[0];
};

const del = async (id_tarea_cita) => {
    const query = `DELETE FROM tarea_cita WHERE id_asignacion = $1  AND tarea_finalizada = false RETURNING *`;
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

const findByIdAtencion = async (id_atencion) => {
    const query = `SELECT * FROM tarea_cita WHERE id_atencion = $1`;
    const {rows} = await pool.query(query, [id_atencion]);
    return rows;
};

const findNombreCliente = async (id_atencion) => {
    const query = `SELECT nombre FROM cliente WHERE id_cliente = (SELECT id_cliente FROM cita WHERE id_cita = (SELECT id_cita FROM atencion where id_atencion = $1))`;
    const {rows} = await pool.query(query, [id_atencion]);
    return rows[0];
}

export const tareaCitaModel = {
    add,
    del,
    findAllByFechaAfecha,
    finalizarTarea,
    findAllByAuxiliarFechaAfecha,
    findAllAsignaciones,
    findAllPendientes,
    findByIdAtencion,
    findNombreCliente
};