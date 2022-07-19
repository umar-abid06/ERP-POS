import axios from 'axios';
const BASE_URL = "http://localhost:5000"


export const getProductsFromDb = () => {
    return new Promise((resolve, reject) => {
        axios.get(`${BASE_URL}/getProducts`).then(res => {
            resolve(res.data)
        }).catch(err => reject(err))
    })
}
export const uploadProductsInDb = (dataFromExcel) => {
    return new Promise((resolve, reject) => {
        axios.post(`${BASE_URL}/uploadProducts`, dataFromExcel).then(res => {
            resolve(res)
        }).catch(err => reject(err))
    })
}





