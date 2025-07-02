<!-- 各ページ詳細 -->
<!-- サイトの紹介、Heroセクション、今週のおすすめアニメ表示 -->
<!-- Heroエリア（アニメーション付き見出し）
サイトの目的紹介
おすすめアニメーション3選をリンク付きで表示 -->

<template>
  <div class="container">
    <div class="maincontents">
      <h2 class="">🎥 Home</h2>
      <div class="caption">
      <p class="">Welcome to Motion Palette!</p>
      <p>さまざまなCSSアニメーションを実験＆紹介するサイトです。</p>
      <p>キーフレームで使えば以下のようなアニメーションが作れます。</p>
      </div>

      <div class="animation-card-box-container">
        <div id="animation-card-box" ref="box" class="animate1"></div>
      </div>
      
      <div class="link-btn-area">
        <router-link to="/gallery" class="link-btn">
          <button class="">Galleryを見る</button>
        </router-link>
      </div>
    </div>
  </div>
</template>

<style scoped>
.link-btn-area{
  margin-top: 2rem;
  display: flex;
  width: 100%;
  gap: 10px;
  justify-content: center;
}

.animation-card-box-container{
  flex: 1;
    margin-top: 2rem;
    width: 100%;
    overflow: hidden;
    display: flex;
    align-items: center;
    border: 1px solid gray;
    border-radius: 8px;
}

#animation-card-box{
    width: 100px;
    height: 100px;
    margin: auto;
    background-image: linear-gradient(90deg, skyblue, pink);
}

/* アニメーション1: 左右に動く */
@keyframes moveSide {
  0% { transform: translateX(100px); transform: translateY(0px); }
  25% { transform: translateX(100px); transform: translateY(30px); }
  50% { transform: translateX(100px); transform: translateY(0px);}
  75% { transform: translateX(100px); transform: translateY(30px);}
  100% { transform: translateX(100px); transform: translateY(0px);}
}

/* アニメーション2: 回転 */
@keyframes rotateBox {
  0% { transform: rotate(0deg); }
  20% { transform: rotate(0deg); }
  90% { transform: rotate(370deg); }
  100% { transform: rotate(360deg); }
}

/* アニメーション3: 拡大縮小 */
@keyframes scaleBox {
  0% { transform: scale(1) translateX(0px);}
  25% { transform: scale(1.5) translateX(-100px); }
  50% { transform: scale(1) translateX(0px); }
  75% { transform: scale(1.5) translateX(100px); }
  100% { transform: scale(1) translateX(0px); }
}


/* 各アニメーションクラス */
.animate1 {
  animation: moveSide 2s infinite;
}

.animate2 {
  animation: rotateBox 2s ease infinite;
}

.animate3 {
  animation: scaleBox 2s ease infinite;
}

</style>

<script setup>
import { ref, onMounted } from 'vue';

const box = ref(null); // nullで初期化
const animations = ['animate1', 'animate2', 'animate3'];

function setRandomAnimation() {
  if (!box.value) return; // box.value が null のときは何もしない

  // 前のクラスを削除
  animations.forEach(cls => {
    box.value.classList.remove(cls);
  });

  // ランダムなアニメーションを追加
  const randomClass = animations[Math.floor(Math.random() * animations.length)];
  box.value.classList.add(randomClass);
}

// DOMが描画された後に実行
onMounted(() => {
  setRandomAnimation();
  setInterval(setRandomAnimation, 4000); // 3秒ごとに切り替え
});
</script>