<template>
  <div class="q-gutter-y-md">
    <div class="text-h4"><b>Knowledge Hub:</b> Learning is never boring</div>
    <q-separator color="blue-10" inset />
    <q-item
      v-for="(article, id) in articles"
      :key="`article-${id}`"
      :to="article.path"
      class="q-mb-lg"
      clickable
      v-ripple
    >
      <q-item-section avatar>
        <q-avatar size="7.5rem" color="white">
          <img :src="coverPhoto(article)" />
        </q-avatar>
      </q-item-section>
      <q-item-section class="q-gutter-y-sm">
        <div class="text-weight-medium" style="font-size: 1.5rem">{{ article.title }}</div>
        <div class="row q-gutter-x-sm">
          <q-btn
            :label="article.lastUpdated || (new Date().toISOString())"
            icon="far fa-calendar"
            color="grey-8"
            size="sm"
            flat
            dense
          />
          <q-btn
            :label="category(article)"
            icon="far fa-folder-open"
            color="grey-8"
            size="sm"
            flat
            dense
            no-caps
          />
        </div>
        <div
          class="text-caption"
        >Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras ut aliquam massa. Curabitur pellentesque, neque in cursus lobortis, lacus nibh tincidunt erat, eget mollis justo augue ac risus. Duis gravida, erat ut mollis volutpat, ex arcu gravida elit, vel aliquam turpis nulla quis tellus.</div>
      </q-item-section>
    </q-item>
  </div>
</template>

<script>
export default {
  name: 'RkBlog',
  computed: {
    articles() {
      return this.$site.pages.filter(t => {
        return t.path.match(/^\/knowledge-hub\/[\w\d-._]+\/[\w\d-._]+\/$/g)
      })
    }
  },
  methods: {
    coverPhoto(page) {
      return page.frontmatter.rak_img || '/assets/rakwireless/rak-blue-dark.svg'
    },
    category(page) {
      return page.path.split('/')[2] || 'Unknown'
    }
  }
}
</script>