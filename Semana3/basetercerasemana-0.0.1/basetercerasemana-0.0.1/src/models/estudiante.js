const mongoose = require('mongoose')
const Schema =mongoose.Schema;

const estudianteSchema = new Schema({
    nombre : {
        type: String,
        require: true
    },
    matematicas: {
        type: Number
    },
    ingles: {
        type: Number
    },
    programacion: {
        type: Number
    },
});

const Estudiante = mongoose.model('Estudiante', estudianteSchema);

module.exports = Estudiante