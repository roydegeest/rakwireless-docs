<template>
  <div class="wrapper">
    <a
      id="buybutton"
      :href="opt.src"
      :target="opt._blank"
    >{{ opt.label }}</a>
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

<style scoped>
.wrapper {
  text-align: center;
  box-sizing: border-box;
  padding: 1rem 0 1rem 0;
}
#buybutton {
  display: inline-block;
  background-color: #0c419a;
  color: white;
  padding: 12px;
  /* border-radius: 3px; */
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
  text-decoration: none !important;
  margin: auto;

  /* display:block; */
  /* position:absolute; */
  top: 50%;
}
</style>