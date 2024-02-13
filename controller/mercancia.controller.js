import { mercanciaModel } from "../models/mercancia.model.js";

const getAll = async (req, res) => {
    try {
        const { id_peluqueria } = req.params;
        const response = await mercanciaModel.findAll(id_peluqueria);
        res.json(response);
    } catch (error) {
        res.status(500).json({ message: error.message });
        console.log(error);
    }
};

const getById = async (req, res) => {
    try {
        const { id_mercancia } = req.params;
        const response = await mercanciaModel.findById(id_mercancia);
        res.json(response);
    } catch (error) {
        res.status(500).json({ message: error.message });
        console.log(error);
    }
};

const getByIdPeluqueriaNCodigo = async (req, res) => {
    try {
        const { id_peluqueria, codigo } = req.params;
        const response = await mercanciaModel.findByIdPeluqueriaNCodigo(id_peluqueria, codigo);
        res.json(response);
    } catch (error) {
        res.status(500).json({ message: error.message });
        console.log(error);
    }
};

const update = async (req, res) => {
    try {
        const { id_mercancia } = req.params;
        const { codigo, nombre, detalle, stock, costo, valor_venta } = req.body;
        const response = await mercanciaModel.update( id_mercancia, codigo, nombre, detalle, stock, costo, valor_venta  );
        res.json(response);
    } catch (error) {
        res.status(500).json({ message: error.message });
        console.log(error);
    }
};

const create = async (req, res) => {
    try {
        const { id_peluqueria, codigo, nombre, detalle, stock, costo, valor_venta  } = req.body;
        const response = await mercanciaModel.create( id_peluqueria, codigo, nombre, detalle, stock, costo, valor_venta );
        res.json(response);
    } catch (error) {
        res.status(500).json({ message: error.message });
        console.log(error);
    }
};

export const mercanciaController = {
    getAll,
    getById,
    getByIdPeluqueriaNCodigo,
    update,
    create,
};