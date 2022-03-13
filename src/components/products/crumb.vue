<template>
  <div class="crumb">
    <router-link to="/">{{ $store.state.currentCity }}美团</router-link>
    <router-link :to="'/s/' + $route.params.name" v-if="foodName">
      {{ $store.state.currentCity }}美食
    </router-link>
    <router-link :to="'/s/' + $route.params.name">
      {{ $store.state.currentCity + $route.params.name }}
    </router-link>
  </div>
</template>

<script>
export default {
  props: ['foodName'],
};
</script>

<style lang="scss" scoped>
.crumb {
  margin: 20px 0;
  a {
    display: inline-block;
    font-size: 12px;
    color: #222;
    padding-right: 8px;
    margin-right: 4px;
    position: relative;
    &::after {
      content: "";
      width: 4px;
      height: 4px;
      color: #000;
      border-bottom: 1px solid #000;
      border-right: 1px solid #000;
      transform: rotate(-45deg);
      display: block;
      position: absolute;
      right: 0px;
      top: 0;
      bottom: 0;
      margin: auto;
    }
    &:last-child::after {
      display: none;
    }
  }
}
</style>
