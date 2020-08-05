<template>
  <div class="q-gutter-y-md" style="max-width: 80vw; margin: 0 auto;">
    <div class="row q-gutter-xs justify-center">
      <q-item
        v-for="tag in tags"
        :key="tag"
        :class="{'bg-grey-2': !activeTags.includes(tag)}"
        style="width: 8rem; ; border-radius: 20px"
        :active="activeTags.includes(tag)"
        active-class="bg-primary"
        @click="onTagClick(tag)"
        clickable
        dense
      >
        <q-item-section>
          <img
            :src="`/assets/rakwireless/product-categories/${tag}.svg`"
            style="max-width: 100%; max-height: 100%;"
          />
        </q-item-section>
      </q-item>
      <q-separator v-if="activeTags.length" class="q-mx-md" vertical />
      <q-btn
        v-if="activeTags.length"
        label="Clear Tags"
        color="primary"
        icon="close"
        @click="activeTags=[]"
        no-caps
        rounded
      />
    </div>
    <q-separator class="q-mb-md" color="blue-10" inset />
    <div class="row justify-center" style="margin: 0 auto;">
      <div
        class="col-12 col-xs-6 col-sm-4 cursor-pointer q-pa-sm"
        v-for="(article, id) in articles"
        :key="`article-${id}`"
        style="width: 20rem;"
      >
        <div
          class="column my-card full-width relative-position"
          style="height: 22.5rem;"
          @mouseenter="hovered=article.path"
          @mouseleave="hovered=null"
          @click="nav(article.path)"
        >
          <div class="col overflow-hidden relative-position">
            <q-img :src="coverPhoto(article)" :ratio="1" class="fit absolute" style="z-index: 1" />
            <transition
              appear
              enter-active-class="animated slideInUp"
              leave-active-class="animated slideOutDown"
            >
              <div
                v-show="hovered === article.path"
                class="fit absolute q-pa-sm"
                style="background-color: rgba(255,255,255,0.95); z-index: 2"
              >{{ article.frontmatter.rak_desc || 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras ut aliquam massa. Curabitur pellentesque, neque in cursus lobortis, lacus nibh tincidunt erat, eget mollis justo augue ac risus. Duis gravida, erat ut mollis volutpat, ex arcu gravida elit, vel aliquam turpis nulla quis tellus.' }}</div>
            </transition>
          </div>
          <div class="col-5 q-pa-md">
            <div
              class="text-weight-medium ellipsis-2-lines"
              style="font-size: 1.25rem; line-height: normal"
            >{{ article.title }}</div>
            <div class="row q-gutter-x-sm q-mt-md">
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
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'RkBlog',
  data: () => ({
    hovered: null,
    activeTags: []
  }),
  computed: {
    articles() {
      const fltrd = this.$site.pages.filter(t => {
        return t.path.match(
          /^\/Knowledge-Hub\/Learn\/[\w\d-._]+\/[\w\d-._]+\/$/g
        )
      })
      if (!this.activeTags.length) return fltrd
      return fltrd.filter(
        t =>
          t.frontmatter.tags &&
          t.frontmatter.tags.some(tt => this.activeTags.includes(tt))
      )
    },
    tags() {
      return [
        'WisGate',
        'WisNode',
        'WisBlock',
        'WisDuo',
        'WisTrio',
        'WisLink',
        'WisHat',
        'WisDuino'
      ]
    }
  },
  methods: {
    onTagClick(tag) {
      if (this.activeTags.includes(tag))
        this.activeTags = this.activeTags.filter(t => t != tag)
      else this.activeTags = [...this.activeTags, tag]
    },
    nav(path) {
      this.$router.push(path)
    },
    coverPhoto(page) {
      return page.frontmatter.rak_img || '/assets/rakwireless/rak-blue-dark.svg'
    },
    category(page) {
      return page.path.split('/')[2] || 'Unknown'
    }
  },
  mounted() {
    const x = document.getElementsByClassName('theme-default-content')
    for (const sub of x) {
      sub.classList.add('rk-content')
    }
  }
}
</script>

<style>
.rk-content {
  max-width: 100vw !important;
  padding: 2rem 1rem !important;
}

.my-card {
  border-radius: 10px;
}
.my-card:before {
  content: '';
  position: absolute;
  top: 0px;
  left: 0px;
  right: 0px;
  bottom: 3px;
  border-radius: 10px;
  box-shadow: 0 5px 5px rgba(0, 0, 0, 0.1);
  transition: all 0.25s cubic-bezier(0.02, 0.01, 0.47, 1);
}
</style>