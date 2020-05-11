<template>
  <q-btn
    class="q-mb-lg"
    color="primary"
    size="0.85rem"
    label="Save Document as PDF"
    @click="generate()"
    rounded
    no-caps
  />
</template>

<script>
var html2pdf = require('html2pdf.js')
export default {
  name: 'RkDownload',
  props: ['filename'],
  methods: {
    generate () {
      var element = document.getElementById('nodeToRenderAsPDF');
      var opt = {
        margin: [0.5, 0.25],
        pagebreak: { mode: ['css', 'avoid-all', 'legacy'] },
        filename: this.filename,
        image: { type: 'jpeg', quality: 0.98 },
        html2canvas: { imageTimeout: 0, scale: 1.25 },
        jsPDF: { unit: 'in', format: 'legal', orientation: 'portrait' }
      };

      html2pdf().set(opt).from(element).save();
    }
  }
}
</script>