import Vue from 'vue'
import Router from 'vue-router'
import Start from '@/pages/Start'
import Stage from '@/pages/Stage'
import Finish from '@/pages/Finish'


Vue.use(Router);

export default new Router({
    routes: [
        {
            path: '/',
            name: 'start',
            component: Start,
        },
        {
            path: '/stage/:stageId',
            props: true,
            name: 'stage',
            component: Stage
        },
        {
            path: '/finish',
            name: 'finish',
            component: Finish
        }
    ]
})
