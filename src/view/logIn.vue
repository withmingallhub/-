<template>
    <div>
        <div :style="{height: '80px',width: '100%',border: '1px solid black',textAlign: 'center'}">
            <p :style="{fontSize: '2rem',lineHeight: '80px'}">登录到生活社区</p>
        </div>
        <div :style="{width:'100%',height: '400px',border: '1px solid black'}">
            <div>
                用户名<zypcInput v-model="username" /><br>
                密码<zypcInput v-model="password"/><br>
                邮箱<zypcInput v-model="email"/>
                <button @click="Login">登录</button>
            </div>
        </div>
    </div>
</template>

<script>
import axios from 'axios'
export default {
    data() {
        return {
            login: {
                username: '',
                password: '',
                email: ''
            },
        }
    },
    components: { 
        
    },
    mounted() {
        
    },
    methods: {
        Login(){
            axios.post('')
        }
    },
}
</script>

<style lang="">

</style>