<template>
  <div class="logo">
     <br>
      <span style="margin-left:1%;">点击按钮显示数据:</span>
      <Button type="info" v-for="(item,index) in LogoInfoList" @click="changeView(index)" :key="index">{{index+1}}</Button>
      <Divider />
      <div>
        <Form :model="logo" :label-width="100" style="width:40%;text-align: center;">
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
          <FormItem label="border-radius">
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
        <Button type="success" @click="updateData()" style="margin-left:10%;">保存</Button>
        <br/><br/>
      </div>
  </div>
</template>

<script>
export default {
  name: 'logoShow',
    data () {
      return {
        logo:{
          ignoreLockState: false,
          ignoreBroken: false,
          checkRemaining: false,
          left_top_before: {
              border: "",
              border_radius: "",
              url: "",
              margin:[],
              size:[]
          }
        },
        //数组
        LogoInfoList:[],
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
          if(this.logo.left_top_before.size!=0){
            var str = this.logo.left_top_before.size.split(",");
            for(var k in str){
              arrList.push(Number(str[k]))
            }
            this.logo.left_top_before.size = arrList;
          }
        },
      //调用接口获取数据
      getHomeDate(){
        let type='menu.home';
        let formData = new FormData();
        formData.append("type", type);
        this.$http.post('/config/msgget',formData,{headers:{'Content-Type': 'application/x-www-form-urlencoded'}}).then(res =>{
            this.allInfoList = res.data.data;
            this.LogoInfoList = JSON.parse(JSON.stringify(res.data.data.logo).replace(/-/g,"_"));
        }).catch(err => {
            console.log(err)
        })
      },
      //显示数据
      changeView(index){
        this.logo = this.LogoInfoList[index]
      },
       //保存按钮修改数据
      updateData(){
          // this.change();
          this.menu.bottom = this.allInfoList.bottom;
          this.menu.center = this.allInfoList.center;
          this.menu.logo = this.LogoInfoList;
          let obj = {"menu.home":this.menu}
          console.log(obj);
        this.$http.post('/config/msgset',JSON.stringify(obj).replace(/_/g,"-"),{headers:{'Content-Type': 'application/json'}}).then(res => {
            this.$Message.success(res.data.msg);
        }).catch(err => {
            console.log(err)
        })
      }
    },
}
</script>

<style scoped>
  .logo{
      margin-left: 1%;
      margin-top: 1%;
   }
</style>
