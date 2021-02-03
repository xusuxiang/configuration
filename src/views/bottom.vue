<template>
  <div class="bottom">
    <Divider>bottom配置</Divider>
    <Form ref="formDynamic" :model="bottom" :label-width="200" class="formClass"  inline>
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
    <Button type="info" class="btn" @click="goBack">返回</Button>
    <Button type="success" style="margin-left: 8px" @click="addArray">增加</Button>
    <Button @click="handleReset('formDynamic')" style="margin-left: 8px">重置</Button>
    <br/><br/>
  </div>
</template>

<script>
export default {
  name: 'bottom',
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
          fontSize:'',
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
      arrList:[],//为imgSize做转换的
      bottomInfoList:[]//提交到以下数组
    }
  },
  methods: {
    change(){
      if(this.bottom.imgSize!=0){
        var str = this.bottom.imgSize.split(",");
        for(var k in str){
          this.arrList.push(Number(str[k]))
        }
        this.bottom.imgSize = this.arrList;
      }
    },
    //返回到上一层
    goBack(){
        this.$router.go(-1);//返回上一层
    },
    //增加
    addArray(){
        this.change();
        let o = Object.assign({}, this.bottom);
        // this.bottomInfoList.push(o);
        this.$store.commit("addSubmitDate",o)
        this.$Message.info("成功增加一条数据");
        // console.log(this.bottomInfoList)
    },
    //重置
    handleReset(name) {
      this.$refs[name].resetFields();
    },
  },
}
</script>

<style scoped>
  /* .bottom{
    margin-left: 1%;
  } */
  .btn{
      margin-left: 40%;
  }
  .formClass{
      margin-top: 1%;
  }
</style>
