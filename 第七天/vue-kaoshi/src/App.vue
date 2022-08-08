<template>
  <div>
    <input type="text" placeholder="商品名称" v-model="kw">
    <table width="500px">
      <thead>
        <tr>
          <th>编号
            <span @click="shang">{{ this.bh ? '⇡' : '⇣' }}</span>
          </th>
          <th>名称</th>
          <th>价格
            <span @click="jia">{{ this.jg ? '⇡' : '⇣' }}</span>
          </th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="item in shou" :key="item.id">
          <td>{{ item.id }}</td>
          <td>{{ item.goods_name }}</td>
          <td>{{ item.price }}</td>
        </tr>
      </tbody>
    </table>


    <div class="flxe">
      <div>
        每页
        <input type="number" v-model="paji">
        条
        <span>总共10条</span>
      </div>
      <div>
        <button v-for="(item, index) in paye" :key="index" @click="add(item)">{{ item }}</button>
      </div>
    </div>


  </div>
</template>

<script>
// 引入jion文件
import { data } from './assets/data.json'
export default {
  name: 'VueKaoshiApp',

  data() {
    return {
      // 数据
      data: [],
      // 搜索的关键字
      kw: '',
      // 编号图标的标识
      bh: true,
      // 价格图标的标识
      jg: true,
      // 总共多少页
      paye: null,
      // 每页几条数据
      paji: 10,
      // 当前页码
      pad: 1,
      // 每页显示的内容
      shou: []
    };
  },
  // 生命周期
  mounted() {
    this.sou()
    this.add(this.pad)

  },

  methods: {

    // 搜索框为空时显示页面
    sou() {
      if (this.kw == '') {
        this.data = data
      }
    },
    // 编号图标
    shang() {
      this.bh = !this.bh
      if (this.bh == false) {
        this.shou.sort(function (a, b) {
          return b.id - a.id
        })
      } else {
        this.shou.sort(function (a, b) {
          return a.id - b.id
        })
      }
    },
    // 价格图标
    jia() {
      this.jg = !this.jg
      if (this.jg == false) {
        this.shou.sort(function (a, b) {
          return b.price - a.price
        })
      } else {
        this.shou.sort(function (a, b) {
          return a.price - b.price
        })
      }
    },
    // 分页
    add(item) {
      this.pad = item
// 当前总页数=总数居的总长度/每页条数
      this.paye = Math.ceil(this.data.length / this.paji)
      var list = (this.pad - 1) * Number(this.paji)// 每去一组数据的第一个索引
      this.shou = this.data.slice(list, list + Number(this.paji)) // 从总数据中取出每页的数据

    },



  },
  watch: {
    // 搜索
    kw(newValue, oldValue) {

      if (this.data.length != 0) {
        this.shou = this.data.filter(item => item.goods_name.includes(this.kw))

      }
    },
    // 监听分页
    paji(newValue, oldValue) {
      console.log(newValue);
      if (this.paji !== '') {

        this.paye = Math.ceil(this.data.length / this.paji)
        this.add(this.pad)
      }

    },
    depp: true
  }

};
</script>

<style  scoped>
tbody td {
  border-bottom: 1px solid #000;
}

span {
  cursor: pointer;
}

input {
  width: 50px;
  text-align: center;
}

.flxe {
  display: flex;
  justify-content: space-between;
}
</style>