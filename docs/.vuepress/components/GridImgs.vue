<template>
  <div>
    <div
      v-for="key in Object.keys(groups)"
      :key="`grp-${key}`"
      class="column q-mt-md "
    >
      <div class="text-h6 q-pa-md">{{ rakGrp(key) }}</div>
      <div class="row justify-center items-center q-gutter-md">
        <q-item
          v-for="qs in groups[key]"
          :key="qs.path"
          :to="qs.path"
          class="grow text-center q-pa-none"
        >
          <q-item-section>
            <q-card
              class="column"
              style="height: 17rem; width: 13rem"
            >
              <q-card-section class="col q-pa-none flex flex-center">
                <div class="fit">
                  <img
                    :src="rakImg(qs.frontmatter)"
                    style="height: 100%"
                  />
                </div>
              </q-card-section>
              <q-card-section class="col-4 flex flex-center q-pa-xs">
                <div
                  class="text-weight-medium"
                  style="font-size: 0.9rem"
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
    rakGrp (rak_grp) {
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
      // console.log('rakgrp: ', rak_grp)

      if (!this.groups[index]) this.groups[index] = []
      this.groups[index] = [
        ...this.groups[index],
        qs
      ]
    }
    // console.log('gprs: ', this.groups)
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