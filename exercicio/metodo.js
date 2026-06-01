
        // 1º PASSO: A Classe base
        class Monstro {
            constructor(nome, hp) {
                this.nome = nome;
                this.hp = Number(hp);
            }

            receberDano(quantidade) {
                this.hp -= quantidade;
                if (this.hp <= 0) {
                    this.hp = 0;
                    return `${this.nome} foi derrotado! 💀`;
                }
                return `${this.nome} sofreu ${quantidade} de dano!`;
            }

            // ====================================================================
            // Crie o método curar(quantidade) aqui dentro
            // ====================================================================
            // [FAÇA SEU MÉTODO AQUI]

        }

        let monstroDaBatalha;

        // Função de atualizar criada no início
        function atualizarTela() {
            document.getElementById('statusNome').innerText = monstroDaBatalha.nome;
            document.getElementById('statusHp').innerText = `Vida Atual: ${monstroDaBatalha.hp} ❤️`;
        }

        // Botão de iniciar
        function iniciarJogo() {
            const nome = document.getElementById('nomeMonstro').value;
            const hp = document.getElementById('hpMonstro').value;

            if (!nome || !hp) {
                alert("Por favor, digite o nome e o HP antes de iniciar!");
                return;
            }

            monstroDaBatalha = new Monstro(nome, hp);

            document.getElementById('painel-criacao').style.display = "none";
            document.getElementById('painel-combate').style.display = "block";
            atualizarTela(); 
        }

        // Botão de atacar
        function baterNoMonstro() {
            const valorDano = Number(document.getElementById('danoInput').value);
            const msg = monstroDaBatalha.receberDano(valorDano);
            document.getElementById('log').innerText = msg;
            atualizarTela(); 
        }

        // ====================================================================
        // Programe a função do botão verde de cura aqui
        // ====================================================================
        function curarMonstro() {
            // [FAÇA SUA FUNÇÃO AQUI]:
            // - Capture o valor do input 'curaInput' convertendo para Number.
            // - Chame o método de cura do objeto 'monstroDaBatalha'.
            // - Coloque a mensagem no 'log'.
            // - Chame a função atualizarTela() que está lá em cima.
        }
   