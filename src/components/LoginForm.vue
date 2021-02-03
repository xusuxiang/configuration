<template>
  <Form ref="formDynamic" :model="login" :label-width="200" class="formClass" inline>
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
      </FormItem>
      <FormItem label="imgSize" prop="imgSize">
        <Input v-model="login.imgSize" placeholder=""/>
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
    </Form>
</template>

<script>
export default {
  name: 'LoginForm',

}
</script>