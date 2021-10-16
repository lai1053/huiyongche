<template>
  <div class="mayPersonalListInfo">
    <div class="mayPersonalListInfo-title">
      <van-cell-group>
        <van-field v-model="username"
                   required
                   clearable
                   size="large"
                   label="用户名"
                   placeholder="请输入用户名" />

      </van-cell-group>
      <van-cell-grou>
        <div class="taitou">
          <span> 默认抬头</span>
          <div>
            <van-switch v-model="checked" />
          </div>
        </div>
      </van-cell-grou>
    </div>
    <div class="centnt">
      <van-address-edit :area-list="areaList"
                        show-postal
                        show-delete
                        show-set-default
                        show-search-result
                        :search-result="searchResult"
                        @save="onSave"
                        @delete="onDelete"
                        @change-detail="onChangeDetail" />
    </div>

  </div>
</template>

<script>
import { CellGroup, Cell, Field, Switch, AddressEdit } from 'vant'
export default {
  name: 'mayPersonalListInfo',
  components: {
    [CellGroup.name]: CellGroup,
    [Cell.name]: Cell,
    [Field.name]: Field,
    [Switch.name]: Switch,
    [AddressEdit.name]: AddressEdit
  },
  data() {
    return {
      username: '',
      checked: false,
      areaList: {},
      searchResult: []
    }
  },
  methods: {
    onSave() {
    },
    onDelete() {
    },
    onChangeDetail(val) {
      if (val) {
        this.searchResult = [{
          name: '黄龙万科中心',
          address: '杭州市西湖区'
        }]
      } else {
        this.searchResult = []
      }
    }
  }
}
</script>

<style scoped  lang="less">
.mayPersonalListInfo {
  background-color: white;
  .mayPersonalListInfo-title {
    margin-top: 20px;
    .taitou {
      display: block;
      font-size: 16px;
      span {
        float: left;
        padding-left: 20px;
        padding-top: 20px;
      }
      div {
        float: right;
        padding-right: 20px;
        padding-top: 15px;
      }
    }
  }
  .centnt {
    margin-top: 60px;
  }
}
</style>
