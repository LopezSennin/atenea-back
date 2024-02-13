import { clienteModel } from "../models/cliente.model.js";

const getAll = async (req, res) => {
    try {
        const { id_peluqueria } = req.params;
        const response = await clienteModel.findAll(id_peluqueria);
        res.json(response);
    } catch (error) {
        console.log(error);
        res.status(500).json({ message: error.message });
    }
};

const getById = async (req, res) => {
    try {
        const { id_cliente } = req.params;
        const response = await clienteModel.findById(id_cliente);
        res.json(response);
    } catch (error) {
        console.log(error);
        res.status(500).json({ message: error.message });
    }
};

const getByIdentificacion = async (req, res) => {
    try {
        const { id_peluqueria, identificacion } = req.params;
        const response = await clienteModel.findByIdentificacion(id_peluqueria, identificacion);
        res.json(response);
    } catch (error) {
        console.log(error);
        res.status(500).json({ message: error.message });
    }
};

const getHBD = async (req, res) => {
    try {
        const { id_peluqueria } = req.params;
        const response = await clienteModel.findHBD(id_peluqueria);
        res.json(response);
    } catch (error) {
        console.log(error);
        res.status(500).json({ message: error.message });
    }
};

const update = async (req, res) => {
    try {
        const { id_cliente } = req.params;
        const { identificacion, nombre, telefono, email, ciudad, departamento, pais, fecha_nacimiento, nota } = req.body;
        const response = await clienteModel.update( id_cliente, identificacion, nombre, telefono, email, ciudad, departamento, pais, fecha_nacimiento, nota);
        res.json(response);
    } catch (error) {
        console.log(error);
        res.status(500).json({ message: error.message });
    }
};

const create = async (req, res) => {
    try {
        const {id_peluqueria, identificacion, nombre, telefono, email, ciudad, departamento, pais, fecha_nacimiento, nota } = req.body;
        const response = await clienteModel.create( id_peluqueria, identificacion, nombre, telefono, email, ciudad, departamento, pais, fecha_nacimiento, nota);
        res.json(response);
    } catch (error) {
        console.log(error);
        res.status(500).json({ message: error.message });
    }
};

export const clienteController = {
    getAll,
    getById,
    getByIdentificacion,
    getHBD,
    update,
    create,
};