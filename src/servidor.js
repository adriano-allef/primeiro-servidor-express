import express from 'express'

const servidor = express()

// servidor.get('/', (requisicao, resposta) => {

// })

// outra forma de fazer

const controlador = (requisicao, resposta) =>{
    return resposta.send('Meu primeiro servidor Node.js com express')
}

servidor.get('/home', controlador)

servidor.listen(3000)