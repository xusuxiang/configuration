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
      menu:{
        bottom:[],
        center:[],
        logo:{}
      }
    }
  },
  methods: {
    submitData(){
      this.menu.bottom = this.bottomInfoList
      this.menu.center = this.centerInfoList
      this.menu.logo = this.LogoInfoList
      let obj={"menu.home":this.menu}
      console.log(obj);
      this.$http.post('/config/msgset',JSON.stringify(obj).replace(/_/g,"-"),{headers:{'Content-Type': 'application/json'}}).then(res => {
        this.$Message.success(res.data.msg);
      }).catch(err => {
        console.log(err)
      })
    },
  },
  computed:{
    bottomInfoList(){
      return this.$store.state.bottomConfig
    },
    centerInfoList(){
      return this.$store.state.centerConfig
    },
    LogoInfoList(){
      return this.$store.state.logoConfig
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