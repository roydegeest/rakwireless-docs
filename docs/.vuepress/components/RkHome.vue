<template>
  <div class="flex flex-center bg-primary q-pa-sm text-white">
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
  </div>
</template>

<script>
export default {
  name: 'RkHome'
}
</script>