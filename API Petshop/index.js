const customExpress = require('./config/customExpress')
const conexao = require('./infraestrutura/conexao')
const Tabelas = require('./infraestrutura/tabelas')

// Passando Conexão
conexao.connect(erro => {
    if (erro){
        console.log(erro)
    }

    console.log('conectado com sucesso')

    Tabelas.init(conexao) 
    const app = customExpress()

    app.listen(3000, () => console.log('Servidor rodando na porta 3000'))

})