<template>
  asdas
  <div class="row">
    <div clas="col">
      <div><strong>Learn More</strong></div>
      <ul>
        <li
          v-for="(link, id) in links.learnMore"
          :key="id"
        >
          <a :href="link.href">{{ link.name }}</a>
        </li>
      </ul>
    </div>
    <div class="col">
      <div><strong>Resources</strong></div>
      <ul>
        <li
          v-for="(link, id) in links.resources"
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
  name: 'QuickLinks',
  props: ['links']
}
</script>