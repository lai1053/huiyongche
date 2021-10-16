<template>
  <div class="vehicles">
    <div class="status item">
      <p class="date">2019-08-07</p>
      <p class="weather">雷阵雨 27~35 C</p>
      <p class="car">不宜洗车</p>
    </div>
    <div class="tips item">
      <p class="title">保养提醒</p>
      <div class="last">
        <p>
          <span>上次保养时间：</span>
          <span class="red">2019-01-01</span>
          <span>上次保养里程：</span>
          <span class="red">40000</span>
        </p>
      </div>
      <div class="next">
        <p>
          <span>建议保养时间：</span>
          <span class="blue">2019-01-01</span>
          <span>建议保养里程：</span>
          <span class="blue">45000</span>
        </p>
      </div>
      <div class="type">
        <p class="mall">
          <img src="@/assets/image/vehicles/mall.png"
               alt=""> 惠车商城
        </p>
        <p class="car">
          <img src="@/assets/image/vehicles/car.png"
               alt="">保养套餐</p>
      </div>
    </div>
    <div class="tips item">
      <p class="title">年检提醒</p>
      <div class="last">
        <p>
          <span>上次保养时间：</span>
          <span class="red">2019-01-01</span>
          <span>上次保养里程：</span>
          <span class="red">40000</span>
        </p>
      </div>
      <div class="type">
        <p class="car year">
          <img src="@/assets/image/vehicles/year.png"
               alt=""
               class="year">预约年检服务</p>
      </div>
    </div>
    <div class="tips item cost">
      <p class="title">用车成本</p>
      <div class="last">
        <p>
          <span>用车成本1000元，比同类车型的成本高10%</span>
        </p>
      </div>
      <div class="bg">
        <img src="@/assets/image/vehicles/bg_1.png"
             alt="">
      </div>
      <div class="how">
        <p><img src="@/assets/image/vehicles/tips.png">如何降低用车成本？</p>
      </div>
    </div>
    <div class="manage item">
      <p class="title">油耗管理</p>
      <span>统计时间自2019年1月1日开始</span>
      <div>
        <div class="oil">
          <p class="name">平均耗油</p>
          <p class="num">6.63</p>
          <span>升/百公里</span>
        </div>
        <div class="trip">
          <p class="name">平均行程</p>
          <p class="num">79</p>
          <span>公里/天</span>
        </div>
        <div class="cost">
          <p class="name">平均油费</p>
          <p class="num">0.42</p>
          <span>元/公里</span>
        </div>
      </div>
    </div>
    <div class="trend item">
      <p class="title">油价变化趋势</p>
      <div class="bg">
        <img src="@/assets/image/vehicles/bg_2.png"
             alt="">
      </div>
    </div>
    <div class="news item">
      <p class="title">丰田车友论坛</p>
      <span class="more">
        <a href="javascript:;">查看全部</a>
      </span>
      <div class="item">
        <div class="left">
          <p class="title">央行加大支持，债市依旧向好</p>
          <p class="content">上周美国公布5月份核心零售环比 增长0.5%，超出0.3%的市场预期</p>
          <p class="opera">
            <span><img class="msg"
                   src="@/assets/image/vehicles/msg.png"
                   alt="">
              <span>20</span>
            </span>
            <span><img class="good"
                   src="@/assets/image/vehicles/good.png"
                   alt="">
              <span>20</span>
            </span>
          </p>
        </div>
        <div class="right">
          <img src="@/assets/image/vehicles/bg_3.png"
               alt="">
        </div>
      </div>
      <div class="item">
        <div class="left">
          <p class="title">央行加大支持，债市依旧向好</p>
          <p class="content">上周美国公布5月份核心零售环比 增长0.5%，超出0.3%的市场预期</p>
          <p class="opera">
            <span><img class="msg"
                   src="@/assets/image/vehicles/msg.png"
                   alt="">
              <span>20</span>
            </span>
            <span><img class="good"
                   src="@/assets/image/vehicles/good.png"
                   alt="">
              <span>20</span>
            </span>
          </p>
        </div>
        <div class="right">
          <img src="@/assets/image/vehicles/bg_4.png"
               alt="">
        </div>
      </div>
      <div class="item">
        <div class="left">
          <p class="title">央行加大支持，债市依旧向好</p>
          <p class="content">上周美国公布5月份核心零售环比 增长0.5%，超出0.3%的市场预期</p>
          <p class="opera">
            <span><img class="msg"
                   src="@/assets/image/vehicles/msg.png"
                   alt="">
              <span>20</span>
            </span>
            <span><img class="good"
                   src="@/assets/image/vehicles/good.png"
                   alt="">
              <span>20</span>
            </span>
          </p>
        </div>
        <div class="right">
          <img src="@/assets/image/vehicles/bg_5.png"
               alt="">
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'vehicles',
  data() {
    return {}
  }
}
</script>

