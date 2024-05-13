import { pool } from "../database/connection.js";

const create = async (id_peluqueria, id_cliente, diametro, textura, tono_base,porcentage_canas, son_recistente_canas, porosidad, test_elasticidad, tono_deseado, grado_decoloracion, proceso_acomulado, cuero_cabelludo, cabello) => {
    const query = 'INSERT INTO prueba_capilar (id_peluqueria, id_cliente, diametro, textura, tono_base,porcentage_canas, son_recistente_canas, porosidad, test_elasticidad, tono_deseado, grado_decoloracion, proceso_acomulado, cuero_cabelludo, cabello) VALUES ($1, $2, $3, $4, $5, $6, $7, $8, $9, $10, $11, $12, $13, $14) RETURNING *';
    const {rows} = await pool.query(query, [id_peluqueria, id_cliente, diametro, textura, tono_base,porcentage_canas, son_recistente_canas, porosidad, test_elasticidad, tono_deseado, grado_decoloracion, proceso_acomulado, cuero_cabelludo, cabello]);
    return rows[0];
};

const findByIdCliente = async (id_cliente) => {
    const query = "SELECT id_peluqueria, id_prueba_capilar, id_cliente,  TO_CHAR(fecha, 'YYYY-MM-DD') AS fecha , diametro, textura, tono_base, porcentage_canas, son_recistente_canas, porosidad, test_elasticidad, tono_deseado, grado_decoloracion, proceso_acomulado, cuero_cabelludo, cabello FROM prueba_capilar WHERE id_cliente = $1";
    const {rows} = await pool.query(query, [id_cliente]);
    return rows;
};

const findByIdDetalle = async (id_prueba_capilar) => {
    const query = 'SELECT * FROM prueba_capilar WHERE id_prueba_capilar = $1';
    const {rows} = await pool.query(query, [id_prueba_capilar]);
    return rows[0];
};

const findFechaUltimaPruebaCapilar = async (id_cliente) => {
    const query = 'SELECT fecha FROM prueba_capilar WHERE id_cliente = $1 ORDER BY fecha DESC LIMIT 1';
    const {rows} = await pool.query(query, [id_cliente]);
    if (rows.length === 0) {
        return {"fecha": "No hay pruebas capilares"};
    }
    return rows[0];
};

export const pruebaCapilarModel = {
    create,
    findByIdCliente,
    findByIdDetalle,
    findFechaUltimaPruebaCapilar,
};