/* Começa o JavaScript */

const USD_BRL = 5.5;

const PRICES = {
  BTC: 104500,
  ETH: 3850,
  USDT: 1.0,
  BNB: 690,
  SOL: 172,
  LINK: 18.5,
  UNI: 14.2,
  HYPE: 28.5,
};

const CRYPTO_LIST = [
  { symbol: "BTC", name: "Bitcoin" },
  { symbol: "ETH", name: "Ethereum" },
  { symbol: "USDT", name: "Tether" },
  { symbol: "BNB", name: "BNB" },
  { symbol: "SOL", name: "Solana" },
  { symbol: "LINK", name: "Chainlink" },
  { symbol: "UNI", name: "Uniswap" },
  { symbol: "HYPE", name: "Hyperliquid" },
];

// Aqui você define as lições (LESSONS) e outras funções do app, veja a estrutura para organizar

let state = {
  mainTab: "learn",
  currentLesson: null,
  quizActive: false,
  quizQuestionIndex: 0,
  quizScore: 0,
  quizAnswers: [],
  quizShowResult: false,
  completedLessons: [],
  xp: 0,
  wallets: [],
  activeWallet: null,
  walletTab: "transactions",
  showNewWallet: false,
  showTxForm: false,
  editingTxId: null,
  // mais estados necessários
};

// Função para salvar estado no localStorage
function saveState() {
  localStorage.setItem(
    "cryptoLearnData",
    JSON.stringify({
      completedLessons: state.completedLessons,
      xp: state.xp,
      wallets: state.wallets,
    })
  );
}

// Função para carregar estado do localStorage
function loadState() {
  const saved = localStorage.getItem("cryptoLearnData");
  if (saved) {
    const d = JSON.parse(saved);
    state.completedLessons = d.completedLessons || [];
    state.xp = d.xp || 0;
    state.wallets = d.wallets || [];
  }
}

// Função para atualizar display de XP e nível
function updateXPDisplay() {
  const level = Math.floor(state.xp / 100) + 1;
  document.getElementById("xpLevel").textContent = `Nível ${level}`;
  document.getElementById("xpValue").textContent = `${state.xp} XP`;
}

// Função para mudar abas principais
function switchMainTab(tab) {
  state.mainTab = tab;
  state.currentLesson = null;
  state.quizActive = false;
  state.quizShowResult = false;
  document.getElementById("tabLearn").classList.toggle("active", tab === "learn");
  document.getElementById("tabPortfolio").classList.toggle("active", tab === "portfolio");
  render();
}

// Render principal, chama funções específicas
function render() {
  updateXPDisplay();
  const content = document.getElementById("content");

  if (state.mainTab === "learn") {
    if (state.currentLesson) {
      renderLesson(content);
    } else {
      renderLessonList(content);
    }
  } else if (state.mainTab === "portfolio") {
    renderPortfolio(content);
  }
}

/* 
-- Aqui vão as funções como renderLessonList, renderLesson, renderQuiz, renderQuizResult, renderPortfolio 
-- Que tratam os elementos da interface, formulários, listas, gráficos, etc.
-- Também terão funções para adicionar, editar e excluir transações na carteira, calculando preço médio, conversão de BRL para USD usando a cotação fixa (dividindo os valores inputados em BRL por 5.5) para todas as análises.
-- E chamar saveState() após mudanças.
*/

/* Exemplo simples para iniciar */
window.onload = () => {
  loadState();
  render();
};

/* E aqui pode ter os event handlers para formulários, botões e etc */

/* Final do JavaScript */
