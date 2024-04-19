const { defineConfig } = require('@vue/cli-service')
module.exports = defineConfig({
  transpileDependencies: true,
  // 关闭eslint校验
  lintOnSave: false ,
  devServer: {  //配置代理服务器
     // 配置跨域
     proxy: {
        "/api": {
          target: "http://192.168.81.236:8888",//需代理的后端接口
          secure: false,//开启代理：在本地会创建一个虚拟服务端，然后发送请求的数据，并同时接收请求
          changeOrigin: true,
          pathRewrite: {
            "^/api": "/",//重写匹配的字段。把/api 转为 /
          }
        }
      },
},
})