<template>
  <div>
    <Header>
      <template v-slot:left>
        登陆页面
      </template>
      <template v-slot:right>
        切换皮肤
      </template>
    </Header>

    <div class="b1">
      <div class="b2">
        <input type="text" placeholder="请输入手机号" v-model="name" @input="chename">
        <span v-show='falg == 2' class="s1"></span>
        <span class="s2" v-show="falg == 1"></span>
      </div>
      <div>
        <input type="text" placeholder="请输入密码" v-model="psd" @input="chepsd">
        <span v-show='falg1 == 2' class="s1"></span>
        <span class="s2" v-show="falg1 == 1"></span>
      </div>
    </div>
    <div class="b3">
      <button class="btn" @click="dl" :disabled="falg==1||falg1==1">登录</button>
    </div>
  </div>
</template>

<script>

import Header from "./header.vue"
export default {
  components: {
    Header
  },

  data() {
    return {
      // 手机号
      name: "",
      // 密码
      psd: "",
      //手机号的标识
      falg: 0,
      // 密码的标识
      falg1: 0

    };
  },

  mounted() {

  },

  methods: {
    // 手机号验证
    chename() {
      var reg = /^1[3-9]{1}[0-9]{9}$/
      console.log(reg.test(this.name));
      if (reg.test(this.name)) {
        this.falg = 2
      } else {
        this.falg = 1
      }
    },
    // 密码验证
    chepsd() {
      var reg = /^[a-z0-9_-]{6}$/
      if (reg.test(this.psd)) {
        this.falg1 = 2
      } else {
        this.falg1 = 1
      }
    },
    // 登录
    dl() {
  this.$router.push('tu')
    }

  },
};
</script>

<style lang="scss" scoped>
.b1 {
  width: 100%;
  height: 100px;

  margin-top: 200px;
  text-align: center;
}

.b2 {
  margin: 10px 0;
}

.btn {
  width: 130px;
  background-color: green;
}

.b3 {
  text-align: center;
}

falg:true {
  color: green;
}

.s1 {
  display: inline-block;
  width: 10px;
  height: 10px;
  border-radius: 50%;
  background-color: green;
}

.s2 {
  display: inline-block;
  width: 10px;
  height: 10px;
  border-radius: 50%;
  background-color: red;

}
</style>