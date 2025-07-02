<script setup>
import Header from './components/Header.vue'
import Footer from './components/Footer.vue'
</script>

<!-- memo
【1】ファーストビュー（LP部分）


-->

<template>
  <div id="app" >
    <Header />

    <main class="container">
      <router-view />
    </main>

    <Footer />
  </div>
</template>

<style scoped>

</style>

<script>
export default {
  name: 'App',
};
</script>
