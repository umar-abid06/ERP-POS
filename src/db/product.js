import axios from 'axios';


export const getProductsFromDb = () => {
    return new Promise((resolve, reject)=>{
        axios.get("http://localhost:5000/getProducts").then(res=>{
            resolve(res.data)
        }).catch(err=>reject(err))
    })
    }

    //  static createProductInDb = async (product) => {
    //     new Promise((resolve, reject)=>{
    //         try {
    //             let res = await fetch("http://localhost:5000/createProduct")
    //             let prods = await res.json()
    //             resolve(prods)
    //           } catch (err) {
    //             console.log(err.message)
    //             reject(err)
    //           }
    //     })

    //  }



   
   