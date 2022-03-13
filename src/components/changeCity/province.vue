<template>
   <div class="province">
       <span>按省份选择:</span>
       <MSelect
       :list="provinceList"
       title="省份"
       :value="province"
       :showList="showProvince"
       @changeValue="changeProvince"
       @activeList="activeProvince"
       />
       <MSelect
       :list="cityList"
       title="城市"
       :value="city"
       :disable="disable"
       :showList="showCity"
       @activeList="activeCity"
       @changeValue="changeCurCity"
       />
       <span class="search">直接搜索:</span>
       <el-select
        v-model="value"
        multiple
        filterable
        remote
        reserve-keyword
        placeholder="请输入城市名"
        :remote-method="remoteMethod"
        :loading="loading">
            <el-option
            v-for="(item, i) in searchList"
            :key="i"
            :label="item.label"
            :value="item.value">
            </el-option>
        </el-select>
   </div>
</template>

<script>
import { mapActions } from 'vuex';
import api from '@/api/request';
import MSelect from './select.vue';

export default {
  components: {
    MSelect,
  },
  created() {
    api.getProvince().then((resp) => {
      this.provinceList = resp.data.map((item) => ({
        ...item,
        name: item.provinceName,
      }));
    });
  },
  data() {
    return {
      provinceList: [],
      cityList: [],
      searchList: [],
      province: '省份',
      city: '城市',
      showProvince: false,
      showCity: false,
      disable: true,
      loading: false,
      value: '',
    };
  },
  methods: {
    ...mapActions(['changeCity']),
    activeProvince(flag) {
      this.showProvince = flag;
      if (flag) {
        this.showCity = false;
      }
    },
    activeCity(flag) {
      this.showCity = flag;
      if (flag) {
        this.showProvince = false;
      }
    },
    changeProvince(item) {
      this.province = item.name;
      this.showProvince = false;
      this.disable = false;
      this.cityList = item.cityInfoList;
    },
    changeCurCity(item) {
      this.city = item.name;
      this.changeCity(item.name);
      this.$router.push('/');
    },
    remoteMethod() {},
  },
};
</script>

<style lang="scss" scoped>
 .province {
     span {
         margin-right: 10px;
         color: #333;
         font-weight: 500;
     }
     .search {
         margin-left: 40px;
         margin-right: 20px;
     }
 }
</style>
