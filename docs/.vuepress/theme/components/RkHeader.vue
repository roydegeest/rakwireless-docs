<template>
  <div class="wrapper fit flex flex-center text-white">
    <q-parallax class="fit">
      <template v-slot:media>
        <img :src="header.img" />
      </template>

      <template v-slot:content="scope">
        <div class="full-width content q-gutter-y-md text-shadowed">
          <div class="text-h2 text-weight-regular">{{ header.title }}</div>
          <div class="text-h5 text-weight-light" v-html="header.caption"></div>
          <div class="row q-gutter-xs">
            <q-chip
              v-for="(tag, id) of header.tags"
              :key="`tag-${id}`"
              :label="tag"
              color="white"
              class="text-weight-medium"
              outline
            />
          </div>
        </div>
      </template>
    </q-parallax>
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
          '/assets/rakwireless/rak-default-banner.png',
        tags: this.$page.frontmatter.tags || []
      }
    },
    bgImg() {}
  }
}
</script>

<style scoped>
.wrapper {
  height: 50vh !important;
  overflow: hidden;
}
.content {
  max-width: 80rem;
  margin: 0 auto;
}
.text-shadowed {
  text-shadow: 1px 1px black;
}
</style>