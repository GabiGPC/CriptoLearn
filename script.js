// ─── DATA ───────────────────────────────────────────────────────────────────

const LESSONS = [
  {
    id: 0,
    title: "O problema do dinheiro digital",
    icon: "💡",
    desc: "Por que precisávamos de uma solução",
    xp: 10,
    color: "#1e2a4a",
    content: `
      <span class="lesson-icon">💡</span>
      <div class="lesson-title">O problema do dinheiro digital</div>
      <div class="lesson-body">
        Antes do Bitcoin, qualquer transferência de dinheiro online precisava de um
        <strong style="color:#e8eaf6">intermediário</strong> — um banco ou fintech.
        Sem ele, como garantir que alguém não gaste o mesmo dinheiro duas vezes?
        <br><br>
        Esse problema é chamado de <em>double spending</em>. Era o grande obstáculo
        para criar dinheiro verdadeiramente digital.
      </div>
      <div class="lesson-hl">
        &#8220;O que precisamos é um sistema de pagamento eletrônico baseado em
        prova criptográfica, não em confiança.&#8221; — White Paper do Bitcoin, 2008
      </div>
      <div class="lesson-body">
        Satoshi Nakamoto publicou o White Paper em 31 de outubro de 2008,
        propondo uma solução: um registro público, distribuído e imutável.
      </div>
    `,
    quiz: {
      q: "Qual era o principal problema que o Bitcoin precisava resolver?",
      opts: [
        "Tornar transações mais rápidas que o Pix",
        "Evitar o gasto duplo sem usar um banco",
        "Criar moeda física segura",
        "Substituir o cartão de crédito"
      ],
      c: 1,
      fb: "Exato! O double spending era o obstáculo central. Sem resolvê-lo, dinheiro digital genuíno era impossível."
    }
  },
  {
    id: 1,
    title: "O que é Blockchain",
    icon: "⛓️",
    desc: "O livro-caixa público e imutável",
    xp: 15,
    color: "#1a1e35",
    content: `
      <span class="lesson-icon">⛓️</span>
      <div class="lesson-title">O que é Blockchain</div>
      <div class="lesson-body">
        Imagine um caderno onde qualquer pessoa pode escrever, mas ninguém pode
        apagar o que já foi escrito. Esse é o conceito central de uma blockchain.
      </div>
      <div class="lesson-hl">
        Blockchain = cadeia de blocos. Cada bloco contém transações + o hash
        (impressão digital) do bloco anterior. Alterar qualquer bloco invalida
        todos os seguintes.
      </div>
      <div class="lesson-body">
        Esse caderno é copiado em milhares de computadores ao redor do mundo.
        Para fraudar, você precisaria alterar mais de 50% de todos eles
        simultaneamente — praticamente impossível.
      </div>
    `,
    quiz: {
      q: "O que torna a blockchain segura contra fraudes?",
      opts: [
        "Um servidor central poderoso",
        "Hashes encadeados + rede distribuída",
        "Criptografia só no app",
        "Senhas de 32 caracteres"
      ],
      c: 1,
      fb: "Correto! Hashes encadeados + distribuição da rede é o que torna alterações praticamente impossíveis."
    }
  },
  {
    id: 2,
    title: "Bitcoin: a primeira moeda",
    icon: "₿",
    desc: "Ouro digital e escassez programada",
    xp: 20,
    color: "#2a1a05",
    content: `
      <span class="lesson-icon">₿</span>
      <div class="lesson-title">Bitcoin: a primeira moeda</div>
      <div class="lesson-body">
        Em 3 de janeiro de 2009, Satoshi minerou o primeiro bloco — o
        <em>Genesis Block</em>. O Bitcoin nasceu com uma regra fixada no código:
        nunca mais de 21 milhões de BTC existirão.
      </div>
      <div class="lesson-hl">
        Bitcoin é como ouro digital. Escasso por design, sem banco central para
        inflacionar a oferta. Isso é chamado de política monetária programada.
      </div>
      <div class="lesson-body">
        A <strong style="color:#e8eaf6">mineração</strong> é o processo de criação
        de novos bitcoins: computadores competem para resolver cálculos e recebem
        recompensas. A cada ~4 anos ocorre o <em>halving</em> — a recompensa cai
        pela metade.
      </div>
    `,
    quiz: {
      q: "Qual é o limite máximo de bitcoins que existirão?",
      opts: ["100 milhões", "21 milhões", "1 bilhão", "Sem limite"],
      c: 1,
      fb: "Certo! 21 milhões é o limite fixado no código. Essa escassez é uma das bases do valor do BTC."
    }
  },
  {
    id: 3,
    title: "Ethereum e Smart Contracts",
    icon: "🔷",
    desc: "Programas que rodam na blockchain",
    xp: 20,
    color: "#0d1a30",
    content: `
      <span class="lesson-icon">🔷</span>
      <div class="lesson-title">Ethereum e Smart Contracts</div>
      <div class="lesson-body">
        Em 2015, Vitalik Buterin lançou o Ethereum com uma ideia revolucionária:
        e se a blockchain pudesse executar <em>programas</em>, não apenas registrar
        transações?
      </div>
      <div class="lesson-hl">
        Smart contracts são contratos autoexecutáveis em código. Sem intermediários:
        se A for verdadeiro, execute B. Automático, transparente, imutável.
      </div>
      <div class="lesson-body">
        O Ethereum foi construído do zero com nova arquitetura. Usa Ether (ETH)
        como combustível (gas) para executar contratos. Abriu as portas para DeFi,
        NFTs e muito mais.
      </div>
    `,
    quiz: {
      q: "O que diferencia o Ethereum do Bitcoin fundamentalmente?",
      opts: [
        "ETH é mais barato de minerar",
        "Suporta contratos inteligentes programáveis",
        "Bitcoin usa blockchain diferente",
        "ETH tem mais moedas"
      ],
      c: 1,
      fb: "Correto! Os smart contracts transformaram a blockchain num computador distribuído."
    }
  },
  {
    id: 4,
    title: "BNB e Solana",
    icon: "🟡",
    desc: "Velocidade e ecossistemas alternativos",
    xp: 15,
    color: "#1a1005",
    content: `
      <span class="lesson-icon">🟡</span>
      <div class="lesson-title">BNB e Solana</div>
      <div class="lesson-body">
        <strong style="color:#e8eaf6">BNB</strong> nasceu em 2017 como token da
        Binance. Tornou-se a moeda nativa da BNB Chain — compatível com Ethereum,
        mais rápida e com taxas menores, porém mais centralizada.
      </div>
      <div class="lesson-hl">
        BNB Chain: compatível com Ethereum. Solana: até 65.000 transações por
        segundo, taxas de centavos.
      </div>
      <div class="lesson-body">
        <strong style="color:#e8eaf6">Solana</strong> surgiu em 2020 com
        <em>Proof of History</em> (PoH) — um mecanismo que permite velocidade
        extrema. É preferida para NFTs e jogos blockchain.
      </div>
    `,
    quiz: {
      q: "Qual inovação a Solana introduziu para alta velocidade?",
      opts: [
        "Proof of Work mais eficiente",
        "Proof of History (PoH)",
        "Fork do Ethereum",
        "Sharding em camadas"
      ],
      c: 1,
      fb: "Exato! Proof of History é o que permite até 65.000 transações por segundo."
    }
  },
  {
    id: 5,
    title: "Chainlink e Oráculos",
    icon: "🔗",
    desc: "Conectando blockchain ao mundo real",
    xp: 15,
    color: "#05101a",
    content: `
      <span class="lesson-icon">🔗</span>
      <div class="lesson-title">Chainlink e Oráculos</div>
      <div class="lesson-body">
        Smart contracts têm um problema: não conseguem acessar dados do mundo
        real sozinhos. Como um contrato sabe o preço do BTC para liquidar uma
        aposta?
      </div>
      <div class="lesson-hl">
        Oráculos levam dados externos (preços, resultados) para dentro da
        blockchain. Chainlink (LINK) é o oráculo descentralizado mais usado
        no mundo.
      </div>
      <div class="lesson-body">
        Com Chainlink, um smart contract pode consultar o preço real de um ativo
        ou qualquer dado externo — de forma segura, sem depender de uma fonte
        centralizada.
      </div>
    `,
    quiz: {
      q: "Para que serve um oráculo como o Chainlink?",
      opts: [
        "Minerar novos tokens LINK",
        "Levar dados externos para a blockchain",
        "Criar nova blockchain mais rápida",
        "Substituir exchanges centralizadas"
      ],
      c: 1,
      fb: "Correto! Oráculos são a ponte entre o mundo real e os smart contracts."
    }
  },
  {
    id: 6,
    title: "Uniswap e DeFi",
    icon: "🦄",
    desc: "Exchanges sem intermediários",
    xp: 20,
    color: "#1a052a",
    content: `
      <span class="lesson-icon">🦄</span>
      <div class="lesson-title">Uniswap e DeFi</div>
      <div class="lesson-body">
        <strong style="color:#e8eaf6">DeFi</strong> (Finanças Descentralizadas)
        são protocolos financeiros em blockchain, sem bancos centrais. Empréstimos,
        trocas, juros — tudo em código.
      </div>
      <div class="lesson-hl">
        Uniswap é uma DEX (exchange descentralizada). Usa pools de liquidez:
        qualquer pessoa deposita pares de tokens e ganha taxas das trocas.
      </div>
      <div class="lesson-body">
        O token UNI dá direito de governança — quem possui UNI vota nas mudanças
        do protocolo. É o modelo DAO: empresa governada por código e seus usuários.
      </div>
    `,
    quiz: {
      q: "O que é uma DEX como o Uniswap?",
      opts: [
        "Corretora com sede física",
        "Exchange descentralizada com pools de liquidez",
        "Fundo de investimento em cripto",
        "Oráculo de preços"
      ],
      c: 1,
      fb: "Perfeito! DEX = exchange descentralizada. Sem conta obrigatória, sem custódia central."
    }
  },
  {
    id: 7,
    title: "Tether, Stablecoins e Hyperliquid",
    icon: "💲",
    desc: "Estabilidade e o futuro do trading",
    xp: 25,
    color: "#051a10",
    content: `
      <span class="lesson-icon">💲</span>
      <div class="lesson-title">Tether, Stablecoins e Hyperliquid</div>
      <div class="lesson-body">
        <strong style="color:#e8eaf6">Stablecoins</strong> resolvem a volatilidade:
        são tokens ancorados a moedas tradicionais. O <em>Tether (USDT)</em> vale
        sempre ~US$1 por ser lastreado em dólares reais.
      </div>
      <div class="lesson-hl">
        USDT é a "ponte" do mercado cripto: permite sair de posições voláteis sem
        converter para fiat. É a moeda mais negociada do mundo cripto.
      </div>
      <div class="lesson-body">
        <strong style="color:#e8eaf6">Hyperliquid</strong> é um protocolo de
        trading descentralizado de derivativos — futuros e perpétuos on-chain —
        com performance comparável às grandes exchanges centralizadas.
      </div>
    `,
    quiz: {
      q: "Por que stablecoins como USDT são importantes?",
      opts: [
        "Rendem mais que Bitcoin",
        "Eliminam volatilidade e servem como reserva estável",
        "São mineradas como BTC",
        "Substituem o Ethereum"
      ],
      c: 1,
      fb: "Correto! Stablecoins são a cola do ecossistema DeFi."
    }
  }
];

