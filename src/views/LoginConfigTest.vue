<template>
<!-- 
可以参考:https://blog.csdn.net/qq_37976966/article/details/107188168
 刚刚为啥会报错,因为刚刚我传入的是一个数组 我通过遍历数组绑定数据,而pop只能校验对象，所有报错 -->
  <div class="contaienr">
    <div class="formWrapper">
      <my-form
        :formData="formDate"
        :formItemList="formItemList"
        :rules="formValidate"
        @formSubmitEvent="addStudent"
      />
    </div>
  </div>
</template>

<script>
import MyForm from "../components/MyForm";
export default {
  components: { MyForm },
  data() {
    const validateStuName = (rule, value, callback) => {
      if (!value) {
        callback(new Error("请输入学生姓名"));
      }
      callback();
    };
    return {
      formDate: {
        stuNo: null,
        stuName: null,
        genner: 0,
      },
      formItemList: [
        {
          type: "input",
          label: "学号",
          key: "stuNo",
        },
        {
          type: "input",
          label: "姓名",
          key: "stuName",
        },
        {
          type: "radio",
          label: "性别",
          key: "genner",
          values: [
            { value: 0, bable: "男" },
            { value: 1, bable: "女" },
          ],
        },
      ],
      formValidate: {
        stuNo: [
          {
            required: true,
            message: "请输入学号",
            trigger: "blur",
          },
        ],
        stuName: [
          {
            validator: validateStuName,
            trigger: "blur",
          },
        ],
      },
    };
  },
  methods: {
    addStudent() {
      console.log("添加学生");
      console.log(this.formDate);
    },
  },
};
</script>

<style scoped>
.contaienr {
  width: 100%;
  height: 100%;
}
.formWrapper {
  height: 600px;
  width: 400px;
}
</style>