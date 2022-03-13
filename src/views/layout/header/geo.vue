<template>
    <div class="my-geo">
        <div class="position">
            <i class="el-icon-location"></i>
            <span class="city">{{ currentCity }}</span>
            <router-link class="changCity" to="/changeCity">切换城市</router-link>
            [
            <a v-for="city in nearCity" :key="city.name" @click="switchCity(city)">
                {{ city.name }}
            </a>
            ]
        </div>
        <div class="user">
            <div class="login" v-if="!$store.state.user" :key="1">
              <router-link to="/login">立即登录</router-link>
              <router-link to="/register">注册</router-link>
            </div>
            <div class="logout" v-if="user" :key="2">
              <router-link to="/">{{ user.userName }}</router-link>
              <router-link to="/">
              <span @click="logOut">退出</span>
              </router-link>
            </div>
        </div>
    </div>
</template>

<script>
import { mapState, mapMutations, mapActions } from 'vuex';
import api from '@/api/request';

export default {
  data() {
    return {
      nearCity: [],
    };
  },
  created() {
    api.getPosition().then((resp) => {
      this.nearCity = resp.data.nearCity;
      this.changeCity(resp.data.name);
    });
    this.getLocalUser();
  },
  computed: {
    ...mapState({
      currentCity: (state) => state.currentCity,
      user: (state) => state.user,
    }),
  },
  methods: {
    ...mapMutations(['changeCity', 'getUser']),
    ...mapActions(['getLocalUser']),
    switchCity(city) {
      this.changeCity(city.name);
    },
    logOut() {
      localStorage.removeItem('user');
      this.getUser(null);
    },
  },
};
</script>

<style lang="scss" scoped>
.my-geo {
    .position {
        display: inline-block;
        >.el-icon-location {
            font-size: 16px;
        }

        .city {
            color: #666;
        }

        .changCity {
            margin: 0 4px;
            color: #666;
            padding: 0 2px;
            border: 1px solid #E5E5E5;
            background-color: #F4F4F4;

            &:hover {
                color: #FE8C00;
            }
        }

        a {
            margin: 0 4px;
            cursor: pointer;
        }
    }

    .user {
        display: inline-block;
        margin-left: 15px;

        .login, .logout {
            display: inline-block;
            a {
              margin-right: 10px;
              color: #FE8C00;
            }
            a:last-child{
              color: #999;
              &:hover {
                color: #FE8C00;
              }
            }
        }
    }
}

</style>
