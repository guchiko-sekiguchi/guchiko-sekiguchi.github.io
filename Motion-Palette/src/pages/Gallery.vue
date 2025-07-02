<script setup>
import { ref } from 'vue'


const animationItems = ref([
  { title: 'Fade In', animation: 'fade-in' },
  { title: 'Fade In Up', animation: 'fade-in-up' },
  { title: 'Zoom In', animation: 'zoom-in' },
  { title: 'Zoom Out', animation: 'zoom-out' },
  { title: 'Rotate', animation: 'rotate' },
  { title: 'Flip Horizontal', animation: 'flip-horizontal' },
  { title: 'Slide Up', animation: 'slide-up' },
  { title: 'Slide In Right', animation: 'slide-in-right' },
  { title: 'Slide In Left', animation: 'slide-in-left' },
  { title: 'Bounce', animation: 'bounce' },
  { title: 'Rubber-Band', animation: 'rubber-band' },
  { title: 'Pulse', animation: 'pulse' },
  { title: 'Shimmer', animation: 'shimmer' },
  { title: 'Shake', animation: 'shake' },
  { title: 'Heartbeat', animation: 'heartbeat' },
  { title: 'Scan', animation: 'scan' }
])
</script>


<!-- 各ページ詳細 -->
<!-- 各種アニメーションカードを transition / keyframes で比較 -->
<!-- アニメーションカード一覧（AnimationCard.vueを使って繰り返し表示）
切り替えボタン：transition / keyframes
検索 or フィルター機能（fade / slide / rotateなど） -->

<template>
    <div class="container">
        <div class="maincontents">
            <h2 class="">🎥 Animation Gallery</h2>
            <div class="caption">
              <p>動くデザインの見本帳</p>
              <p>CSS Animation Showcase</p>
            </div>
            <div class="animation-card-area">
                <div v-for="(item, index) in animationItems" :key="index" class="animation-title">
                    <div class="tex-erea">
                      <p>◆</p>
                      <p class="item-title-text">{{ item.title }}</p>
                    </div>
                    <div class="animation-card-box-container">
                      <div class="animation-card-box" :class="item.animation"></div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<style scoped>

.animation-card-area{
    height: 100%;
    padding: 0 30px;
    margin-top: 20px;
    display: grid;
    grid-template-columns: repeat(auto-fill, 150px);
    grid-auto-rows: 230px;     /* 行の高さを固定し、新アイテムで自動追加 */
    gap: 20px;                 /* カード間の隙間 */
    justify-content: space-between;
}

.animation-title{
    width: 100px;
    height: 3rem;
    display: block;
}

.tex-erea{
  display: flex;
  width: 150px;
  height: 3rem;
  margin-top: 15px;
  border: 1px solid black;

  border-radius: 20px;
  padding: 5px;
  line-height:1.2;
  align-items: center;
}

.item-title-text{
    width: 150px;
}

.animation-card-box-container{
    margin-top: 15px;
    width: 150px;
    height: 150px;
    overflow: hidden;
    display: flex;
    align-items: center;
}

.animation-card-box{
    width: 100px;
    height: 100px;
    margin: auto;
    background-image: linear-gradient(90deg, skyblue, pink);
}


@keyframes fadeIn {
  0% { opacity: 0; }
  50% { opacity: 1; }
  80%  { opacity: 0; }
  100%  { opacity: 0; }
}
.fade-in {
  animation: fadeIn 2s ease-out forwards infinite;
}

@keyframes fadeInUp {
  0%  { opacity: 0; transform: translateY(20px); }
  50%   { opacity: 1; transform: translateY(0); }
  60%   { opacity: 1; transform: translateY(0); }
  100%   { opacity: 0; transform: translateY(-80px); }
}
.fade-in-up {
  animation: fadeInUp 1.5s ease-out forwards infinite;
}

@keyframes zoomIn {
  0% { transform: scale(1);}
  50%    { transform: scale(1.5);}
  70%    { transform: scale(1);}
  100%    { transform: scale(1);}
}
.zoom-in {
  animation: zoomIn 2s ease-out forwards infinite;
}

