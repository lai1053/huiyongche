<template>
  <div class="font">
    <!-- 我的资金 -->
    <div v-if='isShow'>
      <header>
        <div class="header">
          <div class="money">币</div>
          <div class="balance">
            <div>账户余额</div>
            <div>188888元</div>
          </div>
        </div>
      </header>
      <div class="input">
        <van-field v-model="username"
                   clearable
                   label="提现金额"
                   placeholder="请输入100-30000之间的数额"
                   @click-right-icon="$toast('question')" />
      </div>
      <div class="withdraw">
        <span>提现金额将转入绑定的银行卡</span>
        <van-button type="primary"
                    size="large"
                    class="button"
                    @click="onClick">立即提现</van-button>
      </div>
      <van-tabs v-model="active"
                class="tab">
        <van-tab title="提现记录"
                 class="record">
          <div v-for="(item,i) in record"
               :key="i">
            <span>收入金额：{{item.income}}元 </span>
            <span class="time">时间：{{item.time}}</span>
            <div class="income"> 提现状态：{{item.status}}</div>
          </div>
        </van-tab>
        <van-tab title="收入记录"
                 class="record">
          <div v-for="(item,i) in record1"
               :key="i">
            <span>收入金额：{{item.income}}元 </span>
            <span class="time">时间：{{item.time}}</span>
            <div class="income"> 收益类型：{{item.status}}</div>
          </div>
        </van-tab>
      </van-tabs>
    </div>
    <div v-else class="return">
      <div>您好！您的提现申请已成功，资金估计
        在1-3各工作日内到账。感谢您对惠用车的支持！</div>
      <van-button type="primary"
                  size="large"
                  class="button"
                  @click="onClick">返回</van-button>
    </div>
  </div>
</template>

<script>
import { Field, Button, Tab, Tabs } from 'vant'
export default {
  name: 'mayFund',
  components: {
    [Field.name]: Field,
    [Button.name]: Button,
    [Tab.name]: Tab,
    [Tabs.name]: Tabs
  },
  data() {
    return {
      isShow: true,
      username: '',
      active: 2,
      record: [
        {
          income: 1000,
          time: '2019-09-12 12：01：01',
          status: '提现中（预计两个工作日到账'
        },
        {
          income: 1000,
          time: '2019-09-12 12：01：01',
          status: '已提现'
        },
        {
          income: 1000,
          time: '2019-09-12 12：01：01',
          status: '提现失败 原因：银行卡被冻结！'
        }
      ],
      record1: [
        {
          income: 1000,
          time: '2019-09-12 12：01：01',
          status: '租金发放'
        },
        {
          income: 1000,
          time: '2019-09-12 12：01：01',
          status: '租金发放'
        },
        {
          income: 1000,
          time: '2019-09-12 12：01：01',
          status: '租金发放'
        }
      ]
    }
  },
  methods: {
    onClick() {
      if (this.isShow === true) {
        this.isShow = false
      } else {
        this.isShow = true
      }
    }
  }
}
</script>

<style scoped  lang="less">
.font{
  background-color: white
}
.tab {
  margin-top: 30px;
  .record {
    > div:nth-child(1) {
      border-top: solid #999 1px;
    }
    > div {
      border-bottom: solid #999 1px;
      height: 70px;
      padding: 15px;
      .time {
        padding-left: 40px;
        font-size: 10px;
      }
      .income {
        text-align: right;
        padding-right: 15px;
        font-size: 10px;
        color: #999;
      }
    }
  }
}
.font {
  font-size: 16px;
}
header {
  height: 160px;
  .header {
    position: relative;
  }
  .money,
  .balance {
    position: absolute;
  }
  .money {
    width: 80px;
    height: 80px;
    line-height: 80px;
    left: 80px;
    top: 60px;
    border: 3px solid black;
    border-radius: 50%;
  }
  .balance {
    left: 160px;
    top: 80px;
  }
}
.input {
  height: 40px;
  padding-top: 8px;
  border-top: solid #999 1px;
  border-bottom: solid #999 1px;
}
.withdraw {
  margin-top: 20px;
  > span {
    font-size: 12px;
    color: #999;
  }
  .button {
    margin-top: 10px;
    width: 90%;
    height: 40px;
    line-height: 40px;
    border-radius: 5px;
    background: #666;
  }
}
.return {
  margin-top: 160px;
  >div {
    width: 70%;
    font-size: 15px;
    font-weight: 700;
    color: #333;
    margin-left: 15%;
  }
  button {
    margin-top: 60px;
    width: 90%;
    height: 40px;
    line-height: 40px;
    border-radius: 5px;
    background: #666;
  }
}
</style>
