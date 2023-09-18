import prisma from "../database/client.js";

const controller = {} //objeto vazio

controller.create = async function(req, res) {
    try {
        //concte-se ao BD e envia uma instrução
        //de criação de um novo documento, com os
        //dados que estão dentro de req.body
        await prisma.professor.create({data: req.body})

        //envia uma resposta da sucesso ao front-end
        //http 201: Created
        res.status(201).end()
    }
    catch(error) {
        //Deu errado: eribe o erro no console do back end
        console.log(error)
        //envia o erro ao front-end, com status 500
        //http 500: Internal, server Error
        res.status(500).send(error)
    }
}

controller.retrieveAll = async function(req, res) {
    try {
        //manda buscar os dados no servidor
        //traz ordenado por nome, depois por nivael
        const result = await prisma.professor.findMany({
            orderBy: [
                { nome: 'asc'} // ordem ascendente
            ]
        })
        res.send(result)
    }
    catch(error) {
        //Deu errado: eribe o erro no console do back end
        console.log(error)
        //envia o erro ao front-end, com status 500
        //http 500: Internal, server Error
        res.status(500).send(error)
    }
}

controller.retrieveOne = async function(req, res) {
    try {
        const result = await prisma.professor.findUnique({
            where: { id: req.params.id }
        })

        //encontrou -> retorna http 200: ok
        if (result) res.send(result)
        //não encontrou -> retorna http 404: not found
        else res.status(404).end()
    }
    catch(error) {
        //Deu errado: eribe o erro no console do back end
        console.log(error)
        //envia o erro ao front-end, com status 500
        //http 500: Internal, server Error
        res.status(500).send(error)
    }
}

controller.update = async function(req, res) {
    try {
        const result = await prisma.professor.update({
            where: { id: req.params.id },
            data: req.body
        })

        //Encontrou e atualizou -> retorna http 204: no content
        if(result) res.status(204).end()
        //Não encontrou (e não atualizou) -> retorna http 404: not found
        else res.status(404).end()
    }
    catch(error) {
        //Deu errado: eribe o erro no console do back end
        console.log(error)
        //envia o erro ao front-end, com status 500
        //http 500: Internal, server Error
        res.status(500).send(error)
    }
}

controller.delete = async function(req, res) {
    try {
        const result = await prisma.professor.delete({
            where: { id: req.params.id}
        })

        //Encontrou e deletou -> retorna http 204: no content
        if(result) res.status(204).end()
        //Não encontrou (e não deletou) -> retorna http 404: not found
        else res.status(404).end()
    }
    catch(error) {
        //Deu errado: eribe o erro no console do back end
        console.log(error)
        //envia o erro ao front-end, com status 500
        //http 500: Internal, server Error
        res.status(500).send(error)
    }
}

export default controller