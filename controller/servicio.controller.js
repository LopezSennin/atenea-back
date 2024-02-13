import { servicioModel } from "../models/servicio.model.js";

const getAll = async (req, res) => {
    try {
        const { id_peluqueria } = req.params;
        const response = await servicioModel.findAll(id_peluqueria);
        res.json(response);
    } catch (error) {
        console.log(error);
        res.status(500).json({ message: error.message });
    }
};

const getAllByCode = async (req, res) => {
    try {
        const { id_peluqueria, codigo } = req.params;
        const response = await servicioModel.findAllByCode(id_peluqueria, codigo);
        res.json(response);
    } catch (error) {
        console.log(error);
        res.status(500).json({ message: error.message });
    }
}

const getById = async (req, res) => {
    try {
        const { id_servicio } = req.params;
        const response = await servicioModel.findById(id_servicio);
        res.json(response);
    } catch (error) {
        console.log(error);
        res.status(500).json({ message: error.message });
    }
};

const update = async (req, res) => {
    try {
        const { id_servicio } = req.params;
        const { id_categoria, codigo, descripcion } = req.body;
        const response = await servicioModel.update(id_servicio, id_categoria, codigo, descripcion);
        res.json(response);
    } catch (error) {
        console.log(error);
        res.status(500).json({ message: error.message });
    }
};

const create = async (req, res) => {
    try {
        const { id_peluqueria, id_categoria, codigo, descripcion } = req.body;
        const response = await servicioModel.create(id_peluqueria, id_categoria, codigo, descripcion);
        res.json(response);
    } catch (error) {
        res.status(500).json({ message: error.message });
        console.log(error);
    }
};

export const servicioController = {
    getAll,
    getAllByCode,
    getById,
    update,
    create,
};