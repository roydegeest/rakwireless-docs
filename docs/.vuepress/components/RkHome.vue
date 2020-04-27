<template>
  <div class="flex flex-center bg-primary q-pa-sm text-white">
    <div class="row fit q-gutter-x-md justify-center">
      <q-btn
        label="RUI"
        to="/en-us/rui/"
        class="col-12 col-sm-2"
        color="white"
        flat
      />
      <q-btn
        label="Store"
        type="a"
        href="https://store.rakwireless.com/"
        target="__blank"
        class="col-12 col-sm-2"
        color="white"
        flat
      />
      <q-btn
        label="Downloads"
        type="a"
        href="https://downloads.rakwireless.com/"
        target="__blank"
        class="col-12 col-sm-2"
        color="white"
        flat
      />
      <q-btn
        label="FAQ"
        to="/en-us/faq"
        class="col-12 col-sm-2"
        color="white"
        flat
      />
      <q-btn
        label="Forums"
        type="a"
        href="https://forum.rakwireless.com/"
        target="__blank"
        class="col-12 col-sm-2"
        color="white"
        flat
      />
    </div>
  </div>
</template>

<script>
export default {
  name: 'RkHome'
}
</script>