@keyframes zoomOut {
  0% { transform: scale(1);}
  50%   { transform: scale(0.5)}
  60%   { transform: scale(1)}
  100%   { transform: scale(1)}
}
.zoom-out {
  animation: zoomOut 2s ease-in forwards infinite;
}

@keyframes rotate {
  0% { transform: rotate(0deg); }
  50% { transform: rotate(100deg); }
  100%    { transform: rotate(360deg); }
}
.rotate {
  animation: rotate 1.5s linear forwards infinite;
}

@keyframes flipH {
  0% { transform: rotateY(0); }
  100%  { transform: rotateY(360deg); }
}
.flip-horizontal {
  animation: flipH 2s ease forwards infinite;
}


@keyframes slideUp {
  0% { transform: translateY(20px); opacity: 0; }
  75% { transform: translateY(0); opacity: 1; }
  100%  { transform: translateY(-80px); opacity: 0; }
}
.slide-up {
  animation: slideUp 2s ease-out forwards infinite;
}

@keyframes slideInLeft {
  0% { transform: translateX(-100%);opacity: 0;}
  50% { transform: translateX(0);opacity: 1; }
  60% { transform: translateX(-100%);opacity: 0;  }
  100%   { transform: translateX(-100%);opacity: 0;}
}
.slide-in-left {
  animation: slideInLeft 2s ease-out forwards infinite;
}

@keyframes slideInRight {
  0% { transform: translateX(100%);opacity: 0; }
  50%   { transform: translateX(0%);opacity: 1; }
  60%   { transform: translateX(100%);opacity: 0;   }
  100%   { transform: translateX(100%);opacity: 0;  }
}
.slide-in-right {
  animation: slideInRight 2s ease-out forwards infinite;
}

@keyframes bounce {
  0% { transform: translateY(0); transform: scaleY(0.5);transform-origin: bottom; }
  25% { transform: translateY(-5px); transform: scaleY(0.5);transform-origin: bottom;}
  50% { transform: scaleY(1);transform-origin:  bottom; transform: translateY(-50px);}
  90% { transform: translateY(-5px); transform: scaleY(0.5);transform-origin: bottom;}
  100% { transform: translateY(0); transform: scaleY(0.5);transform-origin: bottom;}
}
.bounce {
  animation: bounce 1s ease forwards infinite;
}

@keyframes rubberBand {
  0%   { transform: scale3d(1, 1, 1); }
  30%  { transform: scale3d(1.25, 0.75, 1); }
  40%  { transform: scale3d(0.75, 1.25, 1); }
  50%  { transform: scale3d(1.15, 0.85, 1); }
  65%  { transform: scale3d(.95, 1.05, 1); }
  75%  { transform: scale3d(1.05, .95, 1); }
  100% { transform: scale3d(1, 1, 1); }
}
.rubber-band {
  animation: rubberBand 0.8s ease forwards infinite;
}

@keyframes pulse {
  0%, 100% { opacity: 1; }
  50%      { opacity: 0.5; }
}
.pulse {
  animation: pulse 1.2s ease-in-out infinite;
}



.shimmer {
  background: linear-gradient(90deg,
    skyblue 10%,
    pink 25%,
    pink 50%,
    skyblue 100%
  );
  background-size: 150% 100%;
  animation: shimmer 2s linear infinite;
}
@keyframes shimmer {
  0%   { background-position: -150% 0; }
  100% { background-position: 150% 0; }
}

@keyframes shake {
  0%, 100% { transform: translateX(0); }
  20%, 60% { transform: translateX(-10px); }
  40%, 80% { transform: translateX(10px); }
}
.shake {
  animation: shake 0.6s ease-in-out forwards infinite;
}

@keyframes heartbeat {
  0%, 100% { transform: scale(1); }
  14%, 28% { transform: scale(1.3); }
}
.heartbeat {
  animation: heartbeat 0.6s ease-in-out infinite;
}

@keyframes scan {
  0% { clip-path: inset(0 100% 0 0); }
  50% { clip-path: inset(0 0% 0 0); } 
  60% { clip-path: inset(0 0% 0 0); } 
  100% { clip-path: inset(0 100% 0 0); }
}
.scan {

  animation: scan 2s ease-in-out infinite;
}

</style>