let crearArchivo = (callback) => {
    const {cursos, argv,i} = require('./principal');
    const fs = require('fs');
    
    const {nombreEstudiante, cedula} = argv;
    const {nombre, idCurso, duracion, precio} = cursos[i];

    texto =`
    El estudiante ${nombreEstudiante} con cédula número ${cedula},\r
    se ha matriculado en el curso ${nombre} con id ${idCurso},\r
    el cual tiene una duración de ${duracion} horas y un valor de ${precio} pesos.`;
    
    fs.writeFile('Matricula.txt', texto, (err) => {
        if(err) throw(err);
        console.log('Se ha creado el archivo de su matrícula');
    });
    callback(texto);
}

module.exports = {
    crearArchivo
};
