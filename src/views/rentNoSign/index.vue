<template>
  <div class='rent'>
    <div class="rent-header">
      <img src="@/assets/image/rent/avatar.png" />
      <div class="rent-header-right">
        <span>{{userInfo.enterpriseName}}</span>
        <div>
          <span>{{userInfo.userName}}</span>
          <span>{{userInfo.idNumber ? '实名认证' : '未认证'}}</span>
        </div>
      </div>
    </div>
    <div class="rent-des">
      <div class="item">
        <span>{{myIncomeData.nextMonthIncome}}元</span>
        <span>预计下月收益</span>
      </div>
      <div class="divide"></div>
      <div class="item">
        <span>{{myIncomeData.totalIncome}}元</span>
        <span>累计收益</span>
      </div>
    </div>
    <div class="rent-content">
      <in-come-list isIndex />
      <lease-list isIndex />
    </div>
  </div>
</template>
<script>
import { mapState } from 'vuex'
import InComeList from './inComeList'
import LeaseList from './leaseList'
export default {
  name: 'index',
  components: { InComeList, LeaseList },
  data() {
    return {
      leaseContents: []
    }
  },
  created() {
    this.initData()
  },
  computed: {
    ...mapState({
      userInfo: state => state.user.userInfo,
      myIncomeData: state => state.rent.myIncomeData || {}
    })
  },
  methods: {
    initData() {
      this.$store.dispatch('initIncomeData', { userId: this.userInfo.userId })
      this.$store.dispatch('initMyLeaseList', { size: 10, current: 1 })
    }
  }
}
</script>
<style lang="less" scoped>
.rent {
  height: 100vh;
  background-color: #f4f4f4;
  overflow: auto;
  .rent-header {
    height: 130px;
    background: url("~@/assets/image/rent/rent-no-sign-banner.png") no-repeat;
    background-size: contain;
    display: flex;
    justify-content: flex-start;
    img {
      margin-top: 22px;
      margin-left: 15px;
      width: 60px;
      height: 60px;
      border-radius: 50%;
    }
    .rent-header-right {
      margin: 29px 0 11px 18px;
      display: flex;
      flex-direction: column;
      align-items: flex-start;
      color: #ffffff;
      span {
        &:nth-child(1) {
          font-size: 18px;
          font-weight: bold;
        }
      }
      div {
        span {
          &:nth-child(1) {
            font-size: 15px;
          }
          &:nth-child(2) {
            padding: 3px 5px;
            font-size: 12px;
            border: 1px solid #ffffff;
            border-radius: 3px;
          }
        }
      }
    }
  }

  .rent-des {
    position: relative;
    z-index: 111;
    height: 61px;
    background-color: #ffffff;
    margin: 0 15px;
    margin-top: -28px;
    border-radius: 3px;
    display: flex;
    justify-content: space-around;
    align-items: center;
    .item {
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
    }
    span {
      &:nth-child(1) {
        font-size: 16px;
        font-weight: bold;
        color: #333333;
      }
      &:nth-child(2) {
        font-size: 14px;
        color: #666666;
      }
    }
    .divide {
      width: 1px;
      height: 35px;
      background-color: #dcdcdc;
      opacity: 0.8;
    }
  }
  .rent-content {
    margin-top: -33px;
    padding: 55px 15px 15px;
    .title {
      display: flex;
      justify-content: space-between;
      align-items: center;
      span {
        &:nth-child(1) {
          font-size: 17px;
          font-weight: bold;
          color: #333333;
        }
        &:nth-child(2) {
          font-size: 12px;
          color: #999999;
          img {
            width: 6px;
            height: 11px;
            margin-left: 9px;
          }
        }
      }
    }
    .row-item {
      margin-bottom: 15px;
      display: flex;
      justify-content: space-between;
      span {
        font-size: 15px;
        &:nth-of-type(1) {
          color: #666666;
        }
        &:nth-of-type(2) {
          color: #333333;
        }
      }
    }
  }
}
</style>
