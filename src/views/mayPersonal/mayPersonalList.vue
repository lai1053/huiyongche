<template>
  <div class="mayPersonalListInfo">
    <router-link to="/mayPersonalListInfo">
      <div class="mayPersonalListInfo-cart">
        <div class="title"><span>广东金财共享智能科技有限公司</span></div>
        <div class="xian"></div>
        <div class="shui"><span>税号：</span><span>91110115MA4WHA0510</span> </div>
      </div>
    </router-link>
    <router-link to="/mayPersonalListInfo">
      <div class="mayPersonalListInfo-cart">
        <div class="title"><span>天津金财共享智能科技有限公司</span></div>
        <div class="xian"></div>
        <div class="shui"><span>税号：</span><span>91110115MA4WHA0510</span> </div>
      </div>
    </router-link>
    <router-link to="/mayPersonalListInfo">
      <div class="mayPersonalListInfo-cart">
        <div class="title"><span>江门金财共享智能科技有限公司</span></div>
        <div class="xian"></div>
        <div class="shui"><span>税号：</span><span>91110115MA4WHA0510</span> </div>
      </div>
    </router-link>
  </div>
</template>
<script>
export default {
  name: 'mayPersonalList',
  data() {
    return {
    }
  },
  methods: {

  }
}
</script>
<style scoped  lang="less">
.mayPersonalListInfo {
  background-color: white;
  .mayPersonalListInfo-cart {
    border-radius: 5px;
    border: 1px solid gray;
    margin-top: 20px;
    height: 70px;
    font-size: 14px;
    margin-left: 20px;
    margin-right: 20px;
    .title {
      position: absolute;
      margin-top: 10px;
      font-weight: 700;
      margin-left: 20px;
    }
    .xian {
      height: 1px;
      border-top: 1px solid gray;
      position: absolute;
      margin-top: 30px;
    }
    .shui {
      position: absolute;
      margin-top: 40px;
      margin-left: 20px;
      color: gray;
    }
  }
}
</style>
