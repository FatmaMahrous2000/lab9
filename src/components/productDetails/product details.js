import { useParams } from "react-router-dom/cjs/react-router-dom.min";

function Productdetails(){
    let params=useParams()
    console.log(params);
    return(
        <>
        <h1>this product with id {params.id}</h1>
        </>
    )
}

export default Productdetails;