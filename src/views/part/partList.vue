<template>
  <div class="bord-content">
    <!-- 弹窗 -->
    <el-dialog title="新建模块" :visible.sync="new_modal" width="500px" class="dialog1">
      <el-form :model="form" class="f1">
        <el-form-item label="模块名称" label-width="100px">
          <el-input v-model="form.name" autocomplete="off" placeholder="例如：h5短文星球"></el-input>
        </el-form-item>
        <el-form-item label="模块描述" label-width="100px">
          <el-input v-model="form.dis" autocomplete="off" placeholder="例如：h5短文星球，首页入口在哪，主要用于H5做题"></el-input>
        </el-form-item>
        <el-form-item label="模块基地址" label-width="100px">
          <el-input v-model="form.url" autocomplete="off" placeholder="例如：www.koalareading.com/sss"></el-input>
        </el-form-item>
        <el-form-item label="负责人" label-width="100px">
          <el-input v-model="form.who" autocomplete="off" placeholder="例如：曹鹏翔"></el-input>
        </el-form-item>
      </el-form>
      <div slot="footer" class="dialog-footer">
        <el-button @click="new_modal = false">取 消</el-button>
        <el-button type="danger" @click="addPart()">确 定</el-button>
      </div>
    </el-dialog>
    <!-- 弹窗结束 -->
    <div class="new">
      <el-button
        type="primary"
        round
        icon="el-icon-circle-plus"
        class="btn_new"
        @click="new_modal = true"
      >新建H5监控模块</el-button>
    </div>
    <div class="card">
      <template v-for="item in list">
      <el-card class="box-card" :key="item.pid" shadow="hover">
        <div slot="header" class="clearfix">
          <span>{{item.name}}</span>
          <el-button style="float: right; padding: 5px 10px" type="danger" round icon="el-icon-delete" @click="delModal(item.id, item.name)">删除</el-button>
        </div>
        <div class="text item clearfix">
          <div class="lab">ID</div><div class="lab_t">{{item.pid}}</div>
        </div>
        <div class="text item clearfix">
          <div class="lab">描述</div><div class="lab_t">{{item.dis}}</div>
        </div>
        <div class="text item clearfix">
          <div class="lab">网址</div><div class="lab_t">{{item.url}}</div>
        </div>
        <div class="text item clearfix">
          <div class="lab">负责人</div><div class="lab_t">{{item.who}}</div>
        </div>
      </el-card>
      </template>
    </div>
  </div>
</template>

<script>
import api from '@/api/part'
export default {
  name: 'home',
  data () {
    return {
      new_modal: false,
      form: {
        name: null,
        dis: null,
        url: null,
        who: null
      },
      list: [],
      onDel: false
    }
  },
  mounted () {},
  created () {
    this.PartList()
  },
  methods: {
    delModal (id, name) {
      this.onDel = id
      this.$confirm(`确认删除: ${name}？`)
        .then(_ => {
          this.del(id)
        })
        .catch(_ => {})
    },
    addPart () {
      api.addPart(this.form)
        .then(res => {
          console.log(res)
          if (res.data.code === 200) {
            this.$alert(`模块创建成功，id为：${res.data.data}`, '创建成功', {
              confirmButtonText: '确定',
              callback: action => {
                this.new_modal = false
                this.PartList()
              }
            })
          } else {
            this.$notify.error({
              title: '失败',
              message: res.data.message
            })
          }
        })
    },
    PartList () {
      api.partList()
        .then(res => {
          console.log(res.data.data)
          this.list = res.data.data
        })
        .catch(err => {
          this.$notify.error({
            title: '失败',
            message: err
          })
        })
    },
    del (id) {
      api.delPart(id)
        .then(res => {
          if (res.data.code === 200) {
            this.$message({
              message: '删除成功',
              type: 'success'
            })
            this.PartList()
            this.onDel = false
          } else {
            this.$message({
              message: '删除失败',
              type: 'error'
            })
          }
        })
    }
  }
}
</script>

<style scoped>
.lab_t{
  float: left;
  width: 425px;
  line-height: 30px;
  font-size: 16px;
  font-weight: bold;
  padding-left: 20px;
}
.lab{
  float: left;
  width: 60px;
  line-height: 30px;
  font-weight: bold;
  text-align: center;
  height: 30px;
  color: #fff;
  background-color: #C0C4CC;
  border-radius: 15px;
}
.text {
  font-size: 15px;
}

.item {
  margin-bottom: 10px;
}

.clearfix:before,
.clearfix:after {
  display: table;
  content: "";
}
.clearfix:after {
  clear: both
}
.card{
  width: 100%;
  margin-top: 30px;
  padding: 30px;
}
.box-card{
  cursor: pointer;
  width: 550px;
  text-align: left;
  float: left;
  margin-right: 20px;
  margin-bottom: 20px;
}
.new {
  width: 100%;
  padding: 30px;
}
.btn_new {
  float: left;
}
.f1{
  padding-right: 30px;
}
</style>
