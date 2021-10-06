const { Router } = require('express');
const router = Router();

const mysqlConection = require('../model/conection');

//---------------------------------------------------
/*
CODES
d300 = Obtener todos los registros
d301 = Obtener un registro
d302 = Crear un registro
d303 = Editar un registro
d304 = Eliminar un registro
*/
//---------------------------------------------------

//Defecto
router.get('/', (req, res) => {
    res.json({ "estado": "La api esta en /api" });
});

//d300
router.get('/api', (req, res) => {
    const consulta = 'SELECT * FROM productos';
    mysqlConection.query(consulta, (error, rows, fields) => {
        if(error){
            console.log(error);
        }else{
            if( rows.length > 0 ){
                res.json(rows);
            }else{
                res.status(404).json( {"estado": "No hay elementos"} );
            }
        }
    });
});

//d301
router.get('/api/d301/:id', (req, res) => {
    const { id } = req.params;

    const consulta = 'SELECT * FROM productos WHERE id = ?';

    mysqlConection.query(consulta, [id], (error, rows, fields) => {
        if(error){
            console.log(error);
        }else{
            if( rows.length > 0 ){
                res.json(rows[0]);
            }else{
                res.status(404).json( {"estado": "Juego no encontrado"} );
            }
        }
    });
});

//d302
router.post('/api/d302', (req, res) => {
    const { nombre, descripcion, tipoProducto, imgUrl, precio } = req.body;

    const consulta = 'INSERT INTO productos (nombre, descripcion, tipoProducto, imgUrl, precio) VALUES (?, ?, ?, ?, ?)';

    mysqlConection.query(consulta, [nombre, descripcion, tipoProducto, imgUrl, precio], (error, rows, fields) => {
        if(error){
            console.log(error);
        }else{
            res.json({"estado": "Guardado"});
        }
    });
});

//d303
router.put('/api/d303/:id', (req, res) => {
    const { idProducto, nombre, descripcion, tipoProducto, imgUrl, precio } = req.body;

    const consulta = 'UPDATE productos SET nombre = ?, descripcion = ?, tipoProducto = ?, imgUrl = ?, precio = ? WHERE id =  ?';

    mysqlConection.query(consulta, [nombre, descripcion, tipoProducto, imgUrl, precio, id], (error, rows, fields) => {
        if(error){
            console.log(error);
        }else{
            res.json({"estado": "Actualizado"});
        }
    });
});

//d304
router.delete('/api/d304/:id', (req, res) => {
    const { id } = req.params;

    const consulta = 'DELETE FROM productos WHERE id = ?';

    mysqlConection.query(consulta, [id], (error, rows, fields) => {
        if(error){
            console.log(error);
        }else{
            res.json({"estado": "Eliminado"});
        }
    });
});

module.exports = router;