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
    return (
        <Container>
            <Promo />
            <NavBar />
            <Title>Dresses</Title>
            <FilterContainer>
                <FilterProduct>
                    <FilterText>
                        Filter Products:
                    </FilterText>
                    <Select>
                        <Option disabled selected>
                            Color
                        </Option>
                        <Option>White</Option>
                        <Option>Black</Option>
                        <Option>Red</Option>
                        <Option>Blue</Option>
                        <Option>Yellow</Option>
                        <Option>Green</Option>
                    </Select>
                    <Select>
                        <Option disabled selected>
                            Size
                        </Option>
                        <Option>XS</Option>
                        <Option>S</Option>
                        <Option>M</Option>
                        <Option>L</Option>
                        <Option>XL</Option>
                    </Select>
                </FilterProduct>
                <FilterProduct>
                    <FilterText>
                        Sort Products:
                    </FilterText>
                    <Select>
                        <Option selected>Newest</Option>
                        <Option>Price (+)</Option>
                        <Option>Price (-)</Option>
                    </Select>
                </FilterProduct>
            </FilterContainer>
            <Product />
            <Newsletter />
            <Footer />
        </Container>
    )
}

export default ProductList