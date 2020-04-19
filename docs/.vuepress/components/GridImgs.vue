<template>
  <div class="q-mt-xl row justify-center items-center">
    <q-item
      v-for="qs in quickStarts"
      :key="qs.path"
      :to="qs.path"
      class="grow text-center q-pa-none"
    >
      <q-item-section>
        <q-card
          class="column q-ma-sm"
          style="height: 20rem; width: 15rem"
        >
          <!-- <div class="column">
        <div><strong>{{ qs.title }}</strong></div>
        <a
          v-for="(header, id) in qs.headers"
          :key="id"
          :href="`${qs.path}#${header.slug}`"
        >
          {{ header.title }}
        </a>
      </div> -->
          <q-card-section class="col q-pa-none">
            <q-img
              :src="rakImg(qs.frontmatter)"
              :ratio="1"
              class="fit"
            />
          </q-card-section>
          <q-card-section
            class="flex flex-center bg-blue-10 text-white q-pa-xs"
            style="height: 3rem"
          >
            <div
              class="text-weight-medium text-uppercase"
              style="font-size: 0.8rem"
            >{{ qs.title }}</div>
          </q-card-section>
          <q-card-section>
            <q-item
              v-for="(header, id) in qs.headers.slice(0,2)"
              :key="id"
              :to="`${qs.path}#${header.slug}`"
              clickable
              v-ripple
              dense
            >
              <q-item-section class="text-center">
                {{ header.title }}
              </q-item-section>
            </q-item>
          </q-card-section>
        </q-card>
      </q-item-section>
    </q-item>
  </div>
</template>

<script>
export default {
  props: {
    params: { type: Object },
    src: { type: String },
    label: { type: String },
    _blank: { type: Boolean, default: false }
  },
  computed: {
    quickStarts () {
      return this.$site.pages.filter(t => {
        return t.path.match(/^\/[a-z]{2}-[a-z]{2}\/quick-start\/[^\/]+\/$/g)
      })
    }
  },
  methods: {
    rakImg (frontmatter) {
      const { static_root, rak_img } = frontmatter
      return `${static_root}/${rak_img}`
    }
  },
  created () {
    console.log('site: ', this.$site.pages.filter(t => {
      return t.path.match(/^\/[a-z]{2}-[a-z]{2}\/quick-start\/[^\/]+\/$/g)
    }))
    console.log('page: ', this.$page)
  }
}
</script>

<style scoped>
.grow {
  transition: all 0.1s ease-in-out;
}
.grow:hover {
  transform: scale(1.05);
}
</style>