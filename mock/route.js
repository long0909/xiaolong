import { Constant } from './_utils'
const { ApiPrefix } = Constant

const database = [
  {
    id: '1',
    icon: 'dashboard',
    name: 'Dashboard',
    zh: {
      name: '仪表盘'
    },
    'pt-br': {
      name: 'Dashboard'
    },
    route: '/dashboard',
  },
{
    id: '6',
    breadcrumbParentId: '1',
    name: 'Farm',
    zh: {
      name: 'Farm'
    },
    'pt-br': {
      name: 'Fazenda'
    },
    icon: 'api',
    route: '/farm',
  },
  {
    id: '8',
    breadcrumbParentId: '1',
    name: 'Warning',
    zh: {
      name: 'Warning'
    },
    'pt-br': {
      name: 'Aviso'
    },
    icon: 'dashboard',
    route: '/warning',
  },
  {
    id: '9',
    breadcrumbParentId: '1',
    name: 'Feed',
    zh: {
      name: 'Feed'
    },
    'pt-br': {
      name: 'Alimentar'
    },
    icon: 'area-chart',
    route: '/feed',
  },
  {
    id: '10',
    breadcrumbParentId: '1',
    name: 'Video',
    zh: {
      name: 'video'
    },
    'pt-br': {
      name: 'video'
    },
    icon: 'bar-chart',
    route: '/video',
  },
]

module.exports = {
  [`GET ${ApiPrefix}/routes`](req, res) {
    res.status(200).json(database)
  },
}
