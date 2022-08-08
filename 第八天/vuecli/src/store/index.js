import Vue from 'vue'
import Vuex from 'vuex'
// 引入依赖包  作用是让数据刷新不消失
import createPersistedState from "vuex-persistedstate";
Vue.use(Vuex)
import data from "../../public/data.json"
console.log(data);
export default new Vuex.Store({
    state: {
        // 图书数据
        list: data,
        // 书架列表的数据
        shulist: []
    },
    mutations: {
        add(state, shu) {

            var index = state.shulist.findIndex(item => {
                item.id = shu.id
            })
            if (index == -1) {
                state.shulist.push(shu)
            }

        },
        del(state, index) {
            if (confirm('是否删除')) {
                state.shulist.splice(index, 1)
            } else {
                alert('取消删除')
            }
        }
    },
    actions: {},
    modules: {},
    plugins: [createPersistedState({
        storage: sessionStorage
    })]


})