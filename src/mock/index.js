import Mock from 'mockjs'
import bookingData from '@/mock/modules/booking'
import shopData from '@/mock/modules/shop'

Mock.mock('/api/booking', 'post', bookingData.saveBooking)

Mock.mock('/api/booking/100100', 'get', bookingData.getBooking)

Mock.mock('/api/shop', 'get', shopData.getProducts)
