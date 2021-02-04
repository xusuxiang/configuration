<template>
  <div class="bottom">
    <Divider>bottom配置</Divider>
    <Form ref="formDynamic" :model="bottom" :label-width="200" class="formClass"  inline>
      <FormItem label="tag" prop="tag">
         <Input v-model="bottom.tag" placeholder=""/>
      </FormItem>
      <FormItem label="icon" prop="icon">
         <Input v-model="bottom.icon" placeholder=""/>
      </FormItem>
      <FormItem label="background" prop="background">
         <Input v-model="bottom.background" placeholder=""/>
      </FormItem>
      <FormItem label="color" prop="color">
         <Input v-model="bottom.color" placeholder=""/>
      </FormItem>
      <FormItem label="next" prop="next">
         <Input v-model="bottom.next" placeholder=""/>
      </FormItem>
      <FormItem label="type" prop="query.type">
         <Input v-model="bottom.query.type" placeholder=""/>
      </FormItem>
      <FormItem label="login" prop="switch.login">
          <i-switch v-model="bottom.switch.login" size="large">
              <span slot="open">true</span>
              <span slot="close">false</span>
          </i-switch>
      </FormItem>
      <FormItem label="selection" prop="switch.selection">
          <i-switch v-model="bottom.switch.selection" size="large">
              <span slot="open">true</span>
              <span slot="close">false</span>
          </i-switch>
      </FormItem>
      <FormItem label="print" prop="switch.print">
          <i-switch v-model="bottom.switch.print" size="large">
              <span slot="open">true</span>
              <span slot="close">false</span>
          </i-switch>
      </FormItem>
      <FormItem label="checkCover" prop="switch.checkCover">
          <i-switch v-model="bottom.switch.checkCover" size="large">
              <span slot="open">true</span>
              <span slot="close">false</span>
          </i-switch>
      </FormItem>
      <FormItem label="trail" prop="switch.trail">
          <i-switch v-model="bottom.switch.trail" size="large">
              <span slot="open">true</span>
              <span slot="close">false</span>
          </i-switch>
      </FormItem>
      <FormItem label="trailEditable" prop="switch.trailEditable">
          <i-switch v-model="bottom.switch.trailEditable" size="large">
              <span slot="open">true</span>
              <span slot="close">false</span>
          </i-switch>
      </FormItem>
      <FormItem label="additional" prop="switch.additional">
          <i-switch v-model="bottom.switch.additional" size="large">
              <span slot="open">true</span>
              <span slot="close">false</span>
          </i-switch>
      </FormItem>
      <FormItem label="singleTrial" prop="switch.singleTrial">
          <i-switch v-model="bottom.switch.singleTrial" size="large">
              <span slot="open">true</span>
              <span slot="close">false</span>
          </i-switch>
      </FormItem>
      <FormItem label="multiScanl" prop="switch.multiScanl">
          <i-switch v-model="bottom.switch.multiScanl" size="large">
              <span slot="open">true</span>
              <span slot="close">false</span>
          </i-switch>
      </FormItem>
      <FormItem label="onlyScan" prop="switch.onlyScan">
          <i-switch v-model="bottom.switch.onlyScan" size="large">
              <span slot="open">true</span>
              <span slot="close">false</span>
          </i-switch>
      </FormItem>
      <FormItem label="exchangeBox" prop="switch.exchangeBox">
          <i-switch v-model="bottom.switch.exchangeBox" size="large">
              <span slot="open">true</span>
              <span slot="close">false</span>
          </i-switch>
      </FormItem>
        <FormItem label="archiveBox" prop="switch.archiveBox">
          <i-switch v-model="bottom.switch.archiveBox" size="large">
              <span slot="open">true</span>
              <span slot="close">false</span>
          </i-switch>
      </FormItem>
      <FormItem label="fontSize" prop="fontSize">
         <Input v-model="bottom.fontSize" placeholder="" number/>
      </FormItem>
      <FormItem label="qrcode" prop="config.scanner.qrcode">
          <i-switch v-model="bottom.config.scanner.qrcode" size="large">
              <span slot="open">true</span>
              <span slot="close">false</span>
          </i-switch>
      </FormItem>
      <FormItem label="store" prop="config.scanner.store">
          <i-switch v-model="bottom.config.scanner.store" size="large">
              <span slot="open">true</span>
              <span slot="close">false</span>
          </i-switch>
      </FormItem>
       <FormItem label="imgSize" prop="imgSize">
         <Input v-model="bottom.imgSize" placeholder=""/>
      </FormItem>
      <FormItem label="ignoreLockState" prop="ignoreLockState">
         <i-switch v-model="bottom.ignoreLockState" size="large">
               <span slot="open">true</span>
               <span slot="close">false</span>
         </i-switch>
      </FormItem>
       <FormItem label="ignoreBroken" prop="ignoreBroken">
         <i-switch v-model="bottom.ignoreBroken" size="large">
               <span slot="open">true</span>
               <span slot="close">false</span>
         </i-switch>
      </FormItem>
       <FormItem label="checkRemaining" prop="checkRemaining">
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
    //重置
    handleReset (name) {
        console.log(name)
        this.$refs[name].resetFields();
    },
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
        this.$Message.info("成功增加一条数据");
        this.$store.commit("addBottom",o)
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
