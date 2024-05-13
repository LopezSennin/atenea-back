import { pool } from "../database/connection.js";

const add = async (id_peluqueria, id_atencion, id_servicio, precio) => {
    const query = `INSERT INTO servicio_en_atencion (id_peluqueria, id_atencion, id_servicio, precio) VALUES ($1, $2, $3, $4) RETURNING *`;
    const {rows} = await pool.query(query, [id_peluqueria, id_atencion, id_servicio, precio]);
    return rows[0];
};

const findAllServiciosByCliente = async (id_cliente) => {
    const query = `SELECT * FROM buscar_servicios_prestados_en_atenciones_por_cliente($1)`;
    const {rows} = await pool.query(query, [id_cliente]);
    return rows;
};

const cambiarInformacion = async (id_servicio_cita, precio, id_servicio) => {
    const query = `UPDATE servicio_en_atencion SET precio = $2, id_servicio = $3 WHERE id_servicio_cita = $1 RETURNING *`;
    const {rows} = await pool.query(query, [id_servicio_cita, precio, id_servicio]);
    return rows[0];
};

const findServiciosPorAtencion = async (id_atencion) => {
    const query = `SELECT * FROM servicio_en_atencion WHERE id_atencion = $1`;
    const {rows} = await pool.query(query, [id_atencion]);
    return rows;
};



export const servicioCitaModel = {
    add,
    cambiarInformacion,
    findServiciosPorAtencion,
    findAllServiciosByCliente
};
