import Vue from 'vue'
import axios from 'axios'

Vue.use({
    install(Vue){
        Vue.prototype.$http = axios.create({
            baseUrl:'https://stock-trader-6bf6a-default-rtdb.firebaseio.com/'
        })
    }
})