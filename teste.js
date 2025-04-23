const questoes = [
    {
        Pergunta: "Eu sou ... ",
        opcao: [
            { texto: "Idealista, criativo e visionário ", Perfil: { O: 0, A: 0, C: 0, I: 1 } },
            { texto: "Divertido, espiritual e benéfico", Perfil: { O: 0, A: 0, C: 1, I: 0 } },
            { texto: "Confiável, meticuloso e previsível   ", Perfil: { O: 1, A: 0, C: 0, I: 0 } },
            { texto: "Focado, determinado e persistente  ", Perfil: { O: 0, A: 1, C: 0, I: 0 } }
        ]
    },
    {
        Pergunta: "Eu gosto de ...",
        opcao: [
            { texto: "Ser piloto", Perfil: { O: 0, A: 1, C: 0, I: 0 } },
            { texto: "Conversar com os passageiros", Perfil: { O: 0, A: 0, C: 1, I: 0 } },
            { texto: "Planejar a viagem", Perfil: { O: 1, A: 0, C: 0, I: 0 } },
            { texto: "Explorar novas rotas ", Perfil: { O: 0, A: 0, C: 0, I: 1 } }
        ]
    },
    {
        Pergunta: "Se você quiser se dar bem comigo ...",
        opcao: [
            { texto: "Me dê liberdade", Perfil: { O: 0, A: 0, C: 0, I: 1 } },
            { texto: "Me deixe saber sua expectativa", Perfil: { O: 1, A: 0, C: 0, I: 0 } },
            { texto: "Lidere, siga ou saia do caminho", Perfil: { O: 0, A: 1, C: 0, I: 0 } },
            { texto: "Seja amigável, carinhoso e compreensivo", Perfil: { O: 0, A: 0, C: 1, I: 0 } }
        ]
    },
    {
        Pergunta: "Para conseguir obter bons resultados é preciso ...",
        opcao: [
            { texto: "Ter incertezas", Perfil: { O: 0, A: 0, C: 0, I: 1 } },
            { texto: "Controlar o essencial", Perfil: { O: 1, A: 0, C: 0, I: 0 } },
            { texto: "Diversão e celebração", Perfil: { O: 0, A: 0, C: 1, I: 0 } },
            { texto: "Planejar e obter recursos", Perfil: { O: 0, A: 1, C: 0, I: 0 } }
        ]
    },
    {
        Pergunta: "Eu me divirto quando ...",
        opcao: [
            { texto: "Estou me exercitando", Perfil: { O: 0, A: 1, C: 0, I: 0 } },
            { texto: "Tenho novidades ", Perfil: { O: 0, A: 0, C: 0, I: 1 } },
            { texto: "Estou com os outros", Perfil: { O: 0, A: 0, C: 1, I: 0 } },
            { texto: "Determino as regras", Perfil: { O: 1, A: 0, C: 0, I: 0 } }
        ]
    },
    {
        Pergunta: "Eu penso	que	...",
        opcao: [
            { texto: "Unidos venceremos, divididos perderemos", Perfil: { O: 0, A: 0, C: 1, I: 0 } },
            { texto: "O	ataque é melhor	que	a defesa", Perfil: { O: 0, A: 1, C: 0, I: 0 } },
            { texto: "É	bom	ser	manso, mas andar com um porrete", Perfil: { O: 0, A: 0, C: 0, I: 1 } },
            { texto: "Um homem prevenido vale por dois", Perfil: { O: 1, A: 0, C: 0, I: 0 } }
        ]
    },
    {
        Pergunta: "Minha preocupação é ...",
        opcao: [
            { texto: "Gerar	a idea global", Perfil: { O: 0, A: 0, C: 0, I: 1 } },
            { texto: "Fazer	com	que	as pessoas gostem", Perfil: { O: 0, A: 0, C: 1, I: 0 } },
            { texto: "Fazer	com	que funcione", Perfil: { O: 1, A: 0, C: 0, I: 0 } },
            { texto: "Fazer	com	que aconteça", Perfil: { O: 0, A: 1, C: 0, I: 0 } }
        ]
    },
    {
        Pergunta: "Eu prefiro ...",
        opcao: [
            { texto: "Perguntas	a respostas", Perfil: { O: 0, A: 0, C: 0, I: 1 } },
            { texto: "Ter todos os detalhes", Perfil: { O: 1, A: 0, C: 0, I: 0 } },
            { texto: "Vantagens	a meu favor", Perfil: { O: 0, A: 1, C: 0, I: 0 } },
            { texto: "Que todos	tenham a chance de ser ouvido", Perfil: { O: 0, A: 0, C: 1, I: 0 } }
        ]
    },
    {
        Pergunta: "Eu gosto	de...",
        opcao: [
            { texto: "Fazer	progresso", Perfil: { O: 0, A: 1, C: 0, I: 0 } },
            { texto: "Construir	memórias", Perfil: { O: 0, A: 0, C: 1, I: 0 } },
            { texto: "Fazer	sentido", Perfil: { O: 1, A: 0, C: 0, I: 0 } },
            { texto: "Tornar as pessoas confortáveis", Perfil: { O: 0, A: 0, C: 0, I: 1 } }
        ]
    },
    {
        Pergunta: "Eu gosto	de chegar...",
        opcao: [
            { texto: "Na frente", Perfil: { O: 0, A: 1, C: 0, I: 0 } },
            { texto: "Junto", Perfil: { O: 0, A: 0, C: 1, I: 0 } },
            { texto: "Na hora", Perfil: { O: 1, A: 0, C: 0, I: 0 } },
            { texto: "Em outro lugar", Perfil: { O: 0, A: 0, C: 0, I: 1 } }
        ]
    },
    {
        Pergunta: "Um ótimo dia	para mim é quando ...",
        opcao: [
            { texto: "Consigo fazer	muitas coisas", Perfil: { O: 0, A: 1, C: 0, I: 0 } },
            { texto: "Me divirto com meus amigos", Perfil: { O: 0, A: 0, C: 1, I: 0 } },
            { texto: "Tudo segue conforme planejado", Perfil: { O: 1, A: 0, C: 0, I: 0 } },
            { texto: "Desfruto de coisas novas e estimulantes", Perfil: { O: 0, A: 0, C: 0, I: 1 } }
        ]
    },
    {
        Pergunta: "Eu vejo a morte como...",
        opcao: [
            { texto: "Uma grande aventura misteriosa", Perfil: { O: 0, A: 0, C: 0, I: 1 } },
            { texto: "Oportunidade para	rever os falecidos", Perfil: { O: 0, A: 0, C: 1, I: 0 } },
            { texto: "Um modo de receber recompensas", Perfil: { O: 1, A: 0, C: 0, I: 0 } },
            { texto: "Algo que sempre chega	muito cedo", Perfil: { O: 0, A: 1, C: 0, I: 0 } }
        ]
    },
    {
        Pergunta: "Minha filosofia de vida é ...",
        opcao: [
            { texto: "Há ganhadores	e perdedores! Eu acredito ser um ganhador", Perfil: { O: 0, A: 1, C: 0, I: 0 } },
            { texto: "Para eu ganhar, ninguém precisa perder", Perfil: { O: 0, A: 0, C: 1, I: 0 } },
            { texto: "Para ganhar é preciso	seguir as regras", Perfil: { O: 1, A: 0, C: 0, I: 0 } },
            { texto: "Para ganhar é necessário inventar novas regras", Perfil: { O: 0, A: 0, C: 0, I: 1 } }
        ]
    },
    {
        Pergunta: "Eu sempre gostei de ...",
        opcao: [
            { texto: "Explorar", Perfil: { O: 0, A: 0, C: 0, I: 1 } },
            { texto: "Evitar surpresas", Perfil: { O: 1, A: 0, C: 0, I: 0 } },
            { texto: "Focalizar	a meta	 ", Perfil: { O: 0, A: 1, C: 0, I: 0 } },
            { texto: "Realizar uma abordagem natural", Perfil: { O: 0, A: 0, C: 1, I: 0 } }
        ]
    },
    {
        Pergunta: "Eu gosto de mudanças se ...	",
        opcao: [
            { texto: "Me der uma vantagem competitiva ", Perfil: { O: 0, A: 1, C: 0, I: 0 } },
            { texto: "For divertido e puder ser compartilhado", Perfil: { O: 0, A: 0, C: 1, I: 0 } },
            { texto: "Me der mais liberdade e variedade", Perfil: { O: 0, A: 0, C: 0, I: 1 } },
            { texto: "Melhorar ou me der mais controle", Perfil: { O: 1, A: 0, C: 0, I: 0 } }
        ]
    },
    {
        Pergunta: "Não existe nada de errado em...	",
        opcao: [
            { texto: "Se colocar na frente", Perfil: { O: 0, A: 1, C: 0, I: 0 } },
            { texto: "Colocar os outros na frente", Perfil: { O: 0, A: 0, C: 1, I: 0 } },
            { texto: "Mudar	de ideia", Perfil: { O: 0, A: 0, C: 0, I: 1 } },
            { texto: "Ser consistente", Perfil: { O: 1, A: 0, C: 0, I: 0 } }
        ]
    },
    {
        Pergunta: "Eu gosto de buscar conselhos de... ",
        opcao: [
            { texto: "Pessoas bem-sucedidas", Perfil: { O: 0, A: 1, C: 0, I: 0 } },
            { texto: "Anciões e conselheiros", Perfil: { O: 0, A: 0, C: 1, I: 0 } },
            { texto: "Autoridades no assunto", Perfil: { O: 1, A: 0, C: 0, I: 0 } },
            { texto: "Lugares, os mais estranhos", Perfil: { O: 0, A: 0, C: 0, I: 1 } }
        ]
    },
    {
        Pergunta: "Meu lema é...",
        opcao: [
            { texto: "Fazer	o que precisa ser feito", Perfil: { O: 0, A: 0, C: 0, I: 1 } },
            { texto: "Fazer	bem	feito", Perfil: { O: 1, A: 0, C: 0, I: 0 } },
            { texto: "Fazer	junto com o grupo", Perfil: { O: 0, A: 0, C: 1, I: 0 } },
            { texto: "Simplesmente fazer ", Perfil: { O: 0, A: 1, C: 0, I: 0 } }
        ]
    },
    {
        Pergunta: "Eu gosto de ...",
        opcao: [
            { texto: "Complexidade, mesmo se confuso", Perfil: { O: 0, A: 0, C: 0, I: 1 } },
            { texto: "Ordem	e sistemazação", Perfil: { O: 1, A: 0, C: 0, I: 0 } },
            { texto: "Calor	humano e animação", Perfil: { O: 0, A: 0, C: 1, I: 0 } },
            { texto: "Coisas claras e simples", Perfil: { O: 0, A: 1, C: 0, I: 0 } }
        ]
    },
    {
        Pergunta: "Tempo para mim é ...	",
        opcao: [
            { texto: "Algo que detesto desperdiçar", Perfil: { O: 0, A: 1, C: 0, I: 0 } },
            { texto: "Um grande ciclo", Perfil: { O: 0, A: 0, C: 1, I: 0 } },
            { texto: "Uma flecha que leva ao inevitável", Perfil: { O: 1, A: 0, C: 0, I: 0 } },
            { texto: "Irrelevante", Perfil: { O: 0, A: 0, C: 0, I: 1 } }
        ]
    },
    {
        Pergunta: "Se eu fosse bilionário...",
        opcao: [
            { texto: "Faria	doações	para muitas	entidades", Perfil: { O: 0, A: 0, C: 1, I: 0 } },
            { texto: "Criaria uma poupança avantajada", Perfil: { O: 1, A: 0, C: 0, I: 0 } },
            { texto: "Faria	o que desse na cabeça", Perfil: { O: 0, A: 0, C: 0, I: 1 } },
            { texto: "Exibiria bastante com algumas pessoas", Perfil: { O: 0, A: 1, C: 0, I: 0 } }
        ]
    },
    {
        Pergunta: "Eu acredito que...",
        opcao: [
            { texto: "O	destino é mais importante que a jornada", Perfil: { O: 0, A: 1, C: 0, I: 0 } },
            { texto: "A jornada é mais importante que o destino", Perfil: { O: 0, A: 0, C: 1, I: 0 } },
            { texto: "Um centavo economizado já é um centavo ganho", Perfil: { O: 1, A: 0, C: 0, I: 0 } },
            { texto: "Basta	um navio e uma estrela para navegar", Perfil: { O: 0, A: 0, C: 0, I: 1 } }
        ]
    },
    {
        Pergunta: "Eu acredito também que ...",
        opcao: [
            { texto: "Aquele que hesita está perdido", Perfil: { O: 0, A: 1, C: 0, I: 0 } },
            { texto: "De grão em grão a galinha	enche o	papo", Perfil: { O: 1, A: 0, C: 0, I: 0 } },
            { texto: "O que vai, volta", Perfil: { O: 0, A: 0, C: 1, I: 0 } },
            { texto: "Um sorriso ou	uma	careta é o mesmo para quem é cego", Perfil: { O: 0, A: 0, C: 0, I: 1 } }
        ]
    },
    {
        Pergunta: "Eu acredito ainda que ...",
        opcao: [
            { texto: "É	melhor prudência do que arrependimento", Perfil: { O: 1, A: 0, C: 0, I: 0 } },
            { texto: "A	autoridade deve ser	desafiada", Perfil: { O: 0, A: 0, C: 0, I: 1 } },
            { texto: "Ganhar é fundamental", Perfil: { O: 0, A: 1, C: 0, I: 0 } },
            { texto: "O	coletivo é mais importante do que o individual", Perfil: { O: 0, A: 0, C: 1, I: 0 } }
        ]
    },
    {
        Pergunta: "Eu penso que	...",
        opcao: [
            { texto: "Não é fácil ficar encurralado", Perfil: { O: 0, A: 0, C: 0, I: 1 } },
            { texto: "É	preferível olhar, antes de pular", Perfil: { O: 1, A: 0, C: 0, I: 0 } },
            { texto: "Duas cabeças pensam melhor do que uma", Perfil: { O: 0, A: 0, C: 1, I: 0 } },
            { texto: "Se você não tem condições de competir, não compita ", Perfil: { O: 0, A: 1, C: 0, I: 0 } }
        ]
    },

];

