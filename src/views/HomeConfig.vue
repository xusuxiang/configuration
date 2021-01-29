<template>
  <div class="allClass">
    <span>选择你想配置的功能：</span>
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