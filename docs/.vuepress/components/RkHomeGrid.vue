<template>
  <div class="row full-width no-wrap" style="height: 90vh">
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
            <div class="row items-center text-h6 q-py-md">
              <span>{{ rakGrp(key) }}</span>
              <div class="col bg-grey-3 q-mx-xl" style="padding: 0.06rem"></div>
            </div>
            <div class="row justify-start items-center">
              <div
                v-for="key2 in Object.keys(groups[key])"
                :key="`subgrp-${key2}`"
                :class="{'q-ml-xl column col-12': Array.isArray(groups[key][key2]) }"
              >
                <div v-if="Array.isArray(groups[key][key2])">
                  <div
                    class="q-py-md text-weight-medium text-capitalize"
                    style="font-size: 1.05rem"
                  >: {{ key2 }}</div>
                  <div class="row">
                    <rk-grid-item v-for="qs2 in groups[key][key2]" :key="qs2.path" :value="qs2" />
                  </div>
                </div>
                <div v-else-if="typeof groups[key][key2] === 'object'" class="q-ml-md">
                  <rk-grid-item :value="groups[key][key2]" />
                </div>
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
  <!-- <div v-else>
    <q-spinner-dots size="2.5rem" color="blue-10" />
  </div>-->
</template>

<script>
export default {
  name: 'RkHomeGrid',
  data: () => ({
    ignoreScroll: false,
    groups: null,
    defaultActive: 'wisbee',
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
        case 'wisbee':
          return 'WisBee'
        case 'wisduino':
          return 'WisDuino'
        case 'wisduo':
          return 'WisDuo'
        case 'wisgate':
          return 'WisGate'
        case 'wishat':
          return 'WisHat'
        case 'wislink-lora':
          return 'WisLink-Lora'
        case 'wislink-lte':
          return 'WisLink-LTE'
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
      let index, index2

      switch (typeof rak_grp) {
        case 'string':
          index = rak_grp || 'others'
          break
        case 'object':
          if (Array.isArray(rak_grp)) {
            index = rak_grp[0] || 'others'
            index2 = rak_grp[1] || null
            break
          }
        default:
          console.error(
            `[RkHomeGrid] Invalid rak_grp of type ${typeof rak_grp}: `,
            rak_grp
          )
      }
      console.log('indexes: ', index, index2)
      if (!this.groups) this.groups = {}
      if (!this.groups[index]) this.groups[index] = []
      if (index2) {
        if (!this.groups[index][index2]) this.groups[index][index2] = []
        this.groups[index][index2] = [...this.groups[index][index2], qs]
      } else this.groups[index] = [...this.groups[index], qs]
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