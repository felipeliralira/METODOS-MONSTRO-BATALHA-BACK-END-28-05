class Monstro {
    constructor (nome, hp ){
        this.nome = nome;
        this.hp = Number(hp);
    }
    receberDano(quantidade){
        this.hp -= quantidade;
        if(this.hp <=0){
            this.hp = 0;
            return `${this.nome} foi derrotado`;
        }
        return `${this.nome} sofreu ${quantidade} de dano`;
    }
}

let monstroBatalha;

function iniciarJogo(){
    const nomeMonstro = document.getElementById('nomeMonstro').value;
    const hpMonstro = document.getElementById('hpMonstro').value;
    

    monstroBatalha = new Monstro (nomeMonstro, hpMonstro);

function atualizaTela(){
    document.getElementById('statusNome').innerHTML = monstroBatalha.nomeMonstro;
    document.getElementById('statusHp').innerHTML = `Vida atual: ${monstroBatalha.hpMonstro}`;
}
document.getElementById('painel-criacao').style.display = "none";
document.getElementById('painel-combate').style.display = "block";
atualizaTela();

}

function baterNoMonstro(){
    
}