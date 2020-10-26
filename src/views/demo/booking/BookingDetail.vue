<template>
  <el-card class="box-card">
    <el-row type="flex" justify="center">
      <a id="logo">
        <img src="@/assets/images/book.svg">
        <span>{{ booking.description }}</span>
      </a>
    </el-row>
    <el-divider />
    <div id="booking-content">
      containerQuantity -- {{ booking.containerQuantity }} <br>
      description -- {{ booking.description }}
    </div>
    <el-divider>
      <el-button icon="el-icon-edit-outline" circle @click="editBooking">
        修改
      </el-button>
    </el-divider>
  </el-card>
</template>
<script>
import bookingAPI from '@/api/booking'
export default {
  name: 'BookingDetail',
  data() {
    return {
      booking: {
        bookingId: null,
        containerQuantity: '',
        description: ''
      }
    }
  },
  watch: {
    '$route': function(to) {
      this.getBooking(to.params.bookingId)
    }
  },
  created() {
    const bookingId = this.$route.params && this.$route.params.bookingId
    this.getBooking(bookingId)
  },
  methods: {
    getBooking(bookingId) {
      bookingAPI.getBooking(bookingId).then(response => {
        this.booking = response.result
      }).catch(err => {
        console.log(err)
      })
    },
    editBooking() {
      this.$router.push({ path: '/booking/edit/' + this.booking.bookingId })
    }
  }
}
</script>

<style lang="scss" scoped>
    #logo {
        display: inline-block;
        font-size: 1.3em;
        line-height: 40px;
        color: #273849;
        font-weight: bold;
        text-decoration: none;
        img {
            vertical-align: middle;
            margin-right: 6px;
            width: 30px;
            height: 30px;
            border: none;
        }
    }

    .booking-createInfo {
        color: #808080;
        text-align: center;
        margin-top: 10px;
    }

    #booking-content {
        min-height: 585px;
        margin-bottom: 30px;
        line-height: 28px;
        font-size: 16px;
    }
</style>
