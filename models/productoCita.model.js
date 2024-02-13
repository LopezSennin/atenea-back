import { pool } from "../database/connection.js";

const add = async (id_peluqueria, id_atencion, id_producto, cantidad, id_servicio) => {
    try {
        const query = 'SELECT actualizar_stock_y_registro($1, $2, $3, $4, $5)';
        const {rows} = await pool.query(query, [id_producto, cantidad, id_atencion, id_peluqueria, id_servicio]);
        return rows; 
    } catch (error) {
        console.log(error);
    }
};

const findProductoCitaByIdAtencion = async (id_atencion) => {
    try {
        const query = 'SELECT * FROM producto_usado_en_atencion WHERE id_atencion = $1';
        const {rows} = await pool.query(query, [id_atencion]);
        return rows;
    } catch (error) {
        console.log(error);
    }
};

const findProductoCitaByIdAtencionDetalle = async (id_atencion) => {
    try {
        const query = 'SELECT obtener_productos_costo_por_atencion($1)';
        const {rows} = await pool.query(query, [id_atencion]);
        return rows;
    } catch (error) {
        console.log(error);
    }
}

const findCostoDeProductos = async (id_atencion) => {
    const query = `SELECT obtener_costo_total_productos_por_atencion($1)`;
    const {rows} = await pool.query(query, [id_atencion]);
    return rows;
};

export const productoCitaModel = {
    add,
    findProductoCitaByIdAtencion,
    findProductoCitaByIdAtencionDetalle,
    findCostoDeProductos
};