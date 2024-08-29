import Layout from '@/layout'

const storageRouter = {
  path: '/storage',
  component: Layout,
  redirect: '/storageManage/index.vue',
  meta: {
    title: '司机管理',
    icon: 'nested'
  },
  children: [
    {
      path: '/locationManage',
      component: () => import('@/views/storageManage/locationManage/index.vue'),
      name: 'locationManage',
      meta: { title: '司机账号' }
    },
    {
      path: '/itemCount',
      component: () => import('@/views/storageManage/itemCount/index.vue'),
      name: 'itemCount',
      meta: { title: '司机角色' }
    }
  ]
}

export default storageRouter
