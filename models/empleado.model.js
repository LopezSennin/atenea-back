import { pool } from "../database/connection.js";

const findAll = async (id_peluqueria) => {
    const query = "SELECT nombre, email, TO_CHAR(fecha_nacimiento, 'YYYY-MM-DD') AS fecha_nacimiento, activo, telefono, id_peluqueria, id_empleado, identificacion FROM empleado WHERE id_peluqueria = $1";
    const {rows} = await pool.query(query, [id_peluqueria]);
    return rows;
};

const findAllByActivo = async (id_peluqueria, activo) => {
    const query = "SELECT nombre, email, TO_CHAR(fecha_nacimiento, 'DD-MM-YYYY') AS fecha_nacimiento, activo, telefono, id_peluqueria, id_empleado, identificacion  FROM empleado WHERE id_peluqueria = $1 AND activo = $2";
    const {rows} = await pool.query(query, [id_peluqueria, activo]);
    return rows;
};

const findAllByRol = async (id_peluqueria, id_rol) => {
    const query = "SELECT e.nombre, e.email, e.fecha_nacimiento, e.activo, e.telefono, e.id_peluqueria, e.id_empleado, e.identificacion FROM empleado e JOIN rol_asignado ra ON e.id_empleado = ra.id_empleado WHERE e.id_peluqueria = $1 and ra.id_rol = $2 and e.activo = true";
    const {rows} = await pool.query(query, [id_peluqueria, id_rol]);
    return rows;
};

const findByIdentificacion = async (id_peluqueria, identificacion) => {
    const query = "SELECT nombre, email, TO_CHAR(fecha_nacimiento, 'DD-MM-YYYY') AS fecha_nacimiento, activo, telefono, id_peluqueria, id_empleado, identificacion FROM empleado WHERE id_peluqueria = $1 AND identificacion = $2";
    const {rows} = await pool.query(query, [id_peluqueria, identificacion]);
    return rows[0];
};

const findById = async (id_empleado) => {
    const query = "SELECT nombre, email, TO_CHAR(fecha_nacimiento, 'DD-MM-YYYY') AS fecha_nacimiento, activo, telefono, id_peluqueria, id_empleado, identificacion FROM empleado WHERE id_empleado = $1";
    const {rows} = await pool.query(query, [ id_empleado]);
    return rows[0];
};

const findByEmail = async (email) => {
    const query = "SELECT nombre, email, TO_CHAR(fecha_nacimiento, 'DD-MM-YYYY') AS fecha_nacimiento, activo, telefono, id_peluqueria, id_empleado, identificacion FROM empleado WHERE email = $1";
    const {rows} = await pool.query(query, [email]);
    return rows[0];
};

const update = async ( id_empleado, nombre, telefono, email, fecha_nacimiento, activo, identificacion) => {
    const query = 'UPDATE empleado SET nombre = $1, telefono = $2, email = $3, fecha_nacimiento = $4, activo = $5, identificacion = $6 WHERE id_empleado = $7 RETURNING *';
    const {rows} = await pool.query(query, [nombre, telefono, email, fecha_nacimiento, activo, identificacion, id_empleado]);
    return rows[0];
};

const create = async (id_peluqueria, identificacion, nombre, telefono, email, fecha_nacimiento) => {
    const query = 'INSERT INTO empleado (id_peluqueria, identificacion, nombre, telefono, email, fecha_nacimiento) VALUES ($1, $2, $3, $4, $5, $6) RETURNING *';
    const {rows} = await pool.query(query, [id_peluqueria, identificacion, nombre, telefono, email, fecha_nacimiento]);
    return rows[0];
};

export const empleadoModel = {
    findAll,
    findAllByActivo,
    findAllByRol,
    findByIdentificacion,
    findById,
    findByEmail, 
    update,
    create,
};