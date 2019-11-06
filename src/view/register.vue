<template>
    <div>
        <div :style="registerBG">
            <div :style="{height: '80px',width: '100%',textAlign: 'center'}">
                <p :style="{fontSize: '2rem',lineHeight: '80px',color: 'white'}">注册用户</p>
            </div>
            <div :style="{width:'100%',height: '400px'}">
                <div :style="{width: '400px',height: '500px',border: '1px solid rgb(170,170,170)',backgroundColor: 'rgba(255,255,255,0.6)',position: 'relative',left: '50%',marginLeft: '-200px'}">
                    <div :style="{width: '100%',height: '50px',fontSize: '1.5em',lineHeight: '50px',marginBottom:'30px',background: 'orange',color: 'white'}">
                        生活社区
                    </div>
                    <div>
                        用户名
                        <zypcNput :style="{position: 'relative',left: '50%',marginLeft: '-100px'}" v-model="register.username" placeholder="请输入用户名" />
                        密码
                        <zypcNput type="password" :style="{position: 'relative',left: '50%',marginLeft: '-100px'}" v-model="register.password" placeholder="请输入密码" />
                        确认密码
                        <zypcNput type="password" :style="{position: 'relative',left: '50%',marginLeft: '-100px'}" v-model="isPassword" placeholder="确认密码" />
                        邮箱
                        <zypcNput :style="{position: 'relative',left: '50%',marginLeft: '-100px'}" v-model="register.email" placeholder="输入邮箱" />
                        <zypcBtton @click.native="registerUser" :style="{marginTop: '10px'}">注册</zypcBtton>
                    </div>
                    <span :style="{color: 'rgb(45,183,245)'}" @click="goLogin">返回登录</span>
                </div>
            </div>
        </div>  
    </div>
</template>

<script>
import zypcBtton from '@/components/button.vue'
import zypcNput from '@/components/input.vue'
import axios from 'axios'

export default {
    data() {
        return {
            register: {
                username: '',
                password: '',
                email: ''
            },
            isPassword: '',
            registerBG: {
                height: '1000px',
                minWith: '1100px',
                backgroundImage: "url(" + require("../assets/login.jpg") + ")",
                backgroundRepeat: "no-repeat",
                backgroundSize: "cover",
            }
        }
    },
    components: {zypcBtton,zypcNput},
    methods: {
        registerUser(){
            if(this.register.password !== this.isPassword){
                alert('两次密码不相等')
            }else
            axios.post('http://192.168.43.212:8080/blog/register/register',this.register).then((res)=>{
                console.log(res)
                if(res.data.data === null){
                    this.$Message.success('注册成功')
                }else{
                    this.$Message.warning(res.data.data.errMsg)
                }
            })
        },
        goLogin(){
            this.$router.push({path:'/login'})
        }
    },
}
</script>

<style lang="">

</style>