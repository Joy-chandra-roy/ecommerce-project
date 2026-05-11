import axios  from "axios";


const axiosInstance=axios.create({
    baseURL:"https://ecommerce-project-w4gu.onrender.com",
    headers:{
      "Content-Type": "application/json",
    },
})

export default axiosInstance;