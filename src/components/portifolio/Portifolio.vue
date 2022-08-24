<template>
  <v-layout row wrap>
    <Stock-card v-for="stock in stocks" :key="stock.id" :stock="stock"/>
  </v-layout>
</template>

<script>
import StockCard from './StockCard.vue'
import {mapGetters} from 'vuex'
export default {
  components:{
    StockCard
  },  
  computed:{
    ...mapGetters({
      stocks: 'stockPortifolio'
    })
  }
}
</script>

<style>

</style>