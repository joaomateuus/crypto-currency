<template>
<div>
  <div class="nav-bar">
    <NavbarComponent />
  </div>

  <div>
    <br>
    <br>
  </div>

  <div class="table">
    <TableComponent />
  </div>
</div>
</template>

<script>
import NavbarComponent from '../components/NavbarComponent.vue';
import TableComponent from '../components/TableComponent.vue';
import CarrouselComponent from '../components/CarrouselComponent.vue';
//import CarrouselSlider from '../components/CarouselSlider.vue'



export default {
  name: 'HomeApp',
  components: 
  {
   NavbarComponent,
   TableComponent,
   CarrouselComponent,
   //CarrouselSlider,
  },
  data() {
    return {
      //visibleSlide: 0,
      slides: 
      [
        'https://static.vecteezy.com/system/resources/previews/003/321/377/large_2x/bitcoin-btc-banner-bitcoin-cryptocurrency-concept-banner-background-vector.jpg',
        'https://static.vecteezy.com/system/resources/previews/003/321/395/large_2x/ethereum-banner-eth-cryptocurrency-concept-vector.jpg',
        'https://static.vecteezy.com/system/resources/previews/003/321/363/large_2x/ethereum-coins-falling-from-the-sky-eth-cryptocurrency-banner-vector.jpg',
      ],
    }
  },
}

</script>


<style scoped>

</style>