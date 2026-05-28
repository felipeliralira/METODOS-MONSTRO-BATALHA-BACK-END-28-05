class heroi{
    constructor(nome, classe){
        this.nome = nome;
        this.classe = classe;
    }
}
function criarHeroi(){
    // Capturando o que o usuário digitou/selecionou na tela
    const nomeHeroi = document.getElementById('nomeInput').value;
    const classeHeroi = document.getElementById('classeSelect').value;
    //Criando o objeto dinamicamente com os valores dos campos
    const novoHeroi = new heroi(nomeHeroi, classeHeroi);
    const log = document.getElementById('dadosHeroi')

    if(!nomeHeroi){
        document.getElementById('resultado').style.display = "block";
        log.innerHTML = "Para prosseguir, escreva um nome para seu heroi!!";
        return;
    }

    //Exibindo na tela através das propriedades do objeto

    document.getElementById('resultado').style.display = "block";
    document.getElementById('dadosHeroi').innerHTML = `
    Nome do Heroi: <strong>${novoHeroi.nome} </strong> <br>
    Classe: <strong>${novoHeroi.classe}</strong>`;
}