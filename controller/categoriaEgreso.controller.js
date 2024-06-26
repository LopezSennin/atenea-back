import { categoriaEgresoModel } from "../models/categoriaEgreso.model.js";

const getAll = async (req, res) => {
    try {
        const { id_peluqueria } = req.params;
        const response = await categoriaEgresoModel.findAll(id_peluqueria);
        res.json(response);
    } catch (error) {
        res.status(500).json({ message: error.message });
        console.log(error);
    }
};

const getById = async (req, res) => {
    try {
        const { id_categoria } = req.params;
        const response = await categoriaEgresoModel.findById(id_categoria);
        res.json(response);
    } catch (error) {
        console.log(error);
        res.status(500).json({ message: error.message });
    }
};

const update = async (req, res) => {
    try {
        const { id_categoria } = req.params;
        const { nombre, descripcion } = req.body;
        const response = await categoriaEgresoModel.update(id_categoria, nombre, descripcion);
        res.json(response);
    } catch (error) {
        console.log(error);
        res.status(500).json({ message: error.message });
    }
};

const deleteCategoriaEgreso = async (req, res) => {
    try {
        const { id_categoria } = req.params;
        const response = await categoriaEgresoModel.deleteById(id_categoria);
        res.json(response);
    } catch (error) {
        console.log(error);
        res.status(500).json({ message: error.message });
    }
};

const create = async (req, res) => {
    try {
        const { id_peluqueria, nombre, descripcion } = req.body;
        const response = await categoriaEgresoModel.create(id_peluqueria, nombre, descripcion);
        res.json(response);
    } catch (error) {
        console.log(error);
        res.status(500).json({ message: error.message });
    }
};

export const categoriaEgresoController = {
    getAll,
    getById,
    deleteCategoriaEgreso,
    update,
    create,
};