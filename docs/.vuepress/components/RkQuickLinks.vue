<template>
  <div class="row">
    <div class="column">
      <div><strong>Learn More</strong></div>
      <ul>
        <li
          v-for="(link, id) in params.learnMore"
          :key="id"
        >
          <a :href="link.href">{{ link.name }}</a>
        </li>
      </ul>
    </div>
    <div class="column">
      <div><strong>Resources</strong></div>
      <ul>
        <li
          v-for="(link, id) in params.resources"
          :key="id"
        >
          <a :href="link.href">{{ link.name }}</a>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  props: ['params']
}
</script>

<style scoped>
.row {
  display: flex;
  flex-wrap: wrap;
  box-sizing: border-box;
  padding: 1rem 0 1rem 0;
}
.column {
  flex: 50%;
  max-width: 50%;
  box-sizing: border-box;
  padding: 1rem 0.5rem 1rem 0.5rem;
}
@media (max-width: 800px) {
  .column {
    flex: 50%;
    max-width: 50%;
  }
}
@media (max-width: 600px) {
  .column {
    flex: 100%;
    max-width: 100%;
  }
}
</style>
