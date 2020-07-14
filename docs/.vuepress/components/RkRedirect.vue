<template>
  <div>Redirecting ...</div>
</template>

<script>
export default {
  props: {
    to: { type: String }
  },
  mounted() {
    this.$router.push(this.to)
  }
}
</script>