<template>
  <footer class="site-footer">
    <!-- <p class="thank-you">🎁 Thank you! 🎠</p> -->

    <nav class="footer-nav">
      <router-link to="/Free-game-ya-san/">🏠 トップページ</router-link>
      <span>｜</span>
      <router-link to="/Free-game-ya-san/game-list">🎮 ゲームリスト</router-link>
    </nav>

    <small class="copyright">
     @2025free-game-ya-san
    </small>
  </footer>
</template>

<style scoped>
.site-footer {
  position: relative;
  text-align: center;
  padding: 2rem 1rem;

  font-family: "Rounded M+", "Kosugi Maru", sans-serif;
  color: #4b3832;

  background: radial-gradient(circle at center, #fef9e7 30%, #e8dac0 100%);
  border-top: 2px solid #a67c52;
  box-shadow:
    inset 0 0 8px rgba(255, 255, 255, 0.4),
    0 4px 12px rgba(0, 0, 0, 0.2),
    2px 2px 0 0px rgba(180, 153, 140, 0.6);

  z-index: 2;
}

.site-footer::before {
  content: "";
  position: absolute;
  top: 12px;
  bottom: 0px;
  left: 0px;
  right: 0px;
  border-top: solid 2px #a67c52; /* 外枠のスタイル */
  z-index: -1;
}

.thank-you {
  font-size: 1.2rem;
  line-height: 1.5;
   color: #4b3832;
}

.footer-nav {
}



.footer-nav a {
  text-decoration: none;
  color: #4b3832; /* ピンク系でかわいく */
  font-weight: bold;
  transition: color 0.2s;
}

.footer-nav a:hover {
  color: #E63995; /* レモンイエローでホバー */
}

.copyright{
  color: gray;
  line-height: 20px;
}
</style>