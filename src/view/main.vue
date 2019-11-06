<template>
    <div>
        <div class="header">
            <ul class="headerCenter">
                <li :style="{float: 'left',listStyle: 'none',color: 'rgb(65, 128, 46)',fontSize: '2em',height: '70px',lineHeight: '70px',width: '3.5em'}">
                    新鲜事
                </li>
                <li class="topname">
                    二手区
                </li>
                <li class="topname">
                    一起玩
                </li>
                <li class="topname">
                    问点事
                </li>
                <zypcNput height="40px" placeholder="搜索内容" :style="{marginTop: '7px',float: 'left',marginLeft: '50px'}"/>
                <div :style="{fontSize: '2em',float: 'left',lineHeight: '60px',height: '70px',marginLeft: '50px'}">
                    <Icon type="md-alarm" />
                </div>
                <zypcBtton :style="{float: 'left',fontSize: '1.2em',marginTop: '10px',marginLeft: '40px'}" size="large">写文章</zypcBtton>
            </ul>
        </div>
    </div>
</template>

<script>
import zypcNput from '@/components/input.vue'
import zypcBtton from '@/components/button.vue'

export default {
    data() {
        return {
           
        }
    },   
    computed: {
        
    },
    components: {
        zypcNput,zypcBtton
    },
    watch: {
        
    },
    mounted() {
        
    },
    methods: {
        
    },
}
</script>

<style lang="" scope>
.header {
    min-width: 1200px;
    width: 100%;
    height: 70px;
    box-shadow: 10px 15px 45px rgb(150,150,150);
}
.headerCenter {
    width: 1100px;
    height: 100%;
    position: relative;
    border: 1px solid black;
    left: 50%;
    margin-left: -550px;
}
.topname {
    float: left;
    list-style: none;
    font-size: 1.5em;
    height: 50px;
    line-height: 50px;
    margin-top: 10px;
    margin-left: 50px;
    width: 3.5em
}
</style>