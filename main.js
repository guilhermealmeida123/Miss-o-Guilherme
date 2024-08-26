const caixaPrincipal = document.querySelector(".caixa-principal")
const caixaPergunta = document.querySelector(".caixa-principal")
const caixaalternativa = document.querySelector(".caixa-alternativa")
const caixaresultado = document.querySelector(".caixa-resultado")
const caixaresultado = document.querySelector(".caixa-resultado")

const pergunta = [
    { //primeiro objeto da lista de perguntas
    enunciado: "pergunta1",
    alternativas: ["alternativa1", "alternativa2"]
    }
    {// segundo objeto da lista de perguntas
        enunciado: "pergunta2",
        alternativas: ["alternativa1","alternativa2"]
    }
]
let atual = 0;
let perguntaAtual;

function mostrPergunta(){
    perguntaAtual = pergunta[atual];
    caixaPerguntas.textContent = perguntaAtual.enunciado;
    caixaAlternativas.textContent = "";
    mostraAlternativas();
}
function mostraAlternativas(){
    for(const alternativa of perguntaAtual.alternativas){
        const botaoAlternativas = document.createElement("button");
        botaoAlternativas.textContent = alternativa;
        caixaAlternativas.appendChild(botaoAlternativas);
    }
}

mostraPergunta();

function
