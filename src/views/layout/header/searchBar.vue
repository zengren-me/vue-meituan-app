<template>
  <div class="search-bar">
      <el-col :span="6">
        <div class="logo">
          <router-link to="/">
              <img src="//s0.meituan.net/bs/fe-web-meituan/10afbf1/img/logo.png" alt="">
          </router-link>
        </div>
      </el-col>
      <el-col :span="15">
        <div class="search-content">
           <div class="search-block">
             <input type="text" class="search-inp" placeholder="搜索商家或地点"
             @focus="focus"
             @blur="blur"
             @input="input"
             v-model="searchWord"
             >
             <button class="search-btn" @click="postData(searchWord)">
               <i class="el-icon-search"></i>
             </button>
           </div>
           <div class="search-list"
           v-if="showSearchList"
           >
             <div class="history" v-if="showHistory">
               <h6>最近搜索</h6>
               <span class="search-clear" @click="delHistory">删除搜索历史</span>
               <ul>
                 <li v-for="item in searchHistory" :key="item.time" @click="postData(item.value)">
                   {{ item.value }}
                 </li>
               </ul>
             </div>
             <div class="currentInput" v-else>
               <ul>
                 <li v-for="(item, i) in searchList" :key="i" @click="postData(item)">{{item}}</li>
               </ul>
             </div>
           </div>
        </div>
       </el-col>
  </div>
</template>

<script>
import { mapMutations, mapState } from 'vuex';
import api from '@/api/request';

export default {
  data() {
    return {
      showSearchList: false,
      showHistory: false,
      searchList: [],
      searchWord: '',
    };
  },
  computed: {
    ...mapState({
      searchHistory: (state) => state.searchHistory,
    }),
  },
  methods: {
    ...mapMutations(['changeHistory']),
    delHistory() {
      this.changeHistory({ type: 'remove' });
      this.showHistory = false;
    },
    focus() {
      this.showSearchList = true;
      if (this.searchHistory.length > 0 && this.searchWord === '') {
        this.showHistory = true;
      }
    },
    blur() {
      this.timer = setTimeout(() => {
        this.showSearchList = false;
      }, 200);
    },
    input() {
      this.showHistory = false;
      if (this.searchWord === '') {
        if (this.searchHistory.length > 0) {
          this.showHistory = true;
        } else {
          this.searchList = [];
        }
        return;
      }
      // deBounce
      if (this.timer1) {
        clearTimeout(this.timer1);
      }
      this.timer1 = setTimeout(() => {
        api.getSearchList().then((resp) => {
          this.searchList = resp.data.list.filter((item) => item.indexOf(this.searchWord) !== -1);
        });
      }, 100);
    },
    postData(data) {
      this.changeHistory({ type: 'set', value: data });
      if (this.$route.params.name !== data) {
        this.$router.push({
          name: 'GoodsList',
          params: {
            name: data,
          },
        });
      }
    },
  },
};
</script>

<style lang="scss" scoped>
.search-bar {
  padding-top: 28px;
  padding-bottom: 35px;
  box-sizing: border-box;
  background-color: #fff;
  width: 1190px;
  height: 157px;
  margin: 0 auto;

  .el-col:nth-child(1) {
    margin-right: 30px;
  }

  .logo {
    img {
      width: 126px;
      height: 43px;
    }
  }

  .search-content {
    width: 550px;
    height: 65px;

    .search-block {
      width: 100%;
      height: 40px;

      .search-inp {
        width: 85.45%;
        height: 100%;
        line-height: 100%;
        border: 1px solid #E5E5E5;
        border-right: none;
        border-radius: 4px 0 0 4px;
        box-sizing: border-box;
        padding: 15px;
        outline: none;
        font-size: 14px;
      }

      .search-btn {
        width: 14.55%;
        height: 100%;
        border: none;
        outline: none;
        background-color: #FFC300;
        box-sizing: border-box;
        font-size: 20px;
        vertical-align: top;
        cursor: pointer;
        border-radius: 0 4px 4px 0;
      }
    }

    .search-list {
      width: 85.45%;
      border:1px solid #E5E5E5;
      border-top: none;
      border-radius: 0 0 4px 4px;
      background-color: #fff;
      font-size: 12px;
      box-shadow: 0 4px 5px 0 rgba(0, 0, 0, 0.1);
      position: relative;
      z-index: 100;
      color: #999;
      min-height: 25px;
      box-sizing: border-box;
      li {
        cursor: pointer;
      }
      .history {
        position: relative;
        padding: 10px;

        h6 {
          margin: 0;
          padding-bottom: 5px;
        }
        .search-clear {
          position: absolute;
          top: 10px;
          right: 20px;
          cursor: pointer;
        }

        ul {
          padding: 5px 3px 10px;
          li {
            display: inline-block;
            margin-right: 10px;
            color:#666;
            cursor: pointer;

            &:hover {
              color: #FE8C00;
            }
          }
        }
      }

      .currentInput {
        li {
          padding: 3px 10px;
          line-height: 1.6;
          color: #333;
        }
      }
    }
  }
}
</style>
