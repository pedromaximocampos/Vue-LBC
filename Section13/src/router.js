import { createRouter, createWebHistory} from "vue-router";

import TeamsList from "@/components/teams/TeamsList.vue";
import UsersList from "@/components/users/UsersList.vue";
import TeamMembers from "@/components/teams/TeamMembers.vue";

const router = createRouter({
    history: createWebHistory(),
    routes: [
        { path: '/', redirect: '/teams',
            meta: {needsAuth: true},},
        { name:'teams' ,path: '/teams',  component: TeamsList,
            children: [
                { name: 'teams-members', path: ':teamId',  component: TeamMembers, props: true },
            ]
        },
        { path: '/users',  component: UsersList,
            beforeEnter(to, from    , next){
                console.log('users beforeEnter');
                console.log(to, from);
                next();
            }
        }, // alias:'/'

        { path: '/:notFound(.*)', redirect:'/teams'} // at the end we define all others routes that doesn't exist!
    ],
})
//navigation Guard!
// router.beforeEach((to, from, next) => {
//  if(to.meta.needsAuth){
//     console.log('NeedsAuth')
//     next()
// })else{
//     next()
//     }
// router.afterEach((to, from) => {
//     //Sending analytics data to the server.
//     console.log('Analytics data:', to, from);
// })

export default router