import { useEffect, useState } from "react";
import axios from "axios";
import styled from "styled-components";
import { popularProducts } from "../data";
import ProductItem from "./ProductItem";


const Container = styled.div`
    padding: 20px;
    display: flex;
    flex-wrap: wrap; 
    justify-content: space-between; 
`

const Product = ({ cat, filters, sort }) => {
    
    const [products, setProducts] = useState([]);
    const [filteredProducts, setFilteredProducts] = useState([]);

    useEffect(() => {
        const getProducts = async () => {
            try {
                const res = await axios.get( 
                    cat 
                    ? `http://localhost:8081/api/products/getall?category=${cat}`
                    : `http://localhost:8081/api/products/getall`
                );
                setProducts(res.data)
                ////console.log(res);
            } catch (err) {
                
            }
        }
        getProducts()
    }, [cat]);

    useEffect(() => {
        cat && setFilteredProducts(
            products.filter((item) =>
            Object.entries(filters).every(([key, value]) =>
            item[key].includes(value)
            )
        )
    )
    }, [products,cat, filters])


    return (
        <Container>
            { filteredProducts.map((item) => (
                <ProductItem item={ item } key={item.id}/>
            ))}
        </Container>
    )
}

export default Product