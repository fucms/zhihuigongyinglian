import Layout from '@/layout'

const businessRouter = {
  path: '/business',
  component: Layout,
  redirect: '/customerManage/index.vue',
  meta: {
    title: '系统管理',
    icon: 'nested'
  },
  children: [
    {
      path: '/productManage',
      component: () => import('@/views/businessManage/productManage/index.vue'),
      name: 'productManage',
      meta: { title: '权限设置' }
    },
    {
      path: '/supplierManage',
      component: () => import('@/views/businessManage/supplierManage/index.vue'),
      name: 'supplierManage',
      meta: { title: '系统设置' }
    }
  ]
}

export default businessRouter
