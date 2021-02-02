<template>
  <!--这里封装一个可以接受数组的组件-->
  <Input ref="imgSize1" @click="modal('imgSize1')" v-model="imgSize" />
</template>

<script>
export default {
  name: "AInput",
  props:{
    imgSize:{
      value: Array,
      required: true
    }
    
  },
  methods: {
    modal(name) {
       this.$refs[name].validate((valid) => {
        if (valid) {
          this.$emit("formSubmitEvent");
        } else {
          return false;
        }
      });
      // if (this.inp != "") {this.$emit("child", this.imgSize)}
    },
  },
}
</script>

<style scoped>
</style>