<template>
    <div>
        <header :style="{ background: bg }">
            <div class="box">
                <slot name="left"></slot>

            </div>
            <div class="box1">
                <slot name="right"></slot>
            </div>
        </header>
    </div>
</template>

<script>
export default {


    data() {
        return {
            bg: 'red'
        };
    },

    mounted() {

    },

    methods: {

    },
};
</script>

<style scoped>
* {
    margin: 0;
    padding: 0;
}

header {
    width: 100%;
    height: 50px;
    display: flex;
    justify-content: space-between;
}

.box {
    width: 79%;
    height: 50px;
color: white;
font-size: 30px;
    text-align: center;
    line-height: 50px;
}

.box1 {
    width: 21%;
    height: 50px;
    font-size: 12px;
 
    text-align: center;
    line-height: 50px;
}
</style>