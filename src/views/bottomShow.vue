<template>
  <div class="bottomShow">
    <br>
    <span style="margin-left:1%;">点击按钮显示数据:</span>
    <Button type="info" v-for="(item,index) in bottomInfoList" @click="changeView(index)" :key="index">{{index+1}}</Button>
    <Divider />
    <Form :model="bottom" :label-width="200" class="formClass"  inline>
      <FormItem label="tag">
         <Input v-model="bottom.tag" placeholder=""/>
      </FormItem>
      <FormItem label="icon">
         <Input v-model="bottom.icon" placeholder=""/>
      </FormItem>
      <FormItem label="background">
         <Input v-model="bottom.background" placeholder=""/>
      </FormItem>
      <FormItem label="color">
         <Input v-model="bottom.color" placeholder=""/>
      </FormItem>
      <FormItem label="next">
         <Input v-model="bottom.next" placeholder=""/>
      </FormItem>
      <FormItem label="type">
         <Input v-model="bottom.query.type" placeholder=""/>
      </FormItem>
      <FormItem label="login">
          <i-switch v-model="bottom.switch.login" size="large">
              <span slot="open">true</span>
              <span slot="close">false</span>
          </i-switch>
      </FormItem>
      <FormItem label="selection">
          <i-switch v-model="bottom.switch.selection" size="large">
              <span slot="open">true</span>
              <span slot="close">false</span>
          </i-switch>
      </FormItem>
      <FormItem label="print">
          <i-switch v-model="bottom.switch.print" size="large">
              <span slot="open">true</span>
              <span slot="close">false</span>
          </i-switch>
      </FormItem>
      <FormItem label="checkCover">
          <i-switch v-model="bottom.switch.checkCover" size="large">
              <span slot="open">true</span>
              <span slot="close">false</span>
          </i-switch>
      </FormItem>
      <FormItem label="trail">
          <i-switch v-model="bottom.switch.trail" size="large">
              <span slot="open">true</span>
              <span slot="close">false</span>
          </i-switch>
      </FormItem>
      <FormItem label="trailEditable">
          <i-switch v-model="bottom.switch.trailEditable" size="large">
              <span slot="open">true</span>
              <span slot="close">false</span>
          </i-switch>
      </FormItem>
      <FormItem label="additional">
          <i-switch v-model="bottom.switch.additional" size="large">
              <span slot="open">true</span>
              <span slot="close">false</span>
          </i-switch>
      </FormItem>
      <FormItem label="singleTrial">
          <i-switch v-model="bottom.switch.singleTrial" size="large">
              <span slot="open">true</span>
              <span slot="close">false</span>
          </i-switch>
      </FormItem>
      <FormItem label="multiScanl">
          <i-switch v-model="bottom.switch.multiScanl" size="large">
              <span slot="open">true</span>
              <span slot="close">false</span>
          </i-switch>
      </FormItem>
      <FormItem label="onlyScan">
          <i-switch v-model="bottom.switch.onlyScan" size="large">
              <span slot="open">true</span>
              <span slot="close">false</span>
          </i-switch>
      </FormItem>
      <FormItem label="exchangeBox">
          <i-switch v-model="bottom.switch.exchangeBox" size="large">
              <span slot="open">true</span>
              <span slot="close">false</span>
          </i-switch>
      </FormItem>
        <FormItem label="archiveBox">
          <i-switch v-model="bottom.switch.archiveBox" size="large">
              <span slot="open">true</span>
              <span slot="close">false</span>
          </i-switch>
      </FormItem>
      <FormItem label="fontSize">
         <Input v-model="bottom.fontSize" placeholder="" number/>
      </FormItem>
      <FormItem label="qrcode">
          <i-switch v-model="bottom.config.scanner.qrcode" size="large">
              <span slot="open">true</span>
              <span slot="close">false</span>
          </i-switch>
      </FormItem>
      <FormItem label="store">
          <i-switch v-model="bottom.config.scanner.store" size="large">
              <span slot="open">true</span>
              <span slot="close">false</span>
          </i-switch>
      </FormItem>
       <FormItem label="imgSize">
         <Input v-model="bottom.imgSize" placeholder=""/>
      </FormItem>
      <FormItem label="ignoreLockState">
         <i-switch v-model="bottom.ignoreLockState" size="large">
               <span slot="open">true</span>
               <span slot="close">false</span>
         </i-switch>
      </FormItem>
       <FormItem label="ignoreBroken">
         <i-switch v-model="bottom.ignoreBroken" size="large">
               <span slot="open">true</span>
               <span slot="close">false</span>
         </i-switch>
      </FormItem>
       <FormItem label="checkRemaining">
         <i-switch v-model="bottom.checkRemaining" size="large">
               <span slot="open">true</span>
               <span slot="close">false</span>
         </i-switch>
      </FormItem>
    </Form>
    <Button type="success" @click="updateData()" style="margin-left:40%;">保存</Button>
    <br/><br/>
  </div>
</template>

<script>
export default {
  name: 'bottomShow',
  data () {
    return {
      bottom:{
        tag: "",
        icon: "",
        background: "",
        color: "",
        next: "",
        query: {
            type: ""
        },
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
          archiveBox: false
        },
          fontSize:'',//number
          config: {
              scanner: {
                qrcode: false,
                store: false
              }
          },
          imgSize: [
          ],
          ignoreLockState: false,
          ignoreBroken: false,
          checkRemaining: false
      },
      //提交到以下数组
      bottomInfoList:[],
        menu:{
            bottom:[],
            center:[],
            logo:[]
        },
      allInfoList:{}
    }
  },
  created(){
      this.getHomeDate();
  },
  methods: {
      //调用接口获取数据
      getHomeDate(){
        let type='menu.home';
        let formData = new FormData();
        formData.append("type", type);
        this.$http.post('/config/msgget',formData,{headers:{'Content-Type': 'application/x-www-form-urlencoded'}}).then(res =>{
            this.bottomInfoList = res.data.data.bottom;
            this.allInfoList = res.data.data;
        }).catch(err => {
            console.log(err)
        })
      },
      //显示数据
      changeView(index){
        this.bottom = this.bottomInfoList[index]
      },
      //保存按钮修改数据
      updateData(){
          this.menu.bottom = this.bottomInfoList;
          this.menu.center = this.allInfoList.center;
          this.menu.logo = this.allInfoList.logo;
          let obj = {"menu.home":this.menu}
        this.$http.post('/config/msgset',JSON.stringify(obj),{headers:{'Content-Type': 'application/json'}}).then(res => {
            this.$Message.success(res.data.msg);
        }).catch(err => {
            console.log(err)
        })
      }
  },
}
</script>

<style scoped>
  /* .bottom{
    margin-left: 1%;
  } */
  .btn{
      margin-left: 45%;
  }
  .formClass{
      margin-top: 1%;
  }
</style>
