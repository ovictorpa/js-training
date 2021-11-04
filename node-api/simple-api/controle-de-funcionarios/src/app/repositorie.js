let funcionarios = require("../mocks/funcionarios");

class repositorioDeFuncionarios {

    findAll(){
        return funcionarios;
    }

    findById(id){
        const idFuncionarios = funcionarios.find((funcionarios) => funcionarios.id === id);
        return idFuncionarios
    }

    findByEmail(email){
        const emailFuncionarios = funcionarios.find((funcionarios) => funcionarios.email === email);
        return emailFuncionarios
    }

    create({id, nome, setor, salario, turno, email}) {

        const newFuncionario = {
            id,
            nome,
            setor,
            salario,
            turno,
            email
        }

        funcionarios.push(newFuncionario);
        return newFuncionario;
    }

    delete(id){
        const funcionario = funcionarios.filter((funcionarios) => funcionarios.id !== id);
        funcionarios = funcionario
        return funcionario;
    }
}

module.exports = new repositorioDeFuncionarios();