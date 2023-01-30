import Product from "./product"
import "./product.css"
import { useEffect, useState } from "react"


export default function ProductList()
{
    let [product,setProduct] = useState([]) 
    let [Cat,getAllCat] = useState([])
const url = "https://fakestoreapi.com/products"

useEffect(()=>
{
    fetch(url) .then(res=>res.json())
    .then((data)=>setProduct(data))
}
,[])

  useEffect( ()=>
  {
       fetch(`${url}/categories`) .then(res=>res.json())
      .then((data)=>getAllCat(data))
  }
  ,[])

const GetProductsinCat =  (cat)=>
{
    console.log(cat);
    fetch(`${url}/category/${cat}`) .then(res=>res.json())
      .then((data)=>setProduct(data))
}

const GetAllProductst =  ()=>
{
  
    fetch(`https://fakestoreapi.com/products`) .then(res=>res.json())
    .then((data)=>setProduct(data))
}


    return(
        <>
        <br/>


        
        <div className="multi-button">
        <button    onClick={()=>{GetAllProductst()}}  className="button1">All</button>

        {Cat.map((data)=>
  
  <button key={data}  onClick={()=>{GetProductsinCat(data)}}  className="button1">{data}</button>
  )}
 </div>

       
       
        <div className="Container">
       <div className="p-3">
           
       <div className="row">
                {product.map((product)=>
                {
                    return(
                       
                        <div className="col-md-3" key={product.id}>
                            
                        {/* <div className="card-body"> */}
                        <Product product={product}/>
                     
          </div>
                    )
                }
                )}
            
  {/* </div> */}
</div>
</div>
</div>

        </>
    )
}