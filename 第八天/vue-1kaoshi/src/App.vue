<template>
  <div>
    <!-- 搜索 -->
    <input type="text" class="inp" placeholder="商品名称" v-model="kw">
    <!-- 表格 -->
    <table width="100%" border="1px solid black" cellspacing="0">
      <thead>
        <tr>
          <th @click="bian">编辑
            <Icon :status="idstatus" />
          </th>
          <th>名称</th>
          <th @click="jia">价格
            <Icon :status="pricestatus" />
          </th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="item in datalist" :key="item.id">
          <td>{{ item.id }}</td>
          <td>{{ item.goods_name }}</td>
          <td>{{ item.price }}</td>
        </tr>

      </tbody>
    </table>
    <!-- 底部 -->
    <footer class="foo">
      <div>
        每页<input type="number" class="inpy" v-model="pati">条 总共10条
      </div>
      <div>
        <button v-for="(item, index) in paye" :key="index" @click="yema(item)">{{ item }}</button>
      </div>
    </footer>
  </div>
</template>

<script>

import { data } from './assets/data.json'
import Icon from './components/icon.vue'
export default {
  components: {
    Icon,
  },
  data() {
    return {
      // 搜索的关键词
      kw: "",
      // 列表数据
      data: data,
      // 备份数据
      datalist: [],
      // id状态传参的变化
      idstatus: 'down',
      // 价格状态的传参变化
      pricestatus: "none",
      // 默认当前页
      panum: 1,
      // 总页数
      paye: null,
      // 每页条数
      pati: 10
    };
  },

  mounted() {
    this.list()
    // 编辑图标降序赋值
    this.datalist = this.sortDown('id', data)
    // 总页
    this.yema(this.panum)
  },

  methods: {
    // 渲染页面
    list() {

      this.datalist = data

    },
    // 降序< 冒泡排序
    sortDown(name, datalist) {
      let temp = {}
      for (let i = 0; i < datalist.length; i++) {
        for (let j = 0; j < datalist.length - 1; j++) {
          if (datalist[j][name] < datalist[j + 1][name]) {
            temp = datalist[j]
            datalist[j] = datalist[j + 1]
            datalist[j + 1] = temp
          }
        }
      }
      return datalist
    },
    // 升序>
    sortUp(name, datalist) {
      let temp = {}
      for (let i = 0; i < datalist.length; i++) {
        for (let j = 0; j < datalist.length - 1; j++) {
          if (datalist[j][name] > datalist[j + 1][name]) {
            temp = datalist[j]
            datalist[j] = datalist[j + 1]
            datalist[j + 1] = temp
          }
        }
      }
      return datalist
    },
    // 点击编辑图标
    bian() {
      this.pricestatus = 'none'
      if (this.idstatus === 'down') {
        this.idstatus = 'up'
        this.datalist = this.sortUp('id', data)
      } else if (this.idstatus === 'up') {
        this.idstatus = 'down'
        this.datalist = this.sortDown('id', data)
      } else {
        this.idstatus = 'down'
        this.datalist = this.sortDown('id', data)
      }
    },
    // 点击价格图标
    jia() {
      this.idstatus = 'none'
      if (this.pricestatus === 'none') {
        this.pricestatus = 'down'
        this.datalist = this.sortDown('price', data)
      } else if (this.pricestatus === 'down') {
        this.pricestatus = 'up'
        this.datalist = this.sortUp('price', data)
      } else if (this.pricestatus === 'up') {
        this.pricestatus = 'down'
        this.datalist = this.sortDown('price', data)
      }
    },
    // 点击页码切换页面
    yema(item) {
      this.panum = item
      this.paye = Math.ceil(this.data.length / this.pati)
      let list = (this.panum - 1) * Number(this.pati)
      this.datalist = this.data.slice(list, list + Number(this.pati))
    }
  },
  watch: {
    // 监听搜索的关键字
    kw(newValue, oldValue) {
      console.log(newValue);
      if (this.kw) {
        this.datalist = this.datalist.filter(item => item.goods_name.includes(this.kw))
      } else {
        this.list()
      }
    },
    // 监听分页切换
    pati(newValue, oldValue) {
      console.log(newValue);
      if (this.pati !== '') {
        this.paye = Math.ceil(this.data.length / this.pati)
        this.yema(this.panum)
      }
    }
  }
}

</script>

<style  scoped>
tbody {
  margin: 0;
  padding: 0;
  background-color: chartreuse;
}

.inp {
  margin-bottom: 5px;
}

.foo {
  display: flex;
  justify-content: space-between;
}

.inpy {
  width: 40px;
  text-align: center;
}
</style>