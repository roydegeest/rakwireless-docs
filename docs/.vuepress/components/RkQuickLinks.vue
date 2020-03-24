<template>
  <div class="w3-row">
    <div class="w3-half">
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
    <div class="w3-half">
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
.w3-half {
  padding:10px;
}

</style>