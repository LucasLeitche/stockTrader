<template>
  <v-layout row wrap>
    <Stock-card v-for="stock in stocks" :key="stock.id" :stock="stock"/>
  </v-layout>
</template>

<script>

import StockCard from './StockCard.vue'
export default {
  components:{StockCard},
  computed:{
    stocks(){
      return this.$store.getters.stocks
    }
  }
}
</script>

<style>

</style>