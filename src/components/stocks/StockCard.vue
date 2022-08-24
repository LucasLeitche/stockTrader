<template>
  <v-flex class="pr-3 pb-3" xs12 md2 lg4>
    <v-card class="green darken-3 white--text">
      <v-card-title class="headline">
        <strong>{{`${stock.name}`}}</strong><small> (Preço:{{stock.price | currency}})</small>
      </v-card-title>
    </v-card>
    <v-card>
      <v-container fill-height>
        <v-text-field v-model.number="quantity" label="Quantidade" type="number"
        :error="insufficientFunds"></v-text-field>
        <v-btn class="v-btn green darken-3 white--text"
        :disabled="quantity<=0 || !Number.isInteger(quantity)|| insufficientFunds"
        @click="buyStock">{{insufficientFunds ? 'Insuficiente': 'Comprar'}}</v-btn>
      </v-container>
    </v-card>
  </v-flex>
</template>

<script>
export default {
  props:['stock'],
  data(){
    return {
      quantity: 0
    }
  },
  computed:{
    funds(){
      return this.$store.getters.funds
    },
    insufficientFunds(){
      return this.quantity * this.stock.price > this.funds
    }
  },
  methods:{
    buyStock(){
      const order = {
        stockId: this.stock.id,
        stockPrice: this.stock.price,
        quantity: this.quantity
      }
      this.$store.dispatch('buyStock', order)
      this.quantity = 0
    }
  }
}
</script>

<style>

</style>