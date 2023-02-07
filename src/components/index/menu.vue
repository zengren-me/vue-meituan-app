<template>
	<div class="my-menu">
		<dl class="nav" @mouseleave="menuLeave">
			<dt>全部分类</dt>
			<dd
				v-for="item in menuList"
				:key="item.title"
				@mouseenter="menuEnter(item)"
			>
				<i :class="item.icon"></i>
				<router-link to="/">{{ item.title }}</router-link>
				<span class="hot" v-if="item.hot">HOT</span>
				<span class="arrow"></span>
			</dd>
		</dl>
		<div
			class="detail"
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
      menuList: [
        {
          title: '美食',
          icon: 'food',
          items: [
            {
              title: '美食',
              items: ['代金券', '甜点饮品', '火锅'],
            },
          ],
        },
        {
          title: '外卖',
          icon: 'takeout',
          items: [
            {
              title: '外卖',
              items: ['美团外卖'],
            },
          ],
        },
        {
          title: '酒店',
          icon: 'hotel',
          hot: true,
          items: [
            {
              title: '酒店星级',
              items: ['经济型', '舒适/三星', '高档/四星', '豪华/五星'],
            },
          ],
        },
        {
          title: '民宿',
          icon: 'homestay',
          items: [
            {
              title: '热门城市',
              items: [
                '上海',
                '成都',
                '北京',
                '重庆',
                '南京',
                '杭州',
                '广州',
                '西安',
                '武汉',
                '厦门',
                '长沙',
                '青岛',
                '深圳',
                '天津',
                '苏州',
              ],
            },
            {
              title: '热门房源',
              items: ['复式Loft', '别墅'],
            },
          ],
        },
        {
          title: '猫眼电影',
          icon: 'movie',
          items: [
            {
              title: '热映电影',
              items: [
                '满江红',
                '流浪地球2',
                '黑豹2',
                '风再起时',
                '深海',
                '熊出没·伴我“熊芯”',
                '无名',
                '阿凡达：水之道',
                '中国乒乓之绝地反击',
                '不能流泪的悲伤',
              ],
            },
          ],
        },
        {
          title: '机票 / 火车票',
          icon: 'airport',
          items: [
            {
              title: '机票',
              items: ['国内机票'],
            },
            {
              title: '火车票',
              items: ['火车票'],
            },
          ],
        },
        {
          title: '休闲娱乐 / KTV',
          icon: 'ktv',
          items: [
            {
              title: '休闲娱乐',
              items: [
                '足疗按摩',
                '洗浴/汗蒸',
                '酒吧',
                '密室逃脱',
                '轰趴',
                '馆茶馆',
                '私人影院',
                'DIY手工坊',
                '采摘/农家乐',
                '网吧网咖',
                '游乐游艺',
                'VR桌面游戏',
                '真人CS',
                '棋牌室',
                '其他玩乐',
              ],
            },
            {
              title: 'ktv',
              items: ['ktv'],
            },
          ],
        },
        {
          title: '生活服务',
          icon: 'life',
          items: [
            {
              title: '美食',
              items: [
                '衣物/皮具',
                '洗护家政',
                '搬家运输',
                '送水',
                '充值缴费',
                '服饰/鞋包',
                '养护',
                '开锁换锁',
                '居家维修',
                '管道疏通',
              ],
            },
          ],
        },
        {
          title: '丽人 / 美发 / 医学美容',
          icon: 'hair',
          items: [
            {
              title: '丽人',
              items: [
                '美发',
                '美甲美睫',
                '美容美体',
                '医学美容',
                '瑜伽舞蹈',
                '瘦身纤体',
                '韩式定妆',
                '祛痘纹身',
                '化妆品',
                '养发',
              ],
            },
          ],
        },
        {
          title: '结婚 / 婚纱摄影 / 婚宴',
          icon: 'marry',
          items: [
            {
              title: '结婚',
              items: ['婚纱摄', '旅拍', '个性写真', '婚宴婚庆'],
            },
          ],
        },
        {
          title: '亲子 / 儿童乐园 / 幼教',
          icon: 'offspring',
          items: [
            {
              title: '儿童乐园',
              items: ['婴儿游泳', '其它', '亲子游乐'],
            },
            {
              title: '幼儿教育',
              items: [
                '早教中心',
                '少儿英语',
                '智力开发',
                '托班/幼儿园',
                '幼儿教育',
                '其他幼儿教育',
              ],
            },
            {
              title: '亲子摄影',
              items: ['儿童摄影', '孕妇写真', '上门拍', '其他亲子摄影'],
            },
            {
              title: '孕产护理',
              items: [
                '月子会所',
                '产后恢复',
                '妇幼医院',
                '孕产用品',
                '开奶催乳',
                '月嫂',
                '亲子购物',
                '宝宝派对',
                '亲子服务',
              ],
            },
          ],
        },
        {
          title: '运动健身 / 健身中心',
          icon: 'sport',
          items: [
            {
              title: '运动健身',
              items: ['健身中心', '武术场馆', '游泳馆', '羽毛球馆'],
            },
          ],
        },
        {
          title: '家装 / 建材 / 家居',
          icon: 'furniture',
          items: [
            {
              title: '装修设计',
              items: ['半包装修', '全包装修', '清包装修'],
            },
            {
              title: '装修建材',
              items: [
                '地板',
                '瓷砖石材',
                '橱柜灯饰',
                '照明厨卫',
                '洁具',
                '油漆涂料',
              ],
            },
            {
              title: '家具家居',
              items: [
                '家具',
                '床上用品/家纺',
                '家居饰品',
                '厨具餐具',
                '智能家居',
              ],
            },
            {
              title: '家装卖场',
              items: ['建材卖场', '家居卖场', '灯饰卖场'],
            },
          ],
        },
        {
          title: '学习培训 / 音乐培训',
          icon: 'study',
          items: [
            {
              title: '音乐培训',
              items: ['钢琴', '吉他', '小提琴'],
            },
            {
              title: '职业技术',
              items: [
                '美容化妆',
                '会计',
                'IT',
                '厨艺',
                '管理培训',
                '摄影培训',
                '司法考试',
                '公务员培训',
                '其他职业培训',
              ],
            },
            {
              title: '外语培训',
              items: [
                '英语',
                '日语',
                '韩语',
                '法语',
                '德语',
                '汉语',
                '俄语',
                '西班牙语',
                '其他外语',
              ],
            },
            {
              title: '美术培训',
              items: ['绘画', '书法', '其他美术'],
            },
          ],
        },
        {
          title: '医疗健康 / 宠物 / 爱车',
          icon: 'health',
          items: [
            {
              title: '医疗健康',
              items: ['医院齿科口腔', '体检中心', '药店中医', '其他健康服务'],
            },
            {
              title: '爱车',
              items: [
                '洗车',
                '租车',
                '加油站',
                '维修保养',
                '驾校',
                '汽车美容',
                '陪练',
                '汽车用品',
                '停车场',
                '汽车保险',
                '4S店/汽车销售',
              ],
            },
            {
              title: '宠物',
              items: ['宠物店', '宠物医院'],
            },
          ],
        },
        {
          title: '酒吧 / 密室逃脱',
          icon: 'bar',
          items: [
            {
              title: '玩乐',
              items: ['KTV', '酒吧', '密室游乐', '游乐游艺', '网吧网咖'],
            },
          ],
        },
      ],
      timer: null,
      timer2: null,
    };
  },
  created() {
    api.getNavList().then(() => {
      // this.menuList = resp.data;
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
	border: 1px solid #e5e5e5;
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
				background-color: rgba(255, 150, 0, 0.08);
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
				color: #bfbfbf;
				border-bottom: 1px solid #bfbfbf;
				border-right: 1px solid #bfbfbf;
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
				background: #fff3cc;
				display: inline-block;
				border-radius: 10px;
				padding: 0 7px;
				margin-left: 5px;
				transform: scale(0.9);
				position: relative;
				opacity: 1;
			}
		}

		dd > i {
			font-family: "meituan";
			font-size: 14px;
			font-style: normal;
			margin-right: 14px;
			display: inline-block;
			width: 14px;
		}

		.food {
			&:before {
				content: "\e622";
				color: #ff8200;
			}
		}

		.takeout {
			&:before {
				content: "\e630";
				color: #ffb500;
			}
		}

		.hotel {
			&:before {
				content: "\e62a";
				color: #9b5e3e;
			}
		}

		.homestay {
			&:before {
				content: "\e631";
				color: #ffb500;
			}
		}

		.movie {
			&:before {
				content: "\e62c";
				position: relative;
				left: -2px;
				color: #ff3d00;
			}
		}

		.airport {
			&:before {
				content: "\e632";
				color: #03a9f4;
			}
		}

		.ktv {
			&:before {
				content: "\e627";
				color: #00bf96;
			}
		}

		.life {
			&:before {
				content: "\e633";
				color: #00bf96;
			}
		}

		.hair {
			font-size: 12px;
			&:before {
				content: "\e626";
				color: #ff4081;
			}
		}

		.marry {
			&:before {
				content: "\e629";
				color: #ff4081;
			}
		}

		.offspring {
			&:before {
				content: "\e623";
				color: #ff4081;
			}
		}

		.sport {
			&:before {
				content: "\e62b";
				color: #03a9f4;
			}
		}

		.furniture {
			&:before {
				content: "\e625";
				color: #00bf96;
			}
		}

		.study {
			&:before {
				content: "\e624";
				color: #00bf96;
			}
		}

		.health {
			&:before {
				content: "\e628";
				color: #03a9f4;
			}
		}

		.bar {
			&:before {
				content: "\e621";
				color: #00bf96;
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
			display: inline-block;
			font-size: 12px;
			color: #999;
			margin-right: 16px;
			margin-top: 10px;
			cursor: pointer;
			&:hover {
				color: #ff8200;
			}
		}
	}
}
</style>
