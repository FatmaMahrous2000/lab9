import { useState } from "react";
import React from "react";
import { Link } from "react-router-dom";

function Products(){
    let [products,setProducts]=useState([
        {id:1,name:'IPhone',price:1200},
        {id:2,name:'laptop',price:3000},
        {id:3,name:'car',price:2000},
    ])

    return(
        <>
        {products.map((prod)=>{
            return <Link to={`/productdetails/${prod.id}`}><h1>{prod.name}</h1></Link>
        }
        )}
        </>
    )

}


export default Products;