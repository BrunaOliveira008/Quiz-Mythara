// Perguntas do quiz
const questions = [
    
    // Perguntas da essência "Caos"
    { text: "Você acha que mudanças drásticas são necessárias para o progresso?", essence: { caos: 2, ilusao: 0 , barganha: 0, justica: 1, almas: 1, medo: 0, morte: 2, vida: -1} },
    { text: "Prefere seguir o fluxo em vez de planejar cuidadosamente?", essence: { caos: 2, ilusao: -2 , barganha: -1, justica: -2, almas: 0, medo: 0, morte: 2, vida: 2} },
    { text: "Você acredita que conflitos podem gerar transformações positivas?", essence: { caos: 0, ilusao: 1 , barganha: -1, justica: -2, almas: 0, medo: 1, morte: 1, vida: 0} },
    { text: "A imprevisibilidade torna a vida mais interessante?", essence: { caos: 2, ilusao: -1 , barganha: 1, justica: 0, almas: 1, medo: 2, morte: 1, vida:1 } },
    { text: "Você sente que situações caóticas provam seu verdadeiro potencial?", essence: { caos: 2, ilusao: 1 , barganha: 0, justica: 1, almas: 0, medo: 2, morte: 0, vida: -2} },
    { text: "Desafiar tradições é essencial para inovar?", essence: { caos: 2, ilusao: 1 , barganha: 2, justica: 0, almas: 0, medo: 2, morte: -2, vida: -2} },

    // Perguntas da essência "Ilusão"
    { text: "Você acha que a percepção dos outros define sua realidade?", essence: { caos: -1, ilusao: -2 , barganha: 1, justica: 0, almas: -1, medo: 1, morte: 2, vida: 2} },
    { text: "Acredita que às vezes é melhor manter as aparências?", essence: { caos: -2, ilusao: 2 , barganha: 2, justica: 0, almas: 1, medo: -2, morte: -1, vida: 0} },
    { text: "Você se sente confortável influenciando as pessoas?", essence: { caos: 0, ilusao: 2 , barganha: 2, justica: -2, almas: -1, medo: 1, morte: 0, vida: 1} },
    { text: "Mentir é uma forma de proteger quem você ama?", essence: { caos: 0, ilusao: 2 , barganha: -1, justica: 1, almas: 1, medo: 0, morte: 2, vida: 0} },
    { text: "Você acredita que as aparências podem nem sempre refletir a verdadeira essência das coisas?", essence: { caos: -2, ilusao: 2 , barganha: 1, justica: 2, almas: 0, medo: 0, morte: 1, vida: 2} },
    { text: "Você acha que enganar os outros pode ajudar a controlar situações delicadas?", essence: { caos: -2, ilusao: 2 , barganha: 1, justica: 1, almas: 0, medo: 0, morte: 2, vida: 2} },

    // Perguntas da essência "Justiça"
    { text: "Você se sente responsável por corrigir erros, mesmo quando não é sua obrigação?", essence: { caos: -2, ilusao: 1 , barganha: 2, justica: 1, almas: 1, medo: -1, morte: 2, vida: -2} },
    { text: "Prefere que regras sejam seguidas, independentemente da situação?", essence: { caos: -2, ilusao: 1 , barganha: -1, justica: 2, almas: 0, medo: -1, morte: 2, vida: -1} },
    { text: "Você acredita que as ações devem sempre ter consequências claras e justas?", essence: { caos: -2, ilusao: -1 , barganha: -2, justica: 2, almas: -1, medo: -1, morte: 1, vida: 1} },
    { text: "Você prioriza a imparcialidade em todas as situações?", essence: { caos: -2, ilusao: 0 , barganha: -1, justica: 2, almas: 0, medo: 0, morte: 2, vida: 1} },
    { text: "Você defende os que não podem se defender sozinhos?", essence: { caos: 2, ilusao: 1 , barganha: -1, justica: 2, almas: 1, medo: 1, morte: 2, vida: 2} },
    { text: "A imparcialidade é um princípio fundamental para você?", essence: { caos: -1, ilusao: 1 , barganha: 0, justica: 2, almas: 0, medo: 0, morte: 2, vida: 2} },

    // Perguntas da essência "Vida"
    { text: "Você se sente energizado por ajudar algo ou alguém a se desenvolver?", essence: { caos: 0, ilusao: 1 , barganha: -1, justica: 1, almas: 1, medo: 0, morte: 2, vida: 2} },
    { text: "Acha que novos começos são mais importantes do que finais?", essence: { caos: 1, ilusao: 1 , barganha: 0, justica: 0, almas: 1, medo: -1, morte: -2, vida: 2} },
    { text: "Você prioriza buscar soluções que maximizem a preservação dos recursos?", essence: { caos: -2, ilusao: 1 , barganha: 0, justica: 1, almas: 0, medo: -1, morte: -2, vida: 2}},
    { text: "O ciclo de nascimento e renascimento é fundamental para você?", essence: { caos: 0, ilusao: 0 , barganha: 0, justica: 0, almas: 1, medo: 0, morte: -1, vida: 2} },
    { text: "Você sente conexão com a natureza e a energia vital ao seu redor?", essence: { caos: -2, ilusao: 0 , barganha: 0, justica: 0, almas: 0, medo: 0, morte: 0, vida: 2} },
    { text: "Sua felicidade está ligada ao crescimento e florescimento das pessoas?", essence: { caos: -2, ilusao: -1 , barganha: -2, justica: 1, almas: 2, medo: 0, morte: -1, vida: 2} },

    // Perguntas da essência "Barganha"
    { text: "Está disposto a trocar algo valioso por um benefício maior?", essence: { caos: 1, ilusao: 1 , barganha: 2, justica: -1, almas: 1, medo: 0, morte: -2, vida: -2} },
    { text: "Acredita que acordos equilibrados são a base de qualquer relação?", essence: { caos: 0, ilusao: 1 , barganha: 2, justica: 2, almas: 1, medo: -1, morte: 0, vida: 0}},
    { text: "Você vê cada interação como uma oportunidade de ganho mútuo?", essence: { caos:-1, ilusao: 1 , barganha: 2, justica: -1, almas: -1, medo: -2, morte: 0, vida: 0} },
    { text: "Negociações fazem parte do progresso?", essence: { caos: -2, ilusao: 1 , barganha: 2, justica: 1, almas: -1, medo: -2, morte: 0, vida: 0} },
    { text: "Você valoriza a troca justa em todas as situações?", essence: { caos: 0, ilusao: -1 , barganha: -1, justica: 2, almas: 0, medo: 0, morte: 1, vida: 1} },
    { text: "Está disposto a arriscar para garantir recompensas maiores?", essence: { caos: 2, ilusao: -1 , barganha: 1, justica: -2, almas: 1, medo: 2, morte: 0, vida: -2} }
];


