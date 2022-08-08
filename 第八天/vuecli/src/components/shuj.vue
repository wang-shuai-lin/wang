<template>
    <div>
        <Header>
            <template v-slot:left>
                我的书架
            </template>

            <template v-slot:right>
                <span @click="fan"> 返回</span>
            </template>

        </Header>
  
        <ul >
            <li v-for="(item, index ) in shulist" :key="index">
                <img :src="item.img" class="img1" @click="del(index)">
                <div class="bo">
                    <span class="desc">{{ item.desc }}</span>
                    <span class="name">
                        {{ item.name }}
                    </span>
                </div>
            </li>
        </ul>
  
    </div>
</template>

<script>
import { mapState } from 'vuex';
import Header from "./header.vue"
export default {
    components: {
        Header
    },
    computed: {
        ...mapState(['shulist'])
    },
    data() {
        return {
          
        };
    },

    mounted() {

    },

    methods: {
        fan() {
            this.$router.push('tu')
        },
        del(index) {
            this.$store.commit('del', index)
        },
      
    },
};
</script>

<style scoped>
ul {
    width: 100%;
    list-style: none;
    display: flex;
    justify-content: space-around;
    flex-wrap: wrap;

}

li {
    width: 48%;
    height: 340px;
    margin: 10px 0;


}

.img1 {
    width: 100%;
    height: 200px;
}

.desc {
    font-size: 12px;
    color: gray;
}

.name {

    font-size: 30px;
    color: red;
}

.bo {
    height: 140px;
    display: flex;
    flex-direction: column;
    justify-content: space-between;


}

.zheng {
    width: 100%;
    background-color: green;
    display: flex;
    justify-content: space-between;
    color: white;
}

.yi {
    width: 100%;
    background-color: green;
    display: flex;
    justify-content: space-between;
    color: white;
}
</style>