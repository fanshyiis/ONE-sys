<template>
  <div class="content">
    <div class="nav">
        <div class="nav_content">
            <img class="redlogo" src="../../assets/Home/red.png" alt="">
            <div class="mu">
                <div class="ln">{{userInfo && userInfo.name}}</div>
                <div class="ln ls"  @click="logout()"><i class="el-icon-circle-close-outline" style="padding-right:5px"></i>退出系统</div>
            </div>
        </div>
    </div>
    <el-menu
      :default-active="path"
      class="el-menu-vertical-demo"
      :active-text-color="'#409EFF'"
      :router="true"
      :collapse="isCollapse">
      <el-menu-item index="/partList">
        <i class="el-icon-news"></i>
        <span slot="title">管理条目3</span>
      </el-menu-item>
    </el-menu>
    <div  class="rw">
      <router-view></router-view>
    </div>
    <div class="copyright">@考拉阅读前端团队出品</div>
  </div>
</template>

<script>
import api from '@/api/part'
export default {
  name: 'home',
  data () {
    return {
      userInfo: null,
      isCollapse: false,
      path: '/' + this.$route.name
    }
  },
  created () {
    // window.onload = () => {
    //   this.$nextTick(() => {
    //     this.add()
    //   })
    // }
  },
  mounted () {
    api.current()
      .then(res => {
        if (res.data.code !== 200) {
          this.$router.push('/')
        } else {
          this.userInfo = res.data.data
        }
      })
    console.log(this.$route.name)
  },
  methods: {
    logout () {
      this.$router.push('/')
    }
  }
}
</script>

<style scoped>
.content{
    height: 100%;
    overflow-x: hidden;
}
.el-menu-vertical-demo{
    position: fixed;
    float: left;
    padding-top: 30px;
    width: 200px;
    height: 100%;
    margin-top: 81px;
}
.rw{
    /* float: left; */
    /* width: 1200px; */
    /* height: 100%; */
    padding-left: 200px;
    margin: 81px auto;
}
.nav{
    z-index: 99;
    position: fixed;
    background: #fff;
    width: 100%;
    height: 80px;
    border-bottom: 1px solid #e6e6e6;
}
.nav_content{
    /* width: 1200px; */
    margin: auto;
}
.redlogo{
    width: 260px;
    float: left;
    margin-top: 14px;
    margin-left: 30px;
}
.mu{
   height: 40px;
   line-height: 40px;
   margin-top: 20px;
   float: right;
   margin-right: 30px;
}
.ln{
    cursor: pointer;
    font-size: 18px;
    height: 40px;
    font-weight: bold;
    color: #999;
    float: left;
    /* width: 100px; */
    padding: 0 20px;
}
.ln:hover{
    color: #e59b98
}
.ls{
    margin-left: 20px;
    border-left: 2px solid #ccc;
}
.copyright{
    position: fixed;
    right: 20px;
    bottom: 20px;
    font-size: 16px;
    font-weight: blod;
    color: #ccc;
}
</style>
