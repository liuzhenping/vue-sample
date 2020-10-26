<template>
  <el-card class="box-card">
    <div slot="header" class="clearfix">
      <h1>子组件向父组件通信</h1>
    </div>
    <h1>{{ message }}</h1>
    <child @showMsg="showMsg" />
  </el-card>
</template>
<script>
import Child from '@/views/demo/communication/emit/Child'
export default {
  name: 'Parent',
  components: {
    Child
  },
  data() {
    return {
      message: ''
    }
  },
  methods: {
    showMsg(msg) {
      this.message = msg
    }
  }
}
</script>

<style scoped>

</style>
