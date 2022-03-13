<template>
   <div class="item">
       <dl v-for="(item, i) in list" :key="i">
           <dt>
               <span>{{ i + 1}}</span>
               <img :src="item.image" alt="">
           </dt>
           <dd>
               <h3>
                 <router-link :to="{
                   name: 'Detail',
                   params: {
                     name: $route.params.name,
                   },
                 }">{{ item.title }}</router-link>
               </h3>
               <p class="rate">
									<el-rate
									:value="item.score"
									disabled
									text-color="#ff9900"
									class="starts">
									</el-rate>
									<span>{{ item.comment[0].evalaute }}</span>
									<span>{{ item.score }}分</span>
									<span class="active">{{ item.commentNum }}评论</span>
               </p>
								<p class="info">
									<span v-for="(info, i) in item.tab" :key="i">
										{{ info }}<span v-if="i < item.tab.length - 1">|</span>
									</span>
									<span class="position">
										<i class="el-icon-map-location"></i>
										查看地图
									</span>
								</p>
								<p>
									<span>人均￥{{ item.avgPrice }}</span>
								</p>
								<ul class="deal-wrapper" v-if="item.dealItems">
									<template v-for="(deal, i) in item.dealItems">
										<li v-if="i < 2" :key="deal.title">
											<p class="deal-title">{{ deal.title }}</p>
											<p>
												<span class="deal-price">￥{{ deal.price }}</span>
												<span class="deal-value">门市价 {{ deal.counterPrice }}</span>
											</p>
										</li>
									</template>
									<template v-if="showMore">
										<li v-for="deal in moreDeal" :key="deal.title">
											<p class="deal-title">{{ deal.title }}</p>
											<p>
												<span class="deal-price">￥{{ deal.price }}</span>
												<span class="deal-value">门市价{{ deal.counterPrice }}</span>
											</p>
										</li>
									</template>
									<p class="deal-more" v-if="item.deal && item.deal.length > 2"
										@click="getMore(item)">
										<template v-if="!showMore">
											<span>更多{{item.deal.length - 2}}个优惠</span>
											<i class="el-icon-arrow-down"></i>
										</template>
										<template v-else>
											<span>收起</span>
											<i class="el-icon-arrow-up"></i>
										</template>
									</p>
								</ul>
           </dd>
       </dl>
   </div>
</template>

<script>
export default {
  props: ['list'],
  data() {
    return {
      moreDeal: [],
      showMore: false,
    };
  },
  methods: {
    getMore(item) {
      if (!this.showMore && item.dealItems.length > 2) {
        this.moreDeal = item.dealItems.slice(2);
        this.showMore = true;
      } else {
        this.showMore = false;
      }
    },
  },
};
</script>

<style lang="scss" scoped>
.item {
    width: 910px;
    margin: 0 auto;
    margin-top: 20px;
    dl {
			padding: 20px 0 16px;
			border-top: 1px solid #e5e5e5;
			min-height: 125px;
      dt {
         float: left;
         margin-right: 20px;
         height: 125px;
         position: relative;
         img {
            height: 100%;
            border-radius: 4px;
         }
         span {
            position: absolute;
            z-index: 10;
            top: 3px;
            left: -3px;
            width: 20px;
            line-height: 12px;
            background-color: #FB6433;
            color: #fff;
            border-radius: 2px;
            text-align: center;
            font-size: 12px;
         }
      }
      dd {
				margin-left: 238px;
        h3 {
          font-size: 16px;
          font-weight: 500;
          a {
            color: #333;
          }
        }
				p {
					margin-top: 6px;
					font-size: 12px;
				}
				.rate {
					font-size: 12px;
					color: #666;
					span {
						margin: 0 5px;
					}
					.starts {
						display: inline-block;
					}
					.active {
						color: #f90;
					}
				}
				.info {
					span {
						display: inline-block;
						color: #666;
					}
					.el-icon-map-location {
						color: #f90;
					}
					.position {
						margin-left: 20px;
            cursor: pointer;
					}
				}
				.deal-wrapper {
					margin-top: 10px;
					padding-top: 10px;
					border-top: 1px dashed #e5e5e5;
					li {
						padding: 6px 10px 8px;
						cursor: pointer;
						&:hover {
							background: #F8F8F8;
							border-radius: 4px;
							.deal-title {
								color: #FE8C00;
							}
						}
						.deal-title {
							font-size: 14px;
							color: #666;
							height: 20px;
							line-height: 20px;
						}
						.deal-price {
							color: #f60;
							margin-right: 10px;
							font-size: 15px;
						}
						.deal-value {
							color: #999;
						}
					}
					.deal-more {
						margin-left: 12px;
						cursor: pointer;
						.el-icon-arrow-down, .el-icon-arrow-up {
							margin-left: 5px;
							font-size: 12px;
						}
					}
				}
      }
    }
}
</style>
