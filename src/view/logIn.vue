<template>
    <div>
        <div :style="backgourndImage">
            <div :style="{height: '80px',width: '100%',textAlign: 'center'}">
                <p :style="{fontSize: '2rem',lineHeight: '80px',color: 'white'}">登录到生活社区</p>
            </div>
            <div :style="{width:'100%',height: '400px'}">
                <div :style="{width: '400px',height: '500px',border: '1px solid rgb(170,170,170)',backgroundColor: 'rgba(255,255,255,0.6)',position: 'relative',left: '50%',marginLeft: '-200px'}">
                    <div :style="{width: '100%',height: '50px'}">
                        <li :class="changeLogin == 0 ? 'changeTops' : 'notop'" @click="userLogin">用户登录</li>
                        <li :class="changeLogin == 1 ? 'changeTops' : 'notop'" @click="manageLogin">管理登录</li>
                    </div>
                    <div v-if="changeLogin == 0" :style="{width: '100%',height: '350px',paddingTop: '70px'}">
                        用户名<zypcInput v-model="login.username" placeholder="请输入用户名" />
                        密码<zypcNput style="position: relative;left: 50%;margin-left: -105px;" type="password" v-model="login.password" placeholder="请输入密码" />
                        <div :style="{overflow: 'hidden',paddingLeft: '105px',marginTop: '20px'}">
                            <img @click="getCaptcher" :src="captcher" style="width: 80px;height: 40px;float: left;" alt="" width="200px" height="100px">
                            <zypcInput width="100px" v-model="login.code" placeholder="请输入验证码" :style="{float: 'left'}" />
                        </div>
                        <zypcBtton @click.native="Loginin" :style="{marginTop: '10px'}">登录</zypcBtton>
                    </div>
                    <div v-if="changeLogin == 1" :style="{width: '100%',height: '350px',paddingTop: '70px'}">
                        管理员账号<zypcInput v-model="login.username" placeholder="请输入管理员账号" />
                        密码<zypcInput v-model="login.password" placeholder="请输入密码" />
                        <div :style="{overflow: 'hidden',paddingLeft: '105px',marginTop: '20px'}">
                            <img @click="getCaptcher" :src="captcher" style="width: 80px;height: 40px;float: left;" alt="" width="200px" height="100px">
                            <zypcInput width="100px" v-model="login.code" placeholder="请输入验证码" :style="{float: 'left'}" />
                        </div>
                        <zypcBtton :style="{marginTop: '10px'}" @click.native="Loginin">进入</zypcBtton>
                    </div>
                    <div :style="{width: '100%',height: '80px'}">
                        <span class="register" @click="goRegister">没有账号？注册一个？</span>
                        <span class="fpas">忘记密码</span>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import axios from 'axios'
import zypcBtton from '@/components/button.vue'
import zypcNput from '@/components/input.vue'

export default {
    data() {
        return {
            login: {
                username: '',
                password: '',
                code: ''
            },
            captcher: '',
            backgourndImage: {
                height: '1000px',
                minWith: '1100px',
                backgroundImage: "url(" + require("../assets/login.jpg") + ")",
                backgroundRepeat: "no-repeat",
                backgroundSize: "cover",
            },
            changeLogin: 0,
        }
    },
    components: { 
        zypcBtton,
        zypcNput
    },
    mounted() {
        this.getCaptcher()
    },
    methods: {
        getCaptcher(){
            var that = this
            var xhr = new XMLHttpRequest();
            xhr.onreadystatechange = function(){
            // xhr 对象改变的时候，执行该函数（回调）
            if(xhr.readyState == 4){// 服务端响应结束
                if(xhr.status == 200){// 200表示服务器正常响应结束
                // 接收返回来的响应文本
                    var s = xhr.responseText;
                    var obj = JSON.parse(s);
                    console.log(obj)
                    that.captcher = obj.data

                }else{
                    //弹出错误代码
                    alert(xhr.status);
                }
                }
            }
            xhr.open("GET", "http://taskerd.xupt.org/control/getCaptcha", true);
            xhr.send(null);
        },
        Loginin(){
            let code = this.login.code
            console.log(code)
            var login = {
                username: this.login.username,
                password: this.login.password
            }
            axios.post('http://taskerd.xupt.org/control/verify_Captcha',{code: code}).then((res)=>{
                if(res.data.status == 200){
                    axios.post('http://192.168.43.212:8080/blog/register/login',login,{
                        responseType: 'json',
                        withCredentials: true
                    }).then((res)=>{
                        console.log(res)
                        if(res.data.status == 'success'){ 
                            this.$Message.success('登陆成功')
                            this.$router.push({path: '/'})
                        }
                        else
                        this.$Message.warning('账号或密码错误')
                    })
                }else{
                    this.$Message.warning('验证码错误')
                }
            })
            // axios.post('http://192.168.43.167:8080/blog/register/login',this.login,{
            //     responseType: 'json',
            //     withCredentials: true
            // }).then((res)=>{
            //     console.log(res)
            // })
        },
        userLogin(){
            this.changeLogin = 0
        },
        manageLogin(){
            this.changeLogin = 1
        },
        goRegister(){
            this.$router.push({path: '/register'})
        },
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
:hover.changeTops {
    cursor: pointer;
}
:hover.notop {
    cursor: pointer;
}
.register {
    float: right;
    margin-right: 20px;
    color: rgb(45,183,245);
}
:hover.register {
    cursor: pointer;
}
.fpas {
    float: left;
    margin-left: 20px;
    color: rgb(45,183,245);
}
:hover.fpas {
    cursor: pointer;
}
</style>