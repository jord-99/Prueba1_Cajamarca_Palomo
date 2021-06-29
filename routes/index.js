const { Router } = require('express');
const { FetchData } = require('../lib/data');


//Inicializamos Router
const router = Router();

//Creacion de los endpoint
router
    .get("/personajes-parametro/:id",(req, res) => {
        var filtrarID 

        const { params: {id} } = req;
    
        (async () => {

            try {
                filtrarID = await FetchData.getCharacter(id);
                resolve(filtrarID);
        
            } catch (error) {
                console.log(error);
            }
        
        })

        if (id == null){
            res.json({
                 msg: "No se ha seleccionado el ID", 
                 body: [] 
            })
        }else{

            res.json({
                msg: "Personajes Filtrados por ID",
                body:[filtrarID]
            })

        }
        res.end();
    })
    .get('/arreglo-ids', (req, res) => {

        var FiltrarIdes;

        const { query: {ids} } = req;
        var ides = ids.split(",");

        (async () => {

            try {
                FiltrarIdes = await FetchData.getSpecificCharacters(ides);
                resolve(FiltrarIdes);
        
            } catch (error) {
                console.log(error);
            }

            res.json({
                msg: "Personajes Filtrados por ID",
                body:[filtrarID]
            })
        
        })
    })
    .get("/pagina",(req, res) => {
        var filtrarPagina

        const { params: {pagina} } = req;
    
        (async () => {

            try {
                filtrarPagina = await FetchData.getByPage(pagina);
                resolve(filtrarPagina);
        
            } catch (error) {
                console.log(error);
            }
        
        })

        if (pagina == null){
            res.json({
                 msg: "No se ha seleccionado la pagina", 
                 body: [] 
            })
        }else{

            res.json({
                msg: "Personajes Filtrados por Pagina",
                body:[filtrarPagina]
            })

        }
        res.end();
    })
    .get("/genero",(req, res) => {
        var filtrarGenero

        const { params: {genero,pagina} } = req;
    
        (async () => {

            try {
                filtrarGenero = await FetchData.getByCharacterGender(genero, pagina);
                resolve(filtrarGenero);
        
            } catch (error) {
                console.log(error);
            }
        
        })

        if (pagina == null){
            res.json({
                 msg: "No se ha encontrado coincidencias", 
                 body: [] 
            })
        }else{

            res.json({
                msg: "Personajes Filtrados por Pagina",
                body:[filtrarGenero]
            })

        }
    })

//Exportamos las rutas
module.exports.RouterIndex = router;


