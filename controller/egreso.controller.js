import { egresoModel } from "../models/egreso.model.js";

const getAll = async (req, res) => {
    try {
        const { id_peluqueria } = req.params;
        const response = await egresoModel.findAll(id_peluqueria);
        res.json(response);
    } catch (error) {
        console.log(error);
    }
};

const getAllByDate = async (req, res) => {
    try {
        const { id_peluqueria, fechadesde, fechahasta } = req.params;
        const response = await egresoModel.findAllByDate(id_peluqueria, fechadesde, fechahasta);
        res.json(response);
    } catch (error) {
        console.log(error);
    }
}

const getById = async (req, res) => {
    try {
        const { id_egreso } = req.params;
        const response = await egresoModel.findById(id_egreso);
        res.json(response);
    } catch (error) {
        console.log(error);
        res.status(500).json({ message: error.message });
    }
};

const update = async (req, res) => {
    try {
        const { id_egreso } = req.params;
        const { id_categoria, valor, descripcion } = req.body;
        const response = await egresoModel.update(id_egreso, id_categoria, valor, descripcion);
        res.json(response);
    } catch (error) {
        console.log(error);
        res.status(500).json({ message: error.message });
    }
};

const create = async (req, res) => {
    try {
        const { id_peluqueria, id_categoria, valor, descripcion } = req.body;
        const response = await egresoModel.create(id_peluqueria, id_categoria, valor, descripcion);
        res.json(response);
    } catch (error) {
        res.status(500).json({ message: error.message });
        console.log(error);
    }
};

export const egresoController = {
    getAll,
    getAllByDate,
    getById,
    update,
    create,
};