const COINS = {
  bitcoin:      { sym: "BTC",  label: "Bitcoin" },
  ethereum:     { sym: "ETH",  label: "Ethereum" },
  binancecoin:  { sym: "BNB",  label: "BNB" },
  solana:       { sym: "SOL",  label: "Solana" },
  chainlink:    { sym: "LINK", label: "Chainlink" },
  uniswap:      { sym: "UNI",  label: "Uniswap" },
  tether:       { sym: "USDT", label: "Tether" },
  hyperliquid:  { sym: "HYPE", label: "Hyperliquid" }
};

// ─── STATE ───────────────────────────────────────────────────────────────────

let S = { done: [], xp: 0, wallets: [], activeW: null, prices: {} };
try {
  const saved = localStorage.getItem('cgv2');
  if (saved) S = { ...S, ...JSON.parse(saved) };
} catch (e) {}

let editingTxIdx = null;

function save() {
  try { localStorage.setItem('cgv2', JSON.stringify(S)); } catch (e) {}
}

// ─── TABS ────────────────────────────────────────────────────────────────────

function switchTab(t) {
  document.querySelectorAll('.tab').forEach((b, i) =>
    b.classList.toggle('active', (i === 0 && t === 'learn') || (i === 1 && t === 'wallet'))
  );
  document.getElementById('sc-learn').classList.toggle('active', t === 'learn');
  document.getElementById('sc-wallet').classList.toggle('active', t === 'wallet');
  if (t === 'wallet') renderWallets();
}

