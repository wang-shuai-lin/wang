<template>
  <div>
    姓： <input type="text" v-model="persion.name"><br>
    名： <input type="text" v-model="persion.sex"><br>
    姓名： <input type="text" v-model="persion.wsl">
  </div>
</template>

<script>
import { reactive, computed } from 'vue'
export default {
  name: 'HelloWorld',
  setup() {
    let persion = reactive({
      name: '王',
      sex: '帅'
    });
    persion.wsl = computed({
      // 获取值
      get() {
        return persion.name + '_' + persion.sex
      },
      // 修改值
      set(name) {
        let [fn, ln] = name.split('_')
        persion.name = fn
        persion.sex = ln
      }
    })
    return{ 
      persion
    }
  }

}
</script>
