<template>
  <div class='lease-comp'>
    <div class="my-lease-header">
      <img src="@/assets/image/rent/car.png" />
      <span>{{rowItem.carRentalCompany}}</span>
    </div>
    <div class="h-divide"
         style="margin: 15px 0;"></div>
    <div class="row-item">
      <span>车牌号</span>
      <span>{{rowItem.licensePlate}}</span>
    </div>
    <div class="row-item">
      <span>车辆品牌</span>
      <span>{{rowItem.vehicleBrand}}</span>
    </div>
    <div class="row-item">
      <span>租赁期限</span>
      <span>{{rowItem.startDate}}-{{rowItem.endDate}}</span>
    </div>
    <div class="row-item">
      <span>月租金</span>
      <span>{{rowItem.monthlyRent}}</span>
    </div>
    <div class="row-item">
      <span>月租车时长</span>
      <span>{{rowItem.rentDuration}}</span>
    </div>
    <div class="row-item">
      <span>租约状态</span>
      <span>{{rowItem.rentState}}</span>
    </div>
  </div>
</template>
<script>
export default {
  name: 'LeaseComp',
  props: {
    rowItem: {
      type: Object,
      required: true
    }
  }
}
</script>
<style lang="less" scoped>
@import url("~@/styles/rentCommon");
.lease-comp {
  margin-top: 10px;
  padding: 15px 15px 20px 15px;
  background-color: #ffffff;
  border-radius: 3px;
  .my-lease-header {
    display: flex;
    justify-content: flex-start;
    align-items: center;
    img {
      width: 40px;
      height: 40px;
      border-radius: 50%;
    }
    span {
      margin-left: 19px;
      font-size: 18px;
      color: #333333;
      overflow: hidden;
      white-space: nowrap;
      text-overflow: ellipsis;
    }
  }
}
</style>
