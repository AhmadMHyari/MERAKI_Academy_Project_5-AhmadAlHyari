import axios from "axios"
import { useEffect, useState } from "react"
import { useNavigate } from "react-router-dom"

const OwnerStoreManagement = ()=>{
    const navigate = useNavigate()
    const [storeId,setStoreId] = useState(localStorage.getItem("storeId"))
    const [storeTitle,setStoreTitle]=useState(localStorage.getItem("storeTitle"))
        
    return(
        <div>
            <h1>{storeTitle}</h1>
            <button onClick={()=>{navigate(`/${storeId}/allproducts`)}} >All Products</button>
            <button>Manager Dashboard</button>
            <button>Change Store Info</button>   
        </div>
    )
}
export default OwnerStoreManagement