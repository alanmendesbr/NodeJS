const Pet = require('../models/pets')

module.exports = app => {
    
    app.post('/pet', (req, res) => {
        const pet = req.body

        Pet.adiciona(pet, res)
    })

    app.get('/pet', (req, res) => {
        
        Pet.lista(res)
    })

    // app.patch('/pet', (req, res) => {
    //     res.send('ok')
    // })
    
    // app.delete('/pet', (req, res) => {
    //     res.send('ok')
    // })
}