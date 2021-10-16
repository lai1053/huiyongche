<template>
  <div class="succeed">
    <div class="banner">
      <img src="@/assets/image/payment/banner.png"
           alt="">
      <p class="words">纳税是每个国家公民 的神圣职责！</p>
    </div>
    <div class="succedd">
      <img src="@/assets/image/payment/succeed.png"
           alt="">
      <p>支付成功</p>
    </div>
    <div class="tips">
      <p>税务局将在1-2个工作日完成审核和开票，开票完成后请在我的发票中进行发票查看。租金将在开票完成后添加至您的资金账户上。感谢您对惠用车的支持！</p>
    </div>
    <div class="button">
      <a href="javascript:;">返回</a>
    </div>
  </div>
</template>

<script>
export default {

}
</script>

<style lang="less" scoped>
.succeed {
  padding: 16px;
  > .banner {
    text-align: left;
    position: relative;
    font-weight: 600;
    > img {
      width: 100%;
    }
    > p {
      &.words {
        font-size: 18px;
        color: #fff;
        position: absolute;
        left: 24px;
        top: 28px;
        width: 164px;
        line-height: 24px;
      }
    }
  }
  > .succedd {
    margin-top: 59px;
    margin-bottom: 30px;
    > img {
      width: 61px;
      height: 61px;
    }
    > p {
      color: #333;
      font-size: 18px;
      font-weight: 600;
    }
  }
  > .tips {
    > p {
      font-size: 13px;
      color: #666;
      text-align: left;
      line-height: 20px;
    }
  }
  > .button {
    background-color: #ff7324;
    height: 44px;
    border-radius: 3px;
    line-height: 44px;
    margin-top: 30px;
    > a {
      color: #fff;
      font-size: 18px;
    }
  }
}
</style>