// Descrições e imagens das essências
const descriptions = {
    caos: "Você dança no limiar da desordem, onde o caos se torna sua força, a incerteza sua arte, e cada passo transforma o caos em uma sinfonia de possibilidades infinitas.",
    ilusao: "Você é um reflexo que se desfaz ao toque, um labirinto de enganos onde nada é o que parece. Sua verdade é sempre uma miragem em constante mudança.",
    barganha: "Você mede cada palavra como uma transação, sempre pronto para negociar sentimentos e intenções. Em seu mundo, tudo tem um preço, até mesmo o que parece imensurável.",
    justica: "Você é a personificação da imparcialidade, sempre buscando corrigir as injustiças com sabedoria e firmeza.",
    vida: "Você vive com uma energia contagiante, encontrando beleza e significado nas pequenas coisas. Sua presença traz um sopro de vitalidade e simplicidade ao cotidiano.",
    medo: "Você carrega uma aura sombria que faz até os mais corajosos hesitarem, como se o próprio desconhecido caminhasse ao seu lado.",
    almas: "Você é um canal vivo, irradiando uma presença que transcende o tempo, como se carregasse os ecos de milhares de vidas em um único ser.",
    morte: "Você traz a essência da morte, não como um fim, mas como um portal para renascimentos, equilibrando ciclos com harmonia.",
};

const images = {
    caos: "images/caos.png",
    ilusao: "images/ilusao.png",
    barganha: "images/barganha.png",
    justica: "images/justica.png",
    vida: "images/vida.png",
    medo: "images/medo.png",
    almas: "images/almas.png",
    morte: "images/morte.png",
};

