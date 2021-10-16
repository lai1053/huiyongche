<template>
  <div class="guide">
    <div class="button">
      <van-button type="default" size="large" @click="goHandle">开启惠用车</van-button>
    </div>
  </div>
</template>

<script>
import { Button } from 'vant'
export default {
  name: 'guide',
  components: {
    [Button.name]: Button
  },
  data () {
    return {}
  },
  methods: {
    goHandle () {
      this.$router.push('/home')
    }
  }
}
</script>

<style scoped lang="less">
.guide{
  height: 100%;
  background: url('../../assets/image/guideBg.png') 0 0 no-repeat / cover;
  position: relative;
  .button{
    .wh(262px, 46px);
    position: absolute;
    bottom: 60px;
    left: 50%;
    margin-left: -131px;
  }
}
</style>
