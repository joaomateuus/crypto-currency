<template>
    <v-carousel>
        <v-carousel-item
        v-for="(item,i) in items"
        :key="i"
        :src="item.src"
        reverse-transition="fade-transition"
        transition="fade-transition"
        >
        </v-carousel-item>
    </v-carousel>
</template>

<script>

export default {
  name: 'HomeApp',
  components: {},
  data() {
    return {
        items: [
          {
            src: 'https://static.vecteezy.com/ti/vetor-gratis/p1/3321376-bitcoin-btc-banner-bitcoin-cryptocurrency-concept-banner-background-vetor.jpg',
          },
          {
            src: 'https://thumbs.dreamstime.com/b/blockchain-cryptocurrency-outline-blue-horizontal-banner-blockchain-cryptocurrency-outline-blue-horizontal-banner-vector-bright-135991197.jpg',
          },
        ],
    }
  },
}

</script>


<style scoped>




</style>