<template>
    <Starrain/>
    <main class="container">
        <div class="maincontents">
        <Hero />
        <About />
        <Skill />
        <Works />
      </div>
    </main>
    <Footer />
</template>

<script>
import Starrain from './components/Starrain.vue'
import Footer from './components/Footer.vue'
import Hero from './pages/Hero.vue'
import About from './pages/About.vue'
import Skill from './pages/Skill.vue'
import Works from './pages/Works.vue'

export default {
  name: 'App',
  components: {
    Starrain,
    Footer,
    Hero,
    About,
    Skill,
    Works
  }
}
</script>

<style>

*{
  margin: 0;
  padding: 0;
  box-sizing: border-box; /* パディングやボーダーをサイズに含める */
}

html,
body{
  margin: 0 !important;
  padding: 0;
  min-width: 320px;
  width: 100vw;
  height: 100vh;         /* ビューポート高さいっぱい */
  min-height: 100vh;     /* 最低でも画面高さ分 */
  font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen,
    Ubuntu, Cantarell, "Open Sans", "Helvetica Neue", sans-serif; /* 使いやすいフォントスタック */
}

*, *::before, *::after {
  box-sizing: inherit; /* 全要素にbox-sizingを適用 */
}

#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  color: #2c3e50;
  display: flex;
  flex-direction: column;
  min-height: 100vh;
}

.container {
  width: 100%;
  min-width: 320px;
  max-width: 1000px;
  margin: 0 auto;
  background-color: rgba(255, 255, 255, 0.8);
  display: flex;
  align-items: center;
}

.maincontents {
  width: 90%;
  margin: 0 auto;
  min-width: 320px;
  max-width: 1000px;
}

@media (max-width: 768px) {

}

@media (max-width: 967px) {

.container {
  width: 90%;
}
  
}
</style>