// ─── LEARN ───────────────────────────────────────────────────────────────────

function renderTrail() {
  const d = S.done.length;
  document.getElementById('prog-label').textContent = d + ' de ' + LESSONS.length + ' módulos';
  document.getElementById('xp-label2').textContent = S.xp + ' XP';
  document.getElementById('xp-count').textContent = S.xp;
  document.getElementById('xp-fill').style.width = (d / LESSONS.length * 100).toFixed(0) + '%';

  document.getElementById('mods-wrap').innerHTML = LESSONS.map((l, i) => {
    const isDone  = S.done.includes(l.id);
    const locked  = i > 0 && !S.done.includes(LESSONS[i - 1].id);
    const badge   = isDone
      ? '<span class="mod-badge badge-done">✓ Concluído</span>'
      : locked
        ? '<span class="mod-badge badge-lock">🔒</span>'
        : '<span class="mod-badge badge-new">Novo</span>';
    return `
      <div class="mod-card${isDone ? ' done' : ''}${locked ? ' locked' : ''}"
           onclick="${locked ? '' : 'openLesson(' + l.id + ')'}">
        <div class="mod-icon" style="background:${l.color}">${l.icon}</div>
        <div class="mod-meta">
          <div class="mod-title">${l.title}</div>
          <div class="mod-sub">${l.desc}</div>
        </div>
        ${badge}
      </div>`;
  }).join('');
}

