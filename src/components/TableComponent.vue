<template>
  <v-container>
    <v-card>
        <v-card-title>
            <v-text-field
                v-model="search"
                append-icon="mdi-magnify"
                label="Search"
                single-line
                hide-details
            >
            </v-text-field>
        </v-card-title>

            <table class="table">
                <thead>
                    <tr>
                        <th>Coins</th> 
                        <th>Price</th>
                        <th></th>
                    </tr>
                </thead>
                <tbody>
                    <tr v-for="coin in coins" :key="coin.id">
                        <td id="img">
                            <img :src="coin.image" alt="">
                            <span>{{ coin.name }}</span>
                        </td>
                        <td>{{ coin.current_price }}</td>
                        <td>{{ coin.symbol }}</td>
                    </tr>
                </tbody>
            </table>


    </v-card>
   </v-container>
</template>

<script>
import axios from 'axios';

export default {
  name: 'TableComponent',
  components: 
  {

  },
  
  data () {
      return {
            search: '',
            coins: [],
        }
    },
    mounted() {
        axios.get('https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=100&page=1&sparkline=false')
        .then((response)=>{
            this.coins = response.data;
        })
    }
}
</script>


<style scoped>
img{
    height: 5vh;
    width:3vw ;
    padding-right: 1vh;
}



</style>