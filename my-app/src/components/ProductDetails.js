import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import "./ProductDetails.css"


export default function ProductDetails(props)
{
    const {content} = props;
    const url = "https://fakestoreapi.com/products"

    let [api,getApi] = useState([]) 
    const params = useParams()
    console.log(params);
    console.log(content);
    useEffect(  ()=>
    {
         fetch(`${url}/${params.productid}`) .then(res=>res.json())
        .then((data)=>getApi(data))
    }
    ,[])
    
    return <>
    <div className="cadd">
        <img src={api.image} className="img-responsive"  ></img>
        <div className="fontt">
        <h3 >{api.title}</h3>
         <h5>{api.price} $</h5>
        <p>{api.description}</p>
        </div>
    </div>
   
    </>
}