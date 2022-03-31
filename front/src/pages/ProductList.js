import { useLocation } from "react-router";
import { useState } from "react";
import { mobileResposive } from "../responsive";
import styled from "styled-components";
import NavBar from '../components/Navbar';
import Promo from '../components/Promo';
import Product from '../components/Product';
import Newsletter from '../components/Newsletter';
import Footer from '../components/Footer';

const Container = styled.div`
    
`
const Title = styled.h1`
    margin: 20px;
    ${mobileResposive({
        textAlign: "center",
        fontSize: "24px",
        marginTop: "30px"
    })}
`
const FilterContainer = styled.div`
    display: flex;
    justify-content: space-between; 
`
const FilterProduct = styled.div`
    margin: 20px;
    ${mobileResposive({
        width: "0px 20px",
        marginTop:"10px",
        fontSize: "12px",
        display: "flex",
        flexDirection: "column"
    })}
`
const FilterText = styled.span`
    font-size: 20px;
    font-weight: 600;
    margin-right: 20px;
    ${mobileResposive({
        marginRight: "0px"
    })}
`
const Select = styled.select`
    padding: 10px;
    margin-right: 20px;
    ${mobileResposive({
        margin: "10px 0px"
    })}
`
const Option = styled.option`

`

const ProductList = () => {

    const location = useLocation();
    const cat = location.pathname.split("/")[2];

    const [filters, setFilters] = useState({});
    const [sort, setSort] = useState("Newest");

    const handleFilter = (e) => { 
        const value = e.target.value;
        setFilters({
            ...filters,
            [e.target.name]: value,
        })
    }
    // console.log(filter);

    return (
        <Container>
            <Promo />
            <NavBar />
            <Title>{cat}</Title>
            <FilterContainer>
                <FilterProduct>
                    <FilterText>
                        Filter Products:
                    </FilterText>
                    <Select name="color" onChange={ handleFilter }>
                        <Option disabled >
                            Color
                        </Option>
                        <Option>white</Option>
                        <Option>black</Option>
                        <Option>red</Option>
                        <Option>blue</Option>
                        <Option>yellow</Option>
                        <Option>green</Option>
                    </Select>
                    <Select name="size" onChange={ handleFilter }>
                        <Option disabled >
                            Size
                        </Option>
                        <Option>xs</Option>
                        <Option>s</Option>
                        <Option>m</Option>
                        <Option>l</Option>
                        <Option>xl</Option>
                    </Select>
                </FilterProduct>
                <FilterProduct>
                    <FilterText>
                        Sort Products:
                    </FilterText>
                    <Select onChange={(e) => setSort(e.target.value)}>
                        <Option value="newest">Newest</Option>
                        <Option value="asc">Price (+)</Option>
                        <Option value="desc">Price (-)</Option>
                    </Select>
                </FilterProduct>
            </FilterContainer>
            <Product cat={cat} filters={filters} sort={sort}/>
            <Newsletter />
            <Footer />
        </Container>
    )
}

export default ProductList