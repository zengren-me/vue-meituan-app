<template>
  <div class="select">
    <dl>
      <dt class="item">
        <span>{{ title }}</span>
        <i class="el-icon-caret-bottom" v-if="subList.length"></i>
      </dt>
      <dl class="content" v-if="subList.length">
        <dt>{{ title }}</dt>
        <span v-for="item in subList" :key="item.id">{{ item.name }}</span>
      </dl>
    </dl>
  </div>
</template>

<script>
export default {
  props: ['title', 'subList'],
};
</script>
<style lang="scss" scoped>
.select {
  dl {
    width: 120px;
    position: relative;
    padding-bottom: 10px;
    .item {
      padding: 0 10px;
      position: relative;
      cursor: pointer;
      font-size: 14px;
      color: #666;
      i {
        margin-left: 2px;
      }
    }
    &:hover {
      >.content {
        display: block;
        z-index: 999;
      }
    }
    .content {
      display: none;
      padding: 19px 15px 9px;
      width: 510px;
      // height: 130px;
      border: 1px solid #e5e5e5;
      box-shadow: 0 3px 5px 0 rgba(0,0,0,.1);
      position: absolute;
      top: 25px;
      left: 0;
      z-index: 999;
      border-radius: 4px;
      background-color: #fff;
      dt {
        margin-bottom: 11px;
        color: #ccc;
        font-size: 16px;
        height: 22px;
        line-height: 22px;
        cursor: default;
      }
      span {
        display: inline-block;
        min-width: 120px;
        font-size: 12px;
        padding-bottom: 11px;
        cursor: pointer;
      }
      ::before {
          content: "";
          position: absolute;
          top: -13px;
          left: 26px;
          border: 6px solid transparent;
          border-bottom-color: #e5e5e5;
      }
      &::after {
          content: "";
          position: absolute;
          top: -12px;
          left: 26px;
          border: 6px solid transparent;
          border-bottom-color: #fff;
      }
    }
  }
}
</style>
