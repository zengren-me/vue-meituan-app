<template>
  <div class="recommend">
      <dl @mouseover="over">
          <dt>推荐民宿</dt>
           <dd
            v-for="item in navList" :key="item.text"
            :class="{active:kind === item.tab}"
            :data-type="item.tab"
            >{{ item.text }}</dd>
      </dl>
      <ul>
          <li v-for="(item, i) in itemList[kind]" :key="i">
            <div class="card-head">
                <img :src="item.src" alt="">
                <img :src="item.avatar" alt="">
            </div>
            <div class="info">
                <p class="title">{{ item.title }}</p>
                <p class="sub-title">
                    <span>{{ item.sub }}</span> |
                    <span>{{ item.address }}</span>
                </p>
                <p class="price">￥{{ item.price }}</p>
            </div>
          </li>
      </ul>
  </div>
</template>

<script>
export default {
  data() {
    return {
      kind: 'tianjin',
      navList: [{
        text: '天津',
        tab: 'tianjin',
      }, {
        text: '济南',
        tab: 'jinan',
      }, {
        text: '大连',
        tab: 'dalian',
      }, {
        text: '太原',
        tab: 'taiyuan',
      }, {
        text: '石家庄',
        tab: 'shijiazhuang',
      }, {
        text: '秦皇岛',
        tab: 'qinhuangdao',
      }],
      itemList: {
        tianjin: [{
          title: '复式LOFT/河景落地窗/疫情特价回馈',
          sub: '整套1居室·可住2人',
          address: '塘沽商业中心区',
          price: 296,
          src: 'https://img.meituan.net/phoenix/ccb66d161293186ac1e920cfaafb98a7255112.jpg@740w_416h_1e_1c',
          avatar: 'http://p1.meituan.net/phoenix/56608b0892a6cf3e777de86de1c6baf1146171.jpg@200w_200h_1e_1c',
        }, {
          title: '《舒馨美宿》长租特惠近机场空港欢乐谷舒适温馨独享投影小屋',
          sub: '整套1居室·可住1人',
          address: '滨海国际机场地区',
          price: 198,
          src: 'http://p0.meituan.net/horus/8bc7049c91a15bbcf1e6a47defbf934a11370333.png@740w_416h_1e_1c',
          avatar: 'https://img.meituan.net/avatar/aa5c52d63cb5e4c45202997e9b63287147415.jpg@200w_200h_1e_1c',
        }, {
          title: '自由港湾，智能自主入住湖景房',
          sub: '整套1居室·可住2人',
          address: '佛罗伦萨小镇度假区',
          price: 198,
          src: 'https://img.meituan.net/phoenix/19459fc7165f0dff0cb227d6c8ed63cc2679890.jpg@740w_416h_1e_1c',
          avatar: 'https://img.meituan.net/avatar/82b20b93167739ab3f5be8bfa99732f510024.jpg@200w_200h_1e_1c',
        }, {
          title: '【新房特惠】近高新公寓/天狮大学/环渤海/万达广场/武清职专/适合情侣',
          sub: '整套1居室·可住2人',
          address: '塘沽商业中心区',
          price: 128,
          src: 'https://img.meituan.net/phoenix/eae4b52c52d5031d838e1fd27e25c18d4851437.jpg@740w_416h_1e_1c',
          avatar: 'https://img.meituan.net/avatar/e81d79ea345b2672f1cd7a178909c32f24473.jpg@200w_200h_1e_1c',
        }, {
          title: '【愛巢公寓】秋橘投影小屋，近机场，空港SM肿瘤医院',
          sub: '整套1居室·可住2人',
          address: '塘沽商业中心区',
          price: 147,
          src: 'https://img.meituan.net/phoenix/d276d95f3e26e4f19b6dea066f074d40123993.jpg@740w_416h_1e_1c',
          avatar: 'https://img.meituan.net/avatar/679eaba9b666f647d7aeea50619b544713170.jpg@200w_200h_1e_1c',
        }, {
          title: '对鹿房近天拖地铁站近商圈近医院近大学轻奢风温馨次顶楼视野开阔私享观景大平层',
          sub: '整套1居室·可住2人',
          address: '对鹿房近天拖地铁站近商圈近医院近大学轻奢风温馨次顶楼视野开阔私享观景大平层',
          price: 299,
          src: 'https://p0.meituan.net/iphoenix/d340a5a3521e5457f7877b4bd20328fc5586109.jpg@740w_416h_1e_1c',
          avatar: 'https://img.meituan.net/avatar/d7f1640006a4550062fe2c8d29976a9f277575.jpg@200w_200h_1e_1c',
        }],
        jinan: [{
          title: '复式LOFT/河景落地窗/疫情特价回馈',
          sub: '整套1居室·可住2人',
          address: '塘沽商业中心区',
          price: 296,
          src: 'https://img.meituan.net/phoenix/ccb66d161293186ac1e920cfaafb98a7255112.jpg@740w_416h_1e_1c',
          avatar: 'http://p1.meituan.net/phoenix/56608b0892a6cf3e777de86de1c6baf1146171.jpg@200w_200h_1e_1c',
        }, {
          title: '《舒馨美宿》长租特惠近机场空港欢乐谷舒适温馨独享投影小屋',
          sub: '整套1居室·可住1人',
          address: '滨海国际机场地区',
          price: 198,
          src: 'http://p0.meituan.net/horus/8bc7049c91a15bbcf1e6a47defbf934a11370333.png@740w_416h_1e_1c',
          avatar: 'https://img.meituan.net/avatar/aa5c52d63cb5e4c45202997e9b63287147415.jpg@200w_200h_1e_1c',
        }, {
          title: '自由港湾，智能自主入住湖景房',
          sub: '整套1居室·可住2人',
          address: '佛罗伦萨小镇度假区',
          price: 198,
          src: 'https://img.meituan.net/phoenix/19459fc7165f0dff0cb227d6c8ed63cc2679890.jpg@740w_416h_1e_1c',
          avatar: 'https://img.meituan.net/avatar/82b20b93167739ab3f5be8bfa99732f510024.jpg@200w_200h_1e_1c',
        }, {
          title: '【新房特惠】近高新公寓/天狮大学/环渤海/万达广场/武清职专/适合情侣',
          sub: '整套1居室·可住2人',
          address: '塘沽商业中心区',
          price: 128,
          src: 'https://img.meituan.net/phoenix/eae4b52c52d5031d838e1fd27e25c18d4851437.jpg@740w_416h_1e_1c',
          avatar: 'https://img.meituan.net/avatar/e81d79ea345b2672f1cd7a178909c32f24473.jpg@200w_200h_1e_1c',
        }, {
          title: '【愛巢公寓】秋橘投影小屋，近机场，空港SM肿瘤医院',
          sub: '整套1居室·可住2人',
          address: '塘沽商业中心区',
          price: 147,
          src: 'https://img.meituan.net/phoenix/d276d95f3e26e4f19b6dea066f074d40123993.jpg@740w_416h_1e_1c',
          avatar: 'https://img.meituan.net/avatar/679eaba9b666f647d7aeea50619b544713170.jpg@200w_200h_1e_1c',
        }, {
          title: '对鹿房近天拖地铁站近商圈近医院近大学轻奢风温馨次顶楼视野开阔私享观景大平层',
          sub: '整套1居室·可住2人',
          address: '对鹿房近天拖地铁站近商圈近医院近大学轻奢风温馨次顶楼视野开阔私享观景大平层',
          price: 299,
          src: 'https://p0.meituan.net/iphoenix/d340a5a3521e5457f7877b4bd20328fc5586109.jpg@740w_416h_1e_1c',
          avatar: 'https://img.meituan.net/avatar/d7f1640006a4550062fe2c8d29976a9f277575.jpg@200w_200h_1e_1c',
        }],
        dalian: [{
          title: '复式LOFT/河景落地窗/疫情特价回馈',
          sub: '整套1居室·可住2人',
          address: '塘沽商业中心区',
          price: 296,
          src: 'https://img.meituan.net/phoenix/ccb66d161293186ac1e920cfaafb98a7255112.jpg@740w_416h_1e_1c',
          avatar: 'http://p1.meituan.net/phoenix/56608b0892a6cf3e777de86de1c6baf1146171.jpg@200w_200h_1e_1c',
        }, {
          title: '《舒馨美宿》长租特惠近机场空港欢乐谷舒适温馨独享投影小屋',
          sub: '整套1居室·可住1人',
          address: '滨海国际机场地区',
          price: 198,
          src: 'http://p0.meituan.net/horus/8bc7049c91a15bbcf1e6a47defbf934a11370333.png@740w_416h_1e_1c',
          avatar: 'https://img.meituan.net/avatar/aa5c52d63cb5e4c45202997e9b63287147415.jpg@200w_200h_1e_1c',
        }, {
          title: '自由港湾，智能自主入住湖景房',
          sub: '整套1居室·可住2人',
          address: '佛罗伦萨小镇度假区',
          price: 198,
          src: 'https://img.meituan.net/phoenix/19459fc7165f0dff0cb227d6c8ed63cc2679890.jpg@740w_416h_1e_1c',
          avatar: 'https://img.meituan.net/avatar/82b20b93167739ab3f5be8bfa99732f510024.jpg@200w_200h_1e_1c',
        }, {
          title: '【新房特惠】近高新公寓/天狮大学/环渤海/万达广场/武清职专/适合情侣',
          sub: '整套1居室·可住2人',
          address: '塘沽商业中心区',
          price: 128,
          src: 'https://img.meituan.net/phoenix/eae4b52c52d5031d838e1fd27e25c18d4851437.jpg@740w_416h_1e_1c',
          avatar: 'https://img.meituan.net/avatar/e81d79ea345b2672f1cd7a178909c32f24473.jpg@200w_200h_1e_1c',
        }, {
          title: '【愛巢公寓】秋橘投影小屋，近机场，空港SM肿瘤医院',
          sub: '整套1居室·可住2人',
          address: '塘沽商业中心区',
          price: 147,
          src: 'https://img.meituan.net/phoenix/d276d95f3e26e4f19b6dea066f074d40123993.jpg@740w_416h_1e_1c',
          avatar: 'https://img.meituan.net/avatar/679eaba9b666f647d7aeea50619b544713170.jpg@200w_200h_1e_1c',
        }, {
          title: '对鹿房近天拖地铁站近商圈近医院近大学轻奢风温馨次顶楼视野开阔私享观景大平层',
          sub: '整套1居室·可住2人',
          address: '对鹿房近天拖地铁站近商圈近医院近大学轻奢风温馨次顶楼视野开阔私享观景大平层',
          price: 299,
          src: 'https://p0.meituan.net/iphoenix/d340a5a3521e5457f7877b4bd20328fc5586109.jpg@740w_416h_1e_1c',
          avatar: 'https://img.meituan.net/avatar/d7f1640006a4550062fe2c8d29976a9f277575.jpg@200w_200h_1e_1c',
        }],
        taiyuan: [{
          title: '复式LOFT/河景落地窗/疫情特价回馈',
          sub: '整套1居室·可住2人',
          address: '塘沽商业中心区',
          price: 296,
          src: 'https://img.meituan.net/phoenix/ccb66d161293186ac1e920cfaafb98a7255112.jpg@740w_416h_1e_1c',
          avatar: 'http://p1.meituan.net/phoenix/56608b0892a6cf3e777de86de1c6baf1146171.jpg@200w_200h_1e_1c',
        }, {
          title: '《舒馨美宿》长租特惠近机场空港欢乐谷舒适温馨独享投影小屋',
          sub: '整套1居室·可住1人',
          address: '滨海国际机场地区',
          price: 198,
          src: 'http://p0.meituan.net/horus/8bc7049c91a15bbcf1e6a47defbf934a11370333.png@740w_416h_1e_1c',
          avatar: 'https://img.meituan.net/avatar/aa5c52d63cb5e4c45202997e9b63287147415.jpg@200w_200h_1e_1c',
        }, {
          title: '自由港湾，智能自主入住湖景房',
          sub: '整套1居室·可住2人',
          address: '佛罗伦萨小镇度假区',
          price: 198,
          src: 'https://img.meituan.net/phoenix/19459fc7165f0dff0cb227d6c8ed63cc2679890.jpg@740w_416h_1e_1c',
          avatar: 'https://img.meituan.net/avatar/82b20b93167739ab3f5be8bfa99732f510024.jpg@200w_200h_1e_1c',
        }, {
          title: '【新房特惠】近高新公寓/天狮大学/环渤海/万达广场/武清职专/适合情侣',
          sub: '整套1居室·可住2人',
          address: '塘沽商业中心区',
          price: 128,
          src: 'https://img.meituan.net/phoenix/eae4b52c52d5031d838e1fd27e25c18d4851437.jpg@740w_416h_1e_1c',
          avatar: 'https://img.meituan.net/avatar/e81d79ea345b2672f1cd7a178909c32f24473.jpg@200w_200h_1e_1c',
        }, {
          title: '【愛巢公寓】秋橘投影小屋，近机场，空港SM肿瘤医院',
          sub: '整套1居室·可住2人',
          address: '塘沽商业中心区',
          price: 147,
          src: 'https://img.meituan.net/phoenix/d276d95f3e26e4f19b6dea066f074d40123993.jpg@740w_416h_1e_1c',
          avatar: 'https://img.meituan.net/avatar/679eaba9b666f647d7aeea50619b544713170.jpg@200w_200h_1e_1c',
        }, {
          title: '对鹿房近天拖地铁站近商圈近医院近大学轻奢风温馨次顶楼视野开阔私享观景大平层',
          sub: '整套1居室·可住2人',
          address: '对鹿房近天拖地铁站近商圈近医院近大学轻奢风温馨次顶楼视野开阔私享观景大平层',
          price: 299,
          src: 'https://p0.meituan.net/iphoenix/d340a5a3521e5457f7877b4bd20328fc5586109.jpg@740w_416h_1e_1c',
          avatar: 'https://img.meituan.net/avatar/d7f1640006a4550062fe2c8d29976a9f277575.jpg@200w_200h_1e_1c',
        }],
        shijiazhuang: [{
          title: '复式LOFT/河景落地窗/疫情特价回馈',
          sub: '整套1居室·可住2人',
          address: '塘沽商业中心区',
          price: 296,
          src: 'https://img.meituan.net/phoenix/ccb66d161293186ac1e920cfaafb98a7255112.jpg@740w_416h_1e_1c',
          avatar: 'http://p1.meituan.net/phoenix/56608b0892a6cf3e777de86de1c6baf1146171.jpg@200w_200h_1e_1c',
        }, {
          title: '《舒馨美宿》长租特惠近机场空港欢乐谷舒适温馨独享投影小屋',
          sub: '整套1居室·可住1人',
          address: '滨海国际机场地区',
          price: 198,
          src: 'http://p0.meituan.net/horus/8bc7049c91a15bbcf1e6a47defbf934a11370333.png@740w_416h_1e_1c',
          avatar: 'https://img.meituan.net/avatar/aa5c52d63cb5e4c45202997e9b63287147415.jpg@200w_200h_1e_1c',
        }, {
          title: '自由港湾，智能自主入住湖景房',
          sub: '整套1居室·可住2人',
          address: '佛罗伦萨小镇度假区',
          price: 198,
          src: 'https://img.meituan.net/phoenix/19459fc7165f0dff0cb227d6c8ed63cc2679890.jpg@740w_416h_1e_1c',
          avatar: 'https://img.meituan.net/avatar/82b20b93167739ab3f5be8bfa99732f510024.jpg@200w_200h_1e_1c',
        }, {
          title: '【新房特惠】近高新公寓/天狮大学/环渤海/万达广场/武清职专/适合情侣',
          sub: '整套1居室·可住2人',
          address: '塘沽商业中心区',
          price: 128,
          src: 'https://img.meituan.net/phoenix/eae4b52c52d5031d838e1fd27e25c18d4851437.jpg@740w_416h_1e_1c',
          avatar: 'https://img.meituan.net/avatar/e81d79ea345b2672f1cd7a178909c32f24473.jpg@200w_200h_1e_1c',
        }, {
          title: '【愛巢公寓】秋橘投影小屋，近机场，空港SM肿瘤医院',
          sub: '整套1居室·可住2人',
          address: '塘沽商业中心区',
          price: 147,
          src: 'https://img.meituan.net/phoenix/d276d95f3e26e4f19b6dea066f074d40123993.jpg@740w_416h_1e_1c',
          avatar: 'https://img.meituan.net/avatar/679eaba9b666f647d7aeea50619b544713170.jpg@200w_200h_1e_1c',
        }, {
          title: '对鹿房近天拖地铁站近商圈近医院近大学轻奢风温馨次顶楼视野开阔私享观景大平层',
          sub: '整套1居室·可住2人',
          address: '对鹿房近天拖地铁站近商圈近医院近大学轻奢风温馨次顶楼视野开阔私享观景大平层',
          price: 299,
          src: 'https://p0.meituan.net/iphoenix/d340a5a3521e5457f7877b4bd20328fc5586109.jpg@740w_416h_1e_1c',
          avatar: 'https://img.meituan.net/avatar/d7f1640006a4550062fe2c8d29976a9f277575.jpg@200w_200h_1e_1c',
        }],
        qinhuangdao: [{
          title: '复式LOFT/河景落地窗/疫情特价回馈',
          sub: '整套1居室·可住2人',
          address: '塘沽商业中心区',
          price: 296,
          src: 'https://img.meituan.net/phoenix/ccb66d161293186ac1e920cfaafb98a7255112.jpg@740w_416h_1e_1c',
          avatar: 'http://p1.meituan.net/phoenix/56608b0892a6cf3e777de86de1c6baf1146171.jpg@200w_200h_1e_1c',
        }, {
          title: '《舒馨美宿》长租特惠近机场空港欢乐谷舒适温馨独享投影小屋',
          sub: '整套1居室·可住1人',
          address: '滨海国际机场地区',
          price: 198,
          src: 'http://p0.meituan.net/horus/8bc7049c91a15bbcf1e6a47defbf934a11370333.png@740w_416h_1e_1c',
          avatar: 'https://img.meituan.net/avatar/aa5c52d63cb5e4c45202997e9b63287147415.jpg@200w_200h_1e_1c',
        }, {
          title: '自由港湾，智能自主入住湖景房',
          sub: '整套1居室·可住2人',
          address: '佛罗伦萨小镇度假区',
          price: 198,
          src: 'https://img.meituan.net/phoenix/19459fc7165f0dff0cb227d6c8ed63cc2679890.jpg@740w_416h_1e_1c',
          avatar: 'https://img.meituan.net/avatar/82b20b93167739ab3f5be8bfa99732f510024.jpg@200w_200h_1e_1c',
        }, {
          title: '【新房特惠】近高新公寓/天狮大学/环渤海/万达广场/武清职专/适合情侣',
          sub: '整套1居室·可住2人',
          address: '塘沽商业中心区',
          price: 128,
          src: 'https://img.meituan.net/phoenix/eae4b52c52d5031d838e1fd27e25c18d4851437.jpg@740w_416h_1e_1c',
          avatar: 'https://img.meituan.net/avatar/e81d79ea345b2672f1cd7a178909c32f24473.jpg@200w_200h_1e_1c',
        }, {
          title: '【愛巢公寓】秋橘投影小屋，近机场，空港SM肿瘤医院',
          sub: '整套1居室·可住2人',
          address: '塘沽商业中心区',
          price: 147,
          src: 'https://img.meituan.net/phoenix/d276d95f3e26e4f19b6dea066f074d40123993.jpg@740w_416h_1e_1c',
          avatar: 'https://img.meituan.net/avatar/679eaba9b666f647d7aeea50619b544713170.jpg@200w_200h_1e_1c',
        }, {
          title: '对鹿房近天拖地铁站近商圈近医院近大学轻奢风温馨次顶楼视野开阔私享观景大平层',
          sub: '整套1居室·可住2人',
          address: '对鹿房近天拖地铁站近商圈近医院近大学轻奢风温馨次顶楼视野开阔私享观景大平层',
          price: 299,
          src: 'https://p0.meituan.net/iphoenix/d340a5a3521e5457f7877b4bd20328fc5586109.jpg@740w_416h_1e_1c',
          avatar: 'https://img.meituan.net/avatar/d7f1640006a4550062fe2c8d29976a9f277575.jpg@200w_200h_1e_1c',
        }],
      },
    };
  },
  methods: {
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
.recommend {
    margin-top: 40px;
    margin-bottom: 40px;
     dl {
      position: relative;
      height: 44px;
      line-height: 44px;
      border-top-left-radius: 5px;
      border-top-right-radius: 5px;
      color: #fff;
      padding: 0 13px;
      font-size: 14px;
      background:linear-gradient(to right, rgb(243, 182, 74) 2%,
      rgb(242, 197, 69) 97%) rgb(243, 182, 74);
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
    ul {
       width: 100%;
       height: 689px;
       box-sizing: border-box;
       background-color: #fff;
       padding: 20px 0 0 20px;
       li {
           cursor: pointer;
           float: left;
           width: 370px;
           height: 334px;
           margin-right: 18px;
           .card-head {
               position: relative;
               &>img:nth-child(1) {
                   width: 370px;
                   height: 208px;
                   border-radius: 4px;
               }
               &>img:nth-child(2) {
                   width: 48px;
                   height: 48px;
                   border: 2px solid #fff;
                   border-radius: 40px;
                   position: absolute;
                   bottom: -12px;
                   right: 15px;
               }
           }
           .info {
               margin-top: 15px;
               .title {
                   color: #222;
                   width: 297px;
                   margin: 7px 0;
                   font-weight: 400;
                   overflow: hidden;
                   text-overflow: ellipsis;
                   white-space: nowrap;
               }
               .sub-title {
                   font-size: 12px;
                   color: #999;
                   text-align: left;
               }
               .price {
                   font-weight: 500;
                   font-size: 22px;
                   color: #FF6600;
                   letter-spacing: -0.8px;
                   padding: 4px 0;
               }
           }
       }
    }
}
</style>
