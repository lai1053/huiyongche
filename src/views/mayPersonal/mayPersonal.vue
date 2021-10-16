<template>
  <div class="mayPersonal">
    <header class="maypersonalTitle">
      <span>个人信息</span>
    </header>

    <body class="maypersonalContent">
      <div>
        <van-row>
          <van-col span="8">
            <div class="span-left">头像：</div>
          </van-col>
          <van-col span="16"> <span class="span-right"><img src="../../assets/image/user/head.png"
                   alt=""></span> </van-col>
        </van-row>
      </div>
      <div>
        <van-row>
          <van-col span="9"><span>姓名：</span></van-col>
          <van-col span="15"><span class="span-right">张三疯</span></van-col>
        </van-row>
      </div>
      <div>
        <van-row>
          <van-col span="7">
            <div>手机号码：</div>
          </van-col>
          <van-col span="16">
            <div class="span-right">13800138000</div>
          </van-col>
        </van-row>
      </div>
      <div>
        <van-row>
          <van-col span="7">
            <div>证件类型：</div>
          </van-col>
          <van-col span="16">
            <div class="span-right">身份证</div>
          </van-col>
        </van-row>
      </div>
      <div>
        <van-row>
          <van-col span="7">
            <div>证件号码：</div>
          </van-col>
          <van-col span="16">
            <div class="span-right">4401101199012120000</div>
          </van-col>
        </van-row>
      </div>
      <div>
        <van-row>
          <van-col span="8">
            <div class="span-left">身份证扫描件：</div>
          </van-col>
          <van-col span="16"> <span class="span-right"><img src="../../assets/image/user/head.png"
                   alt=""><img src="../../assets/image/user/head.png"
                   alt=""></span> </van-col>
        </van-row>
      </div>
    </body>

    <div class="mayPersonalInfo">
      <van-cell-group class="mayPersonalInfo-row">
        <van-cell title="开票信息维护"
                  value="详细信息"
                  size='large'
                  to="/mayPersonalList"
                  is-link />
      </van-cell-group>
    </div>
  </div>
</template>

<script>
import { Row, Col, CellGroup, Cell } from 'vant'
export default {
  name: 'mayPersonal',
  components: {
    [Row.name]: Row,
    [Col.name]: Col,
    [CellGroup.name]: CellGroup,
    [Cell.name]: Cell
  },
  data() {
    return {

    }
  },
  methods: {

  }
}
</script>

<style scoped  lang="less">
.mayPersonal {
  background-color: white;
  .maypersonalTitle {
    font-size: 14px;
    display: block;
    height: 90px;
    span {
      position: absolute;
      left: 15px;
      top: 60px;
    }
  }
  .maypersonalContent {
    div {
      margin-top: 3px;
    }
    img {
      width: 50px;
      height: 50px;
      margin-right: 20px;
    }
    .span-left {
      margin-top: 20px;
    }
    .span-right {
      float: left;
    }
  }
  .mayPersonalInfo {
    margin-top: 40px;
    .mayPersonalInfo-row {
      height: 40px;
    }
  }
}
</style>