let PerguntaAtual = 0;
let Perfil = { O: 0, A: 0, C: 0, I: 0 };
let timer;
let tempoRestante = 30;  // 30 segundos para cada pergunta
let acertosPorCaracteristica ={
    O:0,
    A:0,
    C:0,
    I:0

}

function UpBarradeProgresso() {
    const progresso = ((PerguntaAtual) / questoes.length) * 100;
    document.querySelector('.progresso').style.width = `${progresso}%`;
}

function displayPergunta() {
    if (PerguntaAtual === 0) {
        Perfil = { O: 0, A: 0, C: 0, I: 0 };
    }

    const quizContainer = document.getElementById('quiz-content');
    const Pergunta = questoes[PerguntaAtual];

    let html = `
        <h2>Pergunta ${PerguntaAtual + 1} de ${questoes.length}</h2>
        <p>${Pergunta.Pergunta}</p>
        <p>Tempo restante: <span id="tempo-restante">${tempoRestante}</span> segundos</p>
    `;

    Pergunta.opcao.forEach((option, index) => {
        html += `
            <button class="botao-opcao" onclick="SelecionarResposta(${index})">
                ${option.texto}
            </button>
        `;
    });

    quizContainer.innerHTML = html;
    UpBarradeProgresso();

    if (Pergunta.Pergunta.length > 20) {
        tempoRestante = 15;
        document.getElementById('tempo-restante').innerText = tempoRestante;
        timer = setInterval(contarTempo, 1000);  // Decrementa a cada segundo
    } else {
        tempoRestante = 10;
        document.getElementById('tempo-restante').innerText = tempoRestante;
        timer = setInterval(contarTempo, 1000);  // Decrementa a cada segundo
    }

}

