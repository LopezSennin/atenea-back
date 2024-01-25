import { categoriaEgresoModel } from "../models/categoriaEgreso.model.js";

const getAll = async (req, res) => {
    try {
        const { id_peluqueria } = req.params;
        const response = await categoriaEgresoModel.findAll(id_peluqueria);
        res.json(response);
    } catch (error) {
        console.log(error);
    }
};

const getById = async (req, res) => {
    try {
        const { id_tipo } = req.params;
        const response = await categoriaEgresoModel.findById(id_tipo);
        res.json(response);
    } catch (error) {
        console.log(error);
    }
};

const update = async (req, res) => {
    try {
        const { id_tipo } = req.params;
        const { tipo } = req.body;
        const response = await categoriaEgresoModel.update(id_tipo, tipo);
        res.json(response);
    } catch (error) {
        console.log(error);
    }
};

const create = async (req, res) => {
    try {
        const { id_peluqueria, tipo } = req.body;
        const response = await categoriaEgresoModel.create(id_peluqueria, tipo);
        res.json(response);
    } catch (error) {
        console.log(error);
    }
};

export const categoriaEgresoController = {
    getAll,
    create,
    getById,
    update,
};