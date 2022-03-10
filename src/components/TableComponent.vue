<template>
<div class="table-container">
    <table class="table-md table-bordered" >
        <thead>
            <tr>
                <th>Coins</th> 
                <th>Price</th>
                <th>High (24h)</th>
                <th>Low (24h)</th>
                <th>Market Cap</th>
            </tr>
                </thead>
                <tbody>
                    <tr v-for="coin in coins" :key="coin.id">
                        <td id="img">
                            <img :src="coin.image" alt="">
                            <span>{{ coin.name }}</span>
                        </td>
                        <td>US$ {{ coin.current_price }}</td>
                        <td>{{ coin.high_24h }}</td>
                        <td>{{ coin.low_24h }}</td>
                        <td>{{ coin.market_cap }}</td>
                    </tr>
                </tbody>
    </table>
</div>          


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

.table-container{
    display: flex;
    flex-direction: column;
    align-items: center;
    height: 100%;
    padding-top: 4vh;
}

.table-md{
    width: 70vw;  
}



</style>