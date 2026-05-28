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
    const statusNome = document.getElementById('statusNome');
    const statusHp = document.getElementById('statusHp');
    const log = document.getElementById('log');

    monstroBatalha = new Monstro (nomeMonstro, hpMonstro);

function atualizaTela(){
    
}


}