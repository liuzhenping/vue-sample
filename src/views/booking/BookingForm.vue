<template>
  <el-card class="box-card">
    <el-form ref="booking" :model="booking" :rules="rules">
      <el-form-item prop="containerQuantity">
        <el-input v-model="booking.containerQuantity" placeholder="输入集装箱数量" />
      </el-form-item>
      <el-form-item prop="description">
        <el-input v-model="booking.description" placeholder="输入货物描述" />
      </el-form-item>
      <el-form-item>
        <el-button type="primary" @click="submitForm('booking')">
          保存
        </el-button>
        <el-button @click="resetForm('booking')">
          重置
        </el-button>
      </el-form-item>
    </el-form>
    <el-dialog
      title="提示"
      :visible.sync="dialogVisible"
      width="30%"
    >
      <span>恭喜你，保存成功</span>
      <span slot="footer" class="dialog-footer">
        <el-button type="primary" @click="viewBooking()">查看订单</el-button>
      </span>
    </el-dialog>
  </el-card>
</template>
<script>
import bookingAPI from '@/api/booking'
export default {
  name: 'BookingForm',
  props: {},
  data() {
    return {
      booking: {
        bookingId: null,
        containerQuantity: '',
        description: ''
      },
      dialogVisible: false,
      rules: {
        containerQuantity: [
          { required: true, message: '请输入集装箱数量', trigger: 'blur' }
        ]
      }
    }
  },
  created() {
    if (this.$route.meta.isEdit) {
      const bookingId = this.$route.params && this.$route.params.bookingId
      this.fetchData(bookingId)
    }
  },
  methods: {
    fetchData(bookingId) {
      bookingAPI.getBooking(bookingId).then(response => {
        this.booking = response.result
      }).catch(err => {
        console.log(err)
      })
    },
    submitForm(formName) {
      this.$refs[formName].validate((valid) => {
        if (valid) {
          console.log(this.booking)
          bookingAPI.saveBooking(this.booking).then(response => {
            console.log(response)
            this.booking.bookingId = response.result.bookingId
            this.dialogVisible = true
          }).catch(err => {
            console.log(err)
          })
        } else {
          console.log('error submit!')
          return false
        }
      })
    },
    resetForm(formName) {
      this.$refs[formName].resetFields()
    },
    viewBooking() {
      this.dialogVisible = false
      this.$router.push({ path: '/booking/' + this.booking.bookingId })
    },
    clearForm(formName) {
      this.dialogVisible = false
      this.$refs[formName].resetFields()
    }
  }
}
</script>

<style lang="scss" scoped>
</style>
