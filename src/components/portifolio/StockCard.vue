<template>
  <v-flex class="pr-3 pb-3" xs12 md2 lg4>
    <v-card class="blue darken-3 white--text">
     <v-card-title class="headline">
        <strong>
          {{stock.name}}
        </strong>
        <small>
          (Preço:{{stock.price | currency}}) | Qtde: {{stock.quantity}}
        </small>
      </v-card-title>
    </v-card>
    <v-card>
      <v-container fill-height>
        <v-text-field v-model.number="quantity" label="Quantidade" type="number"></v-text-field>
        <v-btn class="v-btn green darken-3 white--text"
        :disabled="quantity<=0 || !Number.isInteger(quantity)"
        @click="sellStock">Vender</v-btn>
      </v-container>
    </v-card>
  </v-flex>
</template>

<script>

import {mapActions} from 'vuex'
export default {
  props:['stock'],
  data(){
    return {
      quantity: 0
    }
  },
  methods:{
    ...mapActions({sellStockAction: 'sellStock'}),
    sellStock(){
      const order = {
        stockId: this.stock.id,
        stockPrice: this.stock.price,
        quantity: this.quantity
      }
      this.sellStockAction(order)
      this.$store.dispatch('buyStock')
      this.quantity = 0
    }
  }
}
</script>

<style>

</style>