const { help } = require('yargs')

const descripcion = {
    demand: true,
            alias: 'd',
            desc: 'Descripcion de la tarea por hacer'
};
const completado = {
    demand: true,
            alias: 'c',
            desc: 'Descripcion de la tarea por hacer'
};

const argv = require('yargs')
    .command('crear','Crear un elemento por hacer',{
        descripcion
    })
    .command('actualizar', 'Actualiza el estado completado de una tarea',{
        descripcion,
        completado
})
    
    .command('borrar', 'borra una tarea',{
        descripcion
        
    })

    .help()
    .argv;

    module.exports = {
        argv
    }