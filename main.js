const alunos = []
alunos.push({
    nome: "Gabriel",
    nota: 5
})

alunos.push({
    nome: "Léia",
    nota: 10
})

alunos.push({
    nome: "Thalita",
    nota: 7
})

const retornaAlunosAprovados = alunos.filter(function(aluno) {
    return aluno.nota > 6
})

console.log(retornaAlunosAprovados)



