import {tareaModel} from '../models/tarea.model.js';

const getall = async (req, res) => {
    try {
        const {id_peluqueria} = req.params;
        const tareas = await tareaModel.findall(id_peluqueria);
        res.status(200).json(tareas);
    } catch (error) {
        res.status(500).send(error);
        console.log(error);
    }
};

const getone = async (req, res) => {
    try {
        const {id_tarea} = req.params;
        const tarea = await tareaModel.findone(id_tarea);
        res.status(200).json(tarea);
    } catch (error) {
        res.status(500).send(error);
        console.log(error);
    }
};

const add = async (req, res) => {
    try {
        const {id_peluqueria, codigo, nombre, detalle, costo} = req.body;
        const tarea = await tareaModel.add(id_peluqueria, codigo, nombre, detalle, costo);
        res.status(200).json(tarea);
    } catch (error) {
        res.status(500).send(error);
        console.log(error);
    }
};

const update = async (req, res) => {
    try {
        const {id_tarea} = req.params;
        const {codigo, nombre, detalle, costo} = req.body;
        const tarea = await tareaModel.update(id_tarea, codigo, nombre, detalle, costo);
        res.status(200).json(tarea);
    } catch (error) {
        res.status(500).send(error);
        console.log(error);
    }
};

const del = async (req, res) => {
    try {
        const {id_tarea} = req.params;
        const tarea = await tareaModel.del(id_tarea);
        res.status(200).json(tarea);
    } catch (error) {
        res.status(500).send(error);
        console.log(error);
    }
}

export const tareaController = {
    getall,
    getone,
    add,
    update,
    del
};