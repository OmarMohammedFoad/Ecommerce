import { Link } from "react-router-dom"
import "./product.css"
import "./MultiButton.css"

export default function Product(props)

{
    const {product} = props 
    
   
    return(
   <>
        <div className="card" >


  <img src={product.image} className="img-rounded"   alt={product.title}/>
  <div className="card-body " >
    <h5 className="card-title">{product.title}</h5>
    <p className="card-text">{product.description}</p>
    {}
    <Link to={`/product/${product.id}`}    className="button1">Go somewhere</Link>
    
  </div>
</div>

        </>
    )
}