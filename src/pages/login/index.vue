<template>
  <div>
    <div class="content">
      <img class="logo" src="@/assets/images/logo.png" alt />
      <div class="form-item mt65">
        <img class="mail" src="@/assets/images/mail.png" alt />
        <input v-model="userName" type="text" />
      </div>
      <div class="form-item mt30">
        <img class="lock" src="@/assets/images/lock.png" alt />
        <input v-model="password" class="input-pwd" :type="pwdType" />
        <img @click="togglePassword" class="eye" src="@/assets/images/eye.png" alt />
      </div>
      <h4 class="tip">忘记密码请联系管理员</h4>
      <div @click="login" class="login-btn mt90">登入</div>
      <h4 class="mail-btn">
        管理员邮箱：
        <span>admin@homepluslink.com</span>
      </h4>
    </div>
  </div>
</template>
<script>
import { mapGetters } from 'vuex'
export default {
  name: "login",
  data () {
    return {
      userName: '',
      password: '',
      pwdType: 'password'
    }
  },
  methods: {
    togglePassword () {
      let value = this.password
      if (this.pwdType === 'password') {
        this.pwdType = 'txt'
      } else {
        this.pwdType = 'password'
      }
      this.password = value
    },
    // 登陆
    async login () {
      // 验证
      if (!this.userName || !this.password) {
        this.$notify({
          type: 'warning',
          message: '请输入完整的用户名和密码',
          duration: 2000
        })
        return
      }
      await this.$store.dispatch('user/login', {
        passWord: window.btoa(this.password),
        userName: this.userName
      })
      this.$router.replace('/home/customer')
    }
  },
  mounted () {
  }
}
</script>
<style lang="scss" scoped>
.content {
  padding: px2rem(66) px2rem(30) 0 px2rem(30);
  text-align: center;
  .logo {
    width: px2rem(111);
    height: px2rem(140);
  }
  .form-item {
    position: relative;
    .mail {
      width: px2rem(31);
      top: px2rem(34);
      left: px2rem(40);
      position: absolute;
      height: px2rem(23);
    }
    .lock {
      position: absolute;
      top: px2rem(28);
      left: px2rem(40);
      width: px2rem(31);
      height: px2rem(35);
    }
    .eye {
      position: absolute;
      top: px2rem(36);
      right: px2rem(37);
      width: px2rem(35);
      height: px2rem(15);
    }
    input {
      display: block;
      box-sizing: border-box;
      text-align: center;
      font-size: font(32);
      border-radius: px2rem(45);
      padding: 0 px2rem(120);
      height: px2rem(90);
      color: #333333;
      font-weight: bold;
    }
    .input-pwd {
      &::placeholder {
        color: #999999;
      }

      font-weight: 500;
    }
  }
  .tip {
    font-size: font(30);
    color: #5c6899;
    font-weight: 500;
    margin-top: px2rem(28);
    text-align: right;
  }
  .login-btn {
    @include common-btn(
      680,
      100,
      linear-gradient(-90deg, rgba(83, 75, 222, 1), rgba(122, 115, 250, 1)),
      52
    );
    font-size: font(40);
    font-weight: bold;
  }
  .regist-btn {
    font-size: font(30);
    font-weight: 500;
    color: #5c6899;
  }
  .mail-btn {
    position: fixed;
    width: 100%;
    left: 0;
    bottom: px2rem(60);
    font-size: font(28);
    font-weight: 400;
    color: #666666;
    text-align: center;
    span {
      color: #5c6899;
    }
  }
}
</style>