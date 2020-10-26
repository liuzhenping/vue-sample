<template>
  <div>
    <h1>This is Child</h1>
  </div>
</template>

<script>
export default {
  name: 'Child',
  mounted() {
    this.$emit('showMsg', 'This is Parent from Child')
  }
}
</script>

<style scoped>

</style>
