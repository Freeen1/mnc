import { createRouter,createWebHashHistory } from 'vue-router'
//引入首页index.vue
import Admin from '~/layouts/admin.vue'
import Index from '~/pages/index.vue'
import NotFound from '~/pages/404.vue'
import Login from '~/pages/login.vue'
import Chat from '~/layouts/components/components/chat.vue'


const routes = [{
    path: "/",
    component:Admin,
    //子路由
    children:[{
        path: "/",
        component:Index,
        meta:{
            title:"后台"
        }
    },{
        path: "/chat",
        component:Chat,
        meta:{
            title:"聊天"
        }
    },{
        path: "/taam",
        component:Chat,
        meta:{
            title:"考勤"
        }
    },{
        path: "/grades",
        component:Chat,
        meta:{
            title:"成绩"
        }
    },{
        path: "/appraise",
        component:Chat,
        meta:{
            title:"评价"
        }
    },{
        path: "/account",
        component:Chat,
        meta:{
            title:"个人"
        }
    }]
},{
    path: "/login",
    component:Login
},{   
    path: '/:pathMatch(.*)*', 
    name: 'NotFound', 
    component: NotFound 
},{
    
}
]

const router = createRouter({
    history: createWebHashHistory(),
    routes
})

export default router