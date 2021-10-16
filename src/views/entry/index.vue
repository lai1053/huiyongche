<template>
  <div class="entry">
    <van-tabbar v-model="tabbarNum"
                v-show="tabbarShow"
                active-color="#EE7B3D"
                class="active_tab">
      <van-tabbar-item
        v-for="(item, index) in tabbars"
        :key="index"
        @click="tab(index, item.name)"
      >
        <span>{{item.title}}</span>
        <template slot="icon" slot-scope="props">
          <img :src="props.active ? item.active : item.normal">
        </template>
      </van-tabbar-item>
    </van-tabbar>

    <router-view />
  </div>
</template>

<script>
import router from '@/router'
import { mapGetters, mapActions } from 'vuex'
import { Tabbar, TabbarItem } from 'vant'
export default {
  name: 'entry',
  components: {
    [Tabbar.name]: Tabbar,
    [TabbarItem.name]: TabbarItem
  },
  data () {
    return {
      tabbars: [
        {
          name: 'home',
          title: '租车',
          normal: require('../../assets/image/tabbar/home.png'),
          active: require('../../assets/image/tabbar/home@1x.png')
        },
        {
          name: 'vehicles',
          title: '养车',
          normal: require('../../assets/image/tabbar/vehicles.png'),
          active: require('../../assets/image/tabbar/vehicles@1x.png')
        },
        {
          name: 'user',
          title: '我的',
          normal: require('../../assets/image/tabbar/user.png'),
          active: require('../../assets/image/tabbar/user@1x.png')
        }
      ]
    }
  },
  computed: {
    ...mapGetters([
      'tabbarActive', 'tabbarShow'
    ]),

    tabbarNum: {
      get () {
        return this.tabbarActive
      },
      set (val) {
        this.setTabbarActive(val)
      }
    }
  },
  methods: {
    ...mapActions([
      'setTabbarActive'
    ]),

    tab (index, val) {
      router.disAnimation = true
      this.setTabbarActive(index)
      this.$router.replace(val)
    }
  }
}
</script>

<style scoped lang="less">
.entry{
  height: 100%;
  .active_tab{
    height: 50px;
  }
}
</style>
