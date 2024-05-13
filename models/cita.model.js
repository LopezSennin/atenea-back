import { pool } from "../database/connection.js";

const findAllActivas = async (id_peluqueria) => {
    const query = "SELECT id_peluqueria, id_estilista, id_cliente, id_cita, TO_CHAR(fecha, 'YYYY-MM-DD') AS fecha, anotacion, estado, id_servicio_principal, hora FROM cita WHERE id_peluqueria = $1 AND estado = true ORDER BY fecha ASC";
    const {rows} = await pool.query(query, [id_peluqueria]);
    return rows;
};

const findAllInactivas = async (id_peluqueria) => {
    const query = "SELECT id_peluqueria, id_estilista, id_cliente, id_cita, TO_CHAR(fecha, 'YYYY-MM-DD') AS fecha, anotacion, estado, id_servicio_principal, hora FROM cita WHERE id_peluqueria = $1 AND estado = false ORDER BY fecha DESC";
    const {rows} = await pool.query(query, [id_peluqueria]);
    return rows;
}

const findAllByEstilista = async (id_estilista) => {
    const query = "SELECT id_peluqueria, id_estilista, id_cliente, id_cita, TO_CHAR(fecha, 'YYYY-MM-DD') AS fecha, anotacion, estado, id_servicio_principal, hora, en_atencion FROM cita WHERE id_estilista = $1 AND estado = true ORDER BY fecha ASC";
    // const query = "SELECT * FROM cita WHERE id_estilista = $1 AND estado = true ORDER BY fecha ASC";
    const {rows} = await pool.query(query, [id_estilista]);
    return rows;
};

const findAllByCliente = async (id_cliente) => {
    const query = "SELECT id_peluqueria, id_estilista, id_cliente, id_cita, TO_CHAR(fecha, 'YYYY-MM-DD') AS fecha, anotacion, estado, id_servicio_principal, hora FROM cita WHERE id_cliente = $1 AND estado = true ORDER BY fecha ASC";
    const {rows} = await pool.query(query, [id_cliente]);
    return rows;
};

const findAllByFecha = async (id_peluqueria, fecha) => {
    const query = "SELECT id_peluqueria, id_estilista, id_cliente, id_cita, TO_CHAR(fecha, 'YYYY-MM-DD') AS fecha, anotacion, estado, id_servicio_principal, hora FROM cita WHERE id_peluqueria = $1 AND fecha = $2";
    const {rows} = await pool.query(query, [id_peluqueria, fecha]);
    return rows;
};

const findByFechaAfecha = async (id_peluqueria, fechad, fechah) => {
    const query = "SELECT id_peluqueria, id_estilista, id_cliente, id_cita, TO_CHAR(fecha, 'YYYY-MM-DD') AS fecha, anotacion, estado, id_servicio_principal, hora FROM cita WHERE id_peluqueria = $1 AND fecha BETWEEN $2 AND $3 ORDER BY fecha ASC";
    const {rows} = await pool.query(query, [id_peluqueria, fechad, fechah]);
    return rows;
};

const findAllByDia = async (id_peluqueria, id_dia) => {
    const query = "SELECT id_peluqueria, id_estilista, id_cliente, id_cita, TO_CHAR(fecha, 'YYYY-MM-DD') AS fecha, anotacion, estado, id_servicio_principal, hora FROM cita WHERE id_peluqueria = $1 AND EXTRACT(DOW FROM fecha) = $2 ORDER BY fecha ASC";
    const {rows} = await pool.query(query, [id_peluqueria, id_dia]);
    return rows;
};

const update = async ( id_estilista, id_cliente, id_servicio_principal, fecha, hora, anotacion, id_cita) => {
    const query = 'UPDATE cita SET id_estilista = $1, id_cliente = $2, id_servicio_principal = $3, fecha = $4, hora= $5, anotacion = $6 WHERE id_cita = $7 RETURNING *';
    const {rows} = await pool.query(query, [ id_estilista, id_cliente, id_servicio_principal, fecha, hora, anotacion, id_cita]);
    return rows;
}

const create = async (id_peluqueria, id_estilista, id_cliente, id_servicio_principal, fecha, hora, anotacion) => {
    const query = 'INSERT INTO cita (id_peluqueria, id_estilista, id_cliente, id_servicio_principal, fecha, hora, anotacion) VALUES ($1, $2, $3, $4, $5, $6, $7) RETURNING *';
    const {rows} = await pool.query(query, [id_peluqueria, id_estilista, id_cliente, id_servicio_principal, fecha, hora, anotacion]);
    return rows;
};

const deleteCita = async (id_cita) => {
    const query = 'DELETE FROM cita WHERE id_cita = $1';
    await pool.query(query, [id_cita]);
    return true;
}

const cancelarCita = async (id_cita, anotacion) => {
    const query = 'UPDATE cita SET estado = false, anotacion = $1 WHERE id_cita = $2 RETURNING *';
    const {rows} = await pool.query(query, [anotacion, id_cita]);
    return rows;
}

const findNoVigentesByEstilista = async (id_estilista, fechainicio, fechafin) => {
    const query = "SELECT id_peluqueria, id_estilista, id_cliente, id_cita, TO_CHAR(fecha, 'YYYY-MM-DD') AS fecha, anotacion, estado, id_servicio_principal, hora FROM cita WHERE id_estilista = $1 AND fecha BETWEEN $2 AND $3 AND estado = false ORDER BY fecha ASC";
    const {rows} = await pool.query(query, [id_estilista, fechainicio, fechafin]);
    return rows;
}

const cambiarEnAtencion = async (id_cita, en_atencion) => {
    const query = 'UPDATE cita SET en_atencion = $1 WHERE id_cita = $2 RETURNING *';
    const {rows} = await pool.query(query, [en_atencion, id_cita]);
    return rows;
}

export const citaModel = {
    findAllActivas,
    findAllInactivas,
    findAllByEstilista,
    findAllByCliente,
    findAllByFecha,
    findByFechaAfecha,
    findAllByDia,
    update,
    create,
    deleteCita,
    cancelarCita,
    findNoVigentesByEstilista,
    cambiarEnAtencion
};
