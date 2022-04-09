import { createRouter, createWebHistory } from 'vue-router'
//User views
import Catalog from '@/views/Catalog.vue'
import Auth from "@/views/Auth.vue";
import About from "@/views/About";
import FindUs from "@/views/FindUs";
import Product from "@/views/Product";
import Cart from "@/views/Cart";
import Orders from "@/views/Orders";
//Admin views
import AdminOrders from "@/views/AdminOrders";
import AdminProducts from "@/views/AdminProducts";
import AdminCategories from "@/views/AdminCategories";

export default createRouter({
  history: createWebHistory(),
  routes:[
    {path: '/', component: About},
    {path: '/catalog', component: Catalog},
    {path: '/auth/:type', component: Auth},
    {path: '/findus', component: FindUs},
    {path: '/product', component: Product},
    {path: '/cart', component: Cart},
    {path: '/orders', component: Orders},
    {path: '/admin', component: AdminOrders},
    {path: '/admin/orders', component: AdminOrders},
    {path: '/admin/products', component: AdminProducts},
    {path: '/admin/categories', component: AdminCategories},
  ]
})

// const routes = [
//   {
//     path: '/',
//     name: 'catalog',
//     component: Catalog
//   },
//   // {
//   //   path: '/about',
//   //   name: 'about',
//   //   // route level code-splitting
//   //   // this generates a separate chunk (about.[hash].js) for this route
//   //   // which is lazy-loaded when the route is visited.
//   //   component: () => import(/* webpackChunkName: "about" */ '../views/AboutView.vue')
//   // }
// ]
//
// const router = createRouter({
//   history: createWebHistory(process.env.BASE_URL),
//   routes
// })
//
// export default router