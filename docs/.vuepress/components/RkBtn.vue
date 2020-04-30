<template>
  <div class="q-py-md flex flex-center">
    <q-btn
      v-if="opt._blank"
      color="primary"
      type="a"
      target="_blank"
      size="0.95rem"
      :label="opt.label"
      :href="opt.src"
      rounded
      no-caps
    />
    <q-btn
      v-else
      color="primary"
      size="0.95rem"
      :label="opt.label"
      :to="opt.src"
      rounded
      no-caps
    />
  </div>
</template>

<script>
export default {
  props: {
    params: { type: Object },
    src: { type: String },
    label: { type: String },
    _blank: { type: Boolean, default: false }
  },
  computed: {
    opt () {
      const { params, src, label, _blank } = this
      if (params) return params
      else return { src, label, _blank }
    }
  }
}
</script>