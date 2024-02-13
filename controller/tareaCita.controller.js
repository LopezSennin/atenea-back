import {tareaCitaModel} from '../models/tareaCita.model.js';

const add = async (req, res) => {
    try {
        const {id_peluqueria, id_auxiliar, id_tarea, anotacion} = req.body;
        const tareaCita = await tareaCitaModel.add(id_peluqueria, id_auxiliar, id_tarea, anotacion);
        res.status(200).json(tareaCita);
    } catch (error) {
        res.status(500).send(error);
        console.log(error);
    }
};

const del = async (req, res) => {
    try {
        const {id_tarea_cita} = req.params;
        const tareaCita = await tareaCitaModel.del(id_tarea_cita);
        res.status(200).json(tareaCita);
    } catch (error) {
        res.status(500).send(error);
        console.log(error);
    }
};

const getAllByFechaAfecha = async (req, res) => {
    try {
        const {id_peluqueria, id_fechad, id_fechah} = req.params;
        const tareaCita = await tareaCitaModel.findAllByFechaAfecha(id_peluqueria, id_fechad, id_fechah);
        res.status(200).json(tareaCita);
    } catch (error) {
        res.status(500).send(error);
        console.log(error);
    }
};

const finalizarTarea = async (req, res) => {
    try {
        const {id_asignacion} = req.params;
        const tareaCita = await tareaCitaModel.finalizarTarea(id_asignacion);
        res.status(200).json(tareaCita);
    } catch (error) {
        res.status(500).send(error);
        console.log(error);
    }
};

const getAllByAuxiliarFechaAfecha = async (req, res) => {
    try {
        const {id_auxiliar, id_fechad, id_fechah} = req.params;
        const tareaCita = await tareaCitaModel.findAllByAuxiliarFechaAfecha(id_auxiliar, id_fechad, id_fechah);
        res.status(200).json(tareaCita);
    } catch (error) {
        res.status(500).send(error);
        console.log(error);
    }
};

const getAllAsignaciones = async (req, res) => {
    try {
        const {id_peluqueria} = req.params;
        const tareaCita = await tareaCitaModel.findAllAsignaciones(id_peluqueria);
        res.status(200).json(tareaCita);
    } catch (error) {
        res.status(500).send(error);
        console.log(error);
    }
};

const getAllPendientes = async (req, res) => {
    try {
        const {id_auxiliar} = req.params;
        const tareaCita = await tareaCitaModel.findAllPendientes(id_auxiliar);
        res.status(200).json(tareaCita);
    } catch (error) {
        res.status(500).send(error);
        console.log(error);
    }
};


export const tareaCitaController = {
    add,
    del,
    getAllByFechaAfecha,
    finalizarTarea,
    getAllByAuxiliarFechaAfecha,
    getAllAsignaciones,
    getAllPendientes
};