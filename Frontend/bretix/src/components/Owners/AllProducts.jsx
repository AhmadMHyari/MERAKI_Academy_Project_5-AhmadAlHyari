import axios from "axios"
import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"


const AllProducts = ()=>{
    const {id} = useParams()
    const [storeInfo,setStoreInfo]= useState([])
    const [storeProducts,setStoreProducts] = useState([])

    useEffect(()=>{axios.get(`http://localhost:5000/stores/${id}`)
    .then((res)=>{setStoreInfo(res.data.result[0])})
    .catch((err)=>{console.log(err);
    })},[])

    useEffect(()=>{axios.get(`http://localhost:5000/stores/${id}/productsinstore`)
    .then((res)=>{setStoreProducts(res.data.result)})
    .catch((err)=>{console.log(err);
    })},[])

    console.log(storeProducts);

    const showProducts = storeProducts.map((product)=>{
        return <div key={product.id}>
            <img src={product.imgsrc} alt={product.title} /><br />
            <h3>{product.title}</h3><span>{product.rate}</span>
        </div>
    })
    
return (
    <div>{showProducts}</div>
)
}
export default AllProducts