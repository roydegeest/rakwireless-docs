<template>
  <q-dialog v-model="zoom" @show="onShow" maximized persistent>
    <q-card>
      <!-- <q-card-section class="row justify-end"> -->
      <!-- </q-card-section> -->
      <q-btn
        class="float-right q-ma-md"
        style="z-index: 99"
        icon="close"
        color="grey-8"
        round
        flat
        v-close-popup
      />
      <q-card-section
        v-touch-pan.prevent.mouse="handlePan"
        class="fit flex flex-center absolute"
        style="overflow: hidden"
        @wheel="onWheel"
      >
        <img id="rk-zoom" class="absolute" :src="img" :draggable="false" />
      </q-card-section>
    </q-card>
  </q-dialog>
</template>

<script>
let count = 0
let lastPath = null
let zoomFactor = 1.15
let imgEl

export default {
  data: () => ({
    zoom: false,
    img: ''
  }),
  methods: {
    onGlobalZoom (path) {
      console.log('globalzoom: ', path)
      this.img = path
      this.zoom = true
    },
    handlePan({ ev, ...info }) {
      imgEl.style.top = imgEl.offsetTop + info.delta.y + 'px'
      imgEl.style.left = imgEl.offsetLeft + info.delta.x + 'px'
    },
    onWheel(ev) {
      console.log(ev)
      const fh = imgEl.clientHeight
      const fw = imgEl.clientWidth
      let zHeight = fh
      let zWidth = fw

      if (ev.deltaY < 0) {
        zHeight *= zoomFactor
        zWidth *= zoomFactor
      } else if (ev.deltaY > 0) {
        zHeight /= zoomFactor
        zWidth /= zoomFactor
      }

      imgEl.style.width = zWidth + 'px'
      imgEl.style.height = zHeight + 'px'

      // console.log(zHeight, zWidth)

      // const scalechange = zHeight / fh - 1
      const offsetY = (fh - zHeight) / 2
      const offsetX = (fw - zWidth) / 2

      imgEl.style.top = imgEl.offsetTop + offsetY + 'px'
      imgEl.style.left = imgEl.offsetLeft + offsetX + 'px'
      // console.log(offsetY, offsetX)
    },
    onShow() {
      imgEl = document.querySelector('#rk-zoom')
      imgEl.style.top = imgEl.offsetTop + 'px'
      imgEl.style.left = imgEl.offsetLeft + 'px'
    }
  },
  mounted() {
    this.$root.$on('rk-zoom', this.onGlobalZoom)
  },
  beforeDestroy() {
    this.$root.$off('rk-zoom', this.onGlobalZoom)
  }
}
</script>