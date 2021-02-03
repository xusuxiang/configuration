<template>
  <div class="logo">
    <Divider orientation="left">logo配置</Divider>
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
          //数组
          LogoInfoList:[]
        }
      },
      methods: {
        //返回到上一层
        goBack(){
          this.$router.go(-1);
        },
        //点击按钮表单数据增加进数组
        addArray(){
          //console.log(this.logo)
          this.LogoInfoList.push(this.logo)
          console.dir(this.LogoInfoList);
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
  .logo{
      margin-left: 1%;
      margin-top: 1%;
   }
</style>
