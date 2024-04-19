import http from "./axios";  //引入二次封装的axios
// export const login = (params)=>requests({url:'/user/login ',method:'get',data:params});

  export const getTeachers=()=>{
    // /home/getData接口地址
    // 返回一个promise对象
    return http.get('/teacher/getTeachers')
  }
