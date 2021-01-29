<template>
  <div class="logo">
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
          <Input v-model="logo.left_top_before.margin.margin" placeholder=""/>
        </FormItem>
        <FormItem label="size">
          <Input v-model="logo.left_top_before.size.size" placeholder=""/>
        </FormItem>
        <Button type="success" class="btn" @click="addArray">增加</Button>
    </Form>
    
  </div>
</template>

<script>
export default {
  name: 'logo',
      data () {
        return {
          //logo
          logo:{
            ignoreLockState: false,
            ignoreBroken: false,
            checkRemaining: false,
            left_top_before: {
                border: "",
                border_radius: "",
                url: "",
                margin: {
                  margin:''
                  },
                size: {
                  size:''
                }
            }
          },
          //数组
          LogoInfoList:[]
        }
      },
      methods: {
        //点击按钮表单数据增加进数组
        addArray(){
          //console.log(this.logo)
          this.LogoInfoList.push(this.logo)
          console.dir(this.LogoInfoList);
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
