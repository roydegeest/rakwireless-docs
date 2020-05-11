<template>
  <div>
    <div v-if="groups">
      <div
        v-for="key in Object.keys(groups)"
        :key="`grp-${key}`"
        class="column q-mt-md "
      >
        <div class="text-h6 q-py-md">{{ rakGrp(key) }}</div>
        <div class="row justify-center items-center">
          <div
            v-for="qs in groups[key]"
            :key="qs.path"
            class="col-12 col-sm-4 col-md-3 col-md-3 q-pa-sm"
          >
            <q-item
              :to="qs.path"
              class="grow text-center q-pa-none shadow-2"
              style="height: 15rem"
            >
              <q-item-section>
                <div class="col q-pa-none flex flex-center">
                  <img
                    class="fit"
                    :src="rakImg(qs.frontmatter)"
                  />
                </div>
                <div class="col-3 flex flex-center q-ma-sm">
                  <div
                    ref="test"
                    class="text-weight-medium"
                    style="font-size: 0.8rem"
                  >{{ qs.title }}</div>
                </div>
              </q-item-section>
            </q-item>
          </div>
        </div>
      </div>
    </div>
    <div
      v-else
      class="flex flex-center"
    >
      <q-spinner-dots
        size="2.5rem"
        color="grey-10"
        :thickness="1"
      />
    </div>
  </div>
</template>

<script>
export default {
  data: () => ({
    groups: null
  }),
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
      // return `background-image:url('${static_root}/${rak_img}');`
      return `${static_root}/${rak_img}`
    },
    rakGrp (rak_grp) {
      if (!rak_grp) return 'Others'
      switch (rak_grp) {
        case 'lora-node': return 'LPWAN Nodes'
        case 'lora-gateway': return 'LPWAN Gateways/ Concentrator'
        case 'nb-iot': return 'NB-IoT'
        default: return 'Others'
      }
    }
  },
  mounted () {
    for (const qs of this.quickStarts) {
      const { rak_grp } = qs.frontmatter
      const index = rak_grp || 'others'
      if (!this.groups) this.groups = {}
      if (!this.groups[index]) this.groups[index] = []
      this.groups[index] = [
        ...this.groups[index],
        qs
      ]
    }
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