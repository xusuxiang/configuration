<template>
  <div class="loginConfigShow">
      <br>
      <span style="margin-left:1%;">点击按钮显示数据:</span>
      <Button type="info" v-for="(item,index) in loginInfoList" @click="changeView(index)" :key="index">{{index+1}}</Button>
      <Divider />
      <div>
        <Form :model="login" :label-width="200" class="formClass" inline>
          <FormItem label="tag">
            <Input v-model="login.tag" placeholder=""/>
          </FormItem>
          <FormItem label="title">
            <Input v-model="login.title" placeholder=""/>
          </FormItem>
          <FormItem label="icon">
            <Input v-model="login.icon" placeholder=""/>
          </FormItem>
          <FormItem label="flex">
            <Input v-model="login.flex" placeholder="" number/>
          </FormItem>
          <FormItem label="background">
            <Input v-model="login.background" placeholder=""/>
          </FormItem>
          <FormItem label="color">
            <Input v-model="login.color" placeholder=""/>
          </FormItem>
          <FormItem label="next">
            <Input v-model="login.next" placeholder=""/>
          </FormItem>
          <FormItem label="login">
              <i-switch v-model="login.switch.login" size="large">
                  <span slot="open">true</span>
                  <span slot="close">false</span>
              </i-switch>
          </FormItem>
          <FormItem label="selection">
              <i-switch v-model="login.switch.selection" size="large">
                  <span slot="open">true</span>
                  <span slot="close">false</span>
              </i-switch>
          </FormItem>
          <FormItem label="print">
              <i-switch v-model="login.switch.print" size="large">
                  <span slot="open">true</span>
                  <span slot="close">false</span>
              </i-switch>
          </FormItem>
          <FormItem label="checkCover">
              <i-switch v-model="login.switch.checkCover" size="large">
                  <span slot="open">true</span>
                  <span slot="close">false</span>
              </i-switch>
          </FormItem>
          <FormItem label="trail">
              <i-switch v-model="login.switch.trail" size="large">
                  <span slot="open">true</span>
                  <span slot="close">false</span>
              </i-switch>
          </FormItem>
          <FormItem label="trailEditable">
              <i-switch v-model="login.switch.trailEditable" size="large">
                  <span slot="open">true</span>
                  <span slot="close">false</span>
              </i-switch>
          </FormItem>
          <FormItem label="additional">
              <i-switch v-model="login.switch.additional" size="large">
                  <span slot="open">true</span>
                  <span slot="close">false</span>
              </i-switch>
          </FormItem>
          <FormItem label="singleTrial">
              <i-switch v-model="login.switch.singleTrial" size="large">
                  <span slot="open">true</span>
                  <span slot="close">false</span>
              </i-switch>
          </FormItem>
          <FormItem label="multiScanl">
              <i-switch v-model="login.switch.multiScanl" size="large">
                  <span slot="open">true</span>
                  <span slot="close">false</span>
              </i-switch>
          </FormItem>
          <FormItem label="onlyScan">
              <i-switch v-model="login.switch.onlyScan" size="large">
                  <span slot="open">true</span>
                  <span slot="close">false</span>
              </i-switch>
          </FormItem>
          <FormItem label="exchangeBox">
              <i-switch v-model="login.switch.exchangeBox" size="large">
                  <span slot="open">true</span>
                  <span slot="close">false</span>
              </i-switch>
          </FormItem>
            <FormItem label="archiveBox">
              <i-switch v-model="login.switch.archiveBox" size="large">
                  <span slot="open">true</span>
                  <span slot="close">false</span>
              </i-switch>
          </FormItem>
           <FormItem label="boxCodeEditable" prop="switch.boxCodeEditable">
             <i-switch v-model="login.switch.boxCodeEditable" size="large">
                <span slot="open">true</span>
                <span slot="close">false</span>
             </i-switch>
          </FormItem>
          <FormItem label="fontSize">
            <Input v-model="login.fontSize" placeholder="" number/>
          </FormItem>
          <FormItem label="imgSize">
            <Input v-model="login.imgSize" placeholder=""/>
          </FormItem>
          <FormItem label="ignoreLockState">
              <i-switch v-model="login.ignoreLockState" size="large">
                  <span slot="open">true</span>
                  <span slot="close">false</span>
              </i-switch>
          </FormItem>
          <FormItem label="ignoreBroken">
              <i-switch v-model="login.ignoreBroken" size="large">
                  <span slot="open">true</span>
                  <span slot="close">false</span>
              </i-switch>
          </FormItem>
          <FormItem label="checkRemaining">
              <i-switch v-model="login.checkRemaining" size="large">
                  <span slot="open">true</span>
                  <span slot="close">false</span>
              </i-switch>
          </FormItem>
        </Form>
        <Button type="success" @click="updateData()" style="margin-left:40%;">保存</Button>
      </div>
  </div>
</template>

<script>
export default {
  name: 'LoginConfigShow',
  components:{},
  data() {
    return {
      login: {
            tag:'',
            title:'',
            icon:'',
            flex:'',
            background:'',
            color:'',
            next:'',
            switch:{
                login: false,
                selection: false,
                print: false,
                checkCover: false,
                trail: false,
                trailEditable: false,
                additional: false,
                singleTrial: false,
                multiScanl: false,
                onlyScan: false,
                exchangeBox: false,
                archiveBox: false,
                boxCodeEditable: false
            },
            fontSize: '',
            imgSize: [
              
            ],
            ignoreLockState: false,
            ignoreBroken: false,
            checkRemaining: false
        },
        loginInfoList:[],//用来暂时数据的
        menu:[],//空数组存放对象的
    }
  },
  created() {
    this.getLoginDate();
  },
  methods: {
    //调用接口获取数据
    getLoginDate(){
      let type='menu.login';
      let formData = new FormData();
      formData.append("type", type);
      this.$http.post('/config/msgget',formData,{headers:{'Content-Type': 'application/x-www-form-urlencoded'}}).then(res =>{
        this.loginInfoList = res.data.data
      }).catch(err => {
        console.log(err)
      })
    },
    //显示数据
    changeView(index){
        this.login=this.loginInfoList[index]
        
    },
    //修改数据--调用接口
    updateData(){
      // this.$store.commit('addConfig',this.login[index])
      this.menu = this.loginInfoList
      console.log(this.menu);
      let obj={"menu.login":this.menu}//把数组赋值给对象，以这样的形式：{menu.login: []}
      this.$http.post('/config/msgset',JSON.stringify(obj),{headers:{'Content-Type': 'application/json'}}).then(res =>{
       console.log(res.data.msg)
      this.$Message.success(res.data.msg);
      }).catch(err => {
       console.log(err)
      this.$Message.error(res.data.msg+'提交失败');
      })
    }
  },
  computed:{
    //   loginInfoList(){
    //       return this.$store.state.globalConfig
    //   }
  }
}
</script>

<style scoped>

</style>