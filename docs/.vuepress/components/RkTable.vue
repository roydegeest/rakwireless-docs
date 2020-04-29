<template>
  <q-markup-table :id="key">
    <slot></slot>
  </q-markup-table>
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
    const topTable = qmt.firstChild
    const childTable = topTable.firstChild

    childTable.classList.add('q-table')
    qmt.replaceChild(childTable, topTable)
  }
}
</script>