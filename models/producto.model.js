import { pool } from "../database/connection.js";

const findAll = async (id_peluqueria) => {
    const query = 'SELECT * FROM producto WHERE id_peluqueria = $1';
    const {rows} = await pool.query(query, [id_peluqueria]);
    return rows;
};

const findByType = async (tipo) => {
    const query = 'SELECT * FROM producto WHERE tipo = $1';
    const {rows} = await pool.query(query, [tipo]);
    return rows;
};

const findById = async (id_producto) => {
    const query = 'SELECT * FROM producto WHERE id_producto = $1';
    const {rows} = await pool.query(query, [id_producto]);
    return rows[0];
};

const create = async (id_peluqueria, codigo, nombre, descripcion, precio, unidad_medida, stock, tipo) => {
    const query = 'INSERT INTO producto (id_peluqueria, codigo, nombre, descripcion, precio, unidad_medida, stock, tipo) VALUES ($1, $2, $3, $4, $5, $6, $7, $8) RETURNING *';
    const {rows} = await pool.query(query, [id_peluqueria, codigo, nombre, descripcion, precio, unidad_medida, stock, tipo]);
    return rows[0];
};

const update = async (id_producto, codigo, nombre, descripcion, precio, unidad_medida, stock, tipo) => {
    const query = 'UPDATE producto SET codigo = $1, nombre = $2, descripcion = $3, precio = $4, unidad_medida = $5, stock = $6, tipo = $7 WHERE id_producto = $8 RETURNING *';
    const {rows} = await pool.query(query, [codigo, nombre, descripcion, precio, unidad_medida, stock, tipo, id_producto]);
    return rows[0];
};
export const productoModel = {
    findAll,
    findByType,
    findById,
    create,
    update,
};