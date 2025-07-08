<script setup>
import Header from './components/Header.vue'
import Footer from './components/Footer.vue'
import Lside from './components/Lside.vue'
import Rside from './components/Rside.vue'
import Flag from './components/Flag.vue'
import BalloonBackground from './components/BalloonBackground.vue'
</script>

<template>
  <BalloonBackground />
  <div class="page-layout">
    <Flag class="flag-layout" />
    <Header />
    <div class="middle-area">
        <Lside class="side"/>
        <div class="main-contents-layout">
          <router-view />
        </div>
        <Rside class="side"/>
    </div>

        <Footer />
  </div>
</template>

<style>
*{
  margin: 0;
  padding: 0;
  box-sizing: border-box; /* パディングやボーダーをサイズに含める */
}

.flag-layout{
  display: none;
}

html,
body{
  
  overflow-y: auto; /* ページ全体で縦スクロール */
  overflow-x: hidden; /* 横スクロールは避ける */
  margin: 0 !important;
  padding: 0;
  min-width: 320px;
  width: 100vw;
  height: 100vh;         /* ビューポート高さいっぱい */
  min-height: 100vh;     /* 最低でも画面高さ分 */
  font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen,
    Ubuntu, Cantarell, "Open Sans", "Helvetica Neue", sans-serif; /* 使いやすいフォントスタック */
}

body {
  background: linear-gradient(to bottom, 
  #29d4ff 0%,           /* 上端 */
  #a9e5ff 60%,          /* 中間あたりで薄く */
  #e6f9ff 85%,          /* もう少し白っぽく */
  #ffffff 100%          /* 下端はほぼ白 */
);
  overflow-x: hidden;
}

*, *::before, *::after {
  box-sizing: inherit; /* 全要素にbox-sizingを適用 */
}

#app {
  width:100%;
  font-family: Avenir, Helvetica, Arial, sans-serif;
  color: #2c3e50;
  display: flex;
  flex-direction: column;
  height: 100vh;
  min-height: 100vh;
}

.page-layout {
  min-width: 320px;
  display: flex;
  flex-direction: column;
  min-height: 100vh;
  width: 100%;
}

.middle-area {
  display: flex;
  flex: 1;
  width: 100%;
}

/* 左右サイド */
.side {
  flex: 0 0 200px; /* 固定幅 */
  box-sizing: border-box;
  background: rgb(255, 255, 255, .5);
  border-radius: 10px;
  margin: 1rem;
  z-index: 1;

}
.main-contents-layout {
  width: 100%;
  margin: 0 1rem;
  padding-bottom: 3rem;
  border-radius: 10px 10px 0 0;
  background: #f3eedb;
  z-index: 1;

}

h1,
h2{
    color: #4b3832;
    text-align: center;
    font-weight: bold;
    letter-spacing:5px;
}

p{
  color: #4b3832;
}

.kanban{
    width: 80%;
    height: 90px;
    border-left: 0.5px solid gray;
    border-right: 0.5px solid gray;
    display: flex;
    align-items: end;
    justify-content: center;
    margin: 0 auto;
}

.kanban h2{
    width: 100%;
    border: 1px solid #4b3832;
    height: 50px;
    text-align: center;
    line-height: 50px;
    background: #4b3832;
    color: rgb(255, 255, 255);
}

@media (max-width: 967px) {
h2{
    letter-spacing:3px;
}

.side {
    display: none;
  }

.container {
  width: 100%;
}
  
}

@media (max-width: 768px) {

h2{
    letter-spacing:0px;
}
  .middle-area {
    padding: 0; /* 中央に余白を追加 */
  }
}
@media (max-width: 477px) {

}
</style>
