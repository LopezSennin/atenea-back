import { alergiaModel } from "../models/alergia.model.js";

const getAllAlergias = async (req, res) => {
    try {
        const { id_peluqueria } = req.params;
        const response = await alergiaModel.findAllAlergias(id_peluqueria);
        res.json(response);
    } catch (error) {
        res.status(500).json({ message: error.message });
        console.log(error);
    }
};

const getAll = async (req, res) => {
    try {
        const { id_patologia } = req.params;
        const response = await alergiaModel.findAll(id_patologia);
        res.json(response);
    } catch (error) {
        res.status(500).json({ message: error.message });
        console.log(error);
    }
};

const getByIdCliente = async (req, res) => {
    try {
        const { id_cliente } = req.params;
        const response = await alergiaModel.findByIdCliente(id_cliente);
        res.json(response);
    } catch (error) {
        res.status(500).json({ message: error.message });
        console.log(error);
    }
};

const deleteById = async (req, res) => {
    try {
        const { id_alergia } = req.params;
        const response = await alergiaModel.deleteById(id_alergia);
        res.json(response);
    } catch (error) {
        res.status(500).json({ message: error.message });
        console.log(error);
    }
};

const create = async (req, res) => {
    try {
        const { id_peluqueria, id_patologia, tipo_producto } = req.body;
        const response = await alergiaModel.create(id_peluqueria, id_patologia, tipo_producto);
        res.json(response);
    } catch (error) {
        res.status(500).json({ message: error.message });
        console.log(error);
    }
};

export const alergiaController = {
    getAll,
    getByIdCliente,
    deleteById,
    create,
    getAllAlergias
};