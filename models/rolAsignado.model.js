import { pool } from "../database/connection.js";

const findAll = async (id_peluqueria) => {
    const query = 'SELECT * FROM rol_asignado WHERE id_peluqueria = $1';
    const {rows} = await pool.query(query, [id_peluqueria]);
    return rows;
};

const findByIdRol = async (id_peluqueria, id_rol) => {
    const query = 'SELECT * FROM rol_asignado WHERE id_peluqueria = $1 AND id_rol = $2';
    const {rows} = await pool.query(query, [id_peluqueria, id_rol]);
    return rows[0];
};

const findByIdEmpleado = async (id_peluqueria, id_empleado) => {
    const query = 'SELECT * FROM rol_asignado WHERE id_peluqueria = $1 AND id_empleado = $2';
    const {rows} = await pool.query(query, [id_peluqueria, id_empleado]);
    return rows[0];
};

const deleteAsig = async (id_asignacion) => {
    const query = 'DELETE FROM rol_asignado WHERE id_asignacion = $1 RETURNING *';
    const {rows} = await pool.query(query, [id_asignacion]);
    return rows[0];
};

const create = async (id_peluqueria, id_rol, id_empleado) => {
    const query = 'INSERT INTO rol_asignado (id_peluqueria, id_rol, id_empleado) VALUES ($1, $2, $3) RETURNING *';
    const {rows} = await pool.query(query, [id_peluqueria, id_rol, id_empleado]);
    return rows[0];
};
export const rolAsignadoModel = {
    findAll,
    findByIdRol,
    findByIdEmpleado,
    deleteAsig,
    create,
};