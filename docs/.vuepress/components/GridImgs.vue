<template>
  <div>
    <div
      v-for="key in Object.keys(groups)"
      :key="`grp-${key}`"
      class="column q-mt-xl "
    >
      <div class="text-h6">{{ rakGrp(key) }}</div>
      <div class="row justify-center items-center">
        <q-item
          v-for="qs in groups[key]"
          :key="qs.path"
          :to="qs.path"
          class="grow text-center q-pa-none"
        >
          <q-item-section>
            <q-card
              class="column q-ma-sm"
              style="height: 20rem; width: 15rem"
            >
              <q-card-section class="col q-pa-none">
                <div class="fit flex flex-center">
                  <q-img :src="rakImg(qs.frontmatter)" />
                </div>
              </q-card-section>
              <q-card-section class="col-3 flex flex-center q-pa-xs">
                <div
                  class="text-weight-medium"
                  style="font-size: 1rem"
                >{{ qs.title }}</div>
              </q-card-section>
            </q-card>
          </q-item-section>
        </q-item>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data: () => ({
    groups: {}
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
      return `${static_root}/${rak_img}`
    },
    rakGrp (frontmatter) {
      const { rak_grp } = frontmatter
      if (!rak_grp) return 'Others'
      switch (rak_grp) {
        case 'lora-node': return 'LoRa Node'
        case 'lora-gateway': return 'LoRa Gateway'
        case 'nb-iot': return 'NB-IoT'
        default: return 'Others'
      }
    }
  },
  created () {
    for (const qs of this.quickStarts) {
      const { rak_grp } = qs.frontmatter
      const index = rak_grp || 'others'

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
</style>