import { pool } from "../database/connection.js";

const findAll = async (id_peluqueria) => {
    const query = 'SELECT * FROM mercancia WHERE id_peluqueria = $1';
    const {rows} = await pool.query(query, [id_peluqueria]);
    return rows;
};

const findById = async (id_mercancia) => {
    const query = 'SELECT * FROM mercancia WHERE id_mercancia = $1';
    const {rows} = await pool.query(query, [id_mercancia]);
    return rows[0];
};

const findByIdPeluqueriaNCodigo = async (id_peluqueria, codigo) => {
    const query = 'SELECT * FROM mercancia WHERE id_peluqueria = $1 AND codigo = $2';
    const {rows} = await pool.query(query, [id_peluqueria, codigo]);
    return rows[0];
};

const update = async ( id_mercancia, codigo, nombre, detalle, stock, costo, valor_venta  ) => {
    const query = 'UPDATE mercancia SET codigo = $1, nombre = $2, detalle = $3, stock = $4, costo = $5, valor_venta = $6 WHERE id_mercancia = $7 RETURNING *';
    const {rows} = await pool.query(query, [codigo, nombre, detalle, stock, costo, valor_venta, id_mercancia ]);
    return rows[0];
};

const create = async ( id_peluqueria, codigo, nombre, detalle, stock, costo, valor_venta  ) => {
    const query = 'INSERT INTO mercancia (id_peluqueria, codigo, nombre, detalle, stock, costo, valor_venta ) VALUES ($1, $2, $3, $4, $5, $6, $7) RETURNING *';
    const {rows} = await pool.query(query, [id_peluqueria, codigo, nombre, detalle, stock, costo, valor_venta ]);
    return rows[0];
};

export const mercanciaModel = {
    findAll,
    findById,
    findByIdPeluqueriaNCodigo,
    update,
    create,
};