<template>
  <div class="container">
    <q-btn
      v-for="section in pageSections"
      class="full-width"
      style="padding-left: 1rem"
      color="primary"
      size="0.95rem"
      align="left"
      :key="section.linkId"
      :flat="defaultActive !== section.linkId"
      @click="$emit('scrollTo', section.linkId)"
      rounded
      no-caps
      v-ripple
    >{{ section.name }}</q-btn>
  </div>
  <!-- </q-page-sticky> -->
</template>

<script>
export default {
  name: 'RkPageSections',
  props: ['pageSections', 'defaultActive']
}
</script>

<style scoped>
.container {
  margin-left: -2rem !important;
}
</style>