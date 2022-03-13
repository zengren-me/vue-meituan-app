<template>
  <div class="category">
      <dl class="classify">
          <dt>分类</dt>
          <dt class="active">全部</dt>
          <dl class="tags">
            <dd v-for="list in classifyList" :key="list.title">
              <Select :title="list.title" :subList="list.subList"/>
            </dd>
          </dl>
      </dl>
      <dl class="classify">
          <dt>区域</dt>
          <dt class="active">全部</dt>
          <dl class="tags">
            <dd v-for="list in areaList" :key="list.title">
              <Select :title="list.title" :subList="list.subList"/>
            </dd>
          </dl>
      </dl>
  </div>
</template>

<script>
import api from '@/api/request';
import Select from './select.vue';

export default {
  components: {
    Select,
  },
  data() {
    return {
      classifyList: [],
      areaList: [{
        title: '推荐商圈',
        subList: [{
          name: '望京',
          id: 120000,
        }, {
          name: '昌平',
          id: 12222,
        }],
      }, {
        title: '南岗区',
        subList: [{
          name: '中央大街',
          id: 123,
        }, {
          name: '西客站',
          id: 11,
        }, {
          name: '花园街',
          id: 222,
        }, {
          name: '通乡街/果园街',
          id: 21,
        }, {
          name: '爱建社区',
          id: 1,
        }, {
          name: '学府路',
          id: 34,
        }],
      }],
    };
  },
  created() {
    api.getClassify().then((resp) => {
      this.classifyList = resp.data;
    });
  },
};
</script>

<style lang="scss" scoped>
.category {
  padding-bottom: 15px;
  background-color: #fff;
  border: 1px solid #e5e5e5;
  border-radius: 4px;
  .classify {
    display: flex;
    padding: 15px 20px 0;
    dt {
      display: inline-block;
      margin-right: 38px;
      height: 22px;
      line-height: 22px;
      padding: 0 10px;
      font-size: 14px;
      &.active {
        border-radius: 100px;
        background: linear-gradient(to bottom right,#FFD000,#FFBD00);
        color: #222;
      }
    }
    .tags {
      width: 728px;
      dd {
        display: inline-block;
      }
    }
    &:nth-child(1) .tags{
        border-bottom: 1px solid #e5e5e5;
      }
  }
}
</style>
