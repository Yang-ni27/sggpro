<template>
  <div>
    <ul class="footer">
      <li class="footer-item" @click="goto('/')" :class="{active:rs=='/'}">
        <div>
           <img src="../assets/imags/index_enabled.png" alt="" v-if="rs=='/'">
          <img src="../assets/imags/index_disabled.png" alt="" v-else>
         
          </div>
        <p>首页</p>
      </li>
      <li class="footer-item" @click="goto('/search')" :class="{active:rs=='/search'}">
        <div>
          <img src="../assets/imags/search_enabled.png" alt=""
          v-if="rs=='/search'">
          <img src="../assets/imags/search_disabled.png" alt="" v-else>
          
          </div>
         <p>搜索</p>
      </li>
      <li class="footer-item" @click="goto('/order')" :class="{active:rs=='/order'}">
        <div>
          <img src="../assets/imags/order_enabled.png" alt=""
          v-if="rs=='/order'">
          <img src="../assets/imags/order_disabled.png" alt="" v-else>
          
          </div>
        <p>订单</p>
      </li>
      <li class="footer-item" @click="goto('/profile')" :class="{active:rs=='/profile'}">
        <div>
          <img src="../assets/imags/me_enabled.png" alt="" v-if="rs=='/profile'">
          <img src="../assets/imags/me_disabled.png" alt="" v-else>
         
          </div>
        <p>我的</p>
      </li>
    </ul>
  </div>
</template>
<style lang="stylus">
   @import '../common/stylus/mixins.styl'
  .footer
    top-border-1px(#808080)
    display flex 
    position fixed
    left 0
    righ 0
    bottom 0
    width 100%
    height 50px
    box-sizing border-box
    text-align center
    color #999
    font-size 12px
    .footer-item
      width 25%
      div 
        // margin 5px auto
        line-height 34px
      &.active 
        color #02a774
        background-color #f1f1f1
        
</style>
<script>
export default {
  data(){
    return {
      rs:'/'
    }
  },
  methods:{
    goto(path){
      this.rs=path
      // this.$router.push(path)
    }
  }
}
</script>