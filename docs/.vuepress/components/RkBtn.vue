<template>
  <a
    :href="opt.src"
    :target="opt._blank"
  >
    <div
      class="text-center q-pa-sm rounded-borders"
      :class="{'bg-light-blue-10': !opt.flat, 'text-white': !opt.flat, 'text-grey-10': opt.flat }"
    >
      {{ opt.label }}
    </div>
  </a>
</template>

<script>
export default {
  props: {
    params: { type: Object },
    src: { type: String },
    label: { type: String },
    flat: { type: Boolean, default: false },
    _blank: { type: Boolean, default: false }
  },
  computed: {
    opt () {
      const { params, src, label, flat, _blank } = this
      if (params) return params
      else return { src, label, flat, _blank }
    }
  }
}
</script>