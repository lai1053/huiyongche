<template>
  <div class="home">
    <div class="map-container">
      <a-map></a-map>
    </div>
    <!-- <transition :name="$transition" mode="in-out">
        <router-view/>
    </transition> -->
    <div class="car-info">
      <div class="left">
        <p class="car-num">
          <img src="../../assets/image/home/card.png"
               alt="">
          <span>{{vehicleInfo.cph}}</span>
        </p>
        <div class="rent">
          <p>本月租金（元）</p>
          <p class="money">
            <span>{{vehicleInfo.income || 0}}</span>
            <a href="javascript:;"
               @click="viewRent">查看租金</a>
          </p>
        </div>
        <p class="break">
          <span>本月违章</span>
          <span>无</span>
        </p>
      </div>
      <div class="right">
        <p class="location">
          <img src="@/assets/image/home/location.png"
               alt="">
          <span class="place">{{cityInfo.city}}</span>
          <span class="status">{{isLimit ? '今日限行' : '今日不限行'}}</span>
        </p>
        <p class="weather">
          {{cityInfo.weather}} {{cityInfo.temperature}} C
        </p>
        <p class="status">不适宜洗车</p>
      </div>
    </div>
    <div class="func">
      <div v-for="item in func"
           :key="item.label"
           @click="itemClickHandler(item)">
        <img :src="item.img"
             alt="">
        <p>{{item.label}}</p>
      </div>
    </div>
    <p class="more">
      <a href="javascript:;"
         @click="$router.push('/more')">查看更多</a>
    </p>
    <div class="ad">
      <img src="@/assets/image/home/ad_1.png"
           alt="">
      <div class="line"></div>
    </div>
    <div class="news">
      <p class="title">金财车友会</p>
      <div>
        <div class="item">
          <p class="content">#惠用车开张 有奖闯关</p>
          <p class="status"><img src="@/assets/image/home/hottest.png"
                 alt="">246人参与</p>
        </div>
        <div class="item">
          <p class="content">#惠用车开张 有奖闯关</p>
          <p class="status"><img src="@/assets/image/home/hottest.png"
                 alt="">246人参与</p>
        </div>
        <div class="item">
          <p class="content">#惠用车开张 有奖闯关</p>
          <p class="status"><img src="@/assets/image/home/hottest.png"
                 alt="">246人参与</p>
        </div>
        <div class="item">
          <p class="content">#惠用车开张 有奖闯关</p>
          <p class="status"><img src="@/assets/image/home/hottest.png"
                 alt="">246人参与</p>
        </div>
      </div>
    </div>
    <div class="selection">
      <p class="title">每日精选</p>
      <div class="selection-item">
        <div class="left">
          <p class="title">央行加大支持，债市依旧向好</p>
          <p class="content">上周美国公布5月份核心零售环比增长 0.5%，超出0.3%的市场预期和0.1%的 前值，零售的改善缓解了对... </p>
        </div>
        <div class="right">
          <img src="@/assets/image/home/selection_1.png"
               alt="">
        </div>
      </div>
      <div class="selection-item">
        <div class="left">
          <p class="title">央行加大支持，债市依旧向好</p>
          <p class="content">上周美国公布5月份核心零售环比增长 0.5%，超出0.3%的市场预期和0.1%的 前值，零售的改善缓解了对... </p>
        </div>
        <div class="right">
          <img src="@/assets/image/home/selection_1.png"
               alt="">
        </div>
      </div>
      <div class="selection-item">
        <div class="left">
          <p class="title">央行加大支持，债市依旧向好</p>
          <p class="content">上周美国公布5月份核心零售环比增长 0.5%，超出0.3%的市场预期和0.1%的 前值，零售的改善缓解了对... </p>
        </div>
        <div class="right">
          <img src="@/assets/image/home/selection_1.png"
               alt="">
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapState, mapMutations } from 'vuex'
import { Button } from 'vant'
import AMap from '../../components/AMap/amap'
import { ETC, WEIZHANG, BAOYANG, HUANCHE, TINGCHE } from './thirdLink.js'
export default {
  name: 'home',
  data() {
    return {
      func: [
        {
          id: 1,
          label: '加油',
          img: require('@/assets/image/home/oil.png')
        },
        {
          id: 2,
          label: '发票',
          img: require('@/assets/image/home/inv.png')
        },
        {
          id: 3,
          label: 'ETC',
          img: require('@/assets/image/home/etc.png')
        },
        {
          id: 4,
          label: '违章',
          img: require('@/assets/image/home/break.png')
        },
        {
          id: 5,
          label: '保养',
          img: require('@/assets/image/home/fit.png')
        },
        {
          id: 6,
          label: '保险',
          img: require('@/assets/image/home/safe.png')
        },
        {
          id: 7,
          label: '换车',
          img: require('@/assets/image/home/change.png')
        },
        {
          id: 8,
          label: '停车',
          img: require('@/assets/image/home/stop.png')
        }
      ]
    }
  },
  components: {
    [Button.name]: Button,
    AMap
  },
  created() {
    this.initData()
  },
  computed: {
    ...mapState({
      cityInfo: state => state.cityInfo.city || {},
      isLimit: state => state.cityInfo.currentCityIsLimit,
      coordinateInfo: state => state.cityInfo.coordinateInfo || {},
      userInfo: state => state.user.userInfo || {},
      vehicleInfo: state => state.vehicles.vehicleInfo || {},
      limitRowCity: state => state.cityInfo.limitRowCity
    })
  },
  watch: {
    cityInfo: function () {
      this.$store.dispatch('initLimitRowCity', {})
      this.$store.dispatch('initVehicleInfo', { userId: this.userInfo.userId })
    },
    limitRowCity: function (newVal) {
      const city = newVal.find(item => item.cityname === this.cityInfo.city)
      if (city) {
        this.MODIFY_CITY_LIMIT_INFO(true)
        this.$store.dispatch('initLimitCityInfo', { cityId: city.cityid })
      }
    }
  },
  methods: {
    ...mapMutations(['MODIFY_CITY_LIMIT_INFO']),
    initData() {
      // this.getWxInfo()
      this.$store.dispatch('initCityData', this.coordinateInfo)
    },
    async getWxInfo() {
      let configRes = await this.$api.getJsConfigInfo({
        url: window.location.href,
        wechatCode: 'jchl_hyc'
      })
      if (configRes.head.errorCode === '0') {
        console.log(configRes)
        // let openId = await this.$api.getOpenId({
        //   code: 'aaa',
        //   wechatCode: 'jchl_hyc'
        // })
        // console.log(openId)
        // // eslint-disable-next-line
        // wx.config({
        //   debug: true, // 开启调试模式,调用的所有api的返回值会在客户端alert出来，若要查看传入的参数，可以在pc端打开，参数信息会通过log打出，仅在pc端时才会打印。
        //   appId: configRes.appId, // 必填，公众号的唯一标识
        //   timestamp: configRes.timestamp, // 必填，生成签名的时间戳
        //   nonceStr: configRes.nonceStr, // 必填，生成签名的随机串
        //   signature: configRes.signature, // 必填，签名
        //   jsApiList: [] // 必填，需要使用的JS接口列表
        // })
      }
    },
    getLocation() { },
    itemClickHandler(item) {
      switch (item.id) {
        case 1:
          this.$router.push({ path: '/stationList' })
          break
        case 3:
          window.location.href = ETC
          break
        case 4:
          window.location.href = WEIZHANG
          break
        case 5:
          window.location.href = BAOYANG
          break
        case 7:
          window.location.href = HUANCHE
          break
        case 8:
          window.location.href = TINGCHE
          break
        default:
          break
      }
    },
    viewRent() {
      this.$router.push({ path: '/rent' })
    }
  }
}
</script>

