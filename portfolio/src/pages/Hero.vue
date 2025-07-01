<template>
      <section class="hero">

        <p class="animated-text">
          <span >フロントエンド</span><span> × </span><span>デザイン</span><br>
          <span class="text-small">実装も、見た目づくりも、</span>
          <span class="text-small">学びながら成長中。</span>
        </p>
        </section>
</template>

<style>

.hero {
  display: flex;
  text-align: center;
  align-items: center;
  justify-content: center;
  font-family: 'Yu Gothic', 'Noto Sans JP', sans-serif;
  position: relative;
  overflow: hidden; /* 背景がはみ出ないように */
  min-height: 300px;
}

.animated-text {
  font-weight: 700;
  background: linear-gradient(270deg, cyan, magenta, yellow, cyan);
  background-size: 600% 600%;
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  animation: gradientShift 15s ease infinite;
  display: inline-block;
      line-height: 1.5;

}

.animated-text span{
  font-size: 2.5rem;
}

@keyframes gradientShift {
  0% {
    background-position: 0% 50%;
  }
  100% {
    background-position: 100% 50%;
  }
}

/* フェードインと上下動のアニメはJSで文字を一文字ずつ囲んで実装する形がおすすめですが */
/* ここではホバーの揺れのみCSSで例示 */

.animated-text:hover {
  animation: gradientShift 15s ease infinite, swing 0.5s ease infinite;
}

@keyframes swing {
  0%, 100% {
    transform: translateX(0);
  }
  50% {
    transform: translateX(5px);
  }
}


@media (max-width: 768px) {
  
}

@media (max-width: 967px) {
  .animated-text span {
    font-size: 1.8rem;
    line-height: 1.3;
    }

  span.text-small{
    font-size: 1.5rem;
    line-height: 1.5;
}

  .animated-text span::after {
    content: "\A";       /* 改行コード */
    white-space: pre;    /* 改行を反映させる */
  }
  
}

</style>