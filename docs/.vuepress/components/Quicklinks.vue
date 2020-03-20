<template>
    <table id = "quicklinks">
        <col width="50%">
        <col width="50%">
        <tr>
            <td style="font-size:20px;"><strong>Learn More</strong></td>
            <td  style="font-size:20px;"><strong>Resources</strong></td>
        </tr>
        <tr>
            <td>
                <ul>
                    <li><a href = "https://www.hackster.io/search?i=projects&q=rak7246g">Projects Using the RAK7246G LoRaWAN® Developer Gateway</a></li>
                    <li><a href ="https://forum.rakwireless.com/" >Community </a></li>
                    <li><a href="mailto:fomi@rakwireless.com">Support</a></li>
                </ul>
            </td>
            <td>
                <ul> 
                <li><a href ="https://doc.rakwireless.com/datasheet/rakproducts/rak7246g-lorawan-developer-gateway-datasheet">RAK7246G LoRaWAN® Developer Gateway Datasheet</a></li>
                </ul>
            </td>
        </tr>
        

    </table>
</template>

<script>
export default {
  props: ['src', 'caption', 'width','figure_number'],
  computed: {
    imagesrc () {
      return this.src 
    }
  }
}
</script>

<style lang="stylus" scoped>
    table {
        border-collapse: collapse;
       
    }
    td{ 
        vertical-align: top;
        border: none
    }
    tr {
        border-top: none;
        background-color: #ffffff
        padding: 50px;

    }
    li a { 
        style: none;
    }

</style>