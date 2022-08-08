<template>
    <div>
        <Header>
            <template v-slot:left>
                图书商城
            </template>

            <template v-slot:right>
                <span @click="jia"> 我的书架</span>
            </template>

        </Header>
        <ul>
            <li v-for="(item,index) in list" :key="index">
                <img :src="item.img" class="img1">
                <div class="bo">
                    <span class="desc">{{ item.desc }}</span>
                    <span class="name">{{ item.name }}
                        <button @click="add(item)">+</button>
                    </span>
                </div>
            </li>
        </ul>
    </div>
</template>

<script>
import { mapState } from "vuex";
import Header from "./header.vue"
export default {
    components: {
        Header
    },
    computed: {
        ...mapState(['list'])
    },
    data() {
        return {

        };
    },

    mounted() {
    },

    methods: {
        add(shu) {
            this.$store.commit('add', shu)
        },
        jia() {
            this.$router.push('shuj')
        }
    },
};
</script>

<style  scoped>
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
</style>