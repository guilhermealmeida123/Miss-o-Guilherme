const caixaPrincipal = document.querySelector(".caixa-principal");
const caixaPerguntas = document.querySelector(".caixa-pergunta");
const caixaAlternativas = document.querySelector(".caixa-alternativa");
const caixaResultado = document.querySelector(".caixa-resultado");
const textoResultado = document.querySelector(".texto-resultado");

// Dados das perguntas e alternativas
const perguntas = [
  {
    enunciado: "Qual a melhor maneira de combater o desmatamento?",
    alternativas: [
      "Reflorestamento de áreas degradadas",
      "Implementação de leis mais rigorosas para a proteção das florestas"
    ]
  },
  {
    enunciado: "Como podemos combater a desigualdade social de forma eficaz e sustentável?",
    alternativas: [
      "Implementar programas de educação e formação profissional acessíveis a todos, capacitando indivíduos de comunidades desfavorecidas.",
      "Políticas de redistribuição de renda e oportunidades, promovendo uma distribuição igual dos recursos e do acesso aos benefícios"
    ]
  }
];
