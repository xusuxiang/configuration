<template>
   <div class="leftAll">
   <Form :model="formItem" :label-width="80" style="width:40%;text-align: center;">
      <FormItem label="tag">
         <Input v-model="formItem.tag" placeholder=""/>
      </FormItem>
      <FormItem label="icon">
         <Input v-model="formItem.icon" placeholder=""/>
      </FormItem>
      <FormItem label="background">
         <Input v-model="formItem.background" placeholder=""/>
      </FormItem>
      <FormItem label="color">
         <Input v-model="formItem.color" placeholder=""/>
      </FormItem>
      <FormItem label="next">
         <Input v-model="formItem.next" placeholder=""/>
      </FormItem>
      <FormItem label="type">
         <Input v-model="formItem.query.type" placeholder=""/>
      </FormItem>
      <Form :model="switch1" :label-width="80" style="width:40%;text-align: center;">
        <FormItem label="login">
           <i-switch v-model="switch1.login" size="large">
                <span slot="open">true</span>
                <span slot="close">false</span>
            </i-switch>
        </FormItem>
        <FormItem label="selection">
           <i-switch v-model="switch1.selection" size="large">
                <span slot="open">true</span>
                <span slot="close">false</span>
            </i-switch>
        </FormItem>
        <FormItem label="print">
           <i-switch v-model="switch1.print" size="large">
                <span slot="open">true</span>
                <span slot="close">false</span>
            </i-switch>
        </FormItem>
        <FormItem label="checkCover">
           <i-switch v-model="switch1.checkCover" size="large">
                <span slot="open">true</span>
                <span slot="close">false</span>
            </i-switch>
        </FormItem>
        <FormItem label="trail">
           <i-switch v-model="switch1.trail" size="large">
                <span slot="open">true</span>
                <span slot="close">false</span>
            </i-switch>
        </FormItem>
        <FormItem label="trailEditable">
           <i-switch v-model="switch1.trailEditable" size="large">
                <span slot="open">true</span>
                <span slot="close">false</span>
            </i-switch>
        </FormItem>
        <FormItem label="additional">
           <i-switch v-model="switch1.additional" size="large">
                <span slot="open">true</span>
                <span slot="close">false</span>
            </i-switch>
        </FormItem>
        <FormItem label="singleTrial">
           <i-switch v-model="switch1.singleTrial" size="large">
                <span slot="open">true</span>
                <span slot="close">false</span>
            </i-switch>
        </FormItem>
        <FormItem label="multiScanl">
           <i-switch v-model="switch1.multiScanl" size="large">
                <span slot="open">true</span>
                <span slot="close">false</span>
            </i-switch>
        </FormItem>
        <FormItem label="onlyScan">
           <i-switch v-model="switch1.onlyScan" size="large">
                <span slot="open">true</span>
                <span slot="close">false</span>
            </i-switch>
        </FormItem>
        <FormItem label="exchangeBox">
           <i-switch v-model="switch1.exchangeBox" size="large">
                <span slot="open">true</span>
                <span slot="close">false</span>
            </i-switch>
        </FormItem>
         <FormItem label="archiveBox">
           <i-switch v-model="switch1.archiveBox" size="large">
                <span slot="open">true</span>
                <span slot="close">false</span>
            </i-switch>
        </FormItem>
      </Form>
      <FormItem label="fontSize">
         <Input v-model="formItem.fontSize" placeholder=""/>
      </FormItem>
      <Form :model="scanner" :label-width="80" style="width:40%;text-align: center;">
         <FormItem label="qrcode">
           <i-switch v-model="scanner.qrcode" size="large">
                <span slot="open">true</span>
                <span slot="close">false</span>
            </i-switch>
        </FormItem>
        <FormItem label="store">
           <i-switch v-model="scanner.store" size="large">
                <span slot="open">true</span>
                <span slot="close">false</span>
            </i-switch>
        </FormItem>
      </Form>
       <FormItem label="imgSize">
         <Input v-model="formItem.imgSize" placeholder=""/>
      </FormItem>
      <FormItem label="ignoreLockState">
         <i-switch v-model="formItem.ignoreLockState" size="large">
               <span slot="open">true</span>
               <span slot="close">false</span>
         </i-switch>
      </FormItem>
       <FormItem label="ignoreBroken">
         <i-switch v-model="formItem.ignoreBroken" size="large">
               <span slot="open">true</span>
               <span slot="close">false</span>
         </i-switch>
      </FormItem>
       <FormItem label="checkRemaining">
         <i-switch v-model="formItem.checkRemaining" size="large">
               <span slot="open">true</span>
               <span slot="close">false</span>
         </i-switch>
      </FormItem>
    </Form>
    <Form :model="formItem1" :label-width="80" style="width:40%;text-align: center;">
      <FormItem label="tag">
         <Input v-model="formItem1.tag" placeholder=""/>
      </FormItem>
      <FormItem label="icon">
         <Input v-model="formItem1.icon" placeholder=""/>
      </FormItem>
      <FormItem label="background">
         <Input v-model="formItem1.background" placeholder=""/>
      </FormItem>
      <FormItem label="color">
         <Input v-model="formItem1.color" placeholder=""/>
      </FormItem>
      <FormItem label="next">
         <Input v-model="formItem1.next" placeholder=""/>
      </FormItem>
      <FormItem label="type">
         <Input v-model="formItem1.query.type" placeholder=""/>
      </FormItem>
      <FormItem label="login">
           <i-switch v-model="formItem1.switch.login" size="large">
                <span slot="open">true</span>
                <span slot="close">false</span>
            </i-switch>
        </FormItem>
        <FormItem label="selection">
           <i-switch v-model="formItem1.switch.selection" size="large">
                <span slot="open">true</span>
                <span slot="close">false</span>
            </i-switch>
        </FormItem>
        <FormItem label="print">
           <i-switch v-model="formItem1.switch.print" size="large">
                <span slot="open">true</span>
                <span slot="close">false</span>
            </i-switch>
        </FormItem>
        <FormItem label="checkCover">
           <i-switch v-model="formItem1.switch.checkCover" size="large">
                <span slot="open">true</span>
                <span slot="close">false</span>
            </i-switch>
        </FormItem>
        <FormItem label="trail">
           <i-switch v-model="formItem1.switch.trail" size="large">
                <span slot="open">true</span>
                <span slot="close">false</span>
            </i-switch>
        </FormItem>
        <FormItem label="trailEditable">
           <i-switch v-model="formItem1.switch.trailEditable" size="large">
                <span slot="open">true</span>
                <span slot="close">false</span>
            </i-switch>
        </FormItem>
        <FormItem label="additional">
           <i-switch v-model="formItem1.switch.additional" size="large">
                <span slot="open">true</span>
                <span slot="close">false</span>
            </i-switch>
        </FormItem>
        <FormItem label="singleTrial">
           <i-switch v-model="formItem1.switch.singleTrial" size="large">
                <span slot="open">true</span>
                <span slot="close">false</span>
            </i-switch>
        </FormItem>
        <FormItem label="multiScanl">
           <i-switch v-model="formItem1.switch.multiScanl" size="large">
                <span slot="open">true</span>
                <span slot="close">false</span>
            </i-switch>
        </FormItem>
        <FormItem label="onlyScan">
           <i-switch v-model="formItem1.switch.onlyScan" size="large">
                <span slot="open">true</span>
                <span slot="close">false</span>
            </i-switch>
        </FormItem>
        <FormItem label="exchangeBox">
           <i-switch v-model="formItem1.switch.exchangeBox" size="large">
                <span slot="open">true</span>
                <span slot="close">false</span>
            </i-switch>
        </FormItem>
         <FormItem label="archiveBox">
           <i-switch v-model="formItem1.switch.archiveBox" size="large">
                <span slot="open">true</span>
                <span slot="close">false</span>
            </i-switch>
        </FormItem>
        <FormItem label="fontSize">
         <Input v-model="formItem1.fontSize" placeholder=""/>
       </FormItem>
       <FormItem label="qrcode">
           <i-switch v-model="formItem1.config.scanner.qrcode" size="large">
                <span slot="open">true</span>
                <span slot="close">false</span>
            </i-switch>
       </FormItem>
        <FormItem label="store">
           <i-switch v-model="formItem1.config.scanner.store" size="large">
                <span slot="open">true</span>
                <span slot="close">false</span>
            </i-switch>
       </FormItem>
       <FormItem label="imgSize">
         <Input v-model="formItem1.imgSize" placeholder=""/>
      </FormItem>
       <FormItem label="ignoreLockState">
           <i-switch v-model="formItem1.ignoreLockState" size="large">
                <span slot="open">true</span>
                <span slot="close">false</span>
            </i-switch>
       </FormItem>
       <FormItem label="ignoreBroken">
           <i-switch v-model="formItem1.ignoreBroken" size="large">
                <span slot="open">true</span>
                <span slot="close">false</span>
            </i-switch>
       </FormItem>
       <FormItem label="checkRemaining">
           <i-switch v-model="formItem1.checkRemaining" size="large">
                <span slot="open">true</span>
                <span slot="close">false</span>
            </i-switch>
       </FormItem>
    </Form>
    <Form :model="center" :label-width="80" style="width:40%;text-align: center;">
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
    <Form :model="center1" :label-width="80" style="width:40%;text-align: center;">
         <FormItem label="tag">
            <Input v-model="center1.tag" placeholder=""/>
         </FormItem>
         <FormItem label="title">
            <Input v-model="center1.title" placeholder=""/>
         </FormItem>
         <FormItem label="img">
            <Input v-model="center1.img" placeholder=""/>
         </FormItem>
         <FormItem label="flex">
            <Input v-model="center1.flex" placeholder=""/>
         </FormItem>
         <FormItem label="background">
            <Input v-model="center1.background" placeholder=""/>
         </FormItem>
         <FormItem label="color">
            <Input v-model="center1.color" placeholder=""/>
         </FormItem>
         <FormItem label="next">
            <Input v-model="center1.next" placeholder=""/>
         </FormItem>
         <FormItem label="login">
           <i-switch v-model="center1.switch.login" size="large">
                <span slot="open">true</span>
                <span slot="close">false</span>
            </i-switch>
        </FormItem>
        <FormItem label="selection">
           <i-switch v-model="center1.switch.selection" size="large">
                <span slot="open">true</span>
                <span slot="close">false</span>
            </i-switch>
        </FormItem>
        <FormItem label="print">
           <i-switch v-model="center1.switch.print" size="large">
                <span slot="open">true</span>
                <span slot="close">false</span>
            </i-switch>
        </FormItem>
        <FormItem label="checkCover">
           <i-switch v-model="center1.switch.checkCover" size="large">
                <span slot="open">true</span>
                <span slot="close">false</span>
            </i-switch>
        </FormItem>
        <FormItem label="trail">
           <i-switch v-model="center1.switch.trail" size="large">
                <span slot="open">true</span>
                <span slot="close">false</span>
            </i-switch>
        </FormItem>
        <FormItem label="trailEditable">
           <i-switch v-model="center1.switch.trailEditable" size="large">
                <span slot="open">true</span>
                <span slot="close">false</span>
            </i-switch>
        </FormItem>
        <FormItem label="additional">
           <i-switch v-model="center1.switch.additional" size="large">
                <span slot="open">true</span>
                <span slot="close">false</span>
            </i-switch>
        </FormItem>
        <FormItem label="singleTrial">
           <i-switch v-model="center1.switch.singleTrial" size="large">
                <span slot="open">true</span>
                <span slot="close">false</span>
            </i-switch>
        </FormItem>
        <FormItem label="multiScanl">
           <i-switch v-model="center1.switch.multiScanl" size="large">
                <span slot="open">true</span>
                <span slot="close">false</span>
            </i-switch>
        </FormItem>
        <FormItem label="onlyScan">
           <i-switch v-model="center1.switch.onlyScan" size="large">
                <span slot="open">true</span>
                <span slot="close">false</span>
            </i-switch>
        </FormItem>
        <FormItem label="exchangeBox">
           <i-switch v-model="center1.switch.exchangeBox" size="large">
                <span slot="open">true</span>
                <span slot="close">false</span>
            </i-switch>
        </FormItem>
         <FormItem label="archiveBox">
           <i-switch v-model="center1.switch.archiveBox" size="large">
                <span slot="open">true</span>
                <span slot="close">false</span>
            </i-switch>
        </FormItem>
        <FormItem label="fontSize">
         <Input v-model="center1.fontSize" placeholder=""/>
       </FormItem>
       <FormItem label="qrcode">
           <i-switch v-model="center1.config.scanner.qrcode" size="large">
                <span slot="open">true</span>
                <span slot="close">false</span>
            </i-switch>
       </FormItem>
        <FormItem label="store">
           <i-switch v-model="center1.config.scanner.store" size="large">
                <span slot="open">true</span>
                <span slot="close">false</span>
            </i-switch>
       </FormItem>
       <FormItem label="imgSize">
         <Input v-model="center1.imgSize" placeholder=""/>
      </FormItem>
      <FormItem label="ignoreLockState">
         <i-switch v-model="center1.ignoreLockState" size="large">
               <span slot="open">true</span>
               <span slot="close">false</span>
         </i-switch>
      </FormItem>
       <FormItem label="ignoreBroken">
         <i-switch v-model="center1.ignoreBroken" size="large">
               <span slot="open">true</span>
               <span slot="close">false</span>
         </i-switch>
      </FormItem>
       <FormItem label="checkRemaining">
         <i-switch v-model="center1.checkRemaining" size="large">
               <span slot="open">true</span>
               <span slot="close">false</span>
         </i-switch>
      </FormItem>
    </Form>
    <Form :model="logo" :label-width="80" style="width:40%;text-align: center;">
       <FormItem label="ignoreLockState">
         <i-switch v-model="logo.ignoreLockState" size="large">
               <span slot="open">true</span>
               <span slot="close">false</span>
         </i-switch>
      </FormItem>
       <FormItem label="ignoreBroken">
         <i-switch v-model="logo.ignoreBroken" size="large">
               <span slot="open">true</span>
               <span slot="close">false</span>
         </i-switch>
      </FormItem>
       <FormItem label="checkRemaining">
         <i-switch v-model="logo.checkRemaining" size="large">
               <span slot="open">true</span>
               <span slot="close">false</span>
         </i-switch>
      </FormItem>
       <FormItem label="border">
         <Input v-model="logo.left_top_before.border" placeholder=""/>
      </FormItem>
      <FormItem label="border_radius">
         <Input v-model="logo.left_top_before.border_radius" placeholder=""/>
      </FormItem>
      <FormItem label="url">
         <Input v-model="logo.left_top_before.url" placeholder=""/>
      </FormItem>
      <FormItem label="margin">
         <Input v-model="logo.left_top_before.margin" placeholder=""/>
      </FormItem>
       <FormItem label="size">
         <Input v-model="logo.left_top_before.size" placeholder=""/>
      </FormItem>
    </Form>
    </div>