function contarTempo() {
    if (tempoRestante > 0) {
        tempoRestante--;
        document.getElementById('tempo-restante').innerText = tempoRestante;
    } else {
        // Se o tempo acabar, passa para a próxima pergunta automaticamente
        clearInterval(timer);
        window.alert("Tempo esgotado! Vamos para proxima pergunta");
        PerguntaAtual++
        if (PerguntaAtual < questoes.length) {
            displayPergunta();
        } else {
            resultado();
        }
    }
}

function SelecionarResposta(optionIndex) {
    const SelecionarOpcao = questoes[PerguntaAtual].opcao[optionIndex];

    // Adicionar resposta ao Perfil
    for (let caracteristica in SelecionarOpcao.Perfil) {
        Perfil[caracteristica] += SelecionarOpcao.Perfil[caracteristica];
    }

    // Adicionar acertos por característica
    for (let caracteristica in SelecionarOpcao.Perfil) {
        if (SelecionarOpcao.Perfil[caracteristica] > 0) {
            acertosPorCaracteristica[caracteristica]++;
        }
    }

    clearInterval(timer);  // Parar o temporizador se o usuário respondeu antes do tempo acabar
    PerguntaAtual++;

    if (PerguntaAtual < questoes.length) {
        displayPergunta();
    } else {
        resultado();
    }
}

