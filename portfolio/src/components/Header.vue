<template>
  <header>
    <h1 class="hp-title"><router-link to="/">タイトル</router-link></h1>
    <nav>
      <ul>
        <li><router-link to="/">TOP</router-link></li>
        <li>About</li>
        <li>Projects</li>
        <li>Contact</li>
      </ul>
    </nav>
  </header>
</template>

<style scoped>
header {
  background-color: #333;
  padding: 0.5rem 2rem;
  display: flex;
  justify-content: space-between;
  height: 70px;
}
h1 {
  font-size: 1.5em;
  line-height: 1.1;
  display: flex;
  align-items: center;
}

nav {
  display: flex;
  align-items: center;
}

nav ul {
  display: flex;
  gap: 1rem;
  list-style: none;
}
nav a {
  color: white;
  text-decoration: none;
}
nav a.router-link-exact-active {
  font-weight: bold;
  border-bottom: 2px solid #fff;
}
</style>