import axiosInstance from './../api/axios';

const getProducts=(page=1, search="", ordering="")=>{
    return axiosInstance.get(`/api/products/?page=${page}&search=${search}&ordering=${ordering}`);
   
};

const createProduct=(data)=>{
    return axiosInstance.post("/api/products/", data);
};

const updateProduct=(id, data)=>{
    return axiosInstance.put(`/api/products/${id}/`, data);
}

const deleteProduct=(id)=>{
    return axiosInstance.delete(`/api/products/${id}/`)
}


export default{
    getProducts,
    createProduct,
    updateProduct,
    deleteProduct
}