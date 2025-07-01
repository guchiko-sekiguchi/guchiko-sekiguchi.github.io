<template>
    <section class="about-text">
        <p><span class="keyword cyan">PMO経験</span>あり。</p>
        <p>フロントエンドを勉強中。</p>
        <p><span class="keyword green">Vue</span>や<span class="keyword magenta">Figma</span>を使ってデザインも挑戦。</p>
        <p>実装とデザイン、両方できるエンジニアを目指しています。</p>
    </section>
</template>

<style>

.about-text {
  padding: 20px 20px;
  margin:20px auto 30px;
  font-size: 1.2rem; /* 少し大きめ */
  line-height: 1.6;
  font-family: 'Yu Gothic', 'Noto Sans JP', sans-serif;
  color: #222;
  text-align: center;
  letter-spacing: 3px;
}

.keyword {
  font-weight: 700;
  font-size: 1.4rem; /* 少し大きめ */
  background-clip: text;
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  animation: gradientFlow 10s linear infinite;
  cursor: pointer;
  display: inline-block;
  transition: transform 0.3s ease;
}

.keyword.turquois-blue {
  background-image: linear-gradient(270deg, #00b87a, #007c53);
}

.keyword.green {
  background-image: linear-gradient(270deg, #00b87a, #007c53);
}

.keyword.cyan {
  background-image: linear-gradient(270deg, #00ffff, #00cccc);
}

.keyword.magenta {
  background-image: linear-gradient(270deg, #ff00ff, #cc00cc);
}

.keyword.yellow {
  background-image: linear-gradient(270deg, #ffcc00, #cc9900);
}

.keyword:hover {
  transform: translateX(5px) rotate(3deg);
}

@keyframes gradientFlow {
  0% {
    background-position: 0% 50%;
  }
  100% {
    background-position: 100% 50%;
  }
}

@media (max-width: 768px) {
  .about-text {
    font-size: 1rem;
    line-height: 1;
    line-height: 1.6;
  }
  .keyword {
  font-size: 1.2rem;
  }
}
</style>