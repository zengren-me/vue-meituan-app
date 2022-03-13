<template>
  <div class="details">
      <el-col :span="16">
          <div class="left">
              <div class="title">
                  <span>
                      <i class="el-icon-document-checked"></i>
                      食品安全档案
                  </span>
                  {{ title }}
              </div>
              <div class="score">
                <el-rate
				:value="score"
				disabled
				text-color="#f90"
				class="starts">
				</el-rate>
                <span>{{ score }}分</span>
                <span>人均￥{{ avgPrice }}</span>
              </div>
              <div class="address">
                  <p><span>地址:</span> {{address}}<i class="el-icon-map-location"></i></p>
                  <p><span>电话:</span>{{ phone }}</p>
                  <p><span>营业时间:</span>{{ businessTime }}</p>
              </div>
              <div class="service">
                  <ul>
                      <li v-for="item in service" :key="item">
                          <img src="https://p0.meituan.net/codeman/551290739062eda37e52999e2315f50c1887.png" alt="">
                          <span>{{ item }}</span>
                      </li>
                  </ul>
              </div>
          </div>
      </el-col>
      <el-col :span="8">
          <div class="right">
              <img :src="imgUrl" alt="">
          </div>
      </el-col>
  </div>
</template>

<script>
export default {
  props: ['imgUrl', 'score', 'avgPrice', 'title', 'address', 'phone', 'service', 'businessTime'],
};
</script>

<style lang="scss" scoped>
.details {
    color: #666;
    width: 100%;
    height: auto;
    border-radius: 5px;
    box-sizing: border-box;
    padding: 20px 20px 30px;
    box-shadow: 0 5px 14px 0 rgba(0, 0, 0, .1);
    background-color: #fff;
    &::after {
        content: "";
        display: block;
        clear: both;
    }
    .left {
        padding-right: 20px;
        .title {
            font-size: 26px;
            color: #666;
            position: relative;
            span {
                position: absolute;
                top: 5px;
                right: 5px;
                font-size: 12px;
                color: #00c9b3;
                i {
                    font-size: 18px;
                    vertical-align: middle;
                }
            }
        }
        .score {
            margin-top: 6px;
            margin-bottom: 17px;
            .starts {
                display: inline-block;
            }
            span {
                font-size: 14px;
                color: #666;
                margin-left: 6px;
            }
        }
        .address {
            padding: 16px 0 11px;
            border-top: 1px solid #e5e5e5;
            border-bottom: 1px solid #e5e5e5;
            font-size: 14px;
            p {
                margin-bottom: 10px;
                span {
                    margin-right: 10px;
                }
                .el-icon-map-location {
                    color: #f90;
                    margin-left: 5px;
                }
            }
        }
        .service {
            padding-top: 20px;
            li {
                float: left;
                margin-right: 16px;
                img {
                   display: block;
                   width: 24px;
                   height: 24px;
                   margin:0 auto 11px;
                }
                span {
                    display: block;
                    font-size: 12px;
                }
            }
        }
    }
    .right {
        img {
            width: 100%;
            height: 100%;
            border-radius: 6px;
        }
    }
}
</style>
