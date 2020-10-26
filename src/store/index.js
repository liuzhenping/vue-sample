import Vue from 'vue'
import Vuex from 'vuex'
import shoppingCart from './modules/shoppingCart'
import products from './modules/products'

Vue.use(Vuex)

const debug = process.env.NODE_ENV !== 'production'

export default new Vuex.Store({
  modules: {
    shoppingCart,
    products
  },
  strict: debug
})
