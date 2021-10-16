<template>
  <div class="font">
    <!-- 我的资金 -->
    <div v-if='isShow'>
      <header>
        <div class="header">
          <div class="balance">
            <img src="../../assets/image/user/u3272.png"
                 alt="">
          </div>
        </div>
      </header>

      <div class="withdraw">
        <van-button type="primary"
                    size="large"
                    class="button"
                    @click="onClick">修改银行卡信息</van-button>
      </div>
    </div>
    <div v-else
         class="return">
      <div class="input">
        <van-field v-model="BankCard"
                   clearable
                   label="开户行"
                   placeholder="请输入银行卡名称（具体到支行）"
                   @click-right-icon="$toast('question')" />
      </div>
      <div class="input2">
        <van-field v-model="BankCardNub"
                   clearable
                   label="银行卡号"
                   placeholder="请输入银行卡号"
                   @click-right-icon="$toast('question')" />
      </div>
      <van-button type="primary"
                  size="large"
                  class="button"
                  @click="onClick">修改银行卡信息</van-button>
    </div>
  </div>
</template>

<script>
import { Field, Button, Tab, Tabs } from 'vant'
export default {
  name: 'mayBankCard',
  components: {
    [Field.name]: Field,
    [Button.name]: Button,
    [Tab.name]: Tab,
    [Tabs.name]: Tabs
  },
  data() {
    return {
      isShow: true,
      BankCardNub: '',
      BankCard: '',
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
.font {
  background-color: white;
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
    left: 15px;
    width: 345px;
    height: 190px;
    top: 80px;
    img{
      width: 100%;
      height: 100%;
    }
  }
}
.input {
  height: 40px;
  padding-top: 8px;
  border-top: solid #999 1px;
  border-bottom: solid #999 1px;
}
.input2 {
  height: 40px;
  padding-top: 8px;

  border-bottom: solid #999 1px;
}
.withdraw {
  margin-top: 140px;
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
  margin-top: 120px;

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
