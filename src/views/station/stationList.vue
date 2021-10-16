<template>
  <div class="station-list">
    <div class="search">
      <van-search placeholder="搜索附近的加油站"
                  v-model="value"
                  @search="onSearch"
                  shape="round" />
    </div>
    <div class="ad">
      <img src="@/assets/image/station/ad_1.png"
           alt="">
    </div>
    <div class="filter">
      <van-dropdown-menu>
        <van-dropdown-item class="oil"
                           v-model="condition.oil"
                           :options="oilOption"
                           @change="changeOilOption" />
        <van-dropdown-item v-model="condition.brand"
                           :options="brandOption" />
        <van-dropdown-item v-model="condition.sort"
                           :options="sortOption" />
        <van-dropdown-item v-model="condition.map"
                           :options="mapOption" />
      </van-dropdown-menu>
    </div>
    <div class="list">
      <div class="item"
           v-for="item in oliStation"
           :key="item.Id"
           @click="toDetail(item)">
        <img src="@/assets/image/station/station.png"
             alt="">
        <div>
          <p class="name">{{item.name}}</p>
          <van-rate v-model="rate"
                    disabled-color="#FF9656"
                    size="12px"
                    disabled />
          <p class="comment">{{item.fwlsmc}}</p>
        </div>
        <p class="mount">
          <span class="actual">¥{{item.price.e93}}</span>
          <!-- <span class="custom">¥{{item.price.e93}}</span> -->
        </p>
        <p class="distance">
          <span class="">距离{{item.distance}}km</span>
          <!-- <span class="count">
            <van-icon name="like"
                      :color="'#FF9656'"
                      size="10px" />1234</span> -->
        </p>
      </div>
    </div>
  </div>
</template>

<script>
import { mapState } from 'vuex'
import { Search, DropdownMenu, DropdownItem, Rate, Icon } from 'vant'
export default {
  components: {
    [Search.name]: Search,
    [DropdownMenu.name]: DropdownMenu,
    [DropdownItem.name]: DropdownItem,
    [Rate.name]: Rate,
    [Icon.name]: Icon
  },
  data() {
    return {
      value: '',
      condition: {
        oil: 1,
        brand: 'a',
        sort: 'a',
        map: 'a'
      },
      rate: 3,
      oilOption: [
        { text: '#90', value: 0 },
        { text: '#93', value: 1 },
        { text: '#97', value: 2 }
      ],
      brandOption: [
        { text: '全部品牌', value: 'a' },
        { text: '全部品牌', value: 'b' },
        { text: '全部品牌', value: 'c' }
      ],
      sortOption: [
        { text: '综合排序', value: 'a' },
        { text: '综合排序', value: 'b' },
        { text: '综合排序', value: 'c' }
      ],
      mapOption: [
        { text: '地图模式', value: 'a' },
        { text: '地图模式', value: 'b' },
        { text: '地图模式', value: 'c' }
      ]
    }
  },
  created() {
    this.initData()
  },
  computed: {
    ...mapState({
      coordinateInfo: state => state.cityInfo.coordinateInfo || {},
      oliStation: state => state.cityInfo.oliStation || []
    })
  },
  methods: {
    initData() {
      let reqParams = {
        ...this.coordinateInfo,
        page: 1
      }
      this.$store.dispatch('initOilStation', reqParams)
    },
    onSearch() {
    },
    toDetail(item) {
      this.$router.push({
        path: '/stationDetail',
        query: {
          item: item
        }
      })
    },
    changeOilOption(value) {
      switch (value) {
        case 0:
          this.oliStation.forEach(item => {
            item.price.showPrice = item.price.e90
          })
          break
        case 1:
          this.oliStation.forEach(item => {
            item.price.showPrice = item.price.e93
          })
          break
        case 2:
          this.oliStation.forEach(item => {
            item.price.showPrice = item.price.e97
          })
          break
        default:
          break
      }
    }
  }
}
</script>

<style lang="less" scoped>
.station-list {
  > .search {
    background-color: #fff;
    padding: 10px 15px;
    > .van-search {
      > .van-search__content {
        border-radius: 5px;
        > .van-cell {
          padding-left: 8px;
          background-color: #f0f1f4;
          border-radius: 5px;
          .van-field__control {
          }
        }
      }
    }
  }
  > .ad {
    height: 110px;
    > img {
      height: 110px;
    }
  }
  > .list {
    > .item {
      display: flex;
      margin: 16px;
      border-bottom: 1px solid #eaeaea;
      padding-bottom: 13px;
      position: relative;
      > img {
        width: 82px;
        height: 82px;
      }
      > div {
        flex: 1 1 auto;
        text-align: left;
        margin-left: 12px;
        > .van-rate {
          font-size: 12px;
          margin-top: 7px;
          margin-bottom: 8px;
        }
        > .name {
          font-size: 15px;
          color: #333;
          font-weight: 600;
        }
        > .comment {
          font-size: 13px;
          color: #666;
          overflow: hidden; /*超出部分隐藏*/
          text-overflow: ellipsis; /* 超出部分显示省略号 */
          white-space: nowrap; /*规定段落中的文本不进行换行 */
          width: 200px;
        }
      }
      > .mount {
        position: absolute;
        top: 16px;
        right: 0;
        > .actual {
          font-size: 16px;
          color: #f42222;
        }
        > .custom {
          font-size: 11px;
          color: #999;
        }
      }
      > .distance {
        position: absolute;
        bottom: 10px;
        right: 0;
        display: flex;
        align-items: center;
        > span {
          font-size: 12px;
          color: #999;
        }
        > .count {
          display: flex;
          align-items: center;
          margin-left: 12px;
          > .van-icon {
            margin-right: 4px;
          }
        }
      }
    }
  }
}
</style>
<style lang="less">
.station-list {
  > .filter {
    box-shadow: 0px 1px 0px 0px rgba(0, 0, 0, 0.16);
    .van-dropdown-menu__item {
      flex: 1 1 25%;
      justify-content: flex-start;
      &:first-child {
        flex: 0 1 18%;
        margin-left: 12px;
      }
      .van-dropdown-menu__title {
        font-size: 14px !important;
        text-align: left;
      }
    }
  }
}
</style>
