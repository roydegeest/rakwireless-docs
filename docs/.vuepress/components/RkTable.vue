<template>
  <div class="q-markup-table q-table__container q-table__card q-table--horizontal-separator" :id="key">
    <slot></slot>
  </div>
</template>

<script>
import { uid } from 'quasar'

export default {
  name: 'RkTable',
  data: () => ({
    key: uid()
  }),
  mounted () {
    const qmt = document.getElementById(this.key)
    // const topTable = qmt.firstChild
    const childTable = qmt.firstChild

    childTable.classList.add('q-table')
    // qmt.replaceChild(childTable, topTable)
  }
}
</script>