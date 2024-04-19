<template>
    <div class="content">
        <div class="left">
            <div class="title">
                <div class="title-h1">
                    Welecom Back!
                </div>
                <div class="tips">
                    Simplify your workflow and boost your productivity
                    with Tuga's App. Get started for free.
                </div>
            </div>
            <div class="form">
                <div class="input-wrapper">
                    <input type="text" placeholder="account" v-model="login.userName"/>
                </div>
                <div class="input-wrapper">
                    <input type="password" placeholder="password" v-model="login.password"/>
                </div>
                <div class="forgot-pwd">
                    <span>Forgot Password?</span>
                </div>
                <button class="btn" @click="submit">Login</button>
            </div>
            <div class="other-login">
                <div class="divider">
                    <span class="line"></span>
                    <span class="divider-text">or continue with</span>
                    <span class="line"></span>
                </div>
                <div class="other-login-wrapper">
                    <div class="other-login-item">
                        <svg t="1695533328061" class="icon" viewBox="0 0 1024 1024" version="1.1"
                            xmlns="http://www.w3.org/2000/svg" p-id="4023" width="128" height="128">
                            <path
                                d="M824.8 613.2c-16-51.4-34.4-94.6-62.7-165.3C766.5 262.2 689.3 112 511.5 112 331.7 112 256.2 265.2 261 447.9c-28.4 70.8-46.7 113.7-62.7 165.3-34 109.5-23 154.8-14.6 155.8 18 2.2 70.1-82.4 70.1-82.4 0 49 25.2 112.9 79.8 159-26.4 8.1-85.7 29.9-71.6 53.8 11.4 19.3 196.2 12.3 249.5 6.3 53.3 6 238.1 13 249.5-6.3 14.1-23.8-45.3-45.7-71.6-53.8 54.6-46.2 79.8-110.1 79.8-159 0 0 52.1 84.6 70.1 82.4 8.5-1.1 19.5-46.4-14.5-155.8z"
                                p-id="4024"></path>
                        </svg>
                    </div>
                    <div class="other-login-item">
                        <svg t="1695533780568" class="icon" viewBox="0 0 1024 1024" version="1.1"
                        xmlns="http://www.w3.org/2000/svg" p-id="5066" width="128" height="128">
                        <path
                            d="M664.250054 368.541681c10.015098 0 19.892049 0.732687 29.67281 1.795902-26.647917-122.810047-159.358451-214.077703-310.826188-214.077703-169.353083 0-308.085774 114.232694-308.085774 259.274068 0 83.708494 46.165436 152.460344 123.281791 205.78483l-30.80868 91.730191 107.688651-53.455469c38.558178 7.53665 69.459978 15.308661 107.924012 15.308661 9.66308 0 19.230993-0.470721 28.752858-1.225921-6.025227-20.36584-9.521864-41.723264-9.521864-63.862493C402.328693 476.632491 517.908058 368.541681 664.250054 368.541681zM498.62897 285.87389c23.200398 0 38.557154 15.120372 38.557154 38.061874 0 22.846334-15.356756 38.156018-38.557154 38.156018-23.107277 0-46.260603-15.309684-46.260603-38.156018C452.368366 300.994262 475.522716 285.87389 498.62897 285.87389zM283.016307 362.090758c-23.107277 0-46.402843-15.309684-46.402843-38.156018 0-22.941502 23.295566-38.061874 46.402843-38.061874 23.081695 0 38.46301 15.120372 38.46301 38.061874C321.479317 346.782098 306.098002 362.090758 283.016307 362.090758zM945.448458 606.151333c0-121.888048-123.258255-221.236753-261.683954-221.236753-146.57838 0-262.015505 99.348706-262.015505 221.236753 0 122.06508 115.437126 221.200938 262.015505 221.200938 30.66644 0 61.617359-7.609305 92.423993-15.262612l84.513836 45.786813-23.178909-76.17082C899.379213 735.776599 945.448458 674.90216 945.448458 606.151333zM598.803483 567.994292c-15.332197 0-30.807656-15.096836-30.807656-30.501688 0-15.190981 15.47546-30.477129 30.807656-30.477129 23.295566 0 38.558178 15.286148 38.558178 30.477129C637.361661 552.897456 622.099049 567.994292 598.803483 567.994292zM768.25071 567.994292c-15.213493 0-30.594809-15.096836-30.594809-30.501688 0-15.190981 15.381315-30.477129 30.594809-30.477129 23.107277 0 38.558178 15.286148 38.558178 30.477129C806.808888 552.897456 791.357987 567.994292 768.25071 567.994292z"
                            p-id="5067"></path>
                    </svg>
                    </div>
                </div>
            </div>
            <div class="register">
                Not a member? <span>Register now</span>
            </div>
        </div>
        <div class="right">
            <div class="swiper">
                <div class="swiper-wrapper">
                    <div class="swiper-slide">
                        <img src="../../assets/img/1.jpg" alt="">
                        <span class="img-tips">
                            One click triple connection ---Maos
                        </span>
                    </div>
                    <div class="swiper-slide">
                        <img src="../../assets/img/2.jpg" alt="">
                        <span class="img-tips" style="color: black;">
                            One click triple connection ---Maos
                        </span>
                    </div>
                    <div class="swiper-slide">
                        <img src="../../assets/img/3.jpg" alt="">
                        <span class="img-tips">
                            One click triple connection ---Maos
                        </span>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import { post } from '@/api/httpHelper';
