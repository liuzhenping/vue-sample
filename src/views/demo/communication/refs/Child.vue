<template>
  <h1>{{ message }}</h1>
</template>
<script>
export default {
  name: 'Child',
  data() {
    return {
      message: ''
    }
  },
  methods: {
    getMessage(msg) {
      this.message = msg
    }
  }
}
</script>

<style scoped>
</style>
