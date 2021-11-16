import {createRouter, createWebHashHistory} from "vue-router";
import Empty from "../components/empty/index.vue";

const router = createRouter({
    history: createWebHashHistory(),
    routes: [
        {
            path: '/',
            component: Empty,
            redirect: '/april'
        },
        {
            path: "/april",
            component: Empty,
            redirect: "day",
            children: [
                {
                    /* 所有数据列表 */
                    path: 'list',
                    component: () => import('../views/april/list/index.vue')
                },
                {
                    /* 单条数据 */
                    path: 'day',
                    component: () => import("../views/april/day/index.vue")
                },
                {
                    /* 管理所有数据 */
                    path: "set",
                    component: () => import('../views/april/set/index.vue')
                },
            ],
        },
    ],
});

export default router;
