import { pool } from "../database/connection.js";

const findAll = async (id_peluqueria) => {
    const query = 'SELECT * FROM cliente WHERE id_peluqueria = $1';
    const {rows} = await pool.query(query, [id_peluqueria]);
    return rows;
};

const findById = async (id_peluqueria, id_cliente) => {
    const query = 'SELECT * FROM cliente WHERE id_peluqueria = $1 AND id_cliente = $2';
    const {rows} = await pool.query(query, [id_peluqueria, id_cliente]);
    return rows[0];
};

const findHBD = async (id_peluqueria) => {
    const query = 'SELECT *	FROM public.cliente WHERE EXTRACT(MONTH FROM fecha_nacimiento) = EXTRACT(MONTH FROM CURRENT_DATE) AND EXTRACT(DAY FROM fecha_nacimiento) = EXTRACT(DAY FROM CURRENT_DATE) AND id_peluqueria = $1;';
    const {rows} = await pool.query(query, [id_peluqueria]);
    return rows;
}

const create = async (id_peluqueria, id_cliente, nombre, telefono, email, ciudad, departamento, pais, fecha_nacimiento, nota) => {
    const query = 'INSERT INTO cliente (id_peluqueria, id_cliente, nombre, telefono, email, ciudad, departamento, pais, fecha_nacimiento, nota) VALUES ($1, $2, $3, $4, $5, $6, $7, $8, $9, $10) RETURNING *';
    const {rows} = await pool.query(query, [id_peluqueria, id_cliente, nombre, telefono, email, ciudad, departamento, pais, fecha_nacimiento, nota]);
    return rows[0];
};

const update = async (id_peluqueria, id_cliente, nombre, telefono, email, ciudad, departamento, pais, fecha_nacimiento, nota) => {
    const query = 'UPDATE cliente SET nombre = $1, telefono = $2, email = $3, ciudad = $4, departamento = $5, pais = $6, fecha_nacimiento = $7, nota = $8 WHERE id_peluqueria = $9 AND id_cliente = $10 RETURNING *';
    const {rows} = await pool.query(query, [nombre, telefono, email, ciudad, departamento, pais, fecha_nacimiento, nota, id_peluqueria, id_cliente]);
    return rows[0];
};
export const clienteModel = {
    findAll,
    findById,
    findHBD,
    create,
    update,
};