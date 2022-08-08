<template>
  <div>
    <!-- 姓：<input type="text" v-model="name"><br>
    名：<input type="text" v-model="age"><br>
    全称：<input type="text" v-model="qx"> -->
   <HelloWorld></HelloWorld>
  </div>
</template>

<script>
import HelloWorld from './components/HelloWorld.vue'

export default {
  name: 'App',
  components: {
    HelloWorld
  },
  // data() {
  //   return {
  //     name: '升',
  //     age: '班'
  //   }
  // },
  // computed: {
  //   qx: {
  //     // 获取值
  //     get() {
  //       return this.name + '_' + this.age
  //     },
  //     // 修改值
  //     set(val) {
  //       let arr = val.split('_')
  //       console.log(arr);
  //       this.name=arr[0]
  //       this.age=arr[1]
  //     }
  //   }
  // }
}
</script>
