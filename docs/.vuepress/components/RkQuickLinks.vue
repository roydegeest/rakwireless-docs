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
}
.column {
  flex: 50%;
  max-width: 50%;
  box-sizing: border-box;
  padding: 10px 5px 10px 5px;
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
