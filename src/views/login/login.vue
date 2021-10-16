<template>
  <div class="login">
    <div class="title">欢迎使用惠用车</div>
    <div class="mobile">
      <van-row type="flex">
        <van-col span="4" tag="span">+86</van-col>
        <van-col span="18">
          <input type="number"
                 class="mobile-input"
                 v-model="phone"
                 oninput="if(value.length>11)value=value.slice(0,11)"
                 placeholder="请输入手机号码">
        </van-col>
        <van-col span="2" class="close" @click.native="clear" v-show="phone">
          <img src="../../assets/image/common/delete.png" alt="">
        </van-col>
      </van-row>
      <div class="van-hairline--bottom"></div>
    </div>
    <div class="code">
      <van-row type="flex">
        <van-col span="4" tag="span">验证码</van-col>
        <van-col span="14">
          <input type="number"
                 class="code-input"
                 v-model="code"
                 oninput="if(value.length>10)value=value.slice(0,10)"
                 placeholder="请输入验证码">
        </van-col>
        <van-col span="6" class="getCode" @click.native="getCode">{{codeText}}</van-col>
      </van-row>
      <div class="van-hairline--bottom"></div>
    </div>
    <div class="login-button">
      <van-button type="default" size="large" @click="loginHandle">登录</van-button>
    </div>
  </div>
</template>

<script>
import { validatePhone, validateCode } from '@/utils/validate.js'
import { Row, Col, Button, Toast } from 'vant'
export default {
  name: 'login',
  components: {
    [Row.name]: Row,
    [Col.name]: Col,
    [Button.name]: Button,
    [Toast.name]: Toast
  },
  data () {
    return {
      timer: '',
      phone: '', // 手机号
      code: '',
      sendted: false // 是否已发送
    }
  },
  computed: {
    codeText () {
      return this.sendted ? this.sendted : '获取验证码'
    }
  },

  methods: {
    validate (str) {
      switch (str) {
        case 'getCode':
          if (this.sendted) return false
          if (!this.phone) {
            Toast({
              message: '请输入手机号码',
              position: 'bottom'
            })
            return false
          } else if (!validatePhone(this.phone)) {
            Toast({
              message: '手机号码格式错误',
              position: 'bottom'
            })
            return false
          }
          return true
        case 'login':
          if (!this.phone) {
            Toast({
              message: '请输入手机号码',
              position: 'bottom'
            })
            return false
          } else if (!validatePhone(this.phone)) {
            Toast({
              message: '手机号码格式错误',
              position: 'bottom'
            })
            return false
          } else if (!this.code) {
            Toast({
              message: '请输入验证码',
              position: 'bottom'
            })
            return false
          } else if (!validateCode(this.code)) {
            Toast({
              message: '验证码格式错误',
              position: 'bottom'
            })
            return false
          }
          return true
      }
    },

    clear () {
      this.phone = ''
    },

    async loginHandle () {
      if (!this.validate('login')) return false
      // this.$router.push('/home')
      let params = {
        mobile: this.phone,
        ver_code: this.code
      }
      // 登录
      this.$store.dispatch('login', params).then(async res => {
        if (res.code === 'login_success') {
          this.$router.replace('/home')
        } else if (res.code === 'user_not_find') {
          Toast({
            message: '您不是受邀用户',
            position: 'bottom'
          })
        } else {
          Toast({
            message: '验证码错误',
            position: 'bottom'
          })
        }
      })
    },

    // 获取验证码倒计时
    countdownHandle () {
      let num = 60
      this.sendted = `${num}s`
      clearInterval(this.timer)
      this.timer = setInterval(() => {
        this.sendted = `${--num}s`
        if (num === 0) {
          this.sendted = false
          clearInterval(this.timer)
        }
      }, 1000)
    },

    // 获取验证码
    getCode () {
      if (!this.validate('getCode')) return false
      let params = {
        mobile: Number(this.phone)
      }
      this.$api.getCode(params).then(res => {
        console.log(res)
        if (res.data.cd) {
          Toast({
            message: `请在${res.data.cd}秒后重试`,
            position: 'bottom'
          })
          return
        }
        if (res.data.sendted) {
          Toast({
            message: '已发送验证码',
            position: 'bottom'
          })
          this.countdownHandle()
          this.code = res.data.code
        } else {
          Toast({
            message: '发送验证码失败',
            position: 'bottom'
          })
        }
      })
    },

    beforeDestroy () {
      clearInterval(this.timer)
    }
  }
}
</script>

<style scoped lang="less">
.login{
  height: 100%;
  background-color: #FFF;
  .title{
    font-size:26px;
    margin: 49px auto 45px auto;
    color: #333;
  }
  .mobile, .code{
    .wh-l(320px, 36px);
    margin: 11px auto 0 auto;
  }
  .mobile{
    span{
      font-size:18px;
      color:rgba(102,102,102,1);
      text-align: left;
      position: relative;
      &::after{
        content: '';
        display: block;
        .wh(1px, 18px);
        background:rgba(153,153,153,1);
        position: absolute;
        top: 50%;
        right: 0;
        margin-top: -9px;
      }
    }
    .mobile-input{
      padding-left: 20px;
      .wh(100%, 100%);
      display: block;
      font-size:16px;
      .placeholder({
        font-size: 14px;
      });
    }
    .close{
      text-align: center;
      position: relative;
      img{
        height: 16px;
        .f-center;
      }
    }
  }
  .code{
    span{
      font-size:16px;
      color: #666;
      text-align: left;
    }
    .code-input{
      padding-left: 20px;
      .wh(100%, 100%);
      display: block;
      font-size:16px;
      .placeholder({
        font-size: 14px;
      });
    }
    .getCode{
      font-size:14px;
      color:rgba(255,115,36,1);
      text-align: right;
    }
    .noGetCode{
      color: #C7C7CC;
    }
  }
  .login-button{
    .wh(320px, 48px);
    margin: 31px auto 0 auto;
  }
}
</style>
