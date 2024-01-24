import { peluqueriaModel } from "../models/peluqueria.model.js";

const getAll = async (_, res) => {
    try {
        const response = await peluqueriaModel.findAll();
        res.json(response);
    } catch (error) {
        console.log(error);
    }
};

const getById = async (req, res) => {
    try {
        const { id_peluqueria } = req.params;
        const response = await peluqueriaModel.findById(id_peluqueria);
        res.json(response);
    } catch (error) {
        console.log(error);
    }
};

const update = async (req, res) => {
    try {
        const { id_peluqueria } = req.params;
        const { nombre, nit, email, nombre_ceo, telefono, direccion } = req.body;
        const response = await peluqueriaModel.update(id_peluqueria, nombre, nit, email, nombre_ceo, telefono, direccion);
        res.json(response);
    } catch (error) {
        console.log(error);
    }
};

const create = async (req, res) => {
    try {
        const { nombre, nit, email, nombre_ceo, telefono, direccion } = req.body;
        const response = await peluqueriaModel.create(nombre, nit, email, nombre_ceo, telefono, direccion);
        res.json(response);
    } catch (error) {
        console.log(error);
    }
};

export const peluqueriaController = {
    getAll,
    create,
    getById,
    update,
};