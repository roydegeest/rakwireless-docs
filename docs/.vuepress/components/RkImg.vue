<template>
  <div>
    <figure align="center" id="rk-img">
      <img :src="opt.src" :width="opt.width" @click="zoom=true" style="cursor: zoom-in" />
      <div class="text-caption">
        <b>Figure {{opt.figureNumber || figNum}}:</b>
        {{ opt.caption }}
      </div>
    </figure>
    <q-dialog v-model="zoom" @show="onShow" maximized>
      <q-card class>
        <!-- <q-card-section class="row justify-end"> -->
        <!-- </q-card-section> -->
        <q-btn class="float-right q-ma-md" style="z-index: 99" icon="close" color="grey-8" round flat v-close-popup />
        <q-card-section
          v-touch-pan.prevent.mouse="handlePan"
          class="fit flex flex-center absolute"
          style="overflow: hidden"
          @wheel="onWheel"
        >
          <img id="rk-zoom" class="absolute" :src="opt.src" :draggable="false" />
        </q-card-section>
      </q-card>
    </q-dialog>
  </div>
</template>

<script>
let count = 0
let lastPath = null
let zoomFactor = 1.15
let imgEl

export default {
  props: ['params', 'src', 'width', 'figureNumber', 'caption'],
  data: () => ({
    figNum: null,
    zoom: false,
    zHeight: 0,
    zWidth: 0
  }),
  computed: {
    opt() {
      const { params, src, width, figureNumber, caption } = this
      if (params) return params
      else {
        return { src, width, figureNumber, caption }
      }
    }
  },
  methods: {
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
    if (this.$page.path !== lastPath) {
      lastPath = this.$page.path
      count = 1
      this.figNum = count
    } else this.figNum = ++count
  }
}
</script>