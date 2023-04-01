const express = require('express')
const app = express()
const PORT = 3000
const productsRouter = require('./routes/messages.js')
const { ErrorHandler, LogErrors} = require('./middlewares/errorHandles')

//middlewares
app.use( express.json() )

//los endpoints dinamicos deben ir al final, los especificos deben ir al inicio

//GET
app.get('/', (req, res) => {
    res.send('Hola mundo')
})

//GET-QUERY PARAMS -> mayormente se usan para filtros
app.get('/posts', (req, res) => {

    const { limit, offset } = req.query

    if (limit && offset) {
        res.json({
            limit, 
            offset
        })
    } else {
        res.send('no hay filtros beibe')
    }


})


//POST
app.post('/user', (req, res) => {
    
    const body = req.body

    //condigo de respuesta para los recurso
    res.status(201).json({
        message: 'created',
        data: body
    })

})

//Update -> envia todos los atributos para hacer partial
app.put('/user/:id', (req, res) => {
    //actualización completa
})

//patch -> actualizacion parcial
app.patch('/user/:id', (req, res) => {
    //logica para actualización parcial
})

//delete -> eliminar
app.delete('/user/:id', (req, res) => {
    //logica para eliminar
})


//routes separados
app.use('/messages', productsRouter)

//capturar errores desde el routing de forma que ese error va hacia el catch más cercano
//MIDDLEWARES
/**
 * SON FUNCIONES QUE ESTÁN EN LA MITAD PARA VALIDAR ANTES DE RECIBIR Y MANDAR UNA RESPUESTA
 * SE PUEDEN USAR DE MANERA GLOBAL Y LOCAL
 * FUNCIONAN DE MANERA SECUANCIAL
 * 
 * - FUNCIONAN COMO PIPES
 * - VALIDAR DATOS
 * - CAPTURAR ERRORES
 * - VALIDAR PERMISOS
 * - CONTROLAR ACCESOS
 * 
 */


app.get('/example', (req, res, next) => {
    try {
        //logica
    } catch (error) {
        next(error.message) //mandamos el error hacia los middlewares de tipo error de manera
        //global, que siga la ejecución
    }
})


app.use(LogErrors)
app.use(ErrorHandler)


app.listen(PORT, () => {
    console.log('server on port: ', PORT, ' http://localhost:3000/')
})

