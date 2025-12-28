import axios from "axios";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";


const Home = () => {
  const navigate = useNavigate()
    const [top10Products,setTop10Products] = useState([])
    useEffect(()=>{
        axios.get("http://localhost:5000/products/top10")
        .then((res)=>{setTop10Products(res.data.result)})
        .catch((err)=>{console.log(err);
        })
    },[])
    
    const showTop10 = top10Products.map((product)=>{
      return <div key={product.id}>
        <img src={product.imgsrc} alt={product.title} onClick={()=>{navigate(`/product/${product.id}`)}} /><br />
        <h3>{product.title}</h3>
        <span>${product.price}</span> <button>+Add to Cart</button>
      </div>
    })
  return <div> 
    {showTop10}
  </div>;
};
export default Home;
