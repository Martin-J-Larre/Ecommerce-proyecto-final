import { mobileResposive } from "../responsive";
import styled from "styled-components";
import Promo from '../components/Promo';
import Navbar from '../components/Navbar';
import Newsletter from '../components/Newsletter';
import Footer from '../components/Footer';
import { Add, Remove } from "@material-ui/icons";

const Container = styled.div`
`
const Wrapper = styled.div`
    padding: 50px;
    display: flex;
    ${mobileResposive({
        marginTop: "20px",
        padding: "10px",
        flexDirection: "column"
    })}
`
const ImgContainer = styled.div`
    flex: 1;
`
const Image = styled.img`
    width: 100%;
    height: 90vh;
    object-fit: cover; 
    ${mobileResposive({
        height: "40vh"
    })}
`
const InfoContainer = styled.div`
    flex: 1;
    padding: 0px 50px;
    ${mobileResposive({
        padding: "10px"
    })}
`
const Title = styled.h1`
    font-weight: 200;
    ${mobileResposive({
        textAlign: "center"
    })}
`
const Desc = styled.p`
    margin: 20px 0px;
`
const Price = styled.span`
    font-weight: 100;
    font-size: 40px;
`
const FilterContainer = styled.div`
    width: 50%;
    margin: 30px 0px;
    display: flex;
    justify-content: space-between;
    ${mobileResposive({
        width: "100%"
    })}
`
const FilterProduct = styled.div`
    display: flex;
    align-items: center;

`
const FilterTitle = styled.span`
    font-size: 20px;
    font-weight: 200px;
`
const FilterColor = styled.div`
    width: 20px;
    height: 20px;
    border-radius: 50%;
    background-color: ${props=>props.color};
    margin: 0px 5px;
    cursor: pointer;
`
const FilterSize = styled.select`
    margin-left: 10px;
    padding: 5px;
`
const FilterSizeOption = styled.option`

`
const AddContainer = styled.div`
    display: flex;
    align-content: center;
    justify-content: space-between;
    width: 50%; 
    ${mobileResposive({
        width: "100%"
    })}
`
const QuantityContainer = styled.div`
    display: flex;
    align-items: center;
    font-weight: 700;
    ${mobileResposive({
        marginLeft: "25px"
    })}

`
const Quantity = styled.span`
    width: 30px;
    height: 30px;
    border-radius: 10px;
    border: 1px solid teal;
    display: flex;
    align-items: center;
    justify-content: center;  
    margin: 5px;
`
const Button = styled.button`
    padding: 15px;
    border: 2px solid teal;
    background-color: #fff;
    cursor: pointer; 
    font-weight: 600; 

    &:hover{
        background-color: #f8f4f4; //! cambiar color de todo tematica verizon
    }

`

const ProductPage = () => {
    return (
        <Container>
            <Promo />
            <Navbar />
            <Wrapper>
                <ImgContainer>
                    <Image src="https://img.freepik.com/free-photo/jeans_1203-8093.jpg?size=338&ext=jpg&ga=GA1.2.1964942655.1646467495" />
                </ImgContainer>
                <InfoContainer>
                    <Title>
                        Jean something
                    </Title>
                    <Desc>
                        Lorem lorem lorem Lorem lorem lorem Lorem lorem lorem Lorem lorem lorem Lorem lorem lorem Lorem lorem lorem Lorem lorem lorem Lorem lorem lorem Lorem lorem lorem
                    </Desc>
                    <Price>
                        $ 20
                    </Price>
                    <FilterContainer>
                        <FilterProduct>
                            <FilterTitle>Color</FilterTitle>
                            <FilterColor color="black"/>
                            <FilterColor color="darkblue"/>
                            <FilterColor color="gray"/>
                        </FilterProduct>
                        <FilterProduct>
                            <FilterTitle>
                                Size
                            </FilterTitle>
                            <FilterSize>
                                <FilterSizeOption>XS</FilterSizeOption>
                                <FilterSizeOption>S</FilterSizeOption>
                                <FilterSizeOption>M</FilterSizeOption>
                                <FilterSizeOption>L</FilterSizeOption>
                                <FilterSizeOption>XL</FilterSizeOption>
                            </FilterSize>
                        </FilterProduct>
                    </FilterContainer>
                    <AddContainer>
                        <QuantityContainer>
                            <Remove />
                            <Quantity>1</Quantity>
                            <Add />
                        </QuantityContainer>
                        <Button>ADD TOCART</Button>
                    </AddContainer>
                </InfoContainer>
            </Wrapper>
            <Newsletter />
            <Footer />
        </Container>
    )
}

export default ProductPage