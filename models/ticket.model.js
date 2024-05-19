import { pool } from "../database/connection.js";

const getall = async (id_peluqueria) => {
    const query = `SELECT * FROM tickets_pago WHERE id_peluqueria = $1 order by vigente desc`;
    const {rows} = await pool.query(query, [id_peluqueria]);
    return rows;
};

const getallPendientes = async (id_peluqueria) => {
    const query = `SELECT * FROM tickets_pago WHERE id_peluqueria = $1 AND vigente = true`;
    const {rows} = await pool.query(query, [id_peluqueria]);
    return rows;
};

const finalizarAtencion = async (id_ticket, tipo_transaccion, anotacion) => {
    const query = `SELECT finalizar_ticket_atencion($1, $2, $3)`;
    const {rows} = await pool.query(query, [id_ticket, tipo_transaccion, anotacion]);
    return rows;
}

const finalizarVenta = async (id_ticket, tipo_transaccion, anotacion) => {
    const query = `SELECT finalizar_ticket_mercancia($1, $2, $3)`;
    const {rows} = await pool.query(query, [id_ticket, tipo_transaccion, anotacion]);
    return rows;
}

export const ticketModelo = {
    getall,
    getallPendientes,
    finalizarAtencion,
    finalizarVenta
};