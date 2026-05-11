import axiosInstance from './../api/axios';

const getProducts=(page=1, search="", ordering="")=>{
    return axiosInstance.get(`/products/?page=${page}&search=${search}&ordering=${ordering}`);
   
};

const createProduct=(data)=>{
    return axiosInstance.post("/products/", data);
};

const updateProduct=(id, data)=>{
    return axiosInstance.put(`/products/${id}/`, data);
}

const deleteProduct=(id)=>{
    return axiosInstance.delete(`/products/${id}/`)
}


export default{
    getProducts,
    createProduct,
    updateProduct,
    deleteProduct
}