<template>
  <div class='index'>
    <iframe :src="url"
            :height="height"
            :width="width"></iframe>
  </div>
</template>
<script>
export default {
  name: 'index',
  data() {
    return {
      url: ''
    }
  },
  created() {
    this.url = this.$route.query.url
  },
  computed: {
    height: function () {
      return document.documentElement.clientHeight
    },
    width: function () {
      return document.documentElement.clientWidth
    }
  }
}
</script>
<style lang="less" scoped>
</style>
