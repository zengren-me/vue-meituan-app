<template>
    <div class="container">
        <dl class="maoyan" @mouseover="over">
            <dt>猫眼电影</dt>
            <dd
            v-for="item in navList" :key="item.text"
            :class="{active:kind === item.tab}"
            :data-type="item.tab"
            >{{ item.text }}</dd>
        </dl>
        <div class="content" ref="content">
          <ul :style="{marginLeft:marginLeft+'px', width: itemsWidth + 'px'}">
            <li v-for="(item, i) in itemList[kind]" :key="i">
              <router-link to="/">
                <img class="film-img" :src="item.src" alt="">
                <img class="film-mask" v-if="item.mask"
                src="//s0.meituan.net/bs/fe-web-meituan/6937298/img/imax.png" alt="">
                <div class="film-info">
                  <p class="film-score">
                      <b v-if="!item.want">观众评
                        <span>{{ item.score }}</span>
                      </b>
                      <b v-else>
                        <span>{{ item.wantNum }}</span>
                        想看
                      </b>
                  </p>
                  <p class="film-name">{{ item.title }}</p>
                  <span v-if="!item.want">购票</span>
                  <span v-if="item.ticket">预售</span>
                </div>
              </router-link>
            </li>
          </ul>
          <div class="btn btn-next" @click="slide(1)">
            <span></span>
          </div>
          <div class="btn btn-prev" @click="slide(-1)">
            <span></span>
          </div>
        </div>
    </div>
</template>

<script>
export default {
  data() {
    return {
      marginLeft: 0,
      navList: [{
        text: '正在热映',
        tab: 'hot',
      }, {
        text: '即将上映',
        tab: 'now',
      }],
      kind: 'hot',
      itemList: {
        hot: [{
          title: '长津湖之水门桥',
          src: 'https://p0.pipi.cn/mmdb/25bfd6be9abc7e8d3311e5bd9b6d287be0f28.png?imageMogr2/thumbnail/2500x2500',
          score: 9.6,
          mask: true,
        }, {
          title: '这个杀手不太冷静',
          src: 'https://p0.pipi.cn/mmdb/25bfd69a9abb12f0ee7e12418459419ad84a6.jpg?imageMogr2/thumbnail/2500x2500>',
          score: 9.1,
          mask: false,
        }, {
          title: '可不可以你也刚好喜欢我',
          src: 'https://p0.pipi.cn/mmdb/25bfd69a923923b12df2aaa2c57d4d61ca4b0.jpg?imageMogr2/thumbnail/2500x2500>',
          score: null,
          want: true,
          wantNum: 58338,
          mask: false,
        }, {
          title: '花束般的恋爱',
          src: 'https://p0.pipi.cn/mmdb/25bfd6bec7e7e1030cb12da89b6f158d2d3ce.jpg?imageMogr2/thumbnail/2500x2500>',
          score: 9,
          mask: false,
        }, {
          title: '神秘海域',
          src: 'https://p0.pipi.cn/mmdb/25bfd69ad7c3385bf180779c8ca665bf97ce5.jpg?imageMogr2/thumbnail/2500x2500>',
          score: null,
          want: true,
          wantNum: 118700,
          mask: false,
          ticket: true,
        }, {
          title: '如果有一天我将会离开你',
          src: 'https://p0.pipi.cn/mmdb/25bfd69a02f9235bf106d6960a11ad9e9932d.jpg?imageMogr2/thumbnail/2500x2500>',
          score: null,
          mask: false,
          want: true,
          wantNum: 25475,
        }],
        now: [{
          title: '新蝙蝠侠',
          src: 'https://p0.pipi.cn/mmdb/25bfd69a9235bfecd8b535cb9e40b04b22831.jpg?imageMogr2/thumbnail/2500x2500>',
          score: 9.6,
          mask: true,
          want: true,
          wantNum: 211764,
        }],
      },
    };
  },
  computed: {
    itemsWidth() {
      return this.itemList[this.kind].length * 233;
    },
  },
  methods: {
    slide(direction) {
      if (direction === 1) {
        if (this.marginLeft === 0) {
          return;
        }
      }
      if (direction === -1) {
        if (this.itemsWidth + this.marginLeft - this.$refs.content.offsetWidth < 208) {
          return;
        }
      }
      this.marginLeft += direction * (this.$refs.content.offsetWidth - 24);
    },
    over(e) {
      const dom = e.target;
      const tagName = dom.tagName.toLowerCase();
      if (tagName !== 'dd') {
        return;
      }
      this.kind = dom.getAttribute('data-type');
    },
  },
};
</script>

