import {atencionModel} from '../models/atencion.model.js';

const add = async (req, res) => {
    try {
        const {id_peluqueria, id_cita, precio, detalle} = req.body;
        const atencion = await atencionModel.add(id_peluqueria, id_cita, detalle);
        res.status(200).json(atencion);
    } catch (error) {
        res.status(500).send(error);
        console.log(error);
    }
};

const getAllByIdCliente = async (req, res) => {
    try {
        const {id_cliente} = req.params;
        const atencion = await atencionModel.findAllByIdCliente(id_cliente);
        res.status(200).json(atencion);
    } catch (error) {
        res.status(500).send(error);
        console.log(error);
    }
};

const getSinFinalizar = async (req, res) => {
    try {
        const {id_peluqueria} = req.params;
        const atencion = await atencionModel.findSinFinalizar(id_peluqueria);
        res.status(200).json(atencion);
    } catch (error) {
        res.status(500).send(error);
        console.log(error);
    }
};

const cambiarPrecio = async (req, res) => {
    try {
        const {id_servicio_prestado} = req.params;
        const {precio} = req.body;
        const atencion = await atencionModel.cambiarPrecio(id_servicio_prestado, precio);
        res.status(200).json(atencion);
    } catch (error) {
        res.status(500).send(error);
        console.log(error);
    }
};

const finalizarServicio = async (req, res) => {
    try {
        const {id_servicio_prestado} = req.params;
        const atencion = await atencionModel.finalizarServicio(id_servicio_prestado);
        res.status(200).json(atencion);
    } catch (error) {
        res.status(500).send(error);
        console.log(error);
    }
};

const getServiciosPrestadosPorFecha = async (req, res) => {
    try {
        const {id_pelqueria, fechadesde, fechahasta} = req.params;
        const atencion = await atencionModel.findServiciosPrestadosPorFecha(id_pelqueria, fechadesde, fechahasta);
        res.status(200).json(atencion);
    } catch (error) {
        res.status(500).send(error);
        console.log(error);
    }
};

const getServicioPrestadoPorId = async (req, res) => {
    try {
        const {id_servicio_prestado} = req.params;
        const atencion = await atencionModel.findServicioPrestadoPorId(id_servicio_prestado);
        res.status(200).json(atencion);
    } catch (error) {
        res.status(500).send(error);
        console.log(error);
    }
};

const getServiciosPorCita = async (req, res) => {
    try {
        const {id_cita} = req.params;
        const atencion = await atencionModel.findServiciosPorCita(id_cita);
        res.status(200).json(atencion);
    } catch (error) {
        res.status(500).send(error);
        console.log(error);
    }
};

const registrarCostoServicioPrestado = async (req, res) => {
    try {
        const {id_servicio_prestado} = req.params;
        const {costo} = req.body;
        const atencion = await atencionModel.registrarCostoServicioPrestado(id_servicio_prestado, costo);
        res.status(200).json(atencion);
    } catch (error) {
        res.status(500).send(error);
        console.log(error);
    }
};

const getServiciosPorEmpleado = async (req, res) => {
    try {
        const {id_empleado, fecha_desde, fecha_hasta} = req.params;
        const atencion = await atencionModel.findServiciosPorEmpleado(id_empleado, fecha_desde, fecha_hasta);
        res.status(200).json(atencion);
    } catch (error) {
        res.status(500).send(error);
        console.log(error);
    }
};

export const atencionController = {
    add,
    getSinFinalizar,
    cambiarPrecio,
    finalizarServicio,
    getServiciosPrestadosPorFecha,
    getServicioPrestadoPorId,
    registrarCostoServicioPrestado,
    getServiciosPorEmpleado,
    getServiciosPorCita,
    getAllByIdCliente
};