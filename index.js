const express = require('express')
const app = express()
const PORT = 3000
const productsRouter = require('./routes/messages.js')

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

//routes separados
app.use('/messages', productsRouter)


app.listen(PORT, () => {
    console.log('server on port: ', PORT, ' http://localhost:3000/')
})

