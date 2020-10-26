import request from '@/utils/request'

export default {
  getProducts() {
    return request({
      url: `/api/shop`,
      method: 'get'
    })
  },

  buyProducts(products, cb, errorCb) {
    setTimeout(() => {
      // simulate random checkout failure.
      (Math.random() > 0.5 || navigator.webdriver)
        ? cb()
        : errorCb()
    }, 100)
  }
}
