import axios from "axios";

export const getProducts = (callback) => {
    return axios.get("https://fakestoreapi.com/products").then((res) => {
       callback(res.data);
       // console.log(res);
    }).catch((err) => {
        console.log(err);
    });
};

// export const getComments = () => {
//     return axios.get("https://jsonplaceholder.typicode.com/comments?_limit=10").then((res) => {
//         const data = res.data;
//         return data;
//         console.log(data);
//     }).catch((err) => {
//         console.log(err);
//     });
// };
// export const fetchComments = async (currentPage) => {
//      axios.get(`https://jsonplaceholder.typicode.com/comments?_page=${currentPage}&_limit=10`).then((res) => {
//     const data = res.data;
//     return data;
//      //callback(res.data);
//         console.log(dataComm);
//     }).catch((err) => {
//         console.log(err);
//     });
// };