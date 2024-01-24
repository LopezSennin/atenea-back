import { clienteModel } from "../models/cliente.model.js";

const getAll = async (req, res) => {
    try {
        const { id_peluqueria } = req.params;
        const response = await clienteModel.findAll(id_peluqueria);
        res.json(response);
    } catch (error) {
        console.log(error);
    }
};

const getById = async (req, res) => {
    try {
        const { id_peluqueria, id_cliente } = req.params;
        const response = await clienteModel.findById(id_peluqueria, id_cliente);
        res.json(response);
    } catch (error) {
        console.log(error);
    }
};

const getHBD = async (req, res) => {
    try {
        const { id_peluqueria } = req.params;
        const response = await clienteModel.findHBD(id_peluqueria);
        res.json(response);
    } catch (error) {
        console.log(error);
    }
};

const update = async (req, res) => {
    try {
        const { id_peluqueria, id_cliente } = req.params;
        const { nombre, telefono, email, ciudad, departamento, pais, fecha_nacimiento, nota } = req.body;
        const response = await clienteModel.update(id_peluqueria, id_cliente, nombre, telefono, email, ciudad, departamento, pais, fecha_nacimiento, nota);
        res.json(response);
    } catch (error) {
        console.log(error);
    }
};

const create = async (req, res) => {
    try {
        const { id_peluqueria, id_cliente, nombre, telefono, email, ciudad, departamento, pais, fecha_nacimiento, nota } = req.body;
        const response = await clienteModel.create(id_peluqueria, id_cliente, nombre, telefono, email, ciudad, departamento, pais, fecha_nacimiento, nota);
        res.json(response);
    } catch (error) {
        console.log(error);
    }
};

export const clienteController = {
    getAll,
    getById,
    getHBD,
    create,
    update,
};