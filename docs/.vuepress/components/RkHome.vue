<template>
  <div class="column q-pa-md items-center no-wrap" style="height: 94vh">
    <!-- <transition
      appear
      enter-active-class="animated slideInDown"
      leave-active-class="animated slideOutUp"
    > -->
      <div
        class="wrapper text-center items-center"
        style="max-width: 70rem;"
        :style="showHead ? 'max-height: 100vh' : 'max-height: 0'"
      >
        <img src="/assets/rakwireless/rak-blue-dark.svg" style="width: 14rem;" />
        <div
          class="text-weight-medium"
          style="font-size: 2.5rem; line-height: 2.5rem"
        >Welcome to RAK Documentation Center</div>
        <div class="full-width bg-blue-10 q-my-sm" style="height: 0.15rem; max-width: 50rem" />
        <div
          class="text-h6 text-weight-regular"
        >The RAKwireless Docs is a great place to explore our hardware, software and developer tools, and find all the information you need to get started in your LoRa® project!</div>
      </div>
    <!-- </transition> -->
    <rk-home-grid
      class="col"
      id="rk-home-grid"
      style="margin-top: 2rem"
      @showHead="v => showHead = v"
    />
  </div>
  <!-- <div class="flex flex-center bg-primary q-pa-sm text-white">
    <div
      class="row fit q-gutter-x-md justify-center"
      style="max-width: 65rem"
    >
      <q-btn
        label="RUI"
        to="/en-us/rui/"
        class="col-12 col-sm-2"
        color="white"
        flat
      />
      <q-btn
        type="a"
        href="https://store.rakwireless.com/"
        target="__blank"
        class="col-12 col-sm-2"
        color="white"
        flat
      >
        Store
        <q-icon
          name="fas fa-external-link-alt"
          size="0.75rem"
          class="q-ml-sm"
        />
      </q-btn>
      <q-btn
        type="a"
        href="https://downloads.rakwireless.com/"
        target="__blank"
        class="col-12 col-sm-2"
        color="white"
        flat
      >
        Downloads
        <q-icon
          name="fas fa-external-link-alt"
          size="0.75rem"
          class="q-ml-sm"
        />
      </q-btn>
      <q-btn
        label="FAQ"
        to="/en-us/faq"
        class="col-12 col-sm-2"
        color="white"
        flat
      />
      <q-btn
        type="a"
        href="https://forum.rakwireless.com/"
        target="__blank"
        class="col-12 col-sm-2"
        color="white"
        flat
      >
        Forums
        <q-icon
          name="fas fa-external-link-alt"
          size="0.75rem"
          class="q-ml-sm"
        />
      </q-btn>
    </div>
  </div>-->
</template>

<script>
export default {
  name: 'RkHome',
  data: () => ({
    showHead: true
  })
}
</script>

<style scoped>
.wrapper {
  overflow: hidden;
  transition: max-height 0.5s ease-in-out;
  transition-delay: 0s;
}
</style>