import Layout from '@/layout'

const produceRouter = {
  path: '/produce',
  component: Layout,
  redirect: '/basicInfo/index.vue',
  meta: {
    title: '客户档案',
    icon: 'nested'
  },
  children: [
    {
      path: '/basicInfo',
      component: () => import('@/views/produceManage/basicInfo/index.vue'),
      name: 'basicInfo',
      meta: { title: '往来单位设置' }
    },
    {
      path: '/tailorManage',
      component: () => import('@/views/produceManage/tailorManage/index.vue'),
      name: 'tailorManage',
      meta: { title: '远程协同单位' }
    },
    {
      path: '/qualityManage',
      component: () => import('@/views/produceManage/qualityManage/index.vue'),
      name: 'qualityManage',
      meta: { title: '协同客户角色' }
    }

  ]
}

export default produceRouter
