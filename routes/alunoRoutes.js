const express = require('express')
const override = require('method-override')
const alunoController = require('../controllers/alunoController')
const router = express.Router()

router.use(override('_method'))
router.get('/', alunoController.home)
router.post('/cadastro', alunoController.novoAluno)
router.get('/listarAlunos', alunoController.listarAlunos)
router.get('/buscarAluno/:matricula', alunoController.buscarAlunos)
router.put('/editarAluno/:matricula', alunoController.editarAlunos)
router.get('/editarAluno/:matricula', alunoController.formEditarAluno)
router.delete('/excluirAluno/:matricula', alunoController.excluirAlunos)
router.get('/excluirAluno/:matricula', alunoController.formExcluirAluno)
router.get('/formCadastroUser', alunoController.formCadastroUser)

module.exports = router