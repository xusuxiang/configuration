<template>
  <div class="logo">
    <Divider orientation="left">logo配置</Divider>
      <Form ref="formDynamic" :model="logo" :label-width="100" style="width:40%;text-align: center;">
        <FormItem label="ignoreLockState" prop="ignoreLockState">
            <i-switch v-model="logo.ignoreLockState" size="large">
                  <span slot="open">true</span>
                  <span slot="close">false</span>
            </i-switch>
        </FormItem>
          <FormItem label="ignoreBroken" prop="ignoreBroken">
            <i-switch v-model="logo.ignoreBroken" size="large">
                  <span slot="open">true</span>
                  <span slot="close">false</span>
            </i-switch>
        </FormItem>
          <FormItem label="checkRemaining" prop="checkRemaining">
            <i-switch v-model="logo.checkRemaining" size="large">
                  <span slot="open">true</span>
                  <span slot="close">false</span>
            </i-switch>
        </FormItem>
        <FormItem label="border" prop="left_top_before.border">
          <Input v-model="logo.left_top_before.border" placeholder=""/>
        </FormItem>
        <FormItem label="border-radius" prop="left_top_before.border_radius">
          <Input v-model="logo.left_top_before.border_radius" placeholder=""/>
        </FormItem>
        <FormItem label="url" prop="left_top_before.url">
          <Input v-model="logo.left_top_before.url" placeholder=""/>
        </FormItem>
        <FormItem label="margin" prop="left_top_before.margin">
          <Input v-model="logo.left_top_before.margin" placeholder=""/>
        </FormItem>
        <FormItem label="size" prop="left_top_before.size">
          <Input v-model="logo.left_top_before.size" placeholder=""/>
        </FormItem>
        <Button type="info" class="btn" @click="goBack">返回</Button>
        <Button type="success" style="margin-left: 8px" @click="addArray">增加</Button>
        <Button @click="handleReset('formDynamic')" style="margin-left: 8px">重置</Button>
    </Form>
    
  </div>
</template>

<script>
export default {
  name: 'logo',
      data () {
        return {
          logo:{
            ignoreLockState: false,
            ignoreBroken: false,
            checkRemaining: false,
            left_top_before: {//-怎么能做为变量呢
                border: "",
                border_radius: "",//-怎么能做为变量呢
                url: "",
                margin: [],
                size: []
            }
          },
          // arrList:[],//为imgSize做转换的
          //数组
          LogoInfoList:[]
        }
      },
      methods: {
        change(){
          //使size转换为数组
          var arrList = [];
          if(this.logo.left_top_before.size!=0){
            var str = this.logo.left_top_before.size.split(",");
            for(var k in str){
              arrList.push(Number(str[k]));
            }
            this.logo.left_top_before.size = arrList;
          }
        },
        //使margin转换为数组
        changeMargin(){
          var arr = [];
          if (this.logo.left_top_before.margin != 0) {
            var str1 = this.logo.left_top_before.margin.split(",");
            for(var k1 in str1){
              arr.push(Number(str1[k1]));
            }
            this.logo.left_top_before.margin = arr;
          }
        },
        //返回到上一层
        goBack(){
          this.$router.go(-1);
        },
        //点击按钮表单数据增加进数组
        addArray(){
           this.change();
           this.changeMargin();
           let o = Object.assign({},JSON.parse(JSON.stringify(this.logo).replace(/_/g,"-")))
           this.$Message.info("成功增加一条数据");
           this.$store.commit("addLogo",o)
        },
         //重置
        handleReset(name) {
          this.$refs[name].resetFields();
        },
      },
}
</script>

<style scoped>
  .logo{
      margin-left: 1%;
      margin-top: 1%;
   }
</style>