<style lang="scss" scoped>
.container {
    margin-top: 40px;
    dl {
      position: relative;
      height: 44px;
      line-height: 44px;
      border-top-left-radius: 5px;
      border-top-right-radius: 5px;
      color: #fff;
      padding: 0 13px;
      font-size: 14px;
      &.maoyan {
         background:linear-gradient(to right,
      rgb(250, 60, 104) 2%,
      rgb(254, 70, 77) 97%) rgb(250, 60, 104);
      }
      &::after {
        content: "全部";
        position: absolute;
        right: 30px;
        top: 50%;
        transform: translateY(-50%);
        cursor: pointer;
      }
      dt {
        font-size: 18px;
        margin-right: 10px;
        float: left;
      }
      dd {
        color: #fff;
        float: left;
        padding: 0 5px;
        position: relative;
        cursor: pointer;
        text-transform: uppercase;
        &.active::after {
          content: "";
          border: 7px solid transparent;
          border-bottom-color: #fff;
          width: 2px;
          position: absolute;
          bottom: 0px;
          left: 50%;
          transform: translateX(-50%);
        }
      }
    }
    .content {
      width: 100%;
      height: 297px;
      overflow: hidden;
      position: relative;
      &:hover .btn{
        display: block;
      }
      .btn {
        display: none;
        position: absolute;
        top:50%;
        transform: translateY(-50%);
        width: 40px;
        height: 40px;
        background-color: #333;
        border-radius: 50%;
        opacity: .7;
        cursor: pointer;
        &.btn-next {
          left: 0;
        }
        &.btn-prev {
          right: 0;
          span {
            border-top: none;
            border: none;
            border-bottom: 3px solid #BFBFBF;
            border-right: 3px solid #BFBFBF;
            left: 8px;
          }
        }
        span {
          width: 10px;
          height: 10px;
          color: #fff;
          border-top: 3px solid #BFBFBF;
          border-left: 3px solid #BFBFBF;
          transform: rotate(-45deg);
          display: block;
          position: absolute;
          right: 12px;
          top: 0;
          bottom: 0;
          margin: auto;
        }
      }
    }
    ul {
      height: 297px;
      padding: 1px 12px 0;
      transition: all 1.5s;
      li {
        position: relative;
        width: 214px;
        height: 100%;
        float: left;
        margin-right: 19px;
        .film-img {
          height: 297px;
          width: 214px;
          border-radius: 4px;
          border: 0;
        }
        .film-mask {
          position: absolute;
          top: 10px;
          left: -6px;
          box-shadow: 0 2px 6px 0 rgba(0,0,0,.2);
          height: 20px;
        }
        .film-info {
          position: absolute;
          bottom: 0;
          width: 212px;
          height: 100px;
          color: #fff;
          background: linear-gradient(-180deg, rgba(0,0,0,0.00) 0%, rgba(29,45,55,0.80) 99%);
          .film-score {
            margin-top: 48px;
            margin-left: 10px;
            font-size: 12px;
            span {
              font-size: 16px;
              color: #FD9827;
              font-weight: 500;
            }
          }
          .film-name {
            margin-left: 10px;
            width: 106px;
            overflow: hidden;
            text-overflow: ellipsis;
            white-space: nowrap;
          }
          >span {
            position: absolute;
            right: 10px;
            bottom: 10px;
            text-align: center;
            font-size: 14px;
            background-color: #FF4949;
            padding: 2px 12px 3px;
            line-height: 20px;
            border-radius: 100px;
            cursor: pointer;
          }
        }
      }
    }
}
</style>
