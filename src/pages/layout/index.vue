<template>
  <div>
    <router-view></router-view>
  </div>
</template>
<script>
export default {
  name: "layout",
  components: {
  },
  data () {
    return {
      mode: 'back',
      closePage: ['login']
    }
  },
  updated () {
    // 监听路由变化
    let url = this.$router.history.current.path
    if (this.closePage.some(item => url.includes(item))) {
      this.mode = 'close'
    } else {
      this.mode = 'back'
    }
  }
}
</script>
<style lang="scss" scoped>
</style>