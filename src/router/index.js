import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'dashboard',
      component: () => import('@pg/Layout.vue'),
      children: [
        {
          path: '/about',
          name: 'about',
          component: () => import('@pg/About/AboutView.vue')
        },
        {
          path: '/mentors',
          name: 'mentors',
          component: () => import('@pg/Mentors/Mentors.vue'),
          beforeEnter: (to, _, next) => {
            if (
              to.name == 'mentors' &&
              ['SUPER-ADMIN', 'ADMINSTRATOR'].includes(localStorage.getItem('role'))
            ) {
              return next()
            } else {
              return next({ name: 'dashboard' })
            }
          }
        },
        {
          path: '/students',
          name: 'students',
          component: () => import('@pg/Students/Students.vue')
        },
        {
          path: '/groups',
          name: 'groups',
          component: () => import('@pg/Groups/Groups.vue')
        },
        {
          path: '/homeworks',
          name: 'homeworks',
          component: () => import('@pg/Homeworks/Homeworks.vue'),
          beforeEnter: (to, _, next) => {
            if (
              to.name == 'homeworks' &&
              ['STUDENT', 'MENTOR'].includes(localStorage.getItem('role'))
            ) {
              return next()
            } else {
              return next({ name: 'dashboardtysdfughijkl;' })
            }
          }
        }
      ]
    }
  ]
})

export default router
