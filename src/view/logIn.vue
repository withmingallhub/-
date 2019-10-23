<template>
    <div>
        <div :style="{height: '80px',width: '100%',border: '1px solid black',textAlign: 'center'}">
            <p :style="{fontSize: '2rem',lineHeight: '80px'}">登录到生活社区</p>
        </div>
        <div :style="{width:'100%',height: '400px',border: '1px solid black'}">
            <div :style="{width: '400px',height: '500px',border: '1px solid black',position: 'relative',left: '50%',marginLeft: '-200px'}">
                <div :style="{width: '100%',height: '50px',border: '1px solid black'}">
                    <li :class="changeLogin == 0 ? 'changeTops' : 'notop'">用户登录</li>
                    <li :class="changeLogin == 1 ? 'changeTops' : 'notop'">管理登录</li>
                </div>
                <div :style="{width: '100%',height: '450px',border: '1px solid black'}">
                    用户名<zypcInput v-model="login.username" /><br>
                    密码<zypcInput v-model="login.password"/><br>
                    邮箱<zypcInput v-model="login.email"/>
                <button @click="Login">登录</button>
                </div>
                
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
            changeLogin: 0,
        }
    },
    components: { 
        
    },
    mounted() {
        
    },
    methods: {
        Login(){
            axios.post('/api/login',this.login).then((res)=>{
                console.log(res)
            })
        }
    },
}
</script>

<style lang="">
.changeTops {
    height: 100%;
    width: 50%;
    list-style: none;
    float: left;
    background: orange;
    color: white;
    line-height: 50px;
}
.notop {
    height: 100%;
    width: 50%;
    list-style: none;
    float: left;
    background: white;
    line-height: 50px;
}
</style>