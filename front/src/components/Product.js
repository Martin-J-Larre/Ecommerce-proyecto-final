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
    //// console.log(cat,filters,sort);
    const [products, setProducts] = useState([]);
    const [filteredProducts, setFilteredProducts] = useState([]);

    useEffect(() => {
        const getProducts = async () => {
            try {
                const res = await axios.get("http://localhost:8081/api/products/getall");
                console.log(res);
            } catch (err) {
                
            }
        }
        getProducts()
    }, [cat])


    return (
        <Container>
            { popularProducts.map((item) => (
                <ProductItem item={ item } key={item.id}/>
            ))}
        </Container>
    )
}

export default Product