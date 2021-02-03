<template>
  <div class="center">
    <Divider>center配置</Divider>
    <Form ref="formDynamic" :model="center" :label-width="200" class="formClass" inline>
         <FormItem label="tag" prop="tag">
            <Input v-model="center.tag" placeholder=""/>
         </FormItem>
         <FormItem label="title" prop="title">
            <Input v-model="center.title" placeholder=""/>
         </FormItem>
         <FormItem label="img" prop="img">
            <Input v-model="center.img" placeholder=""/>
         </FormItem>
         <FormItem label="flex" prop="flex">
            <Input v-model="center.flex" placeholder="" number/>
         </FormItem>
         <FormItem label="background" prop="background">
            <Input v-model="center.background" placeholder=""/>
         </FormItem>
         <FormItem label="color" prop="color">
            <Input v-model="center.color" placeholder=""/>
         </FormItem>
         <FormItem label="next" prop="next">
            <Input v-model="center.next" placeholder=""/>
         </FormItem>
         <FormItem label="login" prop="switch.login">
           <i-switch v-model="center.switch.login" size="large">
                <span slot="open">true</span>
                <span slot="close">false</span>
            </i-switch>
        </FormItem>
        <FormItem label="selection" prop="switch.selection">
           <i-switch v-model="center.switch.selection" size="large">
                <span slot="open">true</span>
                <span slot="close">false</span>
            </i-switch>
        </FormItem>
        <FormItem label="print" prop="switch.print">
           <i-switch v-model="center.switch.print" size="large">
                <span slot="open">true</span>
                <span slot="close">false</span>
            </i-switch>
        </FormItem>
        <FormItem label="checkCover" prop="switch.checkCover">
           <i-switch v-model="center.switch.checkCover" size="large">
                <span slot="open">true</span>
                <span slot="close">false</span>
            </i-switch>
        </FormItem>
        <FormItem label="trail" prop="switch.trail">
           <i-switch v-model="center.switch.trail" size="large">
                <span slot="open">true</span>
                <span slot="close">false</span>
            </i-switch>
        </FormItem>
        <FormItem label="trailEditable" prop="switch.trailEditable">
           <i-switch v-model="center.switch.trailEditable" size="large">
                <span slot="open">true</span>
                <span slot="close">false</span>
            </i-switch>
        </FormItem>
        <FormItem label="additional" prop="switch.additional">
           <i-switch v-model="center.switch.additional" size="large">
                <span slot="open">true</span>
                <span slot="close">false</span>
            </i-switch>
        </FormItem>
        <FormItem label="singleTrial" prop="switch.singleTrial">
           <i-switch v-model="center.switch.singleTrial" size="large">
                <span slot="open">true</span>
                <span slot="close">false</span>
            </i-switch>
        </FormItem>
        <FormItem label="multiScanl" prop="switch.multiScanl">
           <i-switch v-model="center.switch.multiScanl" size="large">
                <span slot="open">true</span>
                <span slot="close">false</span>
            </i-switch>
        </FormItem>
        <FormItem label="onlyScan" prop="switch.onlyScan">
           <i-switch v-model="center.switch.onlyScan" size="large">
                <span slot="open">true</span>
                <span slot="close">false</span>
            </i-switch>
        </FormItem>
        <FormItem label="exchangeBox" prop="switch.exchangeBox">
           <i-switch v-model="center.switch.exchangeBox" size="large">
                <span slot="open">true</span>
                <span slot="close">false</span>
            </i-switch>
        </FormItem>
         <FormItem label="archiveBox" prop="switch.archiveBox">
           <i-switch v-model="center.switch.archiveBox" size="large">
                <span slot="open">true</span>
                <span slot="close">false</span>
            </i-switch>
        </FormItem>
        <FormItem label="fontSize" prop="fontSize">
         <Input v-model="center.fontSize" placeholder="" number/>
       </FormItem>
       <FormItem label="qrcode" prop="config.scanner.qrcode">
           <i-switch v-model="center.config.scanner.qrcode" size="large">
                <span slot="open">true</span>
                <span slot="close">false</span>
            </i-switch>
       </FormItem>
        <FormItem label="store" prop="config.scanner.store">
           <i-switch v-model="center.config.scanner.store" size="large">
                <span slot="open">true</span>
                <span slot="close">false</span>
            </i-switch>
       </FormItem>
       <FormItem label="imgSize" prop="imgSize">
         <Input v-model="center.imgSize" placeholder=""/>
      </FormItem>
      <FormItem label="ignoreLockState" prop="ignoreLockState">
         <i-switch v-model="center.ignoreLockState" size="large">
               <span slot="open">true</span>
               <span slot="close">false</span>
         </i-switch>
      </FormItem>
       <FormItem label="ignoreBroken" prop="ignoreBroken">
         <i-switch v-model="center.ignoreBroken" size="large">
               <span slot="open">true</span>
               <span slot="close">false</span>
         </i-switch>
      </FormItem>
       <FormItem label="checkRemaining" prop="checkRemaining">
         <i-switch v-model="center.checkRemaining" size="large">
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
  name: 'center',
  data () {
    return {
      center:{
         tag: "",
         title: "",
         img: "",
         flex: '',//number
         background: "",
         color: "",
         next: "",
         switch: {
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
         fontSize: '',//number
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
      centerInfoList:[]//空数组显示用的
    }
  },
   methods: {
      change(){
         if(this.center.imgSize!=0){
         var str = this.center.imgSize.split(",");
         for(var k in str){
            this.arrList.push(Number(str[k]))
         }
         this.center.imgSize = this.arrList;
         }
      },
      //返回到上一层
      goBack(){
         this.$router.go(-1);
      },
      addArray(){
          this.change()
          let o = Object.assign({},this.center)
          this.$store.commit("addCenter",o)
         //  this.centerInfoList.push(this.center);
         //  console.dir(this.centerInfoList)
      },
      //重置
      handleReset(name) {
         this.$refs[name].resetFields();
      },
  },
}
</script>

<style scoped>
   .btn{
         margin-left: 40%;
   }
   .formClass{
      margin-top: 1%;
  }
</style>
