const fs = require('fs')

fs.createReadStream('./assets/boris.jpg',)
    .pipe(fs.createWriteStream('./assets/boris-stream.jpg'))
    .on('finish', () => console.log('Imagem foi escrita com sucesso'))