// Variáveis de controle
let currentQuestionIndex = 0;
let previousAnswers = [];

let scores = {
    ilusao: 0,
    caos: 0,
    barganha: 0,
    justica: 0,
    vida: 0,
    medo: 0,
    almas: 0,
    morte: 0,
};


// Função para atualizar o progresso
function updateProgress() {
    const progressElement = document.getElementById("progress");
    progressElement.innerText = `${currentQuestionIndex + 1}/${questions.length}`;
}

// Função para carregar uma nova pergunta
function loadQuestion() {
    const questionData = questions[currentQuestionIndex];
    document.getElementById("question").innerText = questionData.text;
    updateProgress(); // Atualiza o progresso sempre que a pergunta mudar
    
    // Atualiza a visibilidade do botão "Voltar"
    document.getElementById("back-button").style.display = currentQuestionIndex > 0 ? "block" : "none";
}

// Função para selecionar uma opção
function selectOption(value) {
    // Armazena a resposta anterior
    if (previousAnswers[currentQuestionIndex] !== undefined) {
        const previousValue = previousAnswers[currentQuestionIndex];
        const effects = questions[currentQuestionIndex].essence;
        for (let essence in effects) {
            scores[essence] -= effects[essence] * previousValue; // Remove o efeito da resposta anterior
        }
        console.log(`Resposta anterior para a pergunta ${currentQuestionIndex}: ${previousValue}`);
    }

    // Armazena a nova resposta
    previousAnswers[currentQuestionIndex] = value;
    const effects = questions[currentQuestionIndex].essence;
    for (let essence in effects) {
        scores[essence] += effects[essence] * value; // Aplica o efeito da nova resposta
    }
    console.log(`Nova resposta para a pergunta ${currentQuestionIndex}: ${value}`);
    console.log(`Scores após a resposta:`, scores);

    currentQuestionIndex++;
    if (currentQuestionIndex < questions.length) {
        loadQuestion();
    } else {
        showResult();
    }
}

// Função para voltar à pergunta anterior
function goBack() {
    if (currentQuestionIndex > 0) {
        currentQuestionIndex--;
        console.log(`Voltando para a pergunta ${currentQuestionIndex}`);
        loadQuestion();
    }
}

function shuffleArray(array) {
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    }
}

// Embaralhar as perguntas antes de iniciar o quiz
shuffleArray(questions);

// Função para iniciar o quiz
function startQuiz() {
    document.getElementById("intro").style.display = "none";
    document.getElementById("quiz").style.display = "block";
    loadQuestion(); // Inicia carregando a primeira pergunta
}


// Função para mostrar o resultado
function showResult() {
    document.getElementById("quiz").style.display = "none";
    document.getElementById("result-container").style.display = "block";

    const sortedScores = Object.entries(scores).sort((a, b) => b[1] - a[1]);
    console.log(sortedScores)
    const topEssence = sortedScores[0][0];

    document.getElementById("result").innerText =
        topEssence.charAt(0).toUpperCase() + topEssence.slice(1);
    document.getElementById("element-description").innerText =
        descriptions[topEssence];
    document.getElementById("element-image").src = images[topEssence];
}

// Função para reiniciar o quiz
function restartQuiz() {
    currentQuestionIndex = 0;
    scores = {
        caos: 0,
        ilusao: 0,
        barganha: 0,
        justica: 0,
        vida: 0,
        medo: 0,
        almas: 0,
        morte: 0,
    };
    document.getElementById("quiz").style.display = "block";
    document.getElementById("result-container").style.display = "none";
    loadQuestion();
}

// Função para compartilhar no WhatsApp
function shareOnWhatsApp() {
    const essence = document.getElementById("result").innerText;
    const description = document.getElementById("element-description").innerText;
    const message = `Descobri minha essência no Quiz das Essências! 🌟\n\nMinha essência é: *${essence}*\n${description}`;
    const whatsappURL = `https://wa.me/?text=${encodeURIComponent(message)}`;
    window.open(whatsappURL, "_blank");
}

// Atualizar a exibição inicial
window.onload = function () {
    loadQuestion();  // Carregar a primeira pergunta
    updateProgress(); // Atualizar o progresso na página inicial
};