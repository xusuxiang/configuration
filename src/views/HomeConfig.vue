<template>
  <div class="allClass">
    <span style="margin-top:10%;margin-left:10px;">选择你想配置的功能：</span>
    <router-link to="/bottom"><Button type="primary">bottom</Button></router-link>
    &nbsp;&nbsp;
    <router-link to="/center"><Button type="primary">center</Button></router-link>
    &nbsp;&nbsp;
    <router-link to="/logo"><Button type="primary">logo</Button></router-link>
    <br/>
    <Button style="margin-top:5%;margin-left:260px;" type="success" @click="submitData">提交</Button>
  </div>
</template>

<script>
export default {
  name:'HomeConfig',
  components:{},
  data() {
    return {
      infoDate:[]
    }
  },
  methods: {
    submitData(){
      //测试
      this.infoDate = this.bottomInfoList
      console.log(this.infoDate)
      // let obj={"menu.home":this.menu}//把数组赋值给对象，以这样的形式：{menu.login: []}
      // this.$http.post('/config/msgset',JSON.stringify(obj),{headers:{'Content-Type': 'application/json'}}).then(res =>{
      //   console.log(res.data.msg)
      // this.$Message.success(res.data.msg);
      // }).catch(err => {
      //   console.log(err)
      // this.$Message.error(res.data.msg+'提交失败');
      // })
    },
  },
  computed:{
    bottomInfoList(){
      return this.$store.state.globalConfig
    }
  }
}
</script>

<style scoped>
  .allClass{
    margin-top: 5%;
    margin-left: 10%;
  }
</style>