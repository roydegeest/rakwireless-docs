<template>
  <div class="q-pa-sm">
    <q-item
      :to="value.path"
      class="grow text-center q-pa-none shadow-2"
      style="height: 15rem; width: 13rem"
    >
      <q-item-section>
        <div class="col q-pa-none flex flex-center">
          <img :src="rakImg(value.frontmatter)" class="fit" />
        </div>
        <div class="col-2 flex flex-center q-ma-sm">
          <div
            ref="test"
            class="text-weight-medium ellipsis-2-lines"
            style="font-size: 0.75rem; line-height: 0.95rem"
          >{{ value.title }}</div>
        </div>
      </q-item-section>
    </q-item>
  </div>
</template>

<script>
export default {
  name: 'RkGridItem',
  props: ['value'],
  methods: {
    rakImg(frontmatter) {
      const { rak_img } = frontmatter
      return rak_img || '/assets/rakwireless/rak-blue-dark.svg'
    }
  }
}
</script>