import {ticketModelo} from '../models/ticket.model.js';

const getall = async (req, res) => {
    try {
        const {id_peluqueria} = req.params;
        const ticket = await ticketModelo.getall(id_peluqueria);
        res.status(200).json(ticket);
    } catch (error) {
        res.status(500).send(error);
        console.log(error);
    }
};

const getallPendientes = async (req, res) => {
    try {
        const {id_peluqueria} = req.params;
        const ticket = await ticketModelo.getallPendientes(id_peluqueria);
        res.status(200).json(ticket);
    } catch (error) {
        res.status(500).send(error);
        console.log(error);
    }
};

const finalizarAtencion = async (req, res) => {
    try {
        const {anotacion, tipo_transaccion} = req.body;
        const {id_ticket} = req.params;
        const ticket = await ticketModelo.finalizarAtencion(id_ticket, anotacion, tipo_transaccion);
        res.status(200).json(ticket);
    } catch (error) {
        res.status(500).send(error);
        console.log(error);
    }
};

const finalizarVenta = async (req, res) => {
    try {
        const {anotacion, tipo_transaccion} = req.body;
        const {id_ticket} = req.params;
        const ticket = await ticketModelo.finalizarVenta(id_ticket, anotacion, tipo_transaccion);
        res.status(200).json(ticket);
    } catch (error) {
        res.status(500).send(error);
        console.log(error);
    }
};

export const ticketController = {
    getall, 
    getallPendientes, 
    finalizarAtencion, 
    finalizarVenta
};