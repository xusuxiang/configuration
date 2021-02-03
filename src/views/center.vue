<template>
  <div class="center">
    <Divider>center配置</Divider>
    <Form ref="formDynamic" :model="center" :label-width="200" class="formClass" inline>
         <FormItem label="tag">
            <Input v-model="center.tag" placeholder=""/>
         </FormItem>
         <FormItem label="title">
            <Input v-model="center.title" placeholder=""/>
         </FormItem>
         <FormItem label="img">
            <Input v-model="center.img" placeholder=""/>
         </FormItem>
         <FormItem label="flex">
            <Input v-model="center.flex" placeholder="" number/>
         </FormItem>
         <FormItem label="background">
            <Input v-model="center.background" placeholder=""/>
         </FormItem>
         <FormItem label="color">
            <Input v-model="center.color" placeholder=""/>
         </FormItem>
         <FormItem label="next">
            <Input v-model="center.next" placeholder=""/>
         </FormItem>
         <FormItem label="login">
           <i-switch v-model="center.switch.login" size="large">
                <span slot="open">true</span>
                <span slot="close">false</span>
            </i-switch>
        </FormItem>
        <FormItem label="selection">
           <i-switch v-model="center.switch.selection" size="large">
                <span slot="open">true</span>
                <span slot="close">false</span>
            </i-switch>
        </FormItem>
        <FormItem label="print">
           <i-switch v-model="center.switch.print" size="large">
                <span slot="open">true</span>
                <span slot="close">false</span>
            </i-switch>
        </FormItem>
        <FormItem label="checkCover">
           <i-switch v-model="center.switch.checkCover" size="large">
                <span slot="open">true</span>
                <span slot="close">false</span>
            </i-switch>
        </FormItem>
        <FormItem label="trail">
           <i-switch v-model="center.switch.trail" size="large">
                <span slot="open">true</span>
                <span slot="close">false</span>
            </i-switch>
        </FormItem>
        <FormItem label="trailEditable">
           <i-switch v-model="center.switch.trailEditable" size="large">
                <span slot="open">true</span>
                <span slot="close">false</span>
            </i-switch>
        </FormItem>
        <FormItem label="additional">
           <i-switch v-model="center.switch.additional" size="large">
                <span slot="open">true</span>
                <span slot="close">false</span>
            </i-switch>
        </FormItem>
        <FormItem label="singleTrial">
           <i-switch v-model="center.switch.singleTrial" size="large">
                <span slot="open">true</span>
                <span slot="close">false</span>
            </i-switch>
        </FormItem>
        <FormItem label="multiScanl">
           <i-switch v-model="center.switch.multiScanl" size="large">
                <span slot="open">true</span>
                <span slot="close">false</span>
            </i-switch>
        </FormItem>
        <FormItem label="onlyScan">
           <i-switch v-model="center.switch.onlyScan" size="large">
                <span slot="open">true</span>
                <span slot="close">false</span>
            </i-switch>
        </FormItem>
        <FormItem label="exchangeBox">
           <i-switch v-model="center.switch.exchangeBox" size="large">
                <span slot="open">true</span>
                <span slot="close">false</span>
            </i-switch>
        </FormItem>
         <FormItem label="archiveBox">
           <i-switch v-model="center.switch.archiveBox" size="large">
                <span slot="open">true</span>
                <span slot="close">false</span>
            </i-switch>
        </FormItem>
        <FormItem label="fontSize">
         <Input v-model="center.fontSize" placeholder="" number/>
       </FormItem>
       <FormItem label="qrcode">
           <i-switch v-model="center.config.scanner.qrcode" size="large">
                <span slot="open">true</span>
                <span slot="close">false</span>
            </i-switch>
       </FormItem>
        <FormItem label="store">
           <i-switch v-model="center.config.scanner.store" size="large">
                <span slot="open">true</span>
                <span slot="close">false</span>
            </i-switch>
       </FormItem>
       <FormItem label="imgSize">
         <Input v-model="center.imgSize" placeholder=""/>
      </FormItem>
      <FormItem label="ignoreLockState">
         <i-switch v-model="center.ignoreLockState" size="large">
               <span slot="open">true</span>
               <span slot="close">false</span>
         </i-switch>
      </FormItem>
       <FormItem label="ignoreBroken">
         <i-switch v-model="center.ignoreBroken" size="large">
               <span slot="open">true</span>
               <span slot="close">false</span>
         </i-switch>
      </FormItem>
       <FormItem label="checkRemaining">
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
      //空数组显示用的
      centerInfoList:[]
    }
  },
   methods: {
      //返回到上一层
      goBack(){
         this.$router.go(-1);
      },
      addArray(){
          this.centerInfoList.push(this.center);
          console.dir(this.centerInfoList)
      },
      //重置
      handleReset(name) {
         console.log(name)
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
