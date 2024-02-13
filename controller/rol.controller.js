import { rolModel } from "../models/rol.model.js";

const getAll = async (req, res) => {
    try {
        const { id_peluqueria } = req.params;
        const response = await rolModel.findAll(id_peluqueria);
        res.json(response);
    } catch (error) {
        res.status(500).json({ message: error.message });
        console.log(error);
    }
};

const getById = async (req, res) => {
    try {
        const { id_peluqueria, id_rol } = req.params;
        const response = await rolModel.findById(id_peluqueria, id_rol);
        res.json(response);
    } catch (error) {
        res.status(500).json({ message: error.message });
        console.log(error);
    }
};

const update = async (req, res) => {
    try {
        const { id_rol } = req.params;
        const { nombre, descripcion } = req.body;
        const response = await rolModel.update(id_rol, nombre, descripcion );
        res.json(response);
    } catch (error) {
        res.status(500).json({ message: error.message });
        console.log(error);
    }
};

const create = async (req, res) => {
    try {
        const { id_peluqueria, nombre, descripcion } = req.body;
        const response = await rolModel.create(id_peluqueria, nombre, descripcion );
        res.json(response);
    } catch (error) {
        res.status(500).json({ message: error.message });
        console.log(error);
    }
};

export const rolController = {
    getAll,
    update,
    getById,
    create,
};