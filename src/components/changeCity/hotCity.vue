<template>
  <div class="hot">
      <dt>{{ title }} :</dt>
      <dd v-for="item in list" :key="item.id" @click="changeCurCity(item)">{{ item.name }}</dd>
  </div>
</template>

<script>
import { mapActions } from 'vuex';

export default {
  props: ['title', 'list'],
  methods: {
    ...mapActions(['changeCity']),
    changeCurCity(item) {
      this.changeCity(item.name);
      this.$router.push('/');
    },
  },
};
</script>

<style scoped>
dt {
   display: inline-block;
   width: 80px;
   color: #333;
   font-weight: 500;
   vertical-align: top;
   text-align: left;
}

dd {
   display: inline-block;
   margin: 0 20px;
   color: #666;
   font-size: 14px;
   cursor: pointer;
}
</style>
