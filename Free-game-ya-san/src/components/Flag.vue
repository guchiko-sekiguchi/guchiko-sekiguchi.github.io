<template>
<!-- ナビゲーション -->
<div class="flag-pole">
  <nav class="flags">
      <span class="flag"><router-link to="/Free-game-ya-san/">🏠 トップページ</router-link></span>
      <span class="flag"><router-link to="/Free-game-ya-san/game-list">🎮 ゲームリスト</router-link></span>
  </nav>
</div>
</template>

<style scoped>
/* 全体レイアウト */
.flag-pole {
  position: relative;
  padding-left: 20px; /* ポール分の余白 */
  margin: 1rem;
}

/* ポール本体（縦棒） */
.flag-pole::before {
  content: "";
  position: absolute;
  left: 0;
  top: 0;
  bottom: 0;
  width: 4px;
  background-color: #444;
  border-radius: 2px;
}

/* 旗全体を縦に並べる */
.flags {
  display: flex;
  flex-direction: column;
  gap: 20px;
}

/* 各旗のスタイル */
.flag {
  position: relative;
  display: block;
  background-color: #e63946;
  color: white;
  padding: 10px 30px 10px 20px;
  text-decoration: none;
  font-weight: bold;
  border-radius: 0 5px 5px 0;
  margin-left: 0; /* ポールから直接ついてる感じに */
  transform-origin: left center;
}

/* 三角の旗先 */
.flag::after {
  content: "";
  position: absolute;
  right: -15px;
  top: 50%;
  transform: translateY(-50%);
  width: 0;
  height: 0;
  border-top: 10px solid transparent;
  border-bottom: 10px solid transparent;
  border-left: 15px solid #e63946;
}

</style>