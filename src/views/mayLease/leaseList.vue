<template>
  <div class="leaseList">
    <div class="leaseListTitle"> <span class="leaseListTitleSpan">我的租约</span> </div>
    <router-link to="/leaseInfo">
      <div class="leaseListContent">
        <div>
          <van-row type="flex"
                   justify="center">
            <van-col span="8">租车编号：</van-col>
            <van-col span="16"><span>A12344444</span></van-col>
          </van-row>
        </div>
        <div>
          <van-row>
            <van-col span="8">租车公司名称：</van-col>
            <van-col span="16"><span>租车公司A</span></van-col>
          </van-row>
        </div>
        <div>
          <van-row>
            <van-col span="8">车牌号：</van-col>
            <van-col span="16"><span>粤A12345</span></van-col>
          </van-row>
        </div>
        <div>
          <van-row>
            <van-col span="8">租凭期限：</van-col>
            <van-col span="16"><span>201906-01-2020-05-31</span></van-col>
          </van-row>
        </div>
        <div>
          <van-row>
            <van-col span="8">月租金：</van-col>
            <van-col span="16"><span>2500元</span></van-col>
          </van-row>
        </div>
      </div>
    </router-link>
    <router-link to="/leaseInfo">
      <div class="leaseListContent">
        <div>
          <van-row type="flex"
                   justify="center">
            <van-col span="8">租车编号：</van-col>
            <van-col span="16"><span>ABBBBBB</span></van-col>
          </van-row>
        </div>
        <div>
          <van-row>
            <van-col span="8">租车公司名称：</van-col>
            <van-col span="16"><span>租车公司B</span></van-col>
          </van-row>
        </div>
        <div>
          <van-row>
            <van-col span="8">车牌号：</van-col>
            <van-col span="16"><span>粤ABBBB</span></van-col>
          </van-row>
        </div>
        <div>
          <van-row>
            <van-col span="8">租凭期限：</van-col>
            <van-col span="16"><span>201906-01-2022-05-31</span></van-col>
          </van-row>
        </div>
        <div>
          <van-row>
            <van-col span="8">月租金：</van-col>
            <van-col span="16"><span>5500元</span></van-col>
          </van-row>
        </div>
      </div>
    </router-link>
  </div>
</template>

<script>
import { Row, Col } from 'vant'

export default {
  name: 'leaseList',
  components: {
    [Row.name]: Row,
    [Col.name]: Col
  }

}
</script>

<style scoped  lang="less">
.leaseList {
  background-color: white;
  .leaseListTitle {
    width: 100%;
    height: 80px;
    .leaseListTitleSpan {
      font-size: 18px;
      font-weight: 700;
      float: left;
      margin-left: 10px;
      margin-top: 50px;
    }
  }
  .leaseListContent {
    font-size: 14px;
    margin-bottom: 10px;
    background-color: Gainsboro;
    div {
      margin-top: 5px;
      span {
        color: gray;
        float: left;
      }
    }
  }
}
</style>
