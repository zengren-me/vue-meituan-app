<template>
  <div id="app">
    <router-view/>
  </div>
</template>

<script>
import { mapActions, mapMutations } from 'vuex';

export default {
  created() {
    this.setHistory(JSON.parse(localStorage.getItem('searchHistory')) || []);
    this.getLocalUser();
  },
  methods: {
    ...mapMutations(['setHistory', 'getUser']),
    ...mapActions(['getLocalUser']),
  },
};
</script>

<style lang="scss">
</style>
