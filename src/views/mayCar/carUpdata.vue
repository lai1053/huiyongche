<template>
  <div class="carUpdata">
    <div class="carUpdataTitle">
      <div class="carUpdataTitle-span"> 修改行驶证</div>
    </div>
    <div class="xian"></div>
    <div class="carUpdataP">
      <span class="carUpdataPspan"> 修改行驶证副本:</span>
      <div class="carUpdataPImg">
        <van-uploader multiple />
        <van-uploader multiple />
      </div>
    </div>
    <div class="xian"></div>
    <div class="carUpdataB">
      <span class="carUpdataBspan">保险凭证:</span>
      <div class="carUpdataBImg">
        <van-uploader multiple />
      </div>
    </div>
    <van-button size="normal">提交审核</van-button>
  </div>

</template>

<script>
import { Uploader, Button } from 'vant'

export default {
  name: 'carUpdata',
  components: {
    [Uploader.name]: Uploader,
    [Button.name]: Button
  }

}
</script>

<style scoped  lang="less">
.carUpdata{
  background-color: white;
}
.carUpdataTitle {
  display: block;
  width: 100%;
  height: 100px;
  .carUpdataTitle-span {
    font-size: 18px;
    font-weight: 400;
    float: left;
    margin-left: 10px;
    margin-top: 70px;
  }
}
.xian {
  height: 0.5px;
  border-top: 1px solid gray;
}
.carUpdataP {
  font-size: 16px;
  height: 180px;
  .carUpdataPspan {
    position: absolute;
    left: 20px;
    top: 190px;
  }
  .carUpdataPImg {
    position: relative;
    margin-left: 150px;
    margin-top: 60px;
    display: block;
    width: 180px;
    height: 90px;
  }
}

.carUpdataB {
  font-size: 16px;
  height: 120px;
  .carUpdataBspan {
    position: absolute;
    left: 20px;
    top: 430px;
  }
  .carUpdataBImg {
    position: relative;
    margin-left: 150px;
    margin-top: 60px;
    display: block;
    width: 180px;
    height: 90px;
  }
}
</style>
