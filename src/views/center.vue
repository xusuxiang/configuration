<template>
  <div class="center">
    <Divider>center配置</Divider>
    <Form :model="center" :label-width="200" class="formClass" inline>
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
            <Input v-model="center.flex" placeholder=""/>
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
         <Input v-model="center.fontSize" placeholder=""/>
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
    <Button type="success" class="btn" @click="addArray">增加</Button>
    <Button @click="handleReset('formDynamic')" style="margin-left: 8px">重置</Button>
    <Button type="primary" style="margin-left: 8px">提交</Button>
  </div>
</template>

<script>
export default {
  name: 'center',
  data () {
    return {
      center:{
        tag: "normalScan",
         title: "扫描报销",
         img: "http://192.168.1.132:9003/ddlSource/scanCommit.png",
         flex: 1,
         background: "#87E8DF",
         color: "#535959",
         next: "DDLScanDocStartPage",
         switch: {
            login: true,
            selection: false,
            print: false,
            checkCover: true,
            trail: false,
            trailEditable: false,
            additional: false,
            singleTrial: false,
            multiScanl: false,
            onlyScan: false,
            exchangeBox: false,
            archiveBox: false
         },
          fontSize: 3.5,
            config: {
               scanner: {
                  qrcode: true,
                  store: true
               }
            },
         imgSize: [
            37.5,
            46.875
         ],
         ignoreLockState: false,
         ignoreBroken: false,
         checkRemaining: true
      },
      //空数组显示用的
      centerInfoList:[]
    }
  },
   methods: {
      addArray(){
          this.centerInfoList.push(this.center);
          console.dir(this.centerInfoList)
      }
  },
}
</script>

<style scoped>
   .btn{
         margin-left: 45%;
   }
   .formClass{
      margin-top: 1%;
  }
</style>
