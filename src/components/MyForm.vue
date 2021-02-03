<template>
  <Form
    :size="size"
    :model="formData"
    ref="formNode"
    :rules="rules"
    :label-width="80">
    <FormItem
      :label="item.label"
      v-for="(item, index) in formItemList"
      :key="index"
      :prop="item.key">
      <Input
        v-if="item.type === 'input'"
        v-model="formData[item.key]"
        :placeholder="'请输入' + item.label"/>
      <RadioGroup v-if="item.type === 'radio'" v-model="formData[item.key]">
        <Radio
          :label="radioItem.value"
          v-for="(radioItem, index) in item.values"
          :key="index">
          {{ radioItem.bable }}</Radio>
      </RadioGroup>
    </FormItem>
    <FormItem>
      <Button type="primary" @click="handleSubmit('formNode')">Submit</Button>
      <Button @click="handleReset('formNode')" style="margin-left: 8px">Reset</Button>
    </FormItem>
  </Form>
</template>

<script>
export default {
  props: {
    formData: {
      type: Object,
      required: true,
    },
    formItemList: {
      type: Array,
      required: true,
    },
    rules: {
      type: Object,
      required: true,
    },
    size: {
      type: String,
      default: "mini",
    },
  },
  methods: {
    handleSubmit(name) {
      this.$refs[name].validate((valid) => {
        if (valid) {
          this.$emit("formSubmitEvent");
        } else {
          return false;
        }
      });
    },
    handleReset(name) {
      this.$refs[name].resetFields();
    },
  },
};
</script>