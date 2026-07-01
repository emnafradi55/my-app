import { useEffect, useState } from "react";
import { getProducts } from "../services/productService";
import ProductCard from "./ProductCard";


function ProductList() {
    // states
    const [products, setProducts] = useState([]);

    // mounting
    useEffect(() => {

        getProducts() //this function sends API requests
            .then((response) => {

                setProducts(response.data.products);

            })
            .catch((error) => {

                console.log(error);

            });

    },
        [] //run only once when the component loads (we can put something inside it and it will run again whenever e something changes)


    );


    // update
    useEffect(() => {
        if (products.length > 0) alert("Products updated!");
    }, [products])




    return (

        <div className="products">

            {products.map((product) => (

                <ProductCard
                    key={product.id}
                    product={product}
                />

            ))}

        </div>

    );
}


export default ProductList;