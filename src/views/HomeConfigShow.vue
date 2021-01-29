<template>
  <div class="allClass">
    <span>选择你想展示的数据：</span>
    <router-link to="/bottomShow"><Button type="primary">bottom</Button></router-link>
    &nbsp;&nbsp;
    <router-link to="/centerShow"><Button type="primary">center</Button></router-link>
    &nbsp;&nbsp;
    <router-link to="/logoShow"><Button type="primary">logo</Button></router-link>
  </div>
</template>

<script>
export default {
  name:'HomeConfigShow',
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