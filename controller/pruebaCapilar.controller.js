import {pruebaCapilarModel} from '../models/pruebaCapilar.model.js';

const add = async (req, res) => {
    try {
        const { id_peluqueria, id_cliente, diametro, textura, tono_base,porcentage_canas, son_recistente_canas, porosidad, test_elasticidad, tono_deseado, grado_decoloracion, proceso_acomulado, cuero_cabelludo, cabello} = req.body;
        const response = await pruebaCapilarModel.create(id_peluqueria, id_cliente, diametro, textura, tono_base,porcentage_canas, son_recistente_canas, porosidad, test_elasticidad, tono_deseado, grado_decoloracion, proceso_acomulado, cuero_cabelludo, cabello);
        res.json(response);
    } catch (error) {
        res.status(500).json({ message: error.message });
        console.log(error);
    }
};

const getPruebaCapilarByIdCliente = async (req, res) => {
    try {
        const { id_cliente } = req.params;
        const response = await pruebaCapilarModel.findByIdCliente(id_cliente);
        res.json(response);
    } catch (error) {
        res.status(500).json({ message: error.message });
        console.log(error);
    }
};

const getPruebaCapilarByIdDetalle = async (req, res) => {
    try {
        const { id_prueba_capilar } = req.params;
        const response = await pruebaCapilarModel.findByIdDetalle(id_prueba_capilar);
        res.json(response);
    } catch (error) {
        res.status(500).json({ message: error.message });
        console.log(error);
    }
};

const getFechaUltimaPruebaCapilar = async (req, res) => {
    try {
        const { id_cliente } = req.params;
        const response = await pruebaCapilarModel.findFechaUltimaPruebaCapilar(id_cliente);
        res.json(response);
    } catch (error) {
        res.status(500).json({ message: error.message });
        console.log(error);
    }
};

export const pruebaCapilarController = {
    add,
    getPruebaCapilarByIdCliente,
    getPruebaCapilarByIdDetalle,
    getFechaUltimaPruebaCapilar,
};