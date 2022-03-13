import axios from './axios';

export default {
  getProvince() {
    return axios.get('/api/meituan/city/province.json');
  },
  getHotCity() {
    return axios.get('/api/meituan/city/hot.json');
  },
  getRencentCity() {
    return axios.get('/api/meituan/city/recents.json');
  },
  getCityList() {
    return axios.get('/api/meituan/city/cityList.json');
  },
  getSearchList() {
    return axios.get('/api/meituan/header/search.json');
  },
  getNavList() {
    return axios.get('/api/meituan/index/nav.json');
  },
  getClassify() { // 获得产品列表头部分类数据
    return axios.get('/api/meituan/list/classify.json');
  },
  getAreaList() { // 产品列表头部推荐商圈
    return axios.get('/api/meituan/list/areaList.json');
  },
  getGoodsList() {
    return axios.get('/api/meituan/list/goodsList.json');
  },
  getRecommend() {
    return axios.get('/api/meituan/list/recommend.json');
  },
  getPosition() { // 获取位置列表，筛选出当前城市对应的其他城市
    return axios.get('/api/meituan/city/getPosition.json');
  },
  getDetail() {
    return axios.get('/api/meituan/product/detail.json');
  },
  login(params) {
    return axios.get('/api/meituan/login', { params });
  },
  register(params) {
    console.log(params);
    return axios.get('/api/meituan/register', { params });
  },
};
