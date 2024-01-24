const db = require('../databases/conection')
const path = require('path')
class AlunoController{
    home(req, res){
        res.render('home')
    }
    novoAluno(req, res){
        const {matricula, nome, email, turma, serie, sexo, telefone, endereco, responsavel} = req.body
        db.insert({matricula, nome, email, turma, serie, sexo, telefone, endereco, responsavel}).table('alunos').then(data=>{
                console.log(data)
                res.json({message: 'Aluno cadastrado com sucesso'})
            }).catch(error =>{
                console.log(error)
            })
    }
    listarAlunos(req, res){
        db.select("*").table("alunos").then(
            alunos=>{
                console.log(alunos)
                //res.json(alunos)
                res.render('listarAlunos', {bancoAlunos:alunos})
            }
        ).catch(error=>{
            console.log(error)
        })
    }
    

    buscarAlunos(req, res){
        const dados = req.params
        db.select("*").table("alunos").where({matricula:dados.matricula}).then(aluno=>{
            console.log(aluno)
            res.json(aluno)
        }).catch(error=>{
            console.log(error)
        })
    }
    editarAlunos(req, res){
        const {matricula} = req.params
        const {nome, email, turma, serie, sexo, telefone, endereco, responsavel} = req.body
        db.where({matricula:matricula}).update({nome, email, turma, serie, sexo, telefone, endereco, responsavel
        }).table("alunos").then(data=>{
            res.json({massage: "Dados atualizados com sucesso"})
            console.log(data)
        }).catch(error=>{
            res.json(error)
        })
    
    }
   
    formCadastroUser(req, res){
        //res.sendFile(path.join(__dirname, '../views/cad.html'))
        res.render('cad')
    }

    formEditarAluno(req, res){
        const dados = req.params
        db.select("*").table("alunos").where({matricula:dados.matricula}).then(aluno=>{
            console.log(aluno)
            //res.json(aluno)
            if(aluno.length>0){
                res.render('editar', {aluno})
            }else{
                console.log("nenhum aluno")
                res.json({menssage: "Nenhum aluno com esta matricula"})
            }
        }).catch(error=>{
            console.log(error)
        })
    }
    excluirAlunos(req, res){
        const {matricula} = req.params
        db.where({matricula:matricula}).delete().table("alunos").then
        (data=>{
            res.json({message: "Registro deletado com sucesso"})
            console.log(data)
        }).catch(error=>{
            res.json(error)
        })
    }
    formExcluirAluno(req, res){
        const dados = req.params
        db.select("*").table("alunos").where({matricula:dados.matricula}).then(aluno=>{
            console.log(aluno)
            //res.json(aluno)
            if(aluno.length>0){
                res.render('excluir', {aluno})
            }else{
                console.log("nenhum aluno")
                res.json({menssage: "Nenhum aluno com esta matricula"})
            }
        }).catch(error=>{
            console.log(error)
        })
    }

}
module.exports = new AlunoController()
 