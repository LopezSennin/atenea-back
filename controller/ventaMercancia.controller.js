import {ventaMercanciaModel} from '../models/ventaMercancia.model.js';

const iniciarVentaMercancia = async (req, res) => {
    try {
        const {id_peluqueria, id_cliente, id_vendedor} = req.body; 
        const venta = await ventaMercanciaModel.iniciar(id_peluqueria, id_cliente, id_vendedor);
        res.status(200).json(venta);
    } catch (error) {
        res.status(500).send(error);
        console.log(error);
    }
}

const listarVentasFinalizadas = async (req, res) => {
    try {
        const {id_peluqueria} = req.params;
        const ventas = await ventaMercanciaModel.listarVentasFinalizadas(id_peluqueria);
        res.status(200).json(ventas);
    } catch (error) {
        res.status(500).send(error);
        console.log(error);
    }
}

const getVentaMercanciaDetalle = async (req, res) => {
    try {
        const {id_venta} = req.params;
        const venta = await ventaMercanciaModel.getVentaMercanciaDetalle(id_venta);
        res.status(200).json(venta);
    } catch (error) {
        res.status(500).send(error);
        console.log(error);
    }
}

const listarFechaAFecha = async (req, res) => {
    try {
        const {id_peluqueria, fecha1, fecha2} = req.params;
        const ventas = await ventaMercanciaModel.listarFechaAFecha(id_peluqueria, fecha1, fecha2);
        res.status(200).json(ventas);
    } catch (error) {
        res.status(500).send(error);
        console.log(error);
    }
}

const listarFechaAFechaVendedor = async (req, res) => {
    try {
        const {id_vendedor, fecha1, fecha2} = req.params;
        const ventas = await ventaMercanciaModel.listarFechaAFechaVendedor(id_vendedor, fecha1, fecha2);
        res.status(200).json(ventas);
    } catch (error) {
        res.status(500).send(error);
        console.log(error);
    }
}

const listarFechaAFechaCliente = async (req, res) => {
    try {
        const {id_cliente, fecha1, fecha2} = req.params;
        const ventas = await ventaMercanciaModel.listarFechaAFechaCliente(id_cliente, fecha1, fecha2);
        res.status(200).json(ventas);
    } catch (error) {
        res.status(500).send(error);
        console.log(error);
    }
}

const finalizarVentaMercancia = async (req, res) => {
    try {
        const {id_venta, id_peluqueria} = req.params;
        const venta = await ventaMercanciaModel.finalizar(id_venta, id_peluqueria);
        res.status(200).json(venta);
    } catch (error) {
        res.status(500).send(error);
        console.log(error);
    }
}

const listarVentasSinFinalizarVendedor = async (req, res) => {
    try {
        const {id_vendedor} = req.params;
        const ventas = await ventaMercanciaModel.getVentasSinFinalizarVendedor(id_vendedor);
        res.status(200).json(ventas);
    } catch (error) {
        res.status(500).send(error);
        console.log(error);
    }
}

const eliminarVentaMercancia = async (req, res) => {
    try {
        const {id_venta} = req.params;
        const venta = await ventaMercanciaModel.eliminar(id_venta);
        res.status(200).json(venta);
    } catch (error) {
        res.status(500).send(error);
        console.log(error);
    }
}

export const ventaMercanciaController = {
    iniciarVentaMercancia,
    listarFechaAFecha,
    listarFechaAFechaVendedor,
    listarFechaAFechaCliente,
    finalizarVentaMercancia,
    listarVentasSinFinalizarVendedor,
    eliminarVentaMercancia,
    getVentaMercanciaDetalle,
    listarVentasFinalizadas
};