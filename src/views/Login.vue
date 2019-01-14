<template>
  <div class="home">
    <div class="login_content">
       <div class="login">
         <div class="input_out top">
           <input class="input" v-model="account" type="text" placeholder="邮箱"/>
         </div>
         <div class="input_out">
           <input class="input" v-model="password" type="password" placeholder="密码"/>
         </div>
         <el-button v-if="!signUp" class="btn-login" type="primary" plain @click="login">登录</el-button>
         <el-button v-else class="btn-login" type="primary" plain @click="signUpAccount">注册</el-button>
         <div class="i-c">
         <el-checkbox v-if="!signUp" class="checkbox" v-model="checked"><span style="color:#999;font-size:17px">记住我</span></el-checkbox>
         <div class="signUp" @click="signUp = !signUp">{{signUp? '账号登录' : '注册账号'}}</div>
         </div>
         <img class="flower" src="../assets/Home/flower.png" alt="">
       </div>
    </div>
    <img class="shine" src="../assets/Home/shine.png" alt="">
    <img class="cloud1" src="../assets/Home/cloud1.png" alt="">
    <img class="hill1" src="../assets/Home/hill1.png" alt="">
    <img class="cloud2" src="../assets/Home/cloud2.png" alt="">
    <img class="hill2" src="../assets/Home/hill2.png" alt="">
    <img class="cloud3" src="../assets/Home/cloud3.png" alt="">
    <img class="hill3" src="../assets/Home/hill3.png" alt="">
    <img class="cloud4" src="../assets/Home/cloud4.png" alt="">
  </div>
</template>

<script>
import api from '@/api/login'
export default {
  name: 'home',
  data () {
    return {
      signUp: false,
      loginContent: false,
      checked: false,
      account: null,
      password: null
    }
  },
  methods: {
    loginRedAlert () {
      this.loginContent = true
    },
    signUpAccount () {
      if (!this.account || !this.password) {
        this.$notify.error({
          title: '错误',
          message: '请输入账号或密码'
        })
        return false
      }
      api.signUp(this.account, this.password)
        .then(res => {
          console.log(res)
          if (res.data.code === 200) {
            this.$notify.success({
              title: '成功',
              message: '注册成功'
            })
            setTimeout(() => {
              this.signUp = false
            }, 500)
          } else {
            this.$notify.error({
              title: '失败',
              message: res.data.message
            })
          }
        })
    },
    login () {
      if (!this.account || !this.password) {
        this.$notify.error({
          title: '错误',
          message: '请输入账号或密码'
        })
        return false
      }
      if (this.checked) {
        let a = {
          account: this.account,
          password: this.password
        }
        window.localStorage.account = JSON.stringify(a)
      } else {
        window.localStorage.account = null
      }
      api.login(this.account, this.password)
        .then(res => {
          console.log(res)
          if (res.data.code === 200) {
            this.$notify.success({
              title: '成功',
              message: '登录成功'
            })
            setTimeout(() => {
              this.$router.push('/content')
            }, 500)
          } else {
            this.$notify.error({
              title: '失败',
              message: res.data.message
            })
          }
        })
    }
  },
  mounted () {
    if (window.localStorage.account && window.localStorage.account !== 'null') {
      let a = JSON.parse(window.localStorage.account)
      this.account = a.account
      this.password = a.password
      this.checked = true
    }
  },
  created () {}
}
</script>

<style scoped>
   .i-c{
     width: 300px;
     margin: 15px auto;
   }
   .checkbox{
     width: 200px;
     float: left;
     text-align: left;
     font-size: 16px;
   }
   .signUp{
     cursor: pointer;
     width: 100px;
     float: right;
     text-align: right;
     font-size: 16px;
     color: #666;
   }
   .btn-login{
     width: 300px;
     height: 60px;
     margin-top: 30px;
     font-size: 18px;
   }
   .top{
     margin-top: 40px;
   }
   .input_out{
     margin-left: 50px;
     width: 300px;
     height: 62px;
     border-bottom: 1px solid #ccc;
     margin-bottom: 10px;
   }
   .input{
     padding:0 10px;
     font-size: 18px;
     color: #666;
     width: 300px;
     height: 60px;
     line-height: 60px;
     border: none;
     outline:none;
   }
   .close{
     cursor: pointer;
     width: 30px;
     position: absolute;
     top: 10px;
     right: 10px;
   }
   .flower{
     width: 60px;
     position: absolute;
     bottom: 0px;
     right: 40px;
   }
   .red-alert{
     width: 300px;
     position: absolute;
     top: 60px;
     right: 50px;
   }
   .login{
     position: absolute;
     left: 50%;
     margin-left: -200px;
     top: 50%;
     margin-top: -300px;
     width: 400px;
     height: 380px;
     background: #fff;
     border: 1px solid #ebeef5;
     transition: .3s;
     box-shadow: 0 2px 12px 0 rgba(0,0,0,.1);
     border-radius: 4px;
   }
   .login_content{
     width: 100%;
     height: 100%;
     position: fixed;
     /* background-color: rgba(255,255,255,.8); */
     z-index: 999;
   }
   .home{
     width: 100%;
     height: 100%;
     background: url(../assets/Home/bg.png);
     background-size: 100% 100%;
     position: relative;
     overflow: hidden;
   }
   .logo-fe{
     width: 120px;
   }
   .logo-fe2{
     width: 250px;
     position: absolute;
     top: 160px;
     left: 50%;
     margin-left: -125px;
   }
   .logo{
     position: absolute;
     left: 30px;
     top: 40px;
   }
   .cloud1{
     width: 130%;
     position: absolute;
     bottom: 0px;
     left: 0px;
     animation: cloud1 30s;
     animation-iteration-count: infinite;
     animation-timing-function: linear;
   }
   .cloud2{
     width: 130%;
     position: absolute;
     bottom: 30px;
     left: 0px;
     animation: cloud1 25s;
     animation-iteration-count: infinite;
     animation-timing-function: linear;
   }
   .cloud3{
     width: 130%;
     position: absolute;
     bottom: 20px;
     left: 0px;
     animation: cloud1 40s;
     animation-iteration-count: infinite;
     animation-timing-function: linear;
   }
   .cloud4{
     width: 130%;
     position: absolute;
     bottom: 10px;
     left: 0px;
     animation: cloud1 20s;
     animation-iteration-count: infinite;
     animation-timing-function: linear;
   }
   .hill1{
     /* width: 130%; */
     position: absolute;
     bottom: 0px;
     left: 0px;
   }
   .hill2{
     /* width: 130%; */
     position: absolute;
     bottom: 0px;
     right:0px;
   }
   .hill3{
     /* width: 130%; */
     position: absolute;
     bottom: 0px;
     left: 50%;
     margin-left: -400px;
   }
   .shine{
     width: 160px;
     position: absolute;
     bottom: 100px;
     left: 100px;
   }
   @keyframes cloud1
  {
      0%   {transform: translate(0%, 0px)}
      50%  {transform: translate(-20%, 50px)}
      100% {transform: translate(0%, 0px)}
  }
  .nav{
    text-align: center;
    width: 520px;
    height: 40px;
    line-height: 40px;
    position: absolute;
    right: 20px;
    top: 40px;
    font-size: 20px;
    color: #fff;
  }
  .nav .btn{
    width: 120px;
    height: 40px;
    font-weight: bold;
    float: left;
    cursor: pointer;
    transition: .3s ease-in-out;
  }
  .nav .btn:hover{
    background-color: rgba(255,255,255,.7);
    border-radius: 4px;
    transition: .3s ease-in-out;
    color: #3f97f2;
  }
</style>