function openLesson(id) {
  const l    = LESSONS[id];
  const done = S.done.includes(id);

  document.getElementById('trail-list').style.display  = 'none';
  document.getElementById('lesson-view').style.display = 'block';

  document.getElementById('lesson-content').innerHTML = l.content + `
    <div class="quiz-box">
      <div class="quiz-q">${l.quiz.q}</div>
      <div class="quiz-opts">
        ${l.quiz.opts.map((o, i) => `
          <button class="qopt${done && i === l.quiz.c ? ' correct' : ''}"
                  onclick="answerQ(${id}, ${i})">${o}</button>
        `).join('')}
      </div>
      <div class="qfb${done ? ' show ok' : ''}" id="qfb">
        ${done ? '✓ ' + l.quiz.fb : ''}
      </div>
    </div>
    <button class="next-btn${done ? ' show' : ''}" id="next-btn"
            onclick="nextLesson(${id})">
      ${id < LESSONS.length - 1 ? 'Próximo módulo →' : '🎉 Trilha concluída!'}
    </button>`;
}

function answerQ(lid, chosen) {
  const l = LESSONS[lid];
  if (S.done.includes(lid)) return;

  document.querySelectorAll('.qopt').forEach((o, i) => {
    o.classList.toggle('correct', i === l.quiz.c);
    o.classList.toggle('wrong', i === chosen && chosen !== l.quiz.c);
  });

  const fb = document.getElementById('qfb');
  const ok = chosen === l.quiz.c;
  fb.className = 'qfb show ' + (ok ? 'ok' : 'fail');
  fb.textContent = ok
    ? '✓ ' + l.quiz.fb
    : '✗ Não exatamente. A resposta correta está em verde.';

  if (ok) {
    S.done.push(lid);
    S.xp += l.xp;
    save();
    document.getElementById('next-btn').className = 'next-btn show';
  }
}

function nextLesson(id) {
  const next = id + 1;
  if (next < LESSONS.length) openLesson(next);
  else backToTrail();
}

function backToTrail() {
  document.getElementById('trail-list').style.display  = 'block';
  document.getElementById('lesson-view').style.display = 'none';
  renderTrail();
}

// ─── WALLETS ─────────────────────────────────────────────────────────────────

function renderWallets() {
  const el = document.getElementById('wallet-list');
  if (!S.wallets.length) {
    el.innerHTML = `
      <div class="empty-state">
        <div class="empty-icon">💼</div>
        Nenhuma carteira ainda.<br>Crie a primeira!
      </div>`;
    return;
  }
  el.innerHTML = S.wallets.map((w, i) => {
    const { inv, cur, pct } = calcPerf(w);
    const pc   = pct >= 0 ? 'pos' : 'neg';
    const sign = pct >= 0 ? '+' : '';
    return `
      <div class="w-item" onclick="openWallet(${i})">
        <div class="w-name">${w.name}</div>
        <div class="w-meta">USD · ${w.txs.length} transação(ões)</div>
        ${w.txs.length
          ? `<div class="w-perf ${pc}">${sign}${pct.toFixed(2)}% · US$ ${cur.toFixed(2)} atual</div>`
          : ''}
      </div>`;
  }).join('');
}

function calcPerf(w) {
  let inv = 0, cur = 0;
  w.txs.forEach(tx => {
    const p = S.prices[tx.coin] || 0;
    inv += tx.price * tx.qty;
    cur += p * tx.qty;
  });
  const pct = inv > 0 ? ((cur - inv) / inv * 100) : 0;
  return { inv, cur, pct };
}

