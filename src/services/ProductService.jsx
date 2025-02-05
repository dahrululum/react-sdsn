import axios from "axios";

export const getProducts = (callback) => {
    return axios.get("https://fakestoreapi.com/products").then((res) => {
       callback(res.data);
       // console.log(res);
    }).catch((err) => {
        console.log(err);
    });
};

export const getComments = (callback) => {
    return axios.get("https://jsonplaceholder.typicode.com/comments").then((res) => {
       callback(res.data);
       // console.log(res);
    }).catch((err) => {
        console.log(err);
    });
};