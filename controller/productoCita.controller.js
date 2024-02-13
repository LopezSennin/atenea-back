import {productoCitaModel} from '../models/productoCita.model.js';

const add = async (req, res) => {
    try {
        const {id_peluqueria, id_atencion, id_producto, cantidad, id_servicio} = req.body;
        const productoCita = await productoCitaModel.add(id_peluqueria, id_atencion, id_producto, cantidad, id_servicio);
        res.status(200).json(productoCita);
    } catch (error) {
        res.status(500).send(error);
        console.log(error);
    }
};

const getProductoCitaByIdAtencion = async (req, res) => {
    try {
        const {id_atencion} = req.params;
        const productoCita = await productoCitaModel.findProductoCitaByIdAtencion(id_atencion);
        res.status(200).json(productoCita);
    } catch (error) {
        res.status(500).send(error);
        console.log(error);
    }
};

const getProductoCitaByIdAtencionDetalle = async (req, res) => {
    try {
        const {id_atencion} = req.params;
        const productoCita = await productoCitaModel.findProductoCitaByIdAtencionDetalle(id_atencion);
        res.status(200).json(productoCita);
    } catch (error) {
        res.status(500).send(error);
        console.log(error);
    }
};

const getCostoDeProductos = async (req, res) => {
    try {
        const {id_atencion} = req.params;
        const costo = await productoCitaModel.findCostoDeProductos(id_atencion);
        res.status(200).json(costo);
    } catch (error) {
        res.status(500).send(error);
        console.log(error);
    }
}


export const productoCitaController = {
    add,
    getProductoCitaByIdAtencion,
    getProductoCitaByIdAtencionDetalle,
    getCostoDeProductos
}