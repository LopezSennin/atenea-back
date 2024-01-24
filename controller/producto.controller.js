import { productoModel } from "../models/producto.model.js";

const getAll = async (req, res) => {
    try {
        const {id_peluqueria} = req.params;
        const response = await productoModel.findAll(id_peluqueria);
        res.json(response);
    } catch (error) {
        console.log(error);
    }
};

const getById = async (req, res) => {
    try {
        const { id_producto } = req.params;
        const response = await productoModel.findById(id_producto);
        res.json(response);
    } catch (error) {
        console.log(error);
    }
};

const getByType = async (req, res) => {
    try {
        const { tipo } = req.params;
        const response = await productoModel.findByType(tipo);
        res.json(response);
    } catch (error) {
        console.log(error);
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
    }
};

const create = async (req, res) => {
    try {
        const { id_peluqueria, codigo, nombre, descripcion, precio, unidad_medida, stock, tipo } = req.body;
        const response = await productoModel.create(id_peluqueria, codigo, nombre, descripcion, precio, unidad_medida, stock, tipo);
        res.json(response);
    } catch (error) {
        console.log(error);
    }
};

export const productoController = {
    getAll,
    getByType,
    getById,
    create,
    update,
};