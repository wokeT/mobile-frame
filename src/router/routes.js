const Login = () => import(/* webpackChunkName: "login" */ "@/pages/login")

export default [
  {
    path: "/",
    redirect: "/login"
  },
  {
    path: "/login",
    component: Login
  }
]

