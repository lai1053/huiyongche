<template>
  <div class="mayCar">
    <div class="mayCarTitla">
      <span class="mayCarTitlaSpan">我的车辆列表</span>
    </div>
    <div class='carBrder'>
      <van-cell-group>
        <van-cell value=""
                  to="/carInfo"
                  is-link>
          <template slot="title">
            <div class="custom-title">车牌号：粤ACD1234</div>
            <div class="custom-left">
              <span>车辆状态：
                <span>异常</span>
              </span>
            </div>
            <div class="custom-right">
              <span>出租状态：
                <span>出租中</span>
              </span>
            </div>
          </template>
        </van-cell>
      </van-cell-group>
    </div>
    <div class='carBrder'>
      <van-cell-group>
        <van-cell value=""
                  to="/carInfo"
                  is-link>
          <template slot="title">
            <div class="custom-title">车牌号：粤ACD5678</div>
            <div class="custom-left">
              <span>车辆状态：
                <span>正常</span>
              </span>
            </div>
            <div class="custom-right">
              <span>出租状态：
                <span>出租中</span>
              </span>
            </div>
          </template>
        </van-cell>
      </van-cell-group>
    </div>
    <div class='carBrder'>
      <van-cell-group>
        <van-cell value=""
                  to="/carInfo"
                  is-link>
          <template slot="title">
            <div class="custom-title">车牌号：粤ACD0000</div>
            <div class="custom-left">
              <span>车辆状态：
                <span>异常</span>
              </span>
            </div>
            <div class="custom-right">
              <span>出租状态：
                <span>待定</span>
              </span>
            </div>
          </template>
        </van-cell>
      </van-cell-group>
    </div>

  </div>
</template>

<script>
import { Cell, CellGroup } from 'vant'
export default {
  name: 'carList',
  components: {
    [Cell.name]: Cell,
    [CellGroup.name]: CellGroup
  }

}
</script>

<style scoped lang="less">
.mayCar {
  background-color: white;
  height: 100%;
  .mayCarTitla {
    width: 100%;
    height: 90px;
    .mayCarTitlaSpan {
      font-size: 18px;
      font-weight: 700;
      float: left;
      margin-left: 10px;
      margin-top: 50px;
    }
  }
  .custom-title {
    margin-top: 5px;
    font-size: 14px;
  }
  .custom-left {
    margin-left: -40px;
    margin-top: 10px;
    color: gray;
    font-size: 12px;
  }
  .custom-right {
    position: absolute;
    top: 40px;
    left: 180px;
    color: gray;
    font-size: 12px;
  }
}
</style>
