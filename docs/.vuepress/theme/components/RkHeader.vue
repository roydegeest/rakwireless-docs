<template>
  <div
    class="wrapper fit flex flex-center text-white"
    :style="`background-image: url('${header.img}')`"
  >
    <div class="full-width content q-gutter-y-md">
      <div class="text-h2 text-weight-regular">{{ header.title }}</div>
      <div class="text-h5 text-weight-light">{{ header.caption }}</div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'RkHeader',
  computed: {
    header() {
      return {
        title:
          this.$page.frontmatter.header.title || 'Lorem ipsum dolor sit amet',
        caption:
          this.$page.frontmatter.header.caption ||
          'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus et ultricies massa, a consectetur lacus. Maecenas placerat molestie felis vel lobortis.',
        img:
          this.$page.frontmatter.header.img ||
          '/assets/rakwireless/rak-default-banner.png'
      }
    },
    bgImg() {}
  }
}
</script>

<style scoped>
.wrapper {
  height: 50vh !important;
}
.content {
  max-width: 80rem;
  margin: 0 auto;
}
</style>