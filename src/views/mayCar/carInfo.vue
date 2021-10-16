<template>
  <div class="carInfo">
    <div class="carInfotitel">
      <span class="mayCarTitlaSpan">车辆详情</span>
    </div>
    <div class="xian"></div>
    <div class="carInfo">
      <van-row>
        <div>
          <van-row>
            <van-col span="4"
                     class="carInfoName">车主姓名：</van-col>
            <van-col span="20">
              <span class="grayspan">张三疯</span>
            </van-col>
          </van-row>
        </div>
        <div>
          <van-col span="20"
                   class="carInfoName2">车牌号：</van-col>
          <van-col span="4">
            <span>粤A12345</span>
          </van-col>
        </div>
        <div>
          <van-col span="12">车架号：</van-col>
          <van-col span="12">
            <span>123123123</span>
          </van-col>
        </div>
        <div>
          <van-col span="12"
                   class="carInfoName3">发动机号：</van-col>
          <van-col span="12">
            <span>123123123</span>
          </van-col>
        </div>
        <div>
          <van-col span="10"
                   class="carInfoName4">车辆品牌：</van-col>
          <van-col span="14">
            <span>丰田</span>
          </van-col>
        </div>
        <div>
          <van-col span="12"
                   class="carInfoName5">车辆型号：</van-col>
          <van-col span="12">
            <span>阿尔法</span>
          </van-col>
        </div>
        <div>
          <van-col span="12"
                   class="carInfoName5">年检到期时间：</van-col>
          <van-col span="12">
            <span>2021-05-01</span>
          </van-col>
        </div>
        <div>
          <van-col span="12"
                   class="carInfoName5">保险到期时间：</van-col>
          <van-col span="12">
            <span>2021-05-01</span>
          </van-col>
        </div>
      </van-row>
    </div>
    <div class="xian"></div>
    <div class="carImg">
      <router-link to="/carUpdata">
        <div class="pingzheng">
          <span class="pingzhengSpan">保险凭证</span>
          <div class="pingzhengImg"><img src=""
                 alt=""></div>
        </div>
        <div class="zhengfu">
          <span>行驶证正副本</span>
          <div class="zhengfuImg">
            <img src=""
                 alt="">
            <img src=""
                 alt="">
          </div>
        </div>
        <div class="zhuangtai">状态</div>
      </router-link>
    </div>
    <div class="xian"></div>
    <div class="carState">
      <van-row>
        <div class="carState1">
          <van-col span="0">
            <span>审核状态：</span>
          </van-col>
          <van-col span="20">
            <span>待审核</span>
          </van-col>
        </div>
        <div>
          <van-col span="8">
            <span>出租状态：</span>
          </van-col>
          <van-col span="16">
            <span>已出租</span>
          </van-col>
        </div>
        <div>
          <van-col span="8"
                   class="carState1">
            <span>车辆状态：</span>
          </van-col>
          <van-col span="16">
            <span class="grayspan">正常</span>
          </van-col>
        </div>
      </van-row>
    </div>
  </div>
</template>

<script>
import { Cell, CellGroup, Row, Col } from 'vant'

export default {
  name: 'carInfo',
  components: {
    [Cell.name]: Cell,
    [CellGroup.name]: CellGroup,
    [Cell.Row]: Row,
    [CellGroup.Col]: Col
  }

}
</script>

<style scoped lang="less">
.carInfo{
  background-color: white;
}
.carInfotitel {
  display: block;
  width: 100%;
  height: 80px;
  .mayCarTitlaSpan {
    font-size: 18px;
    font-weight: 700;
    float: left;
    margin-left: 10px;
    margin-top: 50px;
  }
}
.xian {
  height: 0.5px;
  border-top: 1px solid gray;
}
.carInfo {
  div {
    margin-top: 5px;
  }
  font-size: 16px;
  .carInfoName {
    margin-left: -50px;
  }
  .carInfoName2 {
    margin-left: -10px;
  }
  .carInfoName3 {
    margin-left: -15px;
  }
  .carInfoName4 {
    margin-left: -62px;
  }
  .carInfoName5 {
    margin-left: -48px;
  }
}
.carImg {
  height: 100px;
  .pingzheng {
    .pingzhengSpan {
    }
    .pingzhengImg {
    }
  }
  .zhuangtai {
    position: absolute;
    bottom: 255px;
    font-size: 14px;
    left: 15px;
  }
  .carState {
    div {
      margin-top: 5px;
    }
    .carState1 {
      margin-top: 50px;
      margin-left: -30px;
      .grayspan {
        color: gray;
      }
    }
  }
  .grayspan {
    color: gray;
  }
}
</style>
