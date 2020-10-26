import request from '@/utils/request'

export default {
  saveBooking(data) {
    return request({
      url: '/api/booking',
      method: 'post',
      data
    })
  },
  getBooking(id) {
    return request({
      url: `/api/booking/${id}`,
      method: 'get'
    })
  }

}
