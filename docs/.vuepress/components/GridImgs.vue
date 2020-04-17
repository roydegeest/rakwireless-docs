<template>
  <div class="row">
    <q-btn
      label="Test"
      color="primary"
    />
    <div
      v-for="qs in quickStarts"
      :key="qs.path"
      class="card"
      style="text-align: center"
    >
      <div class="column">
        <div><strong>{{ qs.title }}</strong></div>
        <a
          v-for="(header, id) in qs.headers"
          :key="id"
          :href="`${qs.path}#${header.slug}`"
        >
          {{ header.title }}
        </a>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    params: { type: Object },
    src: { type: String },
    label: { type: String },
    _blank: { type: Boolean, default: false }
  },
  computed: {
    quickStarts () {
      return this.$site.pages.filter(t => {
        return t.path.match(/^\/[a-z]{2}-[a-z]{2}\/quick-start\/[^\/]+\/$/g)
      })
    }
  },
  created () {
    console.log('site: ', this.$site.pages.filter(t => {
      return t.path.match(/^\/[a-z]{2}-[a-z]{2}\/quick-start\/[^\/]+\/$/g)
    }))
    console.log('page: ', this.$page)
  }
}
</script>