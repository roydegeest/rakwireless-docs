<template>
  <figure
    align="center"
    id="rk-img"
  >
    <img
      class="zoomable"
      :src="opt.src"
      :width="opt.width"
      alt=""
    />
    <div class="text-caption text-weight-bold">Figure {{opt.figureNumber || figNum}}:</b> {{ opt.caption }}</div>
  </figure>
</template>

<script>
let count = 0
let lastPath = null

export default {
  props: ['params', 'src', 'width', 'figureNumber', 'caption'],
  data: () => ({
    figNum: null
  }),
  computed: {
    opt () {
      const { params, src, width, figureNumber, caption } = this
      if (params) return params
      else {
        return { src, width, figureNumber, caption }
      }
    }
  },
  mounted () {
    if (this.$page.path !== lastPath) {
      lastPath = this.$page.path
      count = 1
      this.figNum = count
    } else this.figNum = ++count
  }
}
</script>