<template>
  <rk-card @mouseenter="hovered=true" @mouseleave="hovered=false" @click="nav(path)">
    <div class="col overflow-hidden relative-position">
      <q-img
        :src="img || '/assets/rakwireless/rak-blue-dark.svg'"
        :ratio="1"
        class="fit absolute"
        style="z-index: 1"
      />
      <transition
        appear
        enter-active-class="animated slideInUp"
        leave-active-class="animated slideOutDown"
      >
        <div
          v-show="hovered"
          class="fit absolute q-pa-sm"
          style="background-color: rgba(255,255,255,0.95); z-index: 2"
        >
          <slot />
        </div>
      </transition>
    </div>
    <div class="q-pa-md">
      <div
        class="text-weight-medium ellipsis-2-lines"
        style="font-size: 1.15rem; line-height: normal"
      >{{ name }}</div>
      <q-separator class="q-my-sm" />
      <div class="text-caption">
        Model:
        <b>{{ model }}</b>
      </div>
    </div>
  </rk-card>
</template>

<script>
import CommonMixin from './common.mixin'
export default {
  name: 'RkProduct',
  props: ['img', 'path', 'label'],
  mixins:[CommonMixin],
  data: () => ({
    hovered: false
  }),
  computed: {
    name() {
      return this.label.replace(this.model, '').trim()
    },
    model() {
      return this.label.split(' ')[0]
    }
  }
}
</script>