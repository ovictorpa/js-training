const repositorioDeFuncionarios = require("./repositorie")

class controleDeFuncionarios {

    index(req, res){
        const funcionarios = repositorioDeFuncionarios.findAll();
        res.json(funcionarios);
    }

    show(req, res){
        const {id} = req.params;
        const funcionario = repositorioDeFuncionarios.findById(id);
        res.json(funcionario);
    }

    add(req, res){
        const {
            id,
            nome,
            setor,
            salario,
            turno,
            email
        } = req.body;

        const funcionario = repositorioDeFuncionarios.create({   
            id,
            nome,
            setor,
            salario,
            turno,
            email
        })

        res.json(funcionario);
    }

    delete(req, res){
        const {id} = req.params;
        repositorioDeFuncionarios.delete(id);
        res.sendStatus(204)
    }

}

module.exports = new controleDeFuncionarios();