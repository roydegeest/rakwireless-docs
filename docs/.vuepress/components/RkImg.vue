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
    <figcaption><small><b>Figure {{opt.figureNumber || figNum}}:</b> {{ opt.caption }}</small></figcaption>
  </figure>
</template>

<script>
export default {
  props: ['params', 'src', 'width', 'figureNumber', 'caption'],
  computed: {
    opt () {
      const { params, src, width, figureNumber, caption } = this
      if (params) return params
      else {
        return { src, width, figureNumber, caption }
      }
    },
    figNum () {
      return document.querySelectorAll("#rk-img").length + 1
    }
  }
}
</script>