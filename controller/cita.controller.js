import { citaModel } from "../models/cita.model.js";

const getAll = async (req, res) => {
    try {
        const { id_peluqueria } = req.params;
        const response = await citaModel.findAll(id_peluqueria);
        res.json(response);
    } catch (error) {
        console.log(error)
        res.status(500).json({ message: error.message });
    }
};

const getAllByEstilista = async (req, res) => {
    try {
        const { id_peluqueria, id_empleado } = req.params;
        const response = await citaModel.findAllByEstilista(id_peluqueria, id_empleado);
        res.json(response);
    } catch (error) {
        console.log(error)
        res.status(500).json({ message: error.message });
    }
};

const getAllByFecha = async (req, res) => {
    try {
        const { id_peluqueria, fecha } = req.params;
        const response = await citaModel.findAllByFecha(id_peluqueria, fecha);
        res.json(response);
    } catch (error) {
        console.log(error)
        res.status(500).json({ message: error.message });
    }
};

const getByFechaAfecha = async (req, res) => {
    try {
        const { id_peluqueria, fechad, fechah } = req.params;
        const response = await citaModel.findByFechaAfecha(id_peluqueria, fechad, fechah);
        res.json(response);
    } catch (error) {
        console.log(error)
        res.status(500).json({ message: error.message });
    }
};

const getAllByDia = async (req, res) => {
    try {
        const { id_peluqueria, id_dia } = req.params;
        const response = await citaModel.findAllByDia(id_peluqueria, id_dia);
        res.json(response);
    } catch (error) {
        console.log(error)
        res.status(500).json({ message: error.message });
    }
};

const update = async (req, res) => {
    try {
        const { id_producto } = req.params;
        const { codigo, nombre, descripcion, precio, unidad_medida, stock, tipo } = req.body;
        const response = await productoModel.update(id_producto, codigo, nombre, descripcion, precio, unidad_medida, stock, tipo);
        res.json(response);
    } catch (error) {
        console.log(error);
        res.status(500).json({ message: error.message });
    }
};

const create = async (req, res) => {
    try {
        const { id_peluqueria, codigo, nombre, descripcion, precio, unidad_medida, stock, tipo } = req.body;
        const response = await productoModel.create(id_peluqueria, codigo, nombre, descripcion, precio, unidad_medida, stock, tipo);
        res.json(response);
    } catch (error) {
        console.log(error);
        res.status(500).json({ message: error.message });
    }
};

export const citaController = { getAll, getAllByEstilista, getAllByFecha, getByFechaAfecha, getAllByDia, update, create };