import store from '@/store'
export default {
  methods: {
    // 检查权限
    // key要检查的点
    checkPermission(key) {
      const { userInfo } = store.state.user
      if (userInfo.roles && userInfo.roles.point) {
        return userInfo.roles.point.some(item => item === key)
      }
      return false
    }
  }
}
