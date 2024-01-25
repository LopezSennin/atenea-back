import { pool } from "../database/connection.js";

const findAllActivas = async (id_peluqueria) => {
    const query = 'SELECT * FROM cita WHERE id_peluqueria = $1 AND estado = true ORDER BY fecha ASC';
    const {rows} = await pool.query(query, [id_peluqueria]);
    return rows;
};

const findAllInactivas = async (id_peluqueria) => {
    const query = 'SELECT * FROM cita WHERE id_peluqueria = $1 AND estado = false ORDER BY fecha DESC';
    const {rows} = await pool.query(query, [id_peluqueria]);
    return rows;
}

const findAllByEstilista = async (id_peluqueria, id_estilista) => {
    const query = 'SELECT * FROM cita WHERE id_peluqueria = $1 AND id_estilista = $2 AND estado = true ORDER BY fecha ASC';
    const {rows} = await pool.query(query, [id_peluqueria, id_estilista]);
    return rows;
};

const findAllByCliente = async (id_peluqueria, id_cliente) => {
    const query = 'SELECT * FROM cita WHERE id_peluqueria = $1 AND id_cliente = $2 AND estado = true ORDER BY fecha ASC';
    const {rows} = await pool.query(query, [id_peluqueria, id_cliente]);
    return rows;
};

const findAllByFecha = async (id_peluqueria, fecha) => {    
    const query = 'SELECT * FROM cita WHERE id_peluqueria = $1 AND fecha = $2';
    const {rows} = await pool.query(query, [id_peluqueria, fecha]);
    return rows;
};

const findByFechaAfecha = async (id_peluqueria, fechad, fechah) => {
    const query = 'SELECT * FROM cita WHERE id_peluqueria = $1 AND fecha BETWEEN $2 AND $3 ORDER BY fecha ASC';
    const {rows} = await pool.query(query, [id_peluqueria, fechad, fechah]);
    return rows;
};

const findAllByDia = async (id_peluqueria, id_dia) => {
    const query = 'SELECT * FROM cita WHERE id_peluqueria = $1 AND EXTRACT(DOW FROM fecha) = $2 ORDER BY fecha ASC';
    const {rows} = await pool.query(query, [id_peluqueria, id_dia]);
    return rows;
};

const update = async ( id_estilista, id_cliente, id_servicio_principal, fecha, anotacion, id_cita) => {
    const query = 'UPDATE cita SET id_estilista = $1, id_cliente = $2, id_servicio_principal = $3, fecha = $4, id_dia = $5, anotacion = $6 WHERE id_cita = $7';
    const {rows} = await pool.query(query, [ id_estilista, id_cliente, id_servicio_principal, fecha, anotacion, id_cita]);
    return rows;
}

const create = async (id_peluqueria, id_estilista, id_cliente, id_servicio_principal, fecha, id_dia, anotacion) => {
    const query = 'INSERT INTO cita (id_peluqueria, id_estilista, id_cliente, id_servicio_principal, fecha, id_dia, anotacion) VALUES ($1, $2, $3, $4, $5, $6, $7)';
    const {rows} = await pool.query(query, [id_peluqueria, id_estilista, id_cliente, id_servicio_principal, fecha, id_dia, anotacion]);
    return rows;
};

export const citaModel = { 
    findAllActivas,
    findAllInactivas, 
    findAllByEstilista,
    findAllByCliente,
    findAllByFecha,
    findByFechaAfecha,
    findAllByDia,
    update,
    create
    
};