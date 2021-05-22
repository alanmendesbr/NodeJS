const fs = require('fs')

fs.readFile('./assets/boris.jpg', (erro, buffer) => { 
    console.log('imagem foi bufferizada')

    fs.writeFile('./assets/boris2.jpg', buffer, (erro) => {
        console.log('imagem criada')
    })

})