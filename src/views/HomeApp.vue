<template>
  <v-container>

      <div class="nav-bar">
        <NavbarComponent />
      </div>


    <v-container>
      <div class="carrousel">
        <CarrouselComponent />
      </div>
    </v-container>

    <v-container>
      <TableComponent />
    </v-container>
  </v-container>
  

</template>
<script>
import NavbarComponent from '../components/NavbarComponent.vue';
import CarrouselComponent from '../components/CarrouselComponent.vue';
import TableComponent from '../components/TableComponent.vue';


export default {
  name: 'HomeApp',
  components: 
  {
   NavbarComponent,
   TableComponent,
   CarrouselComponent
  },
  data() {
    return {

    }
  },
}

</script>


<style scoped>
.carrousel{
  width: 100%;
  height: auto;
  background: black;
}



</style>