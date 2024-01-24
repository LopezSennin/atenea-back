import { pool } from "../database/connection.js";

const findAll = async (id_peluqueria) => {
    const query = 'SELECT * FROM empleado WHERE id_peluqueria = $1';
    const {rows} = await pool.query(query, [id_peluqueria]);
    return rows;
};

const findAllByActivo = async (id_peluqueria, activo) => {
    const query = 'SELECT * FROM empleado WHERE id_peluqueria = $1 AND activo = $2';
    const {rows} = await pool.query(query, [id_peluqueria, activo]);
    return rows;
};

const findAllByRol = async (id_peluqueria, id_rol) => {
    const query = 'SELECT e.* FROM empleado e JOIN rol_asignado ra ON e.id_empleado = ra.id_empleado WHERE e.id_peluqueria = $1 and ra.id_rol = $2 and e.activo = true';
    const {rows} = await pool.query(query, [id_peluqueria, id_rol]);
    return rows;
};

const findById = async (id_peluqueria, id_empleado) => {
    const query = 'SELECT * FROM empleado WHERE id_peluqueria = $1 AND id_empleado = $2';
    const {rows} = await pool.query(query, [id_peluqueria, id_empleado]);
    return rows[0];
};

const update = async (id_peluqueria, id_empleado, nombre, telefono, email, fecha_nacimiento, activo) => {
    const query = 'UPDATE empleado SET nombre = $1, telefono = $2, email = $3, fecha_nacimiento = $4, activo = $5 WHERE id_peluqueria = $6 AND  id_empleado = $7 RETURNING *';
    const {rows} = await pool.query(query, [nombre, telefono, email, fecha_nacimiento, activo, id_peluqueria, id_empleado]);
    return rows[0];
};

const create = async (id_peluqueria, id_empleado, nombre, telefono, email, fecha_nacimiento) => {
    const query = 'INSERT INTO empleado (id_peluqueria, id_empleado, nombre, telefono, email, fecha_nacimiento) VALUES ($1, $2, $3, $4, $5, $6) RETURNING *';
    const {rows} = await pool.query(query, [id_peluqueria, id_empleado, nombre, telefono, email, fecha_nacimiento]);
    return rows[0];
};

export const empleadoModel = {
    findAll,
    findAllByActivo,
    findAllByRol,
    findById,
    update,
    create,
};