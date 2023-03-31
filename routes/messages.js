const router = require('express').Router()

router.get('/', (req, res) => {
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

router.get('/:id', (req, res) => {
    
    const id = req.params.id

    res.json({
        message: 'hola mundo',
        id
    })

})

router.get('/:id/user/:userId',  (req, res) => {
    const { id, userId } = req.params

    res.json({
        id,
        userId
    })

})


module.exports = router