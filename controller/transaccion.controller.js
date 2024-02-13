import {transaccionModel} from '../models/transaccion.model.js';

const agregarTransaccion = async (req, res) => {
    try {
        const {id_peluqueria, id_cliente, tipo_transaccion, monto, anotacion, referencia} = req.body;
        const transacion = await transaccionModel.agregar(id_peluqueria, id_cliente, tipo_transaccion, monto, anotacion, referencia);
        res.status(200).json(transacion);
    } catch (error) {
        res.status(500).send(error);
        console.log(error);
    }
}

const deudaCliente = async (req, res) => {
    try {
        const {id_cliente} = req.params;
        const deuda = await transaccionModel.deudaCliente(id_cliente);
        res.status(200).json(deuda);
    } catch (error) {
        res.status(500).send(error);
        console.log(error);
    }
}

const deudaActivas = async (req, res) => {
    try {
        const {id_peluqueria} = req.params;
        const deuda = await transaccionModel.deudaActivas(id_peluqueria);
        res.status(200).json(deuda);
    } catch (error) {
        res.status(500).send(error);
        console.log(error);
    }
}

const detalleTransaccion = async (req, res) => {
    try {
        const {id_transaccion} = req.params;
        const transaccion = await transaccionModel.detalleTransaccion(id_transaccion);
        res.status(200).json(transaccion);
    } catch (error) {
        res.status(500).send(error);
        console.log(error);
    }
}

const transaccionesFechaAFecha = async (req, res) => {
    try {
        const {id_peluqueria, fecha_inicio, fecha_fin} = req.params;
        const transacciones = await transaccionModel.transaccionesFechaAFecha(id_peluqueria, fecha_inicio, fecha_fin);
        res.status(200).json(transacciones);
    } catch (error) {
        res.status(500).send(error);
        console.log(error);
    }
}

export const transaccionController = {
    agregarTransaccion,
    deudaCliente,
    deudaActivas,
    detalleTransaccion,
    transaccionesFechaAFecha
};