function resultado() {
    const quizContainer = document.getElementById('quiz-content');
    const CaracteristicaDominante = getCaracteristicaDominante();
    
    let html = `
        <h2>Seu perfil comportamental</h2>
        <div class="results-container">
            <h3>Sua característica dominante: ${getCaracteristicaDominanteNome(CaracteristicaDominante)}</h3>
            ${getcaracteristica(CaracteristicaDominante)}
        </div>
    `;

    quizContainer.innerHTML = html;
    UpBarradeProgresso();
}

function getCaracteristicaDominante() {
    return Object.entries(Perfil).sort((a, b) => b[1] - a[1])[0][0];
}

function getCaracteristicaDominanteNome(caracteristica) {
    const caracteristicas = {
        O: "Lobo",
        A: "Tubarão",
        C: "Golfinho",
        I: "Águia"
    };
    return caracteristicas[caracteristica];
}

function getcaracteristica(caracteristica) {
    const descricao = {
        O: `
            <div class="caracteristica-">
                <h4>Sua pontuação:<h4>
                <ul>
                    <li>Lobo: ${acertosPorCaracteristica.O}</li>
                    <li>Tubarão: ${acertosPorCaracteristica.A}</li>
                    <li>Golfinho: ${acertosPorCaracteristica.C}</li>
                    <li>Águia: ${acertosPorCaracteristica.I}</li>
                </ul>
                <img class = "resultado" src="Imagens/Lobo01.jpg" alt="">
                <img class = "resultado" src="Imagens/Lobo02.jpg" alt="">
            </div>
        `,
        A: `
            <div class="caracteristica-">
                <h4>Sua pontuação:<h4>
                <ul>
                    <li>Lobo: ${acertosPorCaracteristica.O}</li>
                    <li>Tubarão: ${acertosPorCaracteristica.A}</li>
                    <li>Golfinho: ${acertosPorCaracteristica.C}</li>
                    <li>Águia: ${acertosPorCaracteristica.I}</li>
                 </ul>
                <img class = "resultado" src="Imagens/Tubarao01.jpg" alt="">
                <img class = "resultado" src="Imagens/Tubarao02.jpg" alt="">                
            </div>
        `,
     C: `
            <div class="caracteristica-">
                <h4>Sua pontuação:<h4>
                <ul>
                    <li>Lobo: ${acertosPorCaracteristica.O}</li>
                    <li>Tubarão: ${acertosPorCaracteristica.A}</li>
                    <li>Golfinho: ${acertosPorCaracteristica.C}</li>
                    <li>Águia: ${acertosPorCaracteristica.I}</li>
                 </ul>
                <img class = "resultado" src="Imagens/Golfinho01.jpg" alt="">
                <img class = "resultado" src="Imagens/Golfinho02.jpg" alt="">
            </div>
        `,
        I: `
            <div class="caracteristica-">
                <h4>Sua pontuação:<h4>
                <ul>
                    <li>Lobo: ${acertosPorCaracteristica.O}</li>
                    <li>Tubarão: ${acertosPorCaracteristica.A}</li>
                    <li>Golfinho: ${acertosPorCaracteristica.C}</li>
                    <li>Águia: ${acertosPorCaracteristica.I}</li>
                 </ul>
                <img class = "resultado" src="Imagens/Aguia01.jpg" alt="">
                <img class = "resultado" src="Imagens/Aguia02.jpg" alt="">
            </div>
        `
    };
    return descricao[caracteristica];
}