import swiper from "swiper";
export default {
  name: "",
  data() {
    return {
        login:{
            userName: '',
            password: '',
      },
    };
  },
  mounted() {
    this.initSwiper();
  },
  methods: {
    initSwiper() {
      new swiper(".swiper", {
        //设置轮播的循环方式
        loop: true,

        //设置自动播放间隔时间
        autoplay: 2000,

        // 轮播效果,默认为平滑轮播
        effect: "slide",

        //分页器
        pagination: ".swiper-pagination",

        //前进后退按钮
        prevButton: ".swiper-button-prev",
        nextButton: ".swiper-button-next",

        // 用户中断轮播后续播
        autoplayDisableOnInteraction: false,
      });
    },
     submit(){
        // console.log("login:",this.login)
    //  post(`/register`,this.login)
        //   this.$message(duration='1500',
        //   message= '登录成功',
        //   type='success')
    this.$router.push("/")
      
  
     },
  },
};

</script>

<style lang="scss" scoped>
@import "../../assets/plugin/swiper-bundle.min.css";
@font-face {
    font-family: PlastoTrial_ExtraLight;
    font-weight: 700;
    src: url(../../assets/font/PlastoTrial-ExtraLight.otf) format("truetype");
    text-rendering: optimizeLegibility;
}

@font-face {
    font-family: PlastoTrial_ExtraBold;
    font-weight: 700;
    src: url(../../assets/font/PlastoTrial-ExtraBold.otf) format("truetype");
    text-rendering: optimizeLegibility;
}

* {
    padding: 0;
    margin: 0;
}

.content {
    width: 100vw;
    height: 100vh;
    display: flex;
    flex-direction: row;
    .left {
        width: 45%;
        display: flex;
        flex-direction: column;
        align-items: center;
        padding: 5% 10%;
        box-sizing: border-box;
        font-family: PlastoTrial_ExtraLight;
        .title {
            text-align: center;
            .title-h1 {
                margin: 5% 0;
                text-align: center;
                font-size: 3vw;
                font-family: PlastoTrial_ExtraBold;
            }
            .tips {
                line-height: 30px;
                color: #727272;
            }
        }
        .form {
            width: 100%;
            margin-top: 10%;
            .input-wrapper {
                width: 100%;
                margin: 10px 0;
                input {
                    width: 100%;
                    height: 6vh;
                    border: 1px solid #000;
                    border-radius: 50px;
                    box-sizing: border-box;
                    padding: 10px 20px;
                    font-size: 20px;
                    outline: none;
                    font-family: PlastoTrial_ExtraLight;
                }
            }
            .forgot-pwd {
                text-align: right;
                margin: 10px 0;
                cursor: pointer;
            }
            .btn {
                width: 100%;
                height: 50px;
                border: 0;
                background-color: #000;
                color: #fff;
                margin: 10px 0;
                border-radius: 50px;
                font-size: 20px;
                cursor: pointer;
                font-family: PlastoTrial_ExtraBold;
            }
        }
        .other-login {
            width: 100%;
            .divider {
                width: 100%;
                margin: 20px 0;
                text-align: center;
                display: flex;
                align-items: center;
                justify-content: space-between;
                .line {
                    display: inline-block;
                    flex: 1;
                    height: 1px;
                    background-color: rgb(162, 172, 185);
                }
                .divider-text {
                    vertical-align: middle;
                    margin: 0 20px;
                    display: inline-block;
                    color: #000;
                    white-space: nowrap;
                }
            }
            .other-login-wrapper {
                width: 100%;
                display: flex;
                justify-content: center;
                align-items: center;
                .other-login-item {
                    width: 40px;
                    height: 40px;
                    padding: 10px;
                    text-align: center;
                    border-radius: 10px;
                    cursor: pointer;
                    font-weight: 600;
                    margin: 0 10px;
                    transition: 0.7s;
                    background-color: #000;
                    border-radius: 50%;
                    svg {
                        width: 40px;
                        height: 40px;
                        fill: #fff;
                        vertical-align: middle;
                    }
                    span {
                        vertical-align: middle;
                    }
                    &:hover {
                        background-color: #fff;
                        border: 0;
                        box-shadow: 1px 10px 32px 1px rgba(186, 175, 221, 0.37);
                        svg {
                            fill: #000;
                        }
                    }
                }
            }
        }
        .register {
            width: 100%;
            text-align: center;
            margin-top: 5%;
            span {
                color: rgb(135, 228, 89);
                cursor: pointer;
            }
        }
    }
    .right {
        width: 55%;
        height: 100%;
        padding: 40px 40px 40px 10px;
        box-sizing: border-box;
        border-radius: 20px;
        .swiper {
            height: 100%;
            display: flex;
            flex-direction: row;
            border-radius: 20px;
            .swiper-wrapper {
                position: relative;
                .img-tips {
                    width: 100%;
                    position: absolute;
                    left: 50%;
                    top: 50%;
                    transform: translate(-50%, -50%);
                    font-size: 40px;
                    color: #fff;
                    text-align: center;
                    font-family: PlastoTrial_ExtraBold;
                }
            }
        }
    }
}

@media (max-width: 912px) {
    .content {
        flex-direction: column;
        .left {
            width: 100%;
            height: 100%;
            justify-content: center;
            .title {
                .title-h1 {
                    font-size: 8vw;
                }
            }
        }
        .right {
            display: none;
        }
    }
}
</style>