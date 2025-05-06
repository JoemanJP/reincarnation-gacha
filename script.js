let count = 0;

function weightedRandomPick(data) {
  const total = data.reduce((sum, item) => sum + item.population_pct, 0);
  const rand = Math.random() * total;
  let acc = 0;
  for (let item of data) {
    acc += item.population_pct;
    if (rand <= acc) return item;
  }
}

function drawGacha() {
  const result = weightedRandomPick(countries);
  document.getElementById('country-name').innerText = result.name;
  document.getElementById('flag').src = result.flag;
  document.getElementById('hdi').innerText = result.hdi + "（" + getHDICategory(result.hdi) + "）";
  document.getElementById('life').innerText = result.life + " 歲";
  document.getElementById('rarity').innerText = result.population_pct + "％";
  document.getElementById('card').classList.remove('hidden');
  count++;
  document.getElementById('counter').innerText = `已轉生次數：${count}`;
}

function getHDICategory(hdi) {
  if (hdi >= 0.9) return "非常高";
  if (hdi >= 0.8) return "高";
  if (hdi >= 0.7) return "中";
  return "低";
}

function shareResult() {
  const name = document.getElementById('country-name').innerText;
  const url = window.location.href;
  const text = `我下輩子投胎到【${name}】！你呢？來玩看看 👉 ${url}`;
  navigator.clipboard.writeText(text).then(() => {
    alert("已複製分享文字，快貼給朋友！");
  });
}
