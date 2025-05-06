let count = 0;

function drawGacha() {
  const result = countries[Math.floor(Math.random() * countries.length)];
  document.getElementById('country-name').innerText = result.name;
  document.getElementById('flag').src = result.flag;
  document.getElementById('hdi').innerText = result.hdi + " (" + getHDICategory(result.hdi) + ")";
  document.getElementById('life').innerText = result.life + " years";
  document.getElementById('rarity').innerText = result.rarity;
  document.getElementById('card').classList.remove('hidden');
  count++;
  document.getElementById('counter').innerText = `抽卡次數 / Draws: ${count}`;
}

function getHDICategory(hdi) {
  if (hdi >= 0.9) return "非常高 / Very High";
  if (hdi >= 0.8) return "高 / High";
  if (hdi >= 0.7) return "中 / Medium";
  return "低 / Low";
}

function shareResult() {
  const name = document.getElementById('country-name').innerText;
  const url = window.location.href;
  const text = `我轉生到了 ${name}！你會去哪裡？🎲 試試看：${url}`;
  navigator.clipboard.writeText(text).then(() => {
    alert("已複製分享連結！✅");
  });
}
