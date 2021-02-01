<template>
  <Input @click="modal" v-model="inp" />
</template>

<script>
export default {
  name: "AInput",
  data() {
    return {
      inp: "",
    };
  },
  methods: {
    modal() {
      if (this.inp != "") {this.$emit("child", this.inp)}
    },
  },
};
</script>

<style scoped>
</style>