<template>
  <div class="row full-width no-wrap">
    <div class="q-pr-lg">
      <rk-page-sections
        :default-active="defaultActive"
        :page-sections="pageSections"
        style="max-width: 10rem; margin-left: auto"
        @scrollTo="scrollTo"
      />
    </div>
    <div class="col">
      <q-scroll-area ref="scrollArea" class="fit" @scroll="onScrollAreaScroll">
        <div v-if="groups">
          <div
            v-for="key in Object.keys(groups)"
            :key="`grp-${key}`"
            class="column q-mt-md"
            :id="key"
          >
            <div class="text-h6 q-py-md">{{ rakGrp(key) }}</div>
            <div class="row justify-start items-center">
              <div v-for="qs in groups[key]" :key="qs.path" class="q-pa-sm">
                <q-item
                  :to="qs.path"
                  class="grow text-center q-pa-none shadow-2"
                  style="height: 15rem; width: 13rem"
                >
                  <q-item-section>
                    <div class="col q-pa-none flex flex-center">
                      <img :src="rakImg(qs.frontmatter)" class="fit" />
                    </div>
                    <div class="col-2 flex flex-center q-ma-sm">
                      <div
                        ref="test"
                        class="text-weight-medium ellipsis-2-lines"
                        style="font-size: 0.75rem; line-height: 0.95rem"
                      >{{ qs.title }}</div>
                    </div>
                  </q-item-section>
                </q-item>
              </div>
            </div>
          </div>
        </div>
        <div v-else class="flex flex-center">
          <q-spinner-dots size="2.5rem" color="grey-10" :thickness="1" />
        </div>
      </q-scroll-area>
    </div>
  </div>
</template>

<script>
export default {
  name: 'RkHomeGrid',
  data: () => ({
    ignoreScroll: false,
    groups: null,
    defaultActive: '',
    pageSections: []
  }),
  computed: {
    overviews() {
      return this.$site.pages.filter(t => {
        return t.path.match(/^\/[\w\d-]+\/rak[\w\d-()]+\/overview\/$/g)
      })
    }
  },
  methods: {
    ensureFocus() {
      const el = document.getElementById('rk-home-grid')
      window.scroll({ top: el.offsetTop, behavior: 'smooth' })
    },
    onScrollAreaScroll({ verticalPosition }) {
      if (this.ignoreScroll) return
      const section = this.pageSections.find(t => {
        if (!t.position) return false
        return t.position - verticalPosition >= 0
      })
      if (!section) return
      this.defaultActive = section.linkId
      // this.ensureFocus()
    },
    scrollTo(id) {
      const element = document.getElementById(id)
      // console.log('scrollTo: ', element)
      // element.scrollIntoView()
      if (!element) return

      const section = this.pageSections.find(t => t.linkId === id)
      if (!section) return

      section.position = element.offsetTop
      // console.log('pos: ', section)
      this.ignoreScroll = true
      this.$refs.scrollArea.setScrollPosition(section.position, 500)
      const self = this
      setTimeout(() => {
        self.ignoreScroll = false
        self.defaultActive = section.linkId
      }, 500)
      this.ensureFocus()
    },
    rakImg(frontmatter) {
      const { rak_img } = frontmatter
      // return `background-image:url('${static_root}/${rak_img}');`
      return rak_img || '/assets/rakwireless/rak-blue-dark.svg'
    },
    rakGrp(rak_grp) {
      if (!rak_grp) return 'Others'
      switch (rak_grp) {
        case 'wisduino':
          return 'WisDuino'
        case 'wisduo':
          return 'WisDuo'
        case 'wisgate':
          return 'WisGate'
        case 'wislink-lora':
          return 'WislinkLora'
        case 'wislink-lte':
          return 'WislinkLTE'
        case 'wisnode':
          return 'WisNode'
        case 'wistrio':
          return 'WisTrio'
        default:
          return 'Others'
      }
    }
  },
  mounted() {
    console.log('pages: ', this.overviews)
    for (const qs of this.overviews) {
      const { rak_grp } = qs.frontmatter
      const index = rak_grp || 'others'
      if (!this.groups) this.groups = {}
      if (!this.groups[index]) this.groups[index] = []
      this.groups[index] = [...this.groups[index], qs]
    }
    // sort keys
    const ordered = {}
    const unordered = this.groups
    Object.keys(this.groups)
      .sort()
      .forEach(function(key) {
        ordered[key] = unordered[key]
      })
    this.groups = ordered
    console.log('pages: ', this.groups)

    // set page sections
    Object.keys(this.groups).map(g => {
      this.pageSections.push({
        linkId: g,
        name: this.rakGrp(g)
      })
    })
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
.img-container {
  background-size: contain;
  background-position: center;
  background-repeat: no-repeat;
  margin: 5%;
}
</style>