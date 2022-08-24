export default{
    state:{
        funds: 10000,
        stocks: []
    },
    mutations:{
        buyStock(state, {stockId, quantity, stockPrice}){
            const record = state.stocks.find(e => e.id == stockId) // Criando um registro para saber se já possuo esse registro dentro da array
            if(record){ // setando como true faz
                record.quantity += quantity
            } else{
                state.stocks.push({
                    id: stockId,
                    quantity: quantity
                })
            }
            state.funds -= stockPrice * quantity
        }},
        sellStock(state, {stockId, quantity, stockPrice}){
            const record = state.stocks.find(e=> e.id == stockId)
            if(record.quantity > quantity){ // verificando se a quantidade de ações que deseja vender é maior do que a quantidade de ações que possui
                record.quantity -= quantity
            } else{
                state.stocks.splice(state.stocks.indexOf(record),1)
            }
            state.found += stockPrice * quantity
        },
        actions:{
            sellStock({commit},order){
                 commit('sellStock', order)
            }
        },
        getters:{
            stockPortifolio(state, getters /*rootsate*/){
                return state.stocks.map(stock=> {
                    const record = getters.stocks.find(e => e.id === stock.id) // utilizando variavel para pegar o que falta da minha tendo ela somente stocks.price e stocks.quantity dentro de seus objs
                    return {
                        id:stock.id,
                        quantity:stock.quantity,
                        name: record.name,
                        price: record.price
                    }
                })
            },
            funds(state){
                return state.funds
            }
        }
    }
