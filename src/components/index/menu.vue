<template>
  <div class="my-menu">
      <dl class="nav" @mouseleave="menuLeave">
          <dt>全部分类</dt>
          <dd
					v-for="item in menuList"
					:key="item.title"
					@mouseenter="menuEnter(item)"
					>
              <i :class="item.type"></i>
              <router-link to="/">{{ item.name }}</router-link>
							<span class="hot" v-if="item.hot">HOT</span>
              <span class="arrow"></span>
          </dd>
      </dl>
      <div class="detail"
			v-if="curDetail"
			@mouseenter="detailEnter"
			@mouseleave="detailLeave"
			>
        <template v-for="(item, index) in curDetail.items">
					<h4 :key="index">{{ item.title }}</h4>
					<span v-for="v in item.items" :key="v">{{ v }}</span>
				</template>
      </div>
  </div>
</template>

<script>
import api from '@/api/request';

export default {
  data() {
    return {
      curDetail: null,
      menuList: [{
        title: '美食',
        icon: 'food',
        items: [{
          title: '美食',
          items: ['代金券', '甜点饮品', '火锅'],
        }],
      }, {
        title: '外卖',
        icon: 'takeout',
        items: [{
          title: '美食',
          items: ['代金券', '甜点饮品', '火锅'],
        }],
      }, {
        title: '酒店',
        icon: 'hotel',
        hot: true,
        items: [{
          title: '酒店',
          items: ['代金券', '甜点饮品', '火锅'],
        }],
      }, {
        title: '民宿',
        icon: 'homestay',
        items: [{
          title: '美食',
          items: ['代金券', '甜点饮品', '火锅'],
        }],
      }, {
        title: '猫眼电影',
        icon: 'movie',
        items: [{
          title: '美食',
          items: ['代金券', '甜点饮品', '火锅'],
        }],
      }, {
        title: '机票 / 火车票',
        icon: 'airport',
        items: [{
          title: '美食',
          items: ['代金券', '甜点饮品', '火锅'],
        }],
      }, {
        title: '休闲娱乐 / KTV',
        icon: 'ktv',
        items: [{
          title: '美食',
          items: ['代金券', '甜点饮品', '火锅'],
        }],
      }, {
        title: '生活服务',
        icon: 'life',
        items: [{
          title: '美食',
          items: ['代金券', '甜点饮品', '火锅'],
        }],
      }, {
        title: '丽人',
        icon: 'hair',
        items: [{
          title: '美食',
          items: ['代金券', '甜点饮品', '火锅'],
        }],
      }, {
        title: '结婚',
        icon: 'marry',
        items: [{
          title: '美食',
          items: ['代金券', '甜点饮品', '火锅'],
        }],
      }],
      timer: null,
      timer2: null,
    };
  },
  created() {
    api.getNavList().then((resp) => {
      this.menuList = resp.data;
    });
  },
  methods: {
    menuEnter(item) {
      if (this.timer2) {
        return;
      }
      this.timer2 = setTimeout(() => {
        this.curDetail = item;
        clearTimeout(this.timer2);
        this.timer2 = null;
      }, 60);
    },
    menuLeave() {
      this.timer = setTimeout(() => {
        this.curDetail = null;
      }, 200);
    },
    detailEnter() {
      clearTimeout(this.timer);
    },
    detailLeave() {
      this.curDetail = null;
    },
  },
};
</script>

<style lang="scss" scoped>
.my-menu {
    height: 477px;
    border: 1px solid #E5E5E5;
    background-color: #fff;
    padding: 15px 0 8px;
    box-sizing: border-box;
    position: relative;
    margin-top: -50px;
    .nav {
        dt {
            color: #222;
            font-weight: 700;
            font-size: 16px;
            margin-left: 15px;
            margin-bottom: 20px;
        }

        dd {
            height: 26px;
            line-height: 26px;
            box-sizing: border-box;
            padding: 2px 12px;
            font-size: 13px;
            position: relative;

            a {
                color: #646464;
            }
            &:hover {
                color: #222;
                background-color: rgba(255,150,0,0.08);
                a {
                    font-weight: 700;
                }
                .arrow {
                    border-color: #222;
                }
            }
            .arrow {
                width: 4px;
                height: 4px;
                color: #BFBFBF;
                border-bottom: 1px solid #BFBFBF;
                border-right: 1px solid #BFBFBF;
                transform: rotate(-45deg);
                display: block;
                position: absolute;
                right: 13px;
                top: 0;
                bottom: 0;
                margin: auto;
            }
						.hot {
							font-size: 12px;
							color: #222222;
							background: #FFF3CC;
							display: inline-block;
							border-radius: 10px;
							padding: 0 7px;
							margin-left: 5px;
							transform: scale(0.9);
							position: relative;
							opacity: 1;
						}
        }

        dd>i {
            font-family: 'meituan';
            font-size: 14px;
            font-style: normal;
            margin-right: 11px;
        }

        .food {
          &:before {
            content: "\e622";
            color: #FF8200;
          }
        }

        .takeout {
          &:before {
            content: "\e630";
						color: #FFB500;
          }
        }

        .hotel {
          &:before {
            content: "\e62a";
						color: #9B5E3E;
          }
        }

        .homestay {
          &:before {
            content: "\e631";
						color: #FFB500;
          }
        }

        .movie {
          &:before {
            content: "\e62c";
            position: relative;
            left: -2px;
						color: #FF3D00;
          }
        }

        .airport {
          &:before {
            content: "\e632";
						color: #03A9F4;
          }
        }

        .ktv {
          &:before {
            content: "\e627";
						color: #00BF96;
          }
        }

        .life {
          &:before {
            content: "\e633";
						color: #00BF96;
          }
        }

        .hair {
          &:before {
            content: "\e626";
            transform: scale(0.7);
						color: #FF4081;
          }
        }

        .marry {
          &:before {
            content: "\e629";
						color: #FF4081;
          }
        }

        .offspring {
          &:before {
            content: "\e623";
						color: #FF4081;
          }
        }

        .sport {
          &:before {
            content: "\e62b";
						color: #03A9F4;
          }
        }

        .furniture {
          &:before {
            content: "\e625";
						color: #00BF96;
          }
        }

        .study {
          &:before {
            content: "\e624";
						color: #00BF96;
          }
        }

        .health {
          &:before {
            content: "\e628";
						color: #03A9F4;
          }
        }

        .bar {
          &:before {
            content: "\e621";
						color: #00BF96;
          }
        }
    }
    .detail {
        position: absolute;
        top: 57px;
        left: 247px;
        width: 400px;
        height: 416px;
        background-color: #fff;
        padding: 0 30px;
        box-sizing: border-box;
        z-index: 200;
        h4 {
            margin-top: 24px;
            height: 22px;
            line-height: 22px;
            padding-bottom: 10px;
            margin-bottom: 10px;
            border-bottom: 1px solid #e5e5e5;
            font-weight: 500;
            color: #222;
            position: relative;
            &::after {
                content: "更多";
                position: absolute;
                right: 0;
                top: 2px;
                color: #999;
                font-size: 12px;
                cursor: pointer;
            }
        }
        span {
            font-size: 12px;
            color: #999;
            margin-right: 16px;
            margin-top: 10px;
            cursor: pointer;
						&:hover {
							color: #FF8200;
						}
        }
    }
}
</style>
