<template>
  <div class="container">
    <div>
      <a-button type="primary">默认按钮</a-button>
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from "vue-property-decorator";
import { Button } from "ant-design-vue";
import Interface from "@/utils/Interface";
Vue.use(Button);
@Component({
  components: {
    Logo:() => import('~/components/Logo.vue')
  }
})
export default class index extends Vue {
  private async mounted(){
    // console.log(await Interface.Test.post());
  }
}
</script>

<style lang="less">
.container {
  margin: 0 auto;
  min-height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
}
</style>
