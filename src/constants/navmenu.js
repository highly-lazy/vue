const navlinks = [
  {
    title: 'Dashboard',
    path: '/',
    icon: 'bx bxs-dashboard',
    role: ['SUPER-ADMIN', 'MENTOR', 'STUDENT', 'ADMINSTRATOR']
  },
  {
    title: 'Ustozlar',
    path: '/mentors',
    icon: 'bx bxs-user-detail',
    role: ['SUPER-ADMIN', 'ADMINSTRATOR']
  },
  {
    title: 'Guruhlar',
    path: '/groups',
    icon: 'bx bxs-group',
    role: ['SUPER-ADMIN', 'ADMINSTRATOR', 'MENTOR']
  },
  {
    title: "O'quvchilar",
    path: '/students',
    icon: 'bx bxs-graduation',
    role: ['SUPER-ADMIN', 'ADMINSTRATOR', 'MENTOR']
  },
  {
    title: 'Hodimlar',
    path: '/employees',
    icon: 'bx bxs-user-circle',
    role: ['SUPER-ADMIN']
  },
  {
    title: 'Uyga vazifalarim',
    path: '/homeworks',
    icon: 'bx  bx-task',
    role: ['STUDENT']
  }
]


export default navlinks;