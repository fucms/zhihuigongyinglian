import Layout from '@/layout'

const patrolDefenceRouter = {
  path: '/patrolDefence',
  component: Layout,
  redirect: '/personnelManage/index.vue',
  meta: {
    title: '采购管理',
    icon: 'nested'
  },
  children: [
    {
      path: '/personnelManage',
      component: () => import('@/views/a_patrolDefence/personnelManage/index.vue'),
      name: 'personnelManage',
      meta: { title: '采购协议' }
    },
    {
      path: '/taskManage',
      component: () => import('@/views/a_patrolDefence/taskManage/index.vue'),
      name: 'taskManage',
      meta: { title: '采购计划' }
    },
    {
      path: '/riskAlerts',
      component: () => import('@/views/a_patrolDefence/riskAlerts/index.vue'),
      name: 'riskAlerts',
      meta: { title: '采购合同' }
    },
    {
      path: '/alarmConfiguration',
      component: () => import('@/views/a_patrolDefence/alarmConfiguration/index.vue'),
      name: 'alarmConfiguration',
      meta: { title: '采购发货' }
    },
    {
      path: '/inspectionManage',
      component: () => import('@/views/a_patrolDefence/inspectionManage/index.vue'),
      name: 'inspectionManage',
      meta: { title: '采购装运' }
    },
    {
      path: '/workOrderManage',
      component: () => import('@/views/a_patrolDefence/workOrderManage/index.vue'),
      name: 'workOrderManage',
      meta: { title: '采购结算' }
    }
  ]
}

export default patrolDefenceRouter
