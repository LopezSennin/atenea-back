import {patologiaModel} from '../models/patologia.model.js';


const getByIdCliente = async (req, res) => {
    try {
        const {id_cliente} = req.params;
        const response = await patologiaModel.findByIdCliente(id_cliente);
        res.json(response);
    } catch (error) {
        res.status(500).json({message: error.message});
        console.log(error);
    }
}

const getByIdPatologia = async (req, res) => {
    try {
        const {id_patologia} = req.params;
        const response = await patologiaModel.findByIdPatologia(id_patologia);
        res.json(response);
    } catch (error) {
        res.status(500).json({message: error.message});
        console.log(error);
    }
}

const getProductosAlergia = async (req, res) => {
    try {
        const {id_cliente} = req.params;
        const response = await patologiaModel.findProductosAlergia(id_cliente);
        res.json(response);
    } catch (error) {
        res.status(500).json({message: error.message});
        console.log(error);
    }
}

const create = async (req, res) => {
    try {
        const { id_peluqueria, id_cliente, nombre, detalle} = req.body;
        const response = await patologiaModel.create(id_peluqueria, id_cliente, nombre, detalle);
        res.json(response);
    } catch (error) {
        res.status(500).json({message: error.message});
        console.log(error);
    }
}

const updateById = async (req, res) => {
    try {
        const {id_patologia} = req.params;
        const {nombre, detalle, estado} = req.body;
        const response = await patologiaModel.updateById(id_patologia, nombre, detalle, estado);
        res.json(response);
    } catch (error) {
        res.status(500).json({message: error.message});
        console.log(error);
    }
}

const deleteById = async (req, res) => {
    try {
        const {id_patologia} = req.params;
        const response = await patologiaModel.deleteById(id_patologia);
        res.json(response);
    } catch (error) {
        res.status(500).json({message: error.message});
        console.log(error);
    }
}

export const patologiaController = {
    getByIdCliente,
    getByIdPatologia,
    getProductosAlergia,
    create,
    updateById,
    deleteById,
};