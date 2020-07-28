<template>
  <q-btn
    class="full-height text-weight-medium"
    color="white"
    :label="label"
    :icon-right="opened ? 'keyboard_arrow_up' : 'keyboard_arrow_down'"
    size="1rem"
    flat
    no-caps
  >
    <q-menu
      v-model="opened"
      transition-show="flip-down"
      transition-hide="flip-up"
      content-class="bg-white text-grey-9"
      auto-close
      fit
      max-width="15rem"
    >
      <slot></slot>
    </q-menu>
  </q-btn>
</template>

<script>
export default {
  props: ['label'],
  data: () => ({
    opened: false
  })
}
</script>