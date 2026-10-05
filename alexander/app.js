const socials = [
  { label: 'Telegram · комьюнити', url: 'https://t.me/artofmovement_community' },
  { label: 'YouTube', url: 'https://youtube.com/@artofmovement_community' },
  { label: 'TikTok', url: 'https://www.tiktok.com/@artofmovement_community' },
  { label: 'VK', url: 'https://vk.ru/artofmotion_community' },
];

const personalSocials = [
  { label: 'Telegram · личный канал', url: 'https://t.me/choopa_life' },
  { label: 'TikTok · личный профиль', url: 'https://www.tiktok.com/@alex_choopa' },
  { label: 'VK · личный профиль', url: 'https://vk.ru/choopa6661' },
];

const choopaPlaySocials = [
  { label: 'Telegram · Choopa Play', url: 'https://t.me/choopaplay' },
  { label: 'YouTube · Choopa Play', url: 'https://youtube.com/@choopaplay' },
  { label: 'TikTok · Choopa Play', url: 'https://www.tiktok.com/@choopaplay' },
  { label: 'Twitch · Choopa Play', url: 'https://www.twitch.tv/choopaplay' },
  { label: 'VK · Choopa Play', url: 'https://vk.ru/choopaplay' },
];

function link(label, url) {
  return `<a class="link" href="${url}" target="_blank" rel="noopener noreferrer"><span>${label}</span><span>↗</span></a>`;
}

function layout(content, title) {
  document.title = title;
  return `<div class="topline"><span>O.R.B.I.T. / LINKS</span><span class="mark">AC</span></div>${content}<footer><span>Александр Чупин · 2026</span><a class="back" href="/alexander">Личная страница</a></footer>`;
}

function render() {
  const path = window.location.pathname.replace(/\/$/, '') || '/alexander';
  const app = document.querySelector('#app');
  if (path === '/choopa-play') {
    app.innerHTML = layout(`<section class="hero"><div class="eyebrow">PROJECT 01</div><h1>Choopa <span class="accent">Play</span></h1><p class="lead">Игры, стримы, цифровые эксперименты и проекты, которые превращают идеи в действие.</p><div class="links">${choopaPlaySocials.map(s => link(s.label, s.url)).join('')}</div></section>`, 'Choopa Play — ссылки');
    return;
  }
  if (path === '/art-of-movement') {
    app.innerHTML = layout(`<section class="hero"><div class="eyebrow">PROJECT 02</div><h1>Искусство <span class="accent">Движения</span></h1><p class="lead">Развитие личности через познание собственного тела и укрепление характера.</p><div class="links">${socials.map(s => link(s.label, s.url)).join('')}</div><p class="note">Сила · гибкость · выносливость · координация<br/>Дисциплина · тренировки · питание · восстановление</p></section>`, 'Искусство Движения — ссылки');
    return;
  }
  app.innerHTML = layout(`<section class="hero"><div class="eyebrow">PERSONAL HUB</div><h1>Александр <span class="accent">Чупин</span></h1><p class="lead">Личная страница и проекты, которые я развиваю.</p><div class="links">${personalSocials.map(s => link(s.label, s.url)).join('')}</div><div class="grid"><a class="card" href="/choopa-play"><div class="eyebrow">PROJECT 01</div><h2>Choopa Play</h2><p>Игры, цифровые продукты и эксперименты.</p></a><a class="card" href="/art-of-movement"><div class="eyebrow">PROJECT 02</div><h2>Искусство Движения</h2><p>Гибридный атлетизм и всестороннее развитие через тело.</p></a></div></section>`, 'Александр Чупин — проекты');
}

render();
