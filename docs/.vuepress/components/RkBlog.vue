<template>
  <div class="q-gutter-y-md" style="max-width: 1000px; margin-left: auto; margin-right: auto">
    <div class="text-h4">
      <b>Knowledge Hub:</b> Learning is never boring
    </div>
    <q-separator color="blue-10" inset />
    <div class="row">
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
            <q-img
              :src="coverPhoto(article)"
              :ratio="1"
              class="full-width absolute"
              style="z-index: 1"
            />
            <transition
              appear
              enter-active-class="animated slideInUp"
              leave-active-class="animated slideOutDown"
            >
              <div
                v-show="hovered === article.path"
                class="fit absolute q-pa-sm"
                style="background-color: rgba(255,255,255,0.95); z-index: 2"
              >Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras ut aliquam massa. Curabitur pellentesque, neque in cursus lobortis, lacus nibh tincidunt erat, eget mollis justo augue ac risus. Duis gravida, erat ut mollis volutpat, ex arcu gravida elit, vel aliquam turpis nulla quis tellus.</div>
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
    hovered: null
  }),
  computed: {
    articles() {
      return this.$site.pages.filter(t => {
        return t.path.match(/^\/knowledge-hub\/[\w\d-._]+\/[\w\d-._]+\/$/g)
      })
    }
  },
  methods: {
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
  mounted () {
    const x = document.getElementsByClassName('theme-default-content')
    for (const sub of x) {
      sub.classList.add('rk-content')
    console.log(sub)
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