function openWallet(i) {
  S.activeW = i;
  const w = S.wallets[i];
  document.getElementById('wallet-list-view').style.display = 'none';
  document.getElementById('wallet-detail').style.display    = 'block';
  document.getElementById('d-name').textContent = w.name;
  fetchPrices().then(() => { renderTxList(); renderChart(); });
  stab('txs');
}

function backWallets() {
  document.getElementById('wallet-list-view').style.display = 'block';
  document.getElementById('wallet-detail').style.display    = 'none';
  renderWallets();
}

function stab(t) {
  document.querySelectorAll('.stab').forEach((b, i) =>
    b.classList.toggle('active', (i === 0 && t === 'txs') || (i === 1 && t === 'chart'))
  );
  document.getElementById('st-txs').style.display   = t === 'txs'   ? 'block' : 'none';
  document.getElementById('st-chart').style.display = t === 'chart' ? 'block' : 'none';
  if (t === 'chart') renderChart();
}

// ─── PRICES ──────────────────────────────────────────────────────────────────

async function fetchPrices() {
  try {
    const ids = Object.keys(COINS).join(',');
    const res = await fetch(
      'https://api.coingecko.com/api/v3/simple/price?ids=' + ids + '&vs_currencies=usd'
    );
    const data = await res.json();
    Object.keys(data).forEach(k => { S.prices[k] = data[k].usd; });
  } catch (e) {
    Object.keys(COINS).forEach(k => { if (!S.prices[k]) S.prices[k] = 0; });
  }
}

// ─── TRANSACTIONS ─────────────────────────────────────────────────────────────

function fmtDate(dt) {
  if (!dt) return '';
  try {
    const d = new Date(dt);
    return d.toLocaleDateString('pt-BR') + ' ' +
           d.toLocaleTimeString('pt-BR', { hour: '2-digit', minute: '2-digit' });
  } catch (e) { return dt; }
}

function renderTxList() {
  const w  = S.wallets[S.activeW];
  const el = document.getElementById('tx-list-wrap');

  if (!w.txs.length) {
    el.innerHTML = `<div class="empty-state"><div class="empty-icon">📊</div>Sem transações ainda.</div>`;
    return;
  }

  el.innerHTML = w.txs.map((tx, i) => {
    const c   = COINS[tx.coin];
    const p   = S.prices[tx.coin] || 0;
    const cur = p * tx.qty;
    const inv = tx.price * tx.qty;
    const pct = inv > 0 ? ((cur - inv) / inv * 100) : 0;
    const pc  = pct >= 0 ? 'pos' : 'neg';
    const sign = pct >= 0 ? '+' : '';
    return `
      <div class="tx-card">
        <div class="tx-top">
          <div class="tx-coin-info">
            <div class="coin-avatar">${c.sym.slice(0, 2)}</div>
            <div>
              <div class="tx-cname">${c.label} (${c.sym})</div>
              <div class="tx-cmeta">${tx.qty} ${c.sym} · US$ ${tx.price.toFixed(2)}/un</div>
            </div>
          </div>
          <div class="tx-right">
            <div class="tx-val">US$ ${inv.toFixed(2)}</div>
            <div class="tx-pct ${pc}">${sign}${pct.toFixed(1)}% · US$ ${cur.toFixed(2)}</div>
          </div>
        </div>
        <div class="tx-date">📅 ${fmtDate(tx.date) || 'Data não informada'}</div>
        <div class="tx-actions">
          <button class="act-btn act-edit" onclick="editTx(${i})">✏️ Editar</button>
          <button class="act-btn act-del"  onclick="delTx(${i})">🗑 Excluir</button>
        </div>
      </div>`;
  }).join('');
}

function editTx(i) {
  editingTxIdx = i;
  const tx = S.wallets[S.activeW].txs[i];
  document.getElementById('tx-modal-title').textContent = 'Editar transação';
  document.getElementById('tx-coin').value  = tx.coin;
  document.getElementById('tx-price').value = tx.price;
  document.getElementById('tx-qty').value   = tx.qty;
  document.getElementById('tx-date').value  = tx.date || '';
  openModal('modal-tx');
}

function delTx(i) {
  if (!confirm('Excluir esta transação?')) return;
  S.wallets[S.activeW].txs.splice(i, 1);
  save();
  renderTxList();
  renderChart();
}

