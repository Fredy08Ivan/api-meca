import moongose, {Schema} from "mongoose";

const citas = new Schema({

    nombre:{type:String},
    apellidoPat:{type:String},
    apellidoMat:{type:String},
    matricula:{type:String},
    modeloVeh:{type:String},
    modAño:{type:Number},
    telefono:{type:Number},
    correo:{type: String},
    fecha:{type:Date, default:Date.now()},
    created_at: {type: Date}
})

const Citas = moongose.model ("citas", citas);
export default Citas;