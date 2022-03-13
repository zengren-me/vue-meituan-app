<template>
  <div :class="['select', disable ? 'disable' : '']"
  @click="activeList"
  v-document-click="documentClick"
  ref="select"
  >
    <span>{{ value }}</span>
    <i class="el-icon-caret-bottom"></i>
    <div :class="{choose: true, active: showList}" :style="{width: boxWidth + 'px'}">
        <p>{{ title }}</p>
        <div class="col" v-for="(col, i) in renderList" :key="i">
            <span
            :class="{ active: value === item.name }"
            v-for="(item, i) in col" :key="i"
            @click="changeValue(item)">{{ item.name }}</span>
        </div>
    </div>
  </div>
</template>

<script>
export default {
  props: ['list', 'title', 'value', 'showList', 'disable'],
  computed: {
    renderList() {
      const renderArr = [];
      const colNum = Math.ceil(this.list.length / 12);
      for (let i = 0; i < colNum; i += 1) {
        const data = this.list.slice(i * 12, i * 12 + 12);
        renderArr.push(data);
      }
      return renderArr;
    },
    boxWidth() {
      return this.renderList.length * 90;
    },
  },
  methods: {
    activeList(e) {
      e.stopPropagation();
      if (e.target === this.$refs.select && !this.disable) {
        this.$emit('activeList', true);
      }
    },
    documentClick() {
      this.$emit('activeList', false);
    },
    changeValue(item) {
      this.$emit('changeValue', item);
    },
  },
};
</script>

<style lang="scss" scoped>
.select {
    display: inline-block;
    margin: 0 10px;
    width: 150px;
    height: 40px;
    color: #666;
    position: relative;
    box-sizing: border-box;
    padding: 10px 0 10px 10px;
    border: 1px solid #e5e5e5;
    border-radius: 4px;
    cursor: pointer;
    &.disable {
      cursor: not-allowed;
    }
    .el-icon-caret-bottom {
        position: absolute;
        right: 8px;
        top: 50%;
        transform: translateY(-50%) scale(0.8);
        color: #666;
    }
    .choose {
        display: none;
        position: absolute;
        top: 45px;
        left: 0;
        // min-width: 264px;
        height: 375px;
        box-sizing: border-box;
        padding: 20px 0 20px 15px;
        background-color: #fff;
        border-radius: 4px;
        border: 1px solid #e5e5e5;
        box-shadow: 0 3px 5px 0 rgba(0, 0, 0, .1);
        z-index: 999;
        &.active {
            display: block;
        }
        &::before {
            content: "";
            position: absolute;
            top: -13px;
            left: 26px;
            border: 6px solid transparent;
            border-bottom-color: #e5e5e5;
        }
        &::after {
            content: "";
            position: absolute;
            top: -12px;
            left: 26px;
            border: 6px solid transparent;
            border-bottom-color: #fff;
        }
        p {
            color: #ccc;
            margin-bottom: 11px;
        }
        .col {
            float: left;
            span {
                cursor: pointer;
                font-size: 12px;
                color: #666;
                display: table;
                box-sizing: border-box;
                min-width: 40px;
                height: 20px;
                padding: 1px 8px;
                margin: 6px 38px 6px 0;
                cursor: pointer;
                &:hover {
                    border-radius: 10px;
                    background: #F4F4F4;
                }
                &.active {
                    background: linear-gradient(to bottom right,#FFD000,#FFBD00);
                    border-radius: 10px;
                    color: #222;
                }
            }
        }
    }
}
</style>
