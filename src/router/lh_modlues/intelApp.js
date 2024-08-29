import Layout from '@/layout'

const intelAppRouter = {
  path: '/intelApp',
  component: Layout,
  redirect: '/domainDivision/index.vue',
  meta: {
    title: '个人办公',
    icon: 'nested'
  },
  children: [
    {
      path: '/domainDivision',
      component: () => import('@/views/a_intelApp/domainDivision/index.vue'),
      name: 'domainDivision',
      meta: { title: '待办事项' }
    },
    {
      path: '/buildingManage',
      component: () => import('@/views/a_intelApp/buildingManage/index.vue'),
      name: 'buildingManage',
      meta: { title: '已办事项' }
    }

  ]
}

export default intelAppRouter
