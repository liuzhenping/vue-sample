import Layout from '@/views/layout/Index.vue'

export default {
  path: '/booking',
  component: Layout,
  children: [{
    path: 'create',
    name: 'Create Booking',
    meta: { isEdit: false },
    component: () => import('@/views/demo/booking/BookingForm.vue')
  },
  {
    path: ':bookingId(\\d+)',
    name: 'Booking Detail',
    component: () => import('@/views/demo/booking/BookingDetail.vue')
  },
  {
    path: 'edit/:bookingId(\\d+)',
    name: 'Edit Booking',
    meta: { isEdit: true },
    component: () => import('@/views/demo/booking/BookingForm.vue')
  }
  ]
}
