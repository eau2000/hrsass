// 处理权限路由的模块
import { constantRoutes, asyncRoutes } from '@/router'
// 先引入静态路由
// 引入所有动态路由

const state = {
  routes: constantRoutes // 当前用户拥有的路由数组
}
const mutations = {
  // 定义修改route的mutation
  setRoutes(state, newRoutes) {
    // 在静态路由的基础上加动态权限路由
    state.routes = [...constantRoutes, ...newRoutes]
  }
}
const actions = {
  // 筛选权限路由
  // 第二个参数为当前用户拥有的菜单权限
  filterRoutes(context, menus) {
    const routes = []
    menus.forEach(item => {
      routes.push(...asyncRoutes.filter(key => key.name === item))
    }) // routes里面得到了所有有权限的路由
    context.commit('setRoutes', routes)
    // 将动态路由交给state
    return routes
    // 因为return是路由addRoutes用的，交给state是显示左侧菜单用的
  }
}
export default {
  namespaced: true,
  state,
  mutations,
  actions
}
