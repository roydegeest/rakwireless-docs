<template>
  <figure align='center'>
    <img :src="imagesrc" :width="width" alt=""/>
    <figcaption><small><b>Figure {{figure_number}}:</b> {{ caption }}</small></figcaption>
  </figure>
</template>

<script>
export default {
  props: ['src', 'caption', 'width','figure_number'],
  computed: {
    imagesrc () {
      return '/quickstartguide/' + this.src 
    }
  }
}
</script>