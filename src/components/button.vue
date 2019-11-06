<template>
    <div>
        <div
        :class="['zypc-button',btSize,btType]"
        >
            <span><slot></slot></span>
        </div>
    </div>
</template>

<script>
export default {
    data() {
        return {
            buttonClass: 'zypc-button'
        }
    },
    props: ["size","type"],
    computed:{
        btSize:function(){
            return `${this.buttonClass}-${this.size}`
        },
        btType:function(){
            return `${this.buttonClass}-${this.type}`
        }
    }
}
</script>

<style lang="">
.zypc-button {
    padding:4px 25px; 
    margin:0px;
    border-radius: 10px;
    display:inline-block;  
    overflow:hidden;
    height: 32px;
    line-height:28px;
    background: rgb(45,183,245);
    color: white;
}
:hover.zypc-button {
    background: rgba(45,183,245,0.8);
    cursor: pointer;
}

/* 按钮大小 */
.zypc-button-small {
    height: 32px;
    line-height:28px;
}
.zypc-button-large {
    padding:4px 35px; 
    height: 45px;
    line-height: 41px;
}

/* 确认，蓝色按钮 */
.zypc-button-blue {
    background: rgb(45,183,245);
    color: white;
}
:hover.zypc-button-blue {
    background: rgba(45,183,245,0.8);
    cursor: pointer;
}

/* 错误，红色按钮 */
.zypc-button-error {
    background: rgb(235, 0, 18);
    color: white;
}
:hover.zypc-button-error {
    background:rgba(235, 0, 18,0.8);
    cursor: pointer;
}

/* 通过，绿色按钮 */
.zypc-button-success {
    background: rgb(127, 174, 66);
    color: white;
}
:hover.zypc-button-success {
    background: rgba(127, 174, 66, 0.8);
    cursor: pointer;
}
</style>