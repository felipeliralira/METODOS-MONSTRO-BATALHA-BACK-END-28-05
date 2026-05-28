/*
Desafio 
Enunciado: 
"Foi adicionado um novo campo de input do tipo number no HTML chamado 'Nível do Herói'. 
Modifique a classe Heroi para que o construtor também receba e armazene esse nível.
 No JavaScript da função, capture esse novo input e garanta que o nível seja exibido 
 no painel de resultado acessando a propriedade do objeto."
*/

class heroi{
    constructor(nome, classe, nivel){
        this.nome = nome;
        this.classe = classe;
        this.nivel = nivel;
    }
}
function criarHeroi(){
    // Capturando o que o usuário digitou/selecionou na tela
    const nomeHeroi = document.getElementById('nomeInput').value;
    const classeHeroi = document.getElementById('classeSelect').value;
    const nivelHeroi = document.getElementById('nivelInput').value;
    //Criando o objeto dinamicamente com os valores dos campos
    const novoHeroi = new heroi(nomeHeroi, classeHeroi, nivelHeroi);
    const log = document.getElementById('dadosHeroi');

    if(!nomeHeroi){
        document.getElementById('resultado').style.display = "block";
        log.innerHTML = "Para prosseguir, escolha um nome e um nível para seu heroi!!";
        return;
    }else if (nivelHeroi < 0 || !nivelHeroi){
        document.getElementById('resultado').style.display = "block";
        log.innerHTML = "Escolha um nível maior ou igual a 0!!";
        return;
    }

    //Exibindo na tela através das propriedades do objeto

    document.getElementById('resultado').style.display = "block";
    document.getElementById('dadosHeroi').innerHTML = `
    Nome do Heroi: <strong>${novoHeroi.nome} </strong> <br>
    Classe: <strong>${novoHeroi.classe}</strong><br>
    Nível: <strong>${novoHeroi.nivel}</strong>`;
}