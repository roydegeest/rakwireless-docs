<template>
  <div class="full-width flex flex-center bg-grey-1" style="height: 17rem; margin-top: 5rem">
    <div class="row q-gutter-md justify-center items-center" style="max-width: 900px; margin: 0 auto;">
      <div>
        <q-avatar size="8rem">
          <img :src="author.img" />
        </q-avatar>
      </div>
      <div class="col column q-px-md">
        <span class="text-h4 q-mb-md">{{ author.name }}</span>
        <span>{{ author.about }}</span>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'RkAuthor',
  computed: {
    author() {
      return this.$page.frontmatter.author
    }
  }
}
</script>