async function saveTx() {
  const coin  = document.getElementById('tx-coin').value;
  const price = parseFloat(document.getElementById('tx-price').value);
  const qty   = parseFloat(document.getElementById('tx-qty').value);
  const date  = document.getElementById('tx-date').value;

  if (!coin || isNaN(price) || isNaN(qty) || qty <= 0) return;

  const tx = { coin, price, qty, date };

  if (editingTxIdx !== null) {
    S.wallets[S.activeW].txs[editingTxIdx] = tx;
    editingTxIdx = null;
  } else {
    S.wallets[S.activeW].txs.push(tx);
  }

  save();
  closeModal('modal-tx');

  document.getElementById('tx-modal-title').textContent = 'Nova transação';
  document.getElementById('tx-price').value = '';
  document.getElementById('tx-qty').value   = '';
  document.getElementById('tx-date').value  = '';

  await fetchPrices();
  renderTxList();
  renderChart();
}

// ─── CHART ───────────────────────────────────────────────────────────────────

function renderChart() {
  const w              = S.wallets[S.activeW];
  const { inv, cur, pct } = calcPerf(w);
  const profit         = cur - inv;
  const isPos          = profit >= 0;

  const pctEl = document.getElementById('perf-pct');
  pctEl.textContent = (pct >= 0 ? '+' : '') + pct.toFixed(2) + '%';
  pctEl.className   = 'perf-pct ' + (pct >= 0 ? 'pos' : 'neg');

  document.getElementById('perf-sub').textContent = inv > 0
    ? `Investido: US$ ${inv.toFixed(2)} · Atual: US$ ${cur.toFixed(2)}`
    : 'Adicione transações para ver a performance';

  const max = Math.max(inv, cur, 1);

  document.getElementById('b-inv').style.width = (inv / max * 85 + 15).toFixed(0) + '%';
  document.getElementById('v-inv').textContent = 'US$ ' + inv.toFixed(2);

  const profPct = Math.abs(profit) / max * 85;
  document.getElementById('b-prof').style.width   = (profPct + 15).toFixed(0) + '%';
  document.getElementById('b-prof').className     = 'bar-fill ' + (isPos ? 'bar-profit' : 'bar-loss');
  document.getElementById('v-prof').textContent   = (isPos ? '+ ' : '') + 'US$ ' + Math.abs(profit).toFixed(2);
  document.getElementById('profit-lbl').textContent = isPos ? 'Lucro' : 'Prejuízo';
  document.getElementById('leg-dot-p').className  = 'leg-dot ' + (isPos ? 'leg-profit' : 'leg-loss');
  document.getElementById('leg-lbl-p').textContent = isPos ? 'Lucro' : 'Prejuízo';

  document.getElementById('tx-breakdown').innerHTML = w.txs.map(tx => {
    const c    = COINS[tx.coin];
    const p    = S.prices[tx.coin] || 0;
    const cur2 = p * tx.qty;
    const inv2 = tx.price * tx.qty;
    const pct2 = inv2 > 0 ? ((cur2 - inv2) / inv2 * 100) : 0;
    const pc   = pct2 >= 0 ? 'pos' : 'neg';
    const sign = pct2 >= 0 ? '+' : '';
    return `
      <div class="tx-card">
        <div class="tx-top">
          <div class="tx-coin-info">
            <div class="coin-avatar">${c.sym.slice(0, 2)}</div>
            <div>
              <div class="tx-cname">${c.label}</div>
              <div class="tx-cmeta">Aportado: US$ ${inv2.toFixed(2)}</div>
            </div>
          </div>
          <div class="tx-right">
            <div class="tx-val">US$ ${cur2.toFixed(2)}</div>
            <div class="tx-pct ${pc}">${sign}${pct2.toFixed(1)}%</div>
          </div>
        </div>
        <div class="tx-date">📅 ${fmtDate(tx.date) || 'Data não informada'}</div>
      </div>`;
  }).join('');
}

// ─── MODALS ───────────────────────────────────────────────────────────────────

function openModal(id)  { document.getElementById(id).classList.add('open'); }
function closeModal(id) { document.getElementById(id).classList.remove('open'); }

function saveWallet() {
  const name = document.getElementById('w-name').value.trim();
  if (!name) return;
  S.wallets.push({ name, txs: [] });
  save();
  closeModal('modal-wallet');
  document.getElementById('w-name').value = '';
  renderWallets();
}

// ─── INIT ────────────────────────────────────────────────────────────────────

renderTrail();
