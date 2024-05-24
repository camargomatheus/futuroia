const caixaPrincipal = document.querySelector(".caixa-principal");
const caixaPerguntas = document.querySelector(".caixa-perguntas");
const caixaAlternativas = document.querySelector(".caixa-alternativas");
const caixaResultado = document.querySelector(".caixa-resultado");
const TextoResultado = document.querySelector(".texto-resulado");

const perguntas = [
    {
        enunciado: "A tecnologia é cada vez mais presente no nosso dia a dia, sobre a utilização da Inteligencia Artificial nas escolas, qual a sua opinião?",
        alternativas: [
            "Boa iniciativa",
            "Ruim, pois pode comprometer o esforço dos alunos"
        ]
    },
    {
        enunciado: "Você faz uso constante da Inteligência Artificial para realizar atividades em seu cotidiano?",
        alternativas: [
            "SIm",
            "Não"
        ]
        {
            enunciado: "Na sua opinião, a Inteligência Artificial pode ser uma ameaça para o mercado de trabalho futuro?",
            alternativas: [
                "Sim, pois ela deve contribuir na perca de trabalhos manuais e exigir mais capacitação",
                "Não, existem trabalhos que somente humanos conseguem operar"
            ]
            {
                enunciado: "A Inteligência Artifical dificulta o processo de aprendizado?",
                alternativas: [
                    "Não, pois ela ajuda a estudar",
                    "Sim, ela tende deixar os estudantes mais preguiçosos"
                ]
            },
        ];

let atual = 0;
let perguntaAtual;

function mostraPergunta () {
    PerguntaAtual = perguntas[atual];
    CaixaPerguntas.textContent = perguntaAtual.enunciado;
}

mostraPergunta();

    


