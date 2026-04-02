const prices = {
  BTC: 192450,
  ETH: 11230,
  SOL: 890
};

let portfolio = [];

function addTransaction() {
  const asset = document.getElementById("asset").value;
  const quantity = parseFloat(document.getElementById("quantity").value);
  const price = parseFloat(document.getElementById("price").value);

  if (!quantity || !price) return alert("Preencha tudo");

  portfolio.push({ asset, quantity, price });

  render();
}

function render() {
  const list = document.getElementById("list");
  list.innerHTML = "";

  let invested = 0;
  let current = 0;

  portfolio.forEach(item => {
    const currentPrice = prices[item.asset];

    const investedValue = item.quantity * item.price;
    const currentValue = item.quantity * currentPrice;

    invested += investedValue;
    current += currentValue;

    const li = document.createElement("li");
    li.innerText = `${item.asset} - R$ ${currentValue.toFixed(2)}`;
    list.appendChild(li);
  });

  const profit = ((current - invested) / invested) * 100 || 0;

  document.getElementById("total").innerText =
    "R$ " + current.toFixed(2);

  document.getElementById("profit").innerText =
    profit.toFixed(2) + "%";
}