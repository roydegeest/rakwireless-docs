<template>
  <div class="container">
    <q-btn
      v-for="key in Object.keys(sections)"
      class="full-width"
      style="padding-left: 1rem"
      color="primary"
      size="0.95rem"
      align="left"
      :key="key"
      :flat="active !== key"
      @click="scrollTo(key)"
      rounded
      no-caps
      v-ripple
    >{{ sections[key].name }}</q-btn>
  </div>
  <!-- </q-page-sticky> -->
</template>

<script>
let ignore = false

export default {
  name: 'RkPageSections',
  props: ['pageSections', 'defaultActive', 'verticalPos', 'scrollRef'],
  data: () => ({
    active: null,
    sections: {}
  }),
  methods: {
    scrollTo(id) {
      const element = document.getElementById(id)

      if (!element) return
      if (!this.$parent.$refs[this.scrollRef]) return

      this.$parent.$refs[this.scrollRef].setScrollPosition(element.offsetTop, 500)
    }
  },
  watch: {
    defaultActive: function (val) {
      this.active = val
    },
    pageSections: function(val) {
      this.sections = Object.assign({}, val)
    },
    verticalPos: function(pos) {
      if (ignore) return
      ignore = true

      for (const key in this.pageSections) {
        const el = document.getElementById(key)
        if (!el) continue
        if (el.offsetTop - pos >= 0) {
          this.active = key
          break
        }
      }

      ignore = false
    }
  }
}
</script>

<style scoped>
.container {
  margin-left: -2rem !important;
}
</style>