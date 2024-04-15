class Objeto {
    constructor(nome, nota) {
        this.nome = nome;
        this.nota = nota;
    }
}

let aluno1 = new Objeto("Maria", 9);
let aluno2 = new Objeto("João", 5);
let aluno3 = new Objeto("Pedro", 6);
let aluno4 = new Objeto("Leo", 4);

let arrayDeObjetos = [ aluno1, aluno2, aluno3, aluno4];

function aprovado(aluno){
    if (aluno.nota >= 6 ) {
        return (`O aluno(a) ${aluno.nome} foi aprovado`)
    }else{
        return(`O aluno(a) ${aluno.nome} foi reprovado`)
    }
}

arrayDeObjetos.forEach(aluno => {
    console.log(aprovado(aluno));
});
