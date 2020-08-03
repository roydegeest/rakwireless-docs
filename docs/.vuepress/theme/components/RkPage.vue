<template>
  <q-page>
    <Content id="nodeToRenderAsPDF" class="theme-default-content" />
    <PageEdit />

    <PageNav v-bind="{ sidebarItems }" />
  </q-page>
</template>

<script>
import PageEdit from '@theme/components/PageEdit.vue'
import PageNav from '@theme/components/PageNav.vue'

export default {
  components: { PageEdit, PageNav },
  props: ['sidebarItems']
}
</script>

<style lang="stylus">
@require '../styles/wrapper.styl';

.page {
  padding-bottom: 2rem;
  display: block;
}
</style>