</template>

<script>
export default {
  name:'HomeConfig1',
   data () {
      return {
          formItem: {
            tag: "settings",
            icon: "el-icon-mysetting",
            background: "#4B4B4B",
            color: "#FFFFFF",
            next: "DDLSettingPage",
            query: {
               type: "setting"
            },
            single:false,
            //----------
            fontSize:3.0,
            //----------
            imgSize:[5.46875,6.836],
            ignoreLockState: true,
            ignoreBroken: true,
            checkRemaining: false
        },
        switch1:{
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
        scanner:{
           qrcode:true,
           store:true
        },
        formItem1:{
         tag: "picker",
         icon: "el-icon-mytake-express",
         background: "#4B4B4B",
         color: "#FFFFFF",
         next: "DDLPickTypePage",
         query: {
            type: "pikerType"
         },
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
         fontSize: 3.0,
         config: {
         scanner: {
            qrcode: true,
            store: true
         }
        },
         imgSize: [
            5.46875,
            6.836
         ],
         ignoreLockState: false,
         ignoreBroken: false,
         checkRemaining: false
      },
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
      center1:{
         tag: "employeePickup",
         title: "员工取件",
         img: "http://192.168.1.132:9003/ddlSource/pickup.png",
         flex: 1,
         background: "#FDD853",
         color: "#535959",
         next: "DDLStaffPickupPage",
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
         checkRemaining: false
      },
      //logo
      logo:{
         ignoreLockState: false,
         ignoreBroken: false,
         checkRemaining: false,
         left_top_before: {
            border: "2px solider #999",
            border_radius: "10px",
            url: "http://192.168.1.132:9003/img/kisc/kiscLogo.jpg",
            margin: [
               2.031,
               0.8,
               4.2,
               1.3
            ],
            size: [
               4.6875,
               5.86
            ]
         }
      }
   }
 }
}
</script>

<style scoped>
   .leftAll{
      margin-left: 1%;
   }
</style>