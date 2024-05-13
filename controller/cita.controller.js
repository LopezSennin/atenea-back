import { citaModel } from "../models/cita.model.js";

const getAllActivas = async (req, res) => {
    try {
        const { id_peluqueria } = req.params;
        const response = await citaModel.findAllActivas(id_peluqueria);
        res.json(response);
    } catch (error) {
        console.log(error)
        res.status(500).json({ message: error.message });
    }
};

const getAllInactivas = async (req, res) => {
    try {
        const { id_peluqueria } = req.params;
        const response = await citaModel.findAllInactivas(id_peluqueria);
        res.json(response);
    } catch (error) {
        console.log(error)
        res.status(500).json({ message: error.message });
    }
};


const getAllByEstilista = async (req, res) => {
    try {
        const { id_estilista } = req.params;
        const response = await citaModel.findAllByEstilista( id_estilista);
        res.json(response);
    } catch (error) {
        console.log(error)
        res.status(500).json({ message: error.message });
    }
};

const getAllByCliente = async (req, res) => {
    try {
        const { id_cliente } = req.params;
        const response = await citaModel.findAllByCliente( id_cliente );
        res.json(response);
    } catch (error) {
        console.log(error)
        res.status(500).json({ message: error.message });
    }
}

const getAllByFecha = async (req, res) => {
    try {
        const { id_peluqueria, fecha } = req.params;
        const response = await citaModel.findAllByFecha(id_peluqueria, fecha);
        res.json(response);
    } catch (error) {
        console.log(error)
        res.status(500).json({ message: error.message });
    }
};

const getByFechaAfecha = async (req, res) => {
    try {
        const { id_peluqueria, fechad, fechah } = req.params;
        const response = await citaModel.findByFechaAfecha(id_peluqueria, fechad, fechah);
        res.json(response);
    } catch (error) {
        console.log(error)
        res.status(500).json({ message: error.message });
    }
};

const getAllByDia = async (req, res) => {
    try {
        const { id_peluqueria, id_dia } = req.params;
        const response = await citaModel.findAllByDia(id_peluqueria, id_dia);
        res.json(response);
    } catch (error) {
        console.log(error)
        res.status(500).json({ message: error.message });
    }
};

const update = async (req, res) => {
    try {
        const { id_cita } = req.params;
        const {  id_estilista, id_cliente, id_servicio_principal, fecha, hora, anotacion } = req.body;
        const response = await citaModel.update( id_estilista, id_cliente, id_servicio_principal, fecha, hora, anotacion, id_cita);
        res.json(response);
    } catch (error) {
        console.log(error);
        res.status(500).json({ message: error.message });
    }
};

const create = async (req, res) => {
    try {
        const { id_peluqueria, id_estilista, id_cliente, id_servicio_principal, fecha, hora, anotacion } = req.body;
        const response = await citaModel.create( id_peluqueria, id_estilista, id_cliente, id_servicio_principal, fecha, hora, anotacion);
        res.json(response);
    } catch (error) {
        console.log(error);
        res.status(500).json({ message: error.message });
    }
};

const deleteCita = async (req, res) => {
    try {
        const { id_cita } = req.params;
        const response = await citaModel.deleteCita(id_cita);
        res.json(response);
    } catch (error) {
        console.log(error);
        res.status(500).json({ message: error.message });
    }
};

const cancelarCita = async (req, res) => {
    try {
        const { id_cita } = req.params;
        const { anotacion } = req.body;
        const response = await citaModel.cancelarCita(id_cita, anotacion);
        res.json(response);
    } catch (error) {
        console.log(error);
        res.status(500).json({ message: error.message });
    }
}

const getNoVigentesByEstilista = async (req, res) => {
    try {
        const { id_estilista, fechainicio, fechafin } = req.params;
        const response = await citaModel.findNoVigentesByEstilista(id_estilista, fechainicio, fechafin);
        res.json(response);
    } catch (error) {
        console.log(error)
        res.status(500).json({ message: error.message });
    }
}

const cambiarEnAtencion = async (req, res) => {
    try {
        const { id_cita } = req.params;
        const {en_atencion} = req.body;
        const response = await citaModel.cambiarEnAtencion(id_cita, en_atencion);
        res.json(response);
    } catch (error) {
        console.log(error);
        res.status(500).json({ message: error.message });
    }
}

export const citaController = {
    getAllActivas,
    getAllInactivas,
    getAllByEstilista,
    getAllByCliente,
    getAllByFecha,
    getByFechaAfecha,
    getAllByDia,
    update,
    create,
    deleteCita,
    cancelarCita,
    getNoVigentesByEstilista,
    cambiarEnAtencion
};
