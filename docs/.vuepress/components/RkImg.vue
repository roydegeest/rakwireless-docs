<template>
  <figure align="center">
    <img
      :src="params.src"
      :width="params.width"
      alt=""
    />
    <figcaption><small><b>Figure {{params.figureNumber}}:</b> {{ params.caption }}</small></figcaption>
  </figure>
</template>

<script>
export default {
  props: ['params']
}
</script>