import {detalleVentaModel} from '../models/detalleVenta.model.js';

const agregarDetalleVenta = async (req, res) => {
    try {
        const {id_mercancia, cantidad, id_venta, id_peluqueria} = req.body;
        const detalle = await detalleVentaModel.agregar(id_mercancia, cantidad, id_venta, id_peluqueria);
        res.status(200).json(detalle);
    } catch (error) {
        res.status(500).send(error);
        console.log(error);
    }
}

const listar = async (req, res) => {
    try {
        const {id_venta} = req.params;
        const detalle = await detalleVentaModel.listar(id_venta);
        res.status(200).json(detalle);
    } catch (error) {
        res.status(500).send(error);
        console.log(error);
    }
}

export const detalleVentaController = {
    agregarDetalleVenta,
    listar
};