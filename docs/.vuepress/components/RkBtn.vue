<template>
  <div class="wrapper">
    <a
      id="buybutton"
      :href="opt.src"
      :target="opt.target"
    >{{ opt.label }}</a>
  </div>
</template>

<script>
export default {
  props: ['params', 'src', 'label', 'target'],
  computed: {
    opt () {
      const { params, src, label , target} = this
      if (params) return params
      else return { src, label , target}
    }
  }
}
</script>

<style scoped>
.wrapper {
  text-align: center;
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