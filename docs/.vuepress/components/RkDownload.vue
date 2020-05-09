<template>
  <q-btn
    color="primary"
    size="0.95rem"
    label="Save as PDF"
    @click="print2()"
    rounded
    no-caps
  />
</template>

<script>
import * as jsPDF from 'jspdf'
import * as html2canvas from 'html2canvas'

function print (quality = 1) {
  const filename = 'Test.pdf';
  console.log(document.querySelector('#nodeToRenderAsPDF'))
  html2canvas(document.querySelector('#nodeToRenderAsPDF'))
    .then(canvas => {
      let pdf = new jsPDF('p', 'mm', 'a4');
      pdf.addImage(canvas.toDataURL('image/png'), 'PNG', 0, 0, 211, 298);
      pdf.save(filename);
    });
}
function print2 () {
  var scaleBy = 1;
  var w = 2480;
  var h = 3508;
  var div = document.querySelector('#nodeToRenderAsPDF');
  var canvas = document.createElement('canvas');
  canvas.width = w * scaleBy;
  canvas.height = h * scaleBy;
  canvas.style.width = w + 'px';
  canvas.style.height = h + 'px';
  var context = canvas.getContext('2d');
  context.scale(scaleBy, scaleBy);

  html2canvas(div, { canvas: canvas })
    .then(canvas => {
      const filename = 'Test.pdf';
      console.log('ok! ', canvas)
      let pdf = new jsPDF('p', 'mm', 'a4');
      pdf.addImage(canvas, 'PNG', 0, 0);
      pdf.save(filename);
    });
}
export default {
  name: 'RkDownload',
  methods: {
    print,
    print2
  }
}
</script>