<style scoped lang="less">
.vehicles {
  height: calc(~'100% - 50px');
  background-color: #f5f5f5;
  padding: 10px 15px 50px 15px;
  > .item {
    margin-bottom: 10px;
    border-radius: 3px;
    background: #fff;
    > .title {
      font-size: 17px;
      color: #333;
      padding: 16px 10px;
      font-weight: 600;
    }
  }
  > .status {
    background: linear-gradient(
      -90deg,
      rgba(68, 120, 233, 1),
      rgba(98, 165, 241, 1)
    );
    display: flex;
    padding: 16px 19px 15px 9px;
    justify-content: space-between;
    > p {
      font-size: 14px;
      color: #e5eefc;
      &.date {
      }
    }
  }
  > .tips {
    text-align: left;
    > .last,
    .next {
      background: linear-gradient(
        90deg,
        rgba(255, 255, 255, 1) 0%,
        rgba(250, 222, 220, 1) 100%
      );
      height: 28px;
      text-align: center;
      > p {
        font-size: 12px;
        line-height: 28px;
        color: #333;
        > span {
          &.blue {
            color: #4478e9;
          }
          &.red {
            color: #ce402f;
          }
        }
      }
    }
    > .next {
      background: linear-gradient(
        90deg,
        rgba(255, 255, 255, 1) 0%,
        rgba(215, 233, 253, 1) 100%
      );
    }
    > .type {
      height: 46px;
      display: flex;
      align-items: center;
      > p {
        width: 50%;
        line-height: 28px;
        font-size: 14px;
        color: #333;
        display: flex;
        align-items: center;
        justify-content: center;
        &.year {
          width: 100%;
        }
        &.mall {
          width: calc(50% - 0.5px);
          border-right: 1px solid #e2e2e2;
          > img {
            width: 20px;
            height: 20px;
            margin-right: 12px;
          }
        }
        &.car {
          > img {
            width: 24px;
            height: 17px;
            margin-right: 12px;
            &.year {
              width: 21px;
              height: 21px;
            }
          }
        }
      }
    }
    > .bg {
      margin-top: 20px;
      text-align: center;
      > img {
        width: 305px;
        height: 161px;
      }
    }
    > .how {
      height: 30px;
      margin-top: 20px;
      border: 1px solid #fbe5d6;
      line-height: 30px;
      margin: 20px 10px 0px 10px;
      > p {
        font-size: 12px;
        color: #ee7f42;
        display: flex;
        justify-content: center;
        > img {
          width: 14px;
          height: 15px;
          margin-right: 8px;
        }
      }
    }
  }
  > .cost {
    padding-bottom: 16px;
  }
  > .manage {
    text-align: left;
    position: relative;
    padding-bottom: 15px;
    > span {
      position: absolute;
      right: 10px;
      top: 18px;
      padding-right: 17px;
      color: #999;
      font-size: 12px;
      background: url('~@/assets/image/vehicles/add.png') right center no-repeat;
      background-size: 13px 13px;
    }
    > div {
      display: flex;
      padding: 0 18px;
      > div {
        > .name {
          font-size: 14px;
          color: #333;
          display: flex;
        }
        > .num {
          font-size: 16px;
          color: #ee8043;
          display: flex;
          font-weight: 600;
          margin: 8px 0 2px 0;
        }
        > span {
          font-size: 12px;
          color: #999;
          display: flex;
        }
        &.oil {
          flex: 0 1 28%;
          border-right: 1px solid #e2e2e2;
        }
        &.cost {
          flex: 0 1 28%;
          padding-left: 30px;
        }
        &.trip {
          flex: 1 1 auto;
          padding-left: 39px;
          border-right: 1px solid #e2e2e2;
        }
      }
    }
  }
  > .trend {
    text-align: left;
    padding-bottom: 17px;
    .bg {
      margin: 0 10px;
      > img {
        width: 100%;
      }
    }
  }
  > .news {
    text-align: left;
    position: relative;
    > .more {
      font-size: 12px;
      color: #999;
      text-align: right;
      position: absolute;
      top: 20px;
      right: 10px;
      > a {
        padding-right: 16px;
        background: url('~@/assets/image/home/more.png') right center no-repeat;
        background-size: 6px 11px;
      }
    }
    > .item {
      display: flex;
      border-bottom: 1px solid #eaeaea;
      padding-bottom: 4px;
      margin: 0 11px 13px 11px;
      > .left {
        > .title {
          color: #333;
          font-size: 15px;
        }
        > .content {
          margin-top: 4px;
          color: #666;
          font-size: 13px;
        }
        > .opera {
          display: flex;
          margin-top: 8px;
          > span {
            margin-right: 25px;
            color: #999;
            font-size: 12px;
            display: flex;
            align-items: center;
            > span {
              .zoom-font(0.91);
            }
            > img {
              margin-right: 7px;
              &.msg {
                width: 12px;
                height: 11px;
              }
              &.good {
                width: 13px;
                height: 13px;
              }
            }
          }
        }
      }
      > .right {
        margin-left: 16px;
        > img {
          width: 110px;
          height: 83px;
        }
      }
      &:last-child {
        border-bottom: none;
      }
    }
  }
}
</style>
