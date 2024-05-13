import { pool } from "../database/connection.js";

const findAll = async (id_peluqueria) => {
    const query = "SELECT nombre, telefono, email, ciudad, departamento, pais,  TO_CHAR(fecha_nacimiento, 'YYYY-MM-DD') AS fecha_nacimiento, nota, id_peluqueria, id_cliente, identificacion FROM cliente WHERE id_peluqueria = $1";
    const {rows} = await pool.query(query, [id_peluqueria]);
    return rows;
};

const findById = async (id_cliente) => {
    const query = "SELECT nombre, telefono, email, ciudad, departamento, pais,  TO_CHAR(fecha_nacimiento, 'YYYY-MM-DD') AS fecha_nacimiento, nota, id_peluqueria, id_cliente, identificacion FROM cliente WHERE id_cliente = $1";
    const {rows} = await pool.query(query, [id_cliente]);
    return rows[0];
};

const findByIdentificacion = async (id_peluqueria, identificacion) => {
    const query = "SELECT nombre, telefono, email, ciudad, departamento, pais,  TO_CHAR(fecha_nacimiento, 'YYYY-MM-DD') AS fecha_nacimiento, nota, id_peluqueria, id_cliente, identificacion FROM cliente WHERE id_peluqueria = $1 AND identificacion = $2";
    const {rows} = await pool.query(query, [id_peluqueria, identificacion]);
    return rows[0];
};

const findHBD = async (id_peluqueria) => {
    const query = "SELECT nombre, telefono, email, ciudad, departamento, pais,  TO_CHAR(fecha_nacimiento, 'YYYY-MM-DD') AS fecha_nacimiento, nota, id_peluqueria, id_cliente, identificacion	FROM public.cliente WHERE EXTRACT(MONTH FROM fecha_nacimiento) = EXTRACT(MONTH FROM CURRENT_DATE) AND EXTRACT(DAY FROM fecha_nacimiento) = EXTRACT(DAY FROM CURRENT_DATE) AND id_peluqueria = $1;";
    const {rows} = await pool.query(query, [id_peluqueria]);
    return rows;
}

const create = async (id_peluqueria, identificacion, nombre, telefono, email, ciudad, departamento, pais, fecha_nacimiento, nota) => {
    const query = 'INSERT INTO cliente (id_peluqueria, identificacion, nombre, telefono, email, ciudad, departamento, pais, fecha_nacimiento, nota) VALUES ($1, $2, $3, $4, $5, $6, $7, $8, $9, $10) RETURNING *';
    const {rows} = await pool.query(query, [id_peluqueria, identificacion, nombre, telefono, email, ciudad, departamento, pais, fecha_nacimiento, nota]);
    return rows[0];
};

const update = async (id_cliente, identificacion, nombre, telefono, email, ciudad, departamento, pais, fecha_nacimiento, nota) => {
    const query = 'UPDATE cliente SET identificacion = $1, nombre = $2, telefono = $3, email = $4, ciudad = $5, departamento = $6, pais = $7, fecha_nacimiento = $8, nota = $9 WHERE id_cliente = $10 RETURNING *';
    const {rows} = await pool.query(query, [identificacion, nombre, telefono, email, ciudad, departamento, pais, fecha_nacimiento, nota, id_cliente]);
    return rows[0];
};
export const clienteModel = {
    findAll,
    findById,
    findByIdentificacion,
    findHBD,
    create,
    update,
};
