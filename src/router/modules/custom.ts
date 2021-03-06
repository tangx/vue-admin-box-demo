import Layout from '@/layout/index.vue'
import { createNameComponent } from '../createNode'
const route = [
    {
        path: '/custom',
        component: Layout,
        redirect: '/custom',
        meta: { title: 'message.custom.name', icon: 'el-icon-document-copy' },
        alwayShow: true,
        children: [
            {
                path: 'index',
                component: createNameComponent(() => import('@/views/main/custom/index.vue')),
                meta: { title: 'message.custom.index.name' }
            },
            {
                path: 'zhangsan',
                component: createNameComponent(() => import('@/views/main/custom/zhangsan.vue')),
                meta: { title: 'message.custom.zhangsan.name' }
            },
            {
                path: 'github-users',
                component: createNameComponent(() => import('@/views/main/custom/githubUser.vue')),
                meta: { title: 'message.custom.github.users' }
            },
            {
                path: 'global-config',
                component: createNameComponent(() => import('@/views/main/custom/globalConfig.vue')),
                meta: { title: 'message.custom.global.name' }
            },
            {
                path: 'value-binding',
                component: createNameComponent(() => import('@/views/main/custom/valueBinding.vue')),
                meta: { title: 'message.custom.values.binding' }
            }
        ]
    }
]

export default route