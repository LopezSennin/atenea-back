import { empleadoModel } from "../models/empleado.model.js";

const getAll = async (req, res) => {
    try {
        const { id_peluqueria } = req.params;
        const response = await empleadoModel.findAll(id_peluqueria);
        res.json(response);
    } catch (error) {
        console.log(error);
        res.status(500).json({ message: error.message });
    }
};

const getAllByActivo = async (req, res) => {
    try {
        const { id_peluqueria, activo } = req.params;
        const response = await empleadoModel.findAllByActivo(id_peluqueria, activo);
        res.json(response);
    } catch (error) {
        console.log(error);
        res.status(500).json({ message: error.message });
    }
};

const getAllByRol = async (req, res) => {
    try {
        const { id_peluqueria, id_rol} = req.params;
        const response = await empleadoModel.findAllByRol(id_peluqueria, id_rol);
        res.json(response);
    } catch (error) {
        console.log(error);
        res.status(500).json({ message: error.message });
    }
};

const getByIdentificacion = async (req, res) => {
    try {
        const { id_peluqueria, identificacion } = req.params;
        const response = await empleadoModel.findByIdentificacion(id_peluqueria, identificacion);
        res.json(response);
    } catch (error) {
        console.log(error);
        res.status(500).json({ message: error.message });
    }
};

const getById = async (req, res) => {
    try {
        const { id_empleado } = req.params;
        const response = await empleadoModel.findById( id_empleado);
        res.json(response);
    } catch (error) {
        console.log(error);
        res.status(500).json({ message: error.message });
    }
};

const getByEmail = async (req, res) => {
    try {
        const { email } = req.params;
        const response = await empleadoModel.findByEmail(email);
        res.json(response);
    } catch (error) {
        console.log(error);
        res.status(500).json({ message: error.message });
    }
};

const update = async (req, res) => {
    try {
        const { id_empleado } = req.params;
        const { nombre, telefono, email, fecha_nacimiento, activo, identificacion } = req.body;
        const response = await empleadoModel.update(id_empleado, nombre, telefono, email, fecha_nacimiento, activo, identificacion);
        res.json(response);
    } catch (error) {
        console.log(error);
        res.status(500).json({ message: error.message });
    }
};

const create = async (req, res) => {
    try {
        const { id_peluqueria, identificacion, nombre, telefono, email, fecha_nacimiento } = req.body;
        const response = await empleadoModel.create(id_peluqueria, identificacion, nombre, telefono, email, fecha_nacimiento);
        res.json(response);
    } catch (error) {
        res.status(500).json({ message: error.message });
        console.log(error);
    }
};

export const empleadoController = {
    getAll,
    getAllByActivo,
    getAllByRol,
    getByIdentificacion,
    getById,
    getByEmail,
    update,
    create,
};