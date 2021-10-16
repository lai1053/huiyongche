<template>
  <div class="station-detail">
    <div class="name">
      <img src="@/assets/image/station/station.png"
           alt="">
      <p>{{stationDetail.name}}</p>
      <!-- <p class="star">
        <van-rate v-model="rate"
                  disabled-color="#FF9656"
                  size="12px"
                  disabled />
        <span>五星级加油站</span>
        <span class="like">
          <van-icon name="like"
                    :color="'#FF9656'"
                    size="10px" />1234</span>
      </p> -->
    </div>
    <div class="oil">
      <div class="left"
           @click="showActionSheet = true">
        <img src="@/assets/image/station/addoil.png"
             alt="">
        <p>{{condition.oil}}
          <van-icon name="arrow-down" />
        </p>
      </div>
      <div class="right">
        <div class="jincai">
          <p>金财价</p>
          <span>
            <span>￥</span>{{stationDetail.price.showPrice}}</span>
        </div>
        <div class="custom">
          <p>加油价</p>
          <span>
            <span>￥</span>{{stationDetail.price.showPrice}}</span>
        </div>
        <div class="other">
          <p>指导价</p>
          <span>
            <span>￥</span>0.82</span>
        </div>
      </div>
    </div>
    <div class="location">
      <p class="title">油站地址</p>
      <span>{{stationDetail.address}}</span>
      <p class="distance">
        <span>距离{{stationDetail.distance}}km</span>
        <a href="javascript:;"
           @click="toLocation">
          <van-icon name="location-o"
                    size="14px" />导航过去</a>
      </p>
    </div>
    <!-- <div class="comment">
      <p class="title">评论列表（共计4000条评论）</p>
      <div>
        <div class="item">
          <p class="title">这个加油站非常棒！！</p>
          <p class="content">由各种物质组成的巨型球状天体，叫做星球。星球有一定的形状，有自己的运行轨道</p>
        </div>
        <div class="item">
          <p class="title">这个加油站非常棒！！</p>
          <p class="content">由各种物质组成的巨型球状天体，叫做星球。星球有一定的形状，有自己的运行轨道</p>
        </div>
      </div>
      <p class="more">
        <a href="javascript:;">查看更多</a>
      </p>
    </div> -->
    <div class="button">
      <a href="javascript:;">立即加油</a>
    </div>
    <van-action-sheet v-model="showActionSheet"
                      :actions="oilOption"
                      @select="onSelect" />
  </div>
</template>

<script>
import { ActionSheet, Rate, Icon } from 'vant'
export default {
  components: {
    [ActionSheet.name]: ActionSheet,
    [Rate.name]: Rate,
    [Icon.name]: Icon
  },
  data() {
    return {
      rate: 5,
      condition: {
        oil: '93#',
        brand: 'a',
        sort: 'a',
        map: 'a'
      },
      showActionSheet: false,
      oilOption: [
        { name: '90#', value: 0 },
        { name: '93#', value: 1 },
        { name: '97#', value: 2 }
      ],
      stationDetail: {}
    }
  },
  created() {
    console.log(this.$route.query.item)
    this.stationDetail = this.$route.query.item
    this.stationDetail.price.showPrice = this.stationDetail.price.e93
  },
  methods: {
    onSelect(item) {
      this.showActionSheet = false
      this.condition.oil = item.name
      switch (item.value) {
        case 0:
          this.stationDetail.price.showPrice = this.stationDetail.price.e90
          break
        case 1:
          this.stationDetail.price.showPrice = this.stationDetail.price.e93
          break
        case 2:
          this.stationDetail.price.showPrice = this.stationDetail.price.e97
          break
        default:
          break
      }
    },
    toLocation() {
      this.$router.push({
        path: '/preview',
        query: {
          url: `https://m.amap.com/navi/?start=116.403124,39.940693&dest=${this.stationDetail.position}&destName=${this.stationDetail.name}&naviBy=car&key=6b04810a078afef84e3a302955848c43`
        }
      })
    }
  }
}
</script>

<style lang="less" scoped>
.station-detail {
  background-color: #f5f5f5;
  overflow: auto;
  min-height: 100vh;
  > .name {
    background: #fff url('~@/assets/image/station/bg.png') center top no-repeat;
    background-size: 100% auto;
    padding-bottom: 20px;
    margin-bottom: 10px;
    > img {
      margin-top: 60px;
      width: 72px;
      height: 72px;
    }
    > p {
      font-size: 17px;
      color: #333;
      font-weight: 600;
      margin-bottom: 12px;
    }
    > .star {
      display: flex;
      font-size: 12px;
      color: #999;
      font-weight: 400;
      padding: 0 72px;
      align-items: center;
      > .van-rate {
        display: flex;
        align-items: center;
        margin-right: 6px;
      }
      > .like {
        flex: 1 0 auto;
        display: flex;
        align-items: center;
        justify-content: flex-end;
        > .van-icon {
          margin-right: 4px;
        }
      }
    }
  }
  > .oil {
    background-color: #fff;
    padding: 24px 0 22px 0;
    margin-bottom: 10px;
    display: flex;
    > .left {
      padding: 0 30px;
      border-right: 1px solid #e2e2e2;
      > p {
        font-size: 14px;
        color: #333;
      }
      > img {
        width: 30px;
        height: 26px;
      }
    }
    > .right {
      display: flex;
      flex: 1 0 auto;
      > div {
        flex: 0 0 33.3333%;
        > p {
          font-size: 14px;
          color: #333;
        }
        > span {
          font-size: 16px;
          color: #666;
          font-weight: 600;
          > span {
            font-size: 13px;
          }
        }
        &.jincai {
          > span {
            color: #f17712;
          }
        }
      }
    }
  }
  > .location {
    background: #fff;
    text-align: left;
    padding: 20px 15px 52px 15px;
    position: relative;
    margin-bottom: 10px;
    > .title {
      font-size: 16px;
      font-weight: 600;
      color: #333;
      margin-bottom: 16px;
    }
    > span {
      font-size: 14px;
      color: #333;
      // width: 50%;
      display: inline-block;
    }
    > .distance {
      position: absolute;
      right: 15px;
      bottom: 20px;
      display: flex;
      align-items: center;
      > span {
        color: #999;
        font-size: 12px;
        margin-right: 12px;
      }
      > a {
        display: inline-block;
        border: 1px solid #ff7d32;
        color: #f17712;
        font-size: 12px;
        padding: 6px 7px 7px 8px;
        border-radius: 3px;
        display: flex;
        align-items: center;
      }
    }
  }
  > .comment {
    text-align: left;
    background-color: #fff;
    padding: 16px;
    overflow: auto;
    margin-bottom: 14px;
    > .title {
      font-size: 16px;
      color: #333;
      font-weight: 600;
      margin-bottom: 22px;
    }
    > div {
      > .item {
        padding-bottom: 16px;
        border-bottom: 1px solid #e5e5e5;
        margin-top: 16px;
        > .title {
          font-size: 15px;
          color: #333;
        }
        > .content {
          font-size: 12px;
          color: #999;
          margin-top: 4px;
        }
      }
    }
    > .more {
      font-size: 12px;
      color: #999;
      text-align: right;
      margin-top: 16px;
      > a {
        padding-right: 16px;
        background: url('~@/assets/image/home/more.png') right 0px no-repeat;
        background-size: 6px 11px;
      }
    }
  }
  > .button {
    padding: 0 15px;
    > a {
      color: #fff;
      background-color: #f17712;
      font-size: 16px;
      display: block;
      padding: 12px 0;
      border-radius: 3px;
      margin-bottom: 13px;
    }
  }
}
</style>
