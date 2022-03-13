<template>
    <div class="category">
        <dl class="nav">
            <dt>按拼音首字母选择:</dt>
            <dd v-for="item in words" :key="item">
                <a :href="'#city-' + item">{{ item }}</a>
            </dd>
        </dl>
        <dl class="list" v-for="(items, i) in cityList" :key="i" :id="'city-' + i">
            <dt>{{ i }}</dt>
            <dd>
                <span v-for="item in items" :key="item"
                @click="changeCurCity(item)">{{ item }}</span>
            </dd>
        </dl>
    </div>
</template>

<script>
import { mapActions } from 'vuex';
import api from '@/api/request';

export default {
  data() {
    return {
      words: 'ABCDEFGHIJKLMNPQRSTWXYZ'.split(''),
      cityList: {},
    };
  },
  created() {
    api.getCityList().then((resp) => {
      const obj = {};
      resp.data.forEach((item) => {
        const word = item.firstChar.toUpperCase();
        if (!this.cityList[item.firstChar]) {
          obj[word] = [];
        }
        obj[word].push(item.name);
      });
      this.cityList = obj;
    });
  },
  methods: {
    ...mapActions(['changCity']),
    changeCurCity(item) {
      this.changeCity(item);
      this.$router.push('/');
    },
  },
};
</script>

<style lang="scss" scoped>
.category {
  .nav {
    padding: 30px 0;
    dt, dd {
        display: inline-block;
    }
    dt {
        color: #333;
        vertical-align: top;
        font-weight: 500;
        margin-right: 20px;
    }
    dd {
        width: 25px;
        height: 25px;
        line-height: 25px;
        margin: 0 8px;
        font-size: 14px;
        color: #666;
        padding-top: 2px;
        cursor: pointer;
        text-align: center;
        &:hover {
            color: #222;
            font-weight: 500;
            background-color: #f8f8f8;
            border-radius: 50%;
        }
    }
  }
  .list {
    padding: 13px 30px 13px 10px;
    display: flex;
    transition: background-color 500ms;
    border-radius: 10px;
    &:hover {
       background: #F8F8F8;
       span {
           color: #222;
           font-weight: 500;
       }
    }
    dt {
        box-sizing: border-box;
        vertical-align: top;
        padding-top: 10px;
        display: inline-block;
        text-align: center;
        width: 40px;
        height: 40px;
        border-radius: 50%;
        color: #222222;
        background: #FFD000;
    }
    dd {
        flex: 1;
        span {
            cursor: pointer;
            display: inline-block;
            margin: 10px 20px;
            color: #666;
            font-size: 14px;
        }
    }
  }
}
</style>
