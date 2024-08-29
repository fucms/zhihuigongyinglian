import Layout from '@/layout'

const emergencyRouter = {
  path: '/emergency',
  component: Layout,
  redirect: '/emergePhoneBook/index.vue',
  meta: {
    title: '基础设置',
    icon: 'nested'
  },
  children: [
    {
      path: '/emergePhoneBook',
      component: () => import('@/views/a_emergencyManage/emergePhoneBook/index.vue'),
      name: 'emergePhoneBook',
      meta: { title: '机构设置' }
    },
    {
      path: '/warnInfoPublish',
      component: () => import('@/views/a_emergencyManage/warnInfoPublish/index.vue'),
      name: 'warnInfoPublish',
      meta: { title: '仓库设置' }
    },
    {
      path: '/emergeHandInfo',
      component: () => import('@/views/a_emergencyManage/emergeHandInfo/index.vue'),
      name: 'emergeHandInfo',
      meta: { title: '条款设置' }
    },
    {
      path: '/emergeDirectPolicy',
      component: () => import('@/views/a_emergencyManage/emergeDirectPolicy/index.vue'),
      name: 'emergeDirectPolicy',
      meta: { title: '物资设置' }
    },
    {
      path: '/emergeDrill',
      component: () => import('@/views/a_emergencyManage/emergeDrill/index.vue'),
      name: 'emergeDrill',
      meta: { title: '财务资金设置' }
    },
    {
      path: '/emergeManageInfo',
      component: () => import('@/views/a_emergencyManage/emergeManageInfo/index.vue'),
      name: 'emergeManageInfo',
      meta: { title: '费用设置' }
    }
  ]
}

export default emergencyRouter
