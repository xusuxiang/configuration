<template>
  <div class="leftAll">
    <Divider>登录配置</Divider>
    <Form
      ref="formDynamic"
      :model="login"
      :label-width="200"
      class="formClass"
      inline
    >
      <FormItem label="tag" prop="tag">
        <Input v-model="login.tag" placeholder="" />
      </FormItem>
      <FormItem label="title" prop="title">
        <Input v-model="login.title" placeholder="" />
      </FormItem>
      <FormItem label="icon" prop="icon">
        <Input v-model="login.icon" placeholder="" />
      </FormItem>
      <FormItem label="flex" prop="flex">
        <Input v-model="login.flex" placeholder="" />
      </FormItem>
      <FormItem label="background" prop="background">
        <Input v-model="login.background" placeholder="" />
      </FormItem>
      <FormItem label="color" prop="color">
        <Input v-model="login.color" placeholder="" />
      </FormItem>
      <FormItem label="next" prop="next">
        <Input v-model="login.next" placeholder="" />
      </FormItem>
      <FormItem label="login" prop="switch.login">
        <i-switch v-model="login.switch.login" size="large">
          <span slot="open">true</span>
          <span slot="close">false</span>
        </i-switch>
      </FormItem>
      <FormItem label="selection" prop="switch.selection">
        <i-switch v-model="login.switch.selection" size="large">
          <span slot="open">true</span>
          <span slot="close">false</span>
        </i-switch>
      </FormItem>
      <FormItem label="print" prop="switch.print">
        <i-switch v-model="login.switch.print" size="large">
          <span slot="open">true</span>
          <span slot="close">false</span>
        </i-switch>
      </FormItem>
      <FormItem label="checkCover" prop="switch.checkCover">
        <i-switch v-model="login.switch.checkCover" size="large">
          <span slot="open">true</span>
          <span slot="close">false</span>
        </i-switch>
      </FormItem>
      <FormItem label="trail" prop="switch.trail">
        <i-switch v-model="login.switch.trail" size="large">
          <span slot="open">true</span>
          <span slot="close">false</span>
        </i-switch>
      </FormItem>
      <FormItem label="trailEditable" prop="switch.trailEditable">
        <i-switch v-model="login.switch.trailEditable" size="large">
          <span slot="open">true</span>
          <span slot="close">false</span>
        </i-switch>
      </FormItem>
      <FormItem label="additional" prop="switch.additional">
        <i-switch v-model="login.switch.additional" size="large">
          <span slot="open">true</span>
          <span slot="close">false</span>
        </i-switch>
      </FormItem>
      <FormItem label="singleTrial" prop="switch.singleTrial">
        <i-switch v-model="login.switch.singleTrial" size="large">
          <span slot="open">true</span>
          <span slot="close">false</span>
        </i-switch>
      </FormItem>
      <FormItem label="multiScanl" prop="switch.multiScanl">
        <i-switch v-model="login.switch.multiScanl" size="large">
          <span slot="open">true</span>
          <span slot="close">false</span>
        </i-switch>
      </FormItem>
      <FormItem label="onlyScan" prop="switch.onlyScan">
        <i-switch v-model="login.switch.onlyScan" size="large">
          <span slot="open">true</span>
          <span slot="close">false</span>
        </i-switch>
      </FormItem>
      <FormItem label="exchangeBox" prop="switch.exchangeBox">
        <i-switch v-model="login.switch.exchangeBox" size="large">
          <span slot="open">true</span>
          <span slot="close">false</span>
        </i-switch>
      </FormItem>
      <FormItem label="archiveBox" prop="switch.archiveBox">
        <i-switch v-model="login.switch.archiveBox" size="large">
          <span slot="open">true</span>
          <span slot="close">false</span>
        </i-switch>
      </FormItem>
      <FormItem label="fontSize" prop="fontSize">
        <Input v-model="login.fontSize" placeholder="" />
        <!-- 是这个输入框吗 -->
      </FormItem>
      <!--需要一个能接受数组的文本框-->
      <FormItem label="imgSize" prop="imgSize">
        <!-- <Input v-model="login.imgSize" placeholder=""/> -->
        <AInput @child="showchild"></AInput>
      </FormItem>
      <FormItem label="ignoreLockState" prop="ignoreLockState">
        <i-switch v-model="login.ignoreLockState" size="large">
          <span slot="open">true</span>
          <span slot="close">false</span>
        </i-switch>
      </FormItem>
      <FormItem label="ignoreBroken" prop="ignoreBroken">
        <i-switch v-model="login.ignoreBroken" size="large">
          <span slot="open">true</span>
          <span slot="close">false</span>
        </i-switch>
      </FormItem>
      <FormItem label="checkRemaining" prop="checkRemaining">
        <i-switch v-model="login.checkRemaining" size="large">
          <span slot="open">true</span>
          <span slot="close">false</span>
        </i-switch>
      </FormItem>
      <Button type="success" class="btn" @click="addArray">增加</Button>
      <Button @click="handleReset('formDynamic')" style="margin-left: 8px"
        >重置</Button
      >
      <Button type="primary" style="margin-left: 8px" @click="btn">提交</Button>
    </Form>

  </div>
</template>

<script>
import AInput from "../components/AInput";

export default {
  name: "LoginConfig",

  components: {
    AInput, //一个可以接受数组的输入框组件
  },

  data() {
    return {
           msg:'',
      login: {
        tag: "",
        title: "",
        icon: "",
        flex: "",
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
          archiveBox: false,
        },
        fontSize: null,
        imgSize: [], //这个是数组
        ignoreLockState: false,
        ignoreBroken: false,
        checkRemaining: false,
      },
      //空数组存放数据的
    };
  },
  mounted() {
    window._this = this;
  },
  methods: {
    showchild(data) {
      console.log(data);
     
     this.msg=data
    },
    btn(){
      console.log(this.msg) 
      console.log(1)
       console.log(this);
    },
  
    addArray() {
      this.$store.commit("addConfig", this.login);
      this.$Message.info("成功添加一条数据");
    },
    handleReset(name) {
      console.log(name);
      this.$refs[name].resetFields();
    },
  },
};
</script>

<style scoped>
.btn {
  margin-left: 40%;
}
.formClass {
  margin-top: 1%;
}
</style>