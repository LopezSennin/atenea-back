import { empleadoModel } from "../models/empleado.model.js";

const getAll = async (req, res) => {
    try {
        const { id_peluqueria } = req.params;
        const response = await empleadoModel.findAll(id_peluqueria);
        res.json(response);
    } catch (error) {
        console.log(error);
    }
};

const getAllByActivo = async (req, res) => {
    try {
        const { id_peluqueria, activo } = req.params;
        const response = await empleadoModel.findAllByActivo(id_peluqueria, activo);
        res.json(response);
    } catch (error) {
        console.log(error);
    }
};

const getAllByRol = async (req, res) => {
    try {
        const { id_peluqueria, id_rol} = req.params;
        const response = await empleadoModel.findAllByRol(id_peluqueria, id_rol);
        res.json(response);
    } catch (error) {
        console.log(error);
    }
};

const getById = async (req, res) => {
    try {
        const { id_peluqueria, id_empleado } = req.params;
        const response = await empleadoModel.findById(id_peluqueria, id_empleado);
        res.json(response);
    } catch (error) {
        console.log(error);
    }
};

const update = async (req, res) => {
    try {
        const { id_peluqueria, id_empleado } = req.params;
        const { nombre, telefono, email, fecha_nacimiento, activo } = req.body;
        const response = await empleadoModel.update(id_peluqueria, id_empleado, nombre, telefono, email, fecha_nacimiento, activo);
        res.json(response);
    } catch (error) {
        console.log(error);
    }
};

const create = async (req, res) => {
    try {
        const { id_peluqueria, id_empleado, nombre, telefono, email, fecha_nacimiento } = req.body;
        const response = await empleadoModel.create(id_peluqueria, id_empleado, nombre, telefono, email, fecha_nacimiento);
        res.json(response);
    } catch (error) {
        console.log(error);
    }
};

export const empleadoController = {
    getAll,
    getAllByActivo,
    getAllByRol,
    getById,
    update,
    create,
};