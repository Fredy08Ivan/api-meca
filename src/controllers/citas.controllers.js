import {model} from "mongoose";

import models from "../models";

export default{
    addCita : async (req, res, next)=>{
        try{
           const{
            nombre,
           apellidoPat,
           apellidoMat,
           matricula,
           modeloVeh,
           modAño,
           telefono,
           correo,
           fecha 
           }= req.body;

          const cita = new models.Citas({
            nombre,
            apellidoPat,
            apellidoMat,
            matricula,
            modeloVeh,
            modAño,
            telefono,
            correo,
            fecha
          });

          const guardar = await cita.save();
          res.status(200).json(guardar);

        }catch(e){
            res.status(500).send({
                message: "Ocurrio un error al guardar en el servidor"
            })
            next(e);
        }
    },

    consultaCita : async(req, res, next)=>{
        try {
            const ver = await models.Citas.find();
            res.json(ver);
        } catch (e) {
            res.status(500).send({
                message: "Error al consultar en la BD"
            });
            next(e);
        }
    },

    consultarUnaCita : async(req, res , next) =>{
        try {
            const listarUno = await models.Citas.findById(req.params.id);
            if(!listarUno){
                res.status(400).send({
                    message: "El registro no pudo se encontrado"
                });
            }else{
                res.status(200).json(listarUno);
            }
        } catch (e) {
            res.status(500).send({
                message: "Hubo un erro en la conexion con la BD"
            })
            next(e);
        }
    },

    eliminarCita : async(req,res, next)=>{
        try {
            const eliminar = await models.Citas.findByIdAndDelete(req.params.id);
            res.status(200).json(eliminar);
        } catch (e) {
            res.status(500).send({
                message: "El resgistro no se ha encontrado"
            });
            next(e);
        }
    },

    actualizarDatos: async(req, res, next)=>{
        try {
            const{
                nombre,
                apellidoPat,
                apellidoMat,
                matricula,
                modeloVeh,
                modAño,
                telefono,
                correo,
                fecha 
            }=req.body;

            const updateCitas={
                nombre,
                apellidoPat,
                apellidoMat,
                matricula,
                modeloVeh,
                modAño,
                telefono,
                correo,
                fecha 
            };

            const update = await models.Citas.findByIdAndUpdate(req.params, updateCitas);
            res.status(200).json(update);

        } catch (error) {
            res.status(500).send({
                message: "Hubo un error al actualizar los datos"
            })
            next(e);
            
        }
    }


}