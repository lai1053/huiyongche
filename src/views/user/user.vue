<template>
  <div class="user">
    <div class="header">
      <van-row type="flex"
               class="wrap">
        <van-col span="6"
                 class="avatar">
          <router-link to="/mayPersonal">
            <img src="../../assets/image/user/head.png"
                 alt="">
          </router-link>
        </van-col>
        <van-col span="11"
                 class="head-list">
          <div class="head-li">笑傲浆糊</div>
          <div class="head-li">会员积分：6711分</div>
          <div class="head-li">
            <img src="../../assets/image/user/members.png"
                 alt="">
            <span>黄金会员</span>
          </div>
        </van-col>
        <van-col span="7">
          <div class="sign">
            <img src="../../assets/image/user/sign.png"
                 alt="">
            <span>签到领积分</span>
          </div>
        </van-col>
      </van-row>
    </div>
    <van-row type="flex"
             class="account">

      <van-col span="8"
               class="account-list">
        <van-row class="icon">
          <img src="../../assets/image/user/balance.png"
               alt="">
        </van-row>
        <van-row class="text">帐户余额(元）</van-row>
        <van-row class="num">8888.8</van-row>
        <van-row class="cash-button">
          <router-link to="/mayFund">
            <div>提现</div>
          </router-link>
        </van-row>
      </van-col>

      <van-col span="8"
               class="account-list">
        <van-row class="icon">
          <img src="../../assets/image/user/oil.png"
               alt="">
        </van-row>
        <van-row class="text">油费余额(元）</van-row>
        <van-row class="num">2676</van-row>
        <van-row class="cash-button">
          <router-link to="/mayFuel">
            <div>购买</div>
          </router-link>
        </van-row>
      </van-col>
      <van-col span="8">
        <van-row class="icon">
          <img src="../../assets/image/user//rent.png"
               alt="">
        </van-row>
        <van-row class="text">本月租金收入(元）</van-row>
        <van-row class="num">7512</van-row>
        <van-row class="cash-button">
          <div>账单</div>
        </van-row>
      </van-col>
    </van-row>
    <van-cell-group>
      <van-cell class="group"
                title="我的银行卡"
                :icon="icon_list.bankCard"
                to="/mayBankCard"
                is-link />
      <van-cell class="group"
                title="我的车辆"
                :icon="icon_list.car"
                to="/carList"
                is-link />
      <van-cell class="group"
                title="我的租约"
                to="/leaseList"
                :icon="icon_list.lease"
                is-link />
      <van-cell class="group"
                title="我的订单"
                :icon="icon_list.order"
                is-link />
      <van-cell class="group"
                title="我的发票"
                :icon="icon_list.invoice"
                is-link />
      <van-cell class="group"
                title="惠用车积分"
                :icon="icon_list.integration"
                @click="integral"
                is-link />
      <van-cell class="group"
                title="关于惠用车"
                :icon="icon_list.about"
                is-link />
      <van-cell class="group"
                title="联系我们"
                :icon="icon_list.contact"
                is-link />
    </van-cell-group>
  </div>
</template>

<script>
import { Row, Col, Button, Toast, Cell, CellGroup, Dialog } from 'vant'

export default {
  name: 'user',
  components: {
    [Row.name]: Row,
    [Col.name]: Col,
    [Button.name]: Button,
    [Toast.name]: Toast,
    [Cell.name]: Cell,
    [CellGroup.name]: CellGroup,
    [Dialog.name]: Dialog
  },
  data() {
    return {
      icon_list: {
        bankCard: require('../../assets/image/user/bankCard.png'),
        car: require('../../assets/image/user/car.png'),
        lease: require('../../assets/image/user/lease.png'),
        order: require('../../assets/image/user/order.png'),
        invoice: require('../../assets/image/user/invoice.png'),
        integration: require('../../assets/image/user/integration.png'),
        about: require('../../assets/image/user/about.png'),
        contact: require('../../assets/image/user/contact.png')
      },
      showMyCar: false,
      carData: {}
    }
  },
  methods: {
    // 积分
    integral() {
      console.log(111)
    }
  }
}
</script>

<style scoped lang="less">
.user {
  height: calc(~"100% - 50px");
  background-color: #fff;
  padding: 11px 0 20px 0;
  overflow: auto;
  .header {
    .wh(100%, 70px);
    padding-left: 4px;
    .wrap {
      .wh(100%, 100%);
      position: relative;
      .avatar {
        position: relative;
        img {
          height: 60px;
          .f-center;
        }
      }
      .head-list {
        display: flex;
        flex-direction: column;
        text-align: left;
        .head-li {
          flex: 1;
          height: 1px;
          display: flex;
          align-items: center;
        }
        .head-li:nth-child(1) {
          font-size: 18px;
          color: #333;
        }
        .head-li:nth-child(2) {
          font-size: 14px;
          color: #878787;
        }
        .head-li:nth-child(3) {
          font-size: 12px;
          color: #878787;
          display: flex;
          align-items: center;
          img {
            height: 14px;
            margin-right: 5px;
          }
        }
      }
      .sign {
        .wh-l(97px, 31px);
        display: flex;
        align-items: center;
        border-radius: 16px 0 0 16px;
        background-color: #fae0c7;
        padding-left: 9px;
        position: absolute;
        top: 50%;
        right: 0;
        margin-top: -15.5px;
        font-size: 12px;
        color: #333;
        img {
          height: 16px;
          margin-right: 5px;
        }
      }
    }
  }
  .account {
    .wh(100%, 139px);
    margin: 13px 0 20px 0;
    padding: 11px 0 0 0;
    box-sizing: border-box;
    .account-list {
      position: relative;
      &:after {
        content: "";
        width: 200%;
        height: 200%;
        position: absolute;
        top: 1px;
        right: 0;
        border-right: 1px solid #bfbfbf;
        -webkit-transform: scale(0.5, 0.5);
        transform: scale(0.5, 0.5);
        -webkit-transform-origin: top right;
        pointer-events: none;
      }
    }
    .icon {
      margin-bottom: 2px;
      img {
        height: 24px;
      }
    }
    .text {
      font-size: 12px;
      color: #878787;
      margin-bottom: 14px;
    }
    .num {
      font-size: 16px;
      color: #333333;
      margin-bottom: 15px;
    }
    .cash-button {
      div {
        .wh-l(65px, 23px);
        border: 1px solid rgba(226, 125, 52, 1);
        border-radius: 12px;
        font-size: 12px;
        color: #e27d34;
        margin: 0 auto;
      }
    }
  }
  .group {
    height: 48px;
    display: flex;
    align-items: center;
    text-align: left;
    .van-cell__left-icon {
      margin: 0 15px;
    }
    .van-cell__right-icon {
      margin-right: 15px;
    }
  }
}
</style>
