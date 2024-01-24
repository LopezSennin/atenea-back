import { rolAsignadoModel } from "../models/rolAsignado.model.js";

const getAll = async (req, res) => {
    try {
        const { id_peluqueria } = req.params;
        const response = await rolAsignadoModel.findAll(id_peluqueria);
        res.json(response);
    } catch (error) {
        console.log(error);
    }
};

const getByIdRol = async (req, res) => {
    try {
        const { id_peluqueria, id_rol } = req.params;
        const response = await rolAsignadoModel.findByIdRol(id_peluqueria, id_rol);
        res.json(response);
    } catch (error) {
        console.log(error);
    }
};

const getByIdEmpleado = async (req, res) => {
    try {
        const { id_peluqueria, id_empleado } = req.params;
        const response = await rolAsignadoModel.findByIdEmpleado(id_peluqueria, id_empleado);
        res.json(response);
    } catch (error) {
        console.log(error);
    }
}

const deleteAsig = async (req, res) => {
    try {
        const { id_asignacion } = req.params;
        const response = await rolAsignadoModel.deleteAsig(id_asignacion );
        res.json(response);
    } catch (error) {
        console.log(error);
    }
};

const create = async (req, res) => {
    try {
        const { id_peluqueria, id_rol, id_empleado } = req.body;
        const response = await rolAsignadoModel.create(id_peluqueria, id_rol, id_empleado );
        res.json(response);
    } catch (error) {
        console.log(error);
    }
};

export const rolAsignadoController = {
    getAll,
    getByIdRol,
    getByIdEmpleado,
    deleteAsig,
    create,
};