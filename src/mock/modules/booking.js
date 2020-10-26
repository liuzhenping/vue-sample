import Mock from 'mockjs'
const Random = Mock.Random
export default {
  saveBooking: () => ({
    code: 200,
    result: {
      bookingId: '100100'
    }
  }),

  getBooking: () => ({
    code: 200,
    result: {
      bookingId: '100100',
      containerQuantity: Random.integer(100, 9999),
      description: Random.csentence(5, 10)
    }
  })
}
