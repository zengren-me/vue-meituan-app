<template>
  <div class="detail-wrap">
      <el-row>
        <Crumb :foodName="true"/>
      </el-row>
      <el-row>
        <Content
        :imgUrl="list.imgUrl"
        :score="list.score"
        :avgPrice="list.avgPrice"
        :title="list.title"
        :address="list.address"
        :phone="list.phone"
        :service="list.service"
        :businessTime="list.businessTime"
        />
      </el-row>
      <el-row>
        <Cont
        :dealItems="list.dealItems"
        :recommend="list.recommend"
        :comment="list.comment"
        :commentNum="list.commentNum"/>
      </el-row>
  </div>
</template>

<script>
import api from '@/api/request';
import Crumb from '@/components/products/crumb.vue';
import Content from '@/components/detail/content.vue';
import Cont from '@/components/detail/cont.vue';

export default {
  components: {
    Crumb,
    Content,
    Cont,
  },
  data() {
    return {
      list: [],
    };
  },
  created() {
    api.getDetail().then((resp) => {
      this.list = resp.data;
    });
  },
};
</script>

<style lang="scss" scoped>
.detail-wrap {
  width: 1190px;
  height: 500px;
  margin: 0 auto;
}
</style>