<style scoped lang="less">
.home {
  height: calc(~'100% - 55px');
  background-color: #fff;
  padding: 12px 15px 50px 15px;
  overflow: auto;
  .car-info {
    background: linear-gradient(
      -90deg,
      rgba(68, 120, 233, 1),
      rgba(98, 165, 241, 1)
    );
    text-align: left;
    border-radius: 4px;
    padding: 18px 20px;
    font-size: 13px;
    color: #fff;
    display: flex;
    > .left {
      width: calc(50% - 1px);
      border-right: 1px solid #e5eefc;
      > .car-num {
        display: flex;
        align-items: center;
        > img {
          width: 20px;
          height: 20px;
          margin-right: 7px;
        }
        > span {
          color: #e5eefc;
        }
      }
      > .rent {
        margin-top: 12px;
        margin-bottom: 20px;
        > p {
          color: #e5eefc;
          margin-bottom: 7px;
        }
        > .money {
          > span {
            color: #fff;
            font-size: 15px;
          }
          > a {
            .zoom-font(0.77);
            font-size: 10px;
            padding: 4px 13px;
            border: 1px solid #fff;
            border-radius: 3px;
            color: #fff;
            display: inline-block;
            margin-left: 12px;
          }
        }
      }
      > .break {
        > span {
          &:first-child {
            color: #e5eefc;
          }
          &:first-child + span {
            color: #fff;
            margin-left: 20px;
          }
        }
      }
    }
    > .right {
      width: 50%;
      padding-left: 28px;
      font-size: 14px;
      > .location {
        display: flex;
        align-items: center;
        font-size: 14px;
        > img {
          width: 13px;
          height: 16px;
        }
        span {
          color: #e5eefc;
          &.place {
            margin-left: 4px;
          }
          &.status {
            margin-left: 8px;
          }
        }
      }
      > .weather {
        margin-top: 14px;
      }
      > .status {
        margin-top: 14px;
      }
    }
  }
  .func {
    display: flex;
    flex-wrap: wrap;
    font-size: 13px;
    color: #333;
    > div {
      flex: 0 0 25%;
      position: relative;
      margin-top: 24px;
      img {
        transform: scale(0.5);
      }
      p {
        position: absolute;
        left: 0;
        right: 0;
        bottom: -6px;
      }
    }
  }
  .more {
    font-size: 12px;
    color: #999;
    text-align: right;
    margin-top: 16px;
    > a {
      padding-right: 16px;
      background: url('~@/assets/image/home/more.png') right center no-repeat;
      background-size: 6px 11px;
    }
  }
  .ad {
    margin-top: 14px;
    width: 100%;
    position: relative;
    img {
      width: 100%;
    }
    .line {
      position: absolute;
      width: 100vw;
      background-color: #f5f5f5;
      height: 10px;
      left: -15px;
      bottom: -18px;
    }
  }
  .news {
    text-align: left;
    margin-top: 32px;
    > .title {
      font-size: 17px;
      color: #333;
      font-weight: 600;
      margin-bottom: 14px;
    }
    > div {
      display: flex;
      overflow-x: auto;
      flex-wrap: nowrap;
      > .item {
        width: 120px;
        height: 74px;
        position: relative;
        background: url('~@/assets/image/home/bg1.png') center center no-repeat;
        padding: 8px 12px;
        background-size: 120px 74px;
        margin-right: 8px;
        border-radius: 2px;
        flex: 0 0 33%;
        > .content {
          font-size: 14px;
          color: #fff;
          z-index: 99;
        }
        > .status {
          .zoom-font(0.916);
          display: flex;
          align-items: center;
          color: #fff;
          font-size: 11px;
          margin-top: 8px;
          white-space: nowrap;
          > img {
            width: 34px;
            height: 15px;
          }
        }
      }
    }
  }
  .selection {
    text-align: left;
    margin-top: 32px;
    > .title {
      font-size: 17px;
      color: #333;
      font-weight: 600;
      margin-bottom: 14px;
    }
    > .selection-item {
      display: flex;
      border-bottom: 1px solid #eaeaea;
      padding-bottom: 4px;
      margin-bottom: 13px;
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
      }
      > .right {
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
