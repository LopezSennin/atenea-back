import { pool } from "../database/connection.js";

const agregar = async (id_mercancia, cantidad, id_venta, id_peluqueria) => {
    const query = 'SELECT actualizar_stock_y_registro_mercancia( $1, $2, $3, $4)';
    const {rows} = await pool.query(query, [id_mercancia, cantidad, id_venta, id_peluqueria]);
    return rows[0];
}

const listar = async (id_venta) => {
    const query = 'SELECT * FROM detalle_venta WHERE id_venta = $1';
    const {rows} = await pool.query(query, [id_venta]);
    return rows;
}

export const detalleVentaModel = {
    agregar,
    listar
};