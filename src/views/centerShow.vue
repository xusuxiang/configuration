<template>
  <div class="center">
     <br>
    <span style="margin-left:1%;">点击按钮显示数据:</span>
    <Button type="info" v-for="(item,index) in centerInfoList" @click="changeView(index)" :key="index">{{index+1}}</Button>
    <Divider />
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
    <Button type="success" @click="updateData()" style="margin-left:40%;">保存</Button>
    <br/><br/>
  </div>
</template>

<script>
export default {
  name: 'centerShow',
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
      centerInfoList:[],
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
      change(){
         var arrList = [];
         if(this.center.imgSize!=0){
         var str = this.center.imgSize.split(",");
         for(var k in str){
            arrList.push(Number(str[k]))
         }
         this.center.imgSize = arrList;
         }
      },
       //调用接口获取数据
      getHomeDate(){
        let type='menu.home';
        let formData = new FormData();
        formData.append("type", type);
        this.$http.post('/config/msgget',formData,{headers:{'Content-Type': 'application/x-www-form-urlencoded'}}).then(res =>{
            this.centerInfoList = res.data.data.center;
            this.allInfoList = res.data.data;
        }).catch(err => {
            console.log(err)
        })
      },
      //显示数据
      changeView(index){
        this.center = this.centerInfoList[index]
      },
      //保存按钮修改数据
      updateData(){
          this.change();
          this.menu.bottom = this.allInfoList.bottom;
          this.menu.center = this.centerInfoList;
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
   .btn{
         margin-left: 45%;
   }
   .formClass{
      margin-top: 1%;
  }
</style>
