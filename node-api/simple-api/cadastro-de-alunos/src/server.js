//Este server utiliza funções middlewares do express e o body-parser
const door = 4004;
const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const database = require('./database');

app.use(bodyParser.urlencoded({ extended: true}));

app.get('/students', (req, res) =>{
    res.send(database.getAllStudents())
})

app.get('/students/:id', (req, res) => {
    res.send(database.getStudentsById(req.params.id))
})

app.post('/students', (req, res) => {

    const student = database.saveStudent({
        nome: req.body.nome,
        cpf: req.body.cpf,
        matricula: req.body.matricula,
        email: req.body.email,
        curso: req.body.curso,
        semestre: req.body.semestre
    })

    res.send(student)
})

app.delete('/students/:id', (req, res) => {
    const deleteStudent = database.deleteStudents(req.params.id)
    res.send(deleteStudent)
})

app.listen(door, () => {
    console.log("==> Servidor Executado na porta 4004 <==")
})