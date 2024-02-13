import { pool } from "../database/connection.js";

const findAll = async (id_patologia) => {
    const query = 'SELECT * FROM alergia_patologia WHERE id_patologia = $1';
    const {rows} = await pool.query(query, [id_patologia]);
    return rows;
};

const findByIdCliente = async (id_cliente) => {
    const query = 'SELECT * FROM alergia_patologia WHERE id_cliente = $1';
    const {rows} = await pool.query(query, [id_cliente]);
    return rows;
};

const deleteById = async (id_alergia) => {
    const query = 'DELETE FROM alergia_patologia WHERE id_alergia = $1 RETURNING *';
    const {rows} = await pool.query(query, [id_alergia]);
    return rows[0];
};

const create = async (id_peluqueria, id_patologia, tipo_producto) => {
    const query = 'INSERT INTO alergia_patologia (id_peluqueria, id_patologia, tipo_producto) VALUES ($1, $2, $3) RETURNING *';
    const {rows} = await pool.query(query, [id_peluqueria, id_patologia, tipo_producto]);
    return rows[0];
};

export const alergiaModel = {
    findAll,
    findByIdCliente,
    deleteById,
    create,
};