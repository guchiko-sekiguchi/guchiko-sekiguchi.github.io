<template>
  <div class="project-card">
    <h3>{{ title }}</h3>
    <p>{{ description }}</p>
    <a :href="link" target="_blank" rel="noopener">View Project</a>
  </div>
</template>

<script>
export default {
  props: {
    title: String,
    description: String,
    link: String
  }
}
</script>

<style scoped>
.project-card {
  border: 1px solid #ddd;
  padding: 1rem;
  border-radius: 8px;
  margin-bottom: 1rem;
}
.project-card a {
  color: #007acc;
  text-decoration: none;
}
</style>