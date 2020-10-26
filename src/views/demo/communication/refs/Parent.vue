<template>
  <el-card class="box-card">
    <div slot="header" class="clearfix">
      <h1>父组件向子组件通信 - 调用子组件的method</h1>
    </div>
    <h1>This is Parent</h1>
    <child ref="msg" />
  </el-card>
</template>
<script>
import Child from '@/views/demo/communication/refs/Child'
export default {
  name: 'Parent',
  components: {
    Child
  },
  mounted() {
    console.log(this.$refs.msg)
    this.$refs.msg.getMessage('This is Child from Parent')
  }
}
</script>

<style scoped>

</style>
