<template>
    <div>
        <div :class="status"></div>

    </div>
</template>

<script>
// 
//  思路: 1. 图标作为背景图进行展示,
//  2. 向下图标翻转180°展示
//  3. 点击的时候根据向上还是向下,或者离开点击传参,up, down, none判断
//    
export default {
    props: {
        status: {
            type: String,
                required: true,
                validator: function(value) {
                    return ['up', 'down', 'none'].includes(value)
                }
        }
    },

    data() {
        return {

        };
    },

    mounted() {

    },

    methods: {

    },
};
</script>

<style  scoped>
div {
    width: 30px;
    height: 30px;
    display: inline-block;
    vertical-align: middle;
}
/* 向上 */
.up {
    background-image: url("../assets/arrow-red.png");
}
/* 向下*/
.down {
    background-image: url("../assets/arrow-red.png");
    transform: rotate(180deg);
}
/* 离开 */
.none {
    background-image: url("../assets/arrow-down.png");
}
</style>