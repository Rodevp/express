const express = require('express')
const app = express()
const PORT = 3000

//los endpoints dinamicos deben ir al final, los especificos deben ir al inicio

//GET
app.get('/', (req, res) => {
    res.send('Hola mundo')
})

app.get('/messages', (req, res) => {
    res.json([
        { message: 'Hola mundo', id: 1 },
        { message: 'Hola mundo', id: 2 },
        { message: 'Hola mundo', id: 3 },
        { message: 'Hola mundo', id: 4 },
        { message: 'Hola mundo', id: 5 },
        { message: 'Hola mundo', id: 6 },
        { message: 'Hola mundo', id: 7 },
        { message: 'Hola mundo', id: 8 }
    ])
})

app.get('/messages/:id', (req, res) => {
    
    const id = req.params.id

    res.json({
        message: 'hola mundo',
        id
    })

})

app.get('/messages/:id/user/:userId',  (req, res) => {
    const { id, userId } = req.params

    res.json({
        id,
        userId
    })

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


app.listen(PORT, () => {
    console.log('server on port: ', PORT, ' http://localhost:3000/')
})

