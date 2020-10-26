import Layout from '@/views/layout/Index.vue'

export default {
  path: '/demo',
  component: Layout,
  children: [{
    path: 'emit',
    name: 'Emit',
    component: () => import('@/views/demo/communication/emit/Parent')
  },
  {
    path: 'ref',
    name: 'Ref',
    component: () => import('@/views/demo/communication/refs/Parent')
  },
  {
    path: 'vuex',
    name: 'Vuex',
    component: () => import('@/views/demo/vuex/Store')
  }]
}
