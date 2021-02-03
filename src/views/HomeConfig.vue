<template>
  <div class="allClass">
    <span style="margin-top:10%;margin-left:10px;">选择你想配置的功能：</span>
     <!-- <Tabs type="card">
        <TabPane label="标签一">标签一的内容</TabPane>
        <TabPane label="标签二">标签二的内容</TabPane>
        <TabPane label="标签三">标签三的内容</TabPane>
    </Tabs>
    <Button type="primary" style="margin-left: 8px" @click="submitData">提交</Button> -->
    <router-link to="/bottom"><Button type="primary">bottom</Button></router-link>
    &nbsp;&nbsp;
    <router-link to="/center"><Button type="primary">center</Button></router-link>
    &nbsp;&nbsp;
    <router-link to="/logo"><Button type="primary">logo</Button></router-link>
  </div>
</template>

<script>
export default {
  name:'HomeConfig',
  components:{},
  data() {
    return {
      
    }
  },
  methods: {
    nextButtom(){

    },
  },
}
</script>

<style scoped>
  .allClass{
    margin-top: 5%;
    margin-left: 10%;
  }
</style>