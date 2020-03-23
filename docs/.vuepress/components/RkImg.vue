<template>
  <figure align="center">
    <img
      :src="opt.src"
      :width="opt.width"
      alt=""
    />
    <figcaption><small><b>Figure {{opt.figureNumber}}:</b> {{ opt.caption }}</small></figcaption>
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
    }
  }
}
</script>