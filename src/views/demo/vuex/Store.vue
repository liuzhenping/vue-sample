<template>
  <el-card class="box-card">
    <h1>Shopping Cart Example</h1>
    <hr>
    <h2>Products</h2>
    <product-list />
    <hr>
    <shopping-cart />
  </el-card>
</template>
<script>
import ProductList from './ProductList.vue'
import ShoppingCart from './ShoppingCart.vue'
export default {
  name: 'Store',
  components: { ProductList, ShoppingCart },
  computed: {
  },
  methods: {
  }
}
</script>

<style scoped>

</style>
