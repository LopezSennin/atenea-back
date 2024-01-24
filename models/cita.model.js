import { pool } from "../database/connection.js";

const findAll = async (id_peluqueria) => {
    const query = 'SELECT * FROM cita WHERE id_peluqueria = $1';
    const {rows} = await pool.query(query, [id_peluqueria]);
    return rows;
};

const findAllByEstilista = async (id_peluqueria, id_empleado) => {
    const query = 'SELECT * FROM cita WHERE id_peluqueria = $1 AND id_empleado = $2';
    const {rows} = await pool.query(query, [id_peluqueria, id_empleado]);
    return rows;
};

const findAllByFecha = async (id_peluqueria, fecha) => {    
    const query = 'SELECT * FROM cita WHERE id_peluqueria = $1 AND fecha = $2';
    const {rows} = await pool.query(query, [id_peluqueria, fecha]);
    return rows;
};

const findByFechaAfecha = async (id_peluqueria, fechad, fechah) => {
    const query = 'SELECT * FROM cita WHERE id_peluqueria = $1 AND fecha BETWEEN $2 AND $3';
    const {rows} = await pool.query(query, [id_peluqueria, fechad, fechah]);
    return rows;
};

const findAllByDia = async (id_peluqueria, id_dia) => {
    const query = 'SELECT * FROM cita WHERE id_peluqueria = $1 AND id_dia = $2';
    const {rows} = await pool.query(query, [id_peluqueria, id_dia]);
    return rows;
};

const update = async (id_peluqueria, id_cita, cita) => {
    const query = 'UPDATE cita SET fecha = $1, hora = $2, id_empleado = $3, id_cliente = $4, id_dia = $5, id_servicio = $6 WHERE id_peluqueria = $7 AND id_cita = $8';
    const {rows} = await pool.query(query, [cita.fecha, cita.hora, cita.id_empleado, cita.id_cliente, cita.id_dia, cita.id_servicio, id_peluqueria, id_cita]);
    return rows;
}

export const citaModel = { 
    findAll, 
    findAllByEstilista,
    findAllByFecha,
    findByFechaAfecha,
    findAllByDia,
    update
    
};