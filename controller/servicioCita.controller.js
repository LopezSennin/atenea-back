import {servicioCitaModel} from '../models/servicioCita.model.js';

const add = async (req, res) => {
    try {
        const {id_peluqueria, id_atencion, id_servicio, precio} = req.body;
        const servicioCita = await servicioCitaModel.add(id_peluqueria, id_atencion, id_servicio, precio);
        res.status(200).json(servicioCita);
    } catch (error) {
        res.status(500).send(error);
        console.log(error);
    }
};

const getAllServiciosByCliente = async (req, res) => {
    try {
        const {id_cliente} = req.params;
        const servicios = await servicioCitaModel.findAllServiciosByCliente(id_cliente);
        res.status(200).json(servicios);
    } catch (error) {
        res.status(500).send(error);
        console.log(error);
    }
}

const cambiarInformacion = async (req, res) => {
    try {
        const {id_servicio_cita} = req.params;
        const {precio, id_servicio} = req.body;
        const servicioCita = await servicioCitaModel.cambiarInformacion(id_servicio_cita, precio, id_servicio);
        res.status(200).json(servicioCita);
    } catch (error) {
        res.status(500).send(error);
        console.log(error);
    }
}

const getServiciosPorAtencion = async (req, res) => {
    try {
        const {id_atencion} = req.params;
        const servicios = await servicioCitaModel.findServiciosPorAtencion(id_atencion);
        res.status(200).json(servicios);
    } catch (error) {
        res.status(500).send(error);
        console.log(error);
    }
}



export const servicioCitacController = {
    add,
    cambiarInformacion,
    getServiciosPorAtencion,
    getAllServiciosByCliente
};