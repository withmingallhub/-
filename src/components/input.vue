<template>
    <div class="zypc-inputAll" :style="{width: width}">
        <input 
        :type="inputType"
        ref="zypcInput"
        @focus="zypcFocusInput"
        @blur="zypcBlurInput"
        :value="value"
        @input="input"
        :placeholder="placeholder" 
        v-on:change="inputChange"
        v-on:focus="inputFocus"
        v-on:blur="inputBlur"
        :autofocus="autofocus"
        :style="{
            backgroundColor:backgroundColor,
            width:width,
            lineHeight: height,
            height: height
        }" 
        class="zypc-inputFirst" 
        > 
    </div>
</template>

<script>
export default {
    data() {
        return {
            
        }
    },
    props:["backgroundColor","placeholder","width","value","focus","height","type"],
    mounted() {

    },
    computed: {
        autofocus: function(){
            console.log(this.focus,typeof this.focus)
            if(this.focus !== undefined)
                return 'autofocus'
        },
        inputType: function(){
            return this.type
        }
    },
    methods: {
        // 获得焦点为input标签添加边框
        zypcFocusInput(){
            this.$refs.zypcInput.style.border = '1px solid rgb(3,169,244)'
        },
        // 失去焦点将input标签的边框设置为默认值
        zypcBlurInput(){
            this.$refs.zypcInput.style.border = '1px solid rgb(150,150,150)'
        },
        // 实现v-modle的功能和onchange
        input(){
            // v-model功能
            this.$emit('input',event.target.value)
            // onchange功能
            this.$emit('onChange')
        },
        inputChange(){
            this.$emit('change')
        },
        // 失去焦点时触发
        inputBlur(){
            this.$emit('onBlur')
        },
        //获得焦点时触发
        inputFocus(){
            this.$emit('onFocus')
        }
    },
}
</script>

<style lang="">
.zypc-inputAll {
    width: 200px;
}
.zypc-inputFirst {
    border: 1px solid rgb(150, 150, 150);
    border-radius: 10px;
    outline: none;
    padding-left: 5px;
    height: 25px;
    width: 200px;
    margin: 6px;
}
</style>