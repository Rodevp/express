const express = require('express')
const app = express()
const PORT = 3000
const productsRouter = require('./routes/messages.js')

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

    res.json({
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


app.listen(PORT, () => {
    console.log('server on port: ', PORT, ' http://localhost:3000/')
})

