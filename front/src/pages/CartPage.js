import { mobileResposive } from "../responsive";
import styled from "styled-components";
import Promo from "../components/Promo";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { Add, Remove } from "@material-ui/icons";

const Container = styled.div``

const Wrapper = styled.div`
    padding: 20px;
    ${mobileResposive({
        padding: "10px"
    })}
`
const Title = styled.h1`
    font-weight: 300; 
    text-align: center; 
`
const AboveContainer = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 20px;  
`
const AboveButton = styled.button`
    padding: 10px;
    font-weight: 600;
    cursor: pointer; 
    border: ${props=>props.type === "filled" && "none"};
    background-color: ${props=>props.type === "filled" ? "black" : "transparent"};
    color: ${props=>props.type === "filled" && "white"};
`
const AboveTextContainer = styled.div`
    ${mobileResposive({
        display: "none"
    })}
`

const AboveText = styled.span`
    text-decoration: underline;
    cursor: pointer; 
    margin: 0px 10px;
`
const BelowContainer = styled.div`
    display: flex;
    justify-content: space-between;
    ${mobileResposive({
        flexDirection: "column"
    })} 
`
const Info = styled.div`
    flex:3;
`
const ProductContainer = styled.div`
    display: flex;
    justify-content: space-between;
    ${mobileResposive({
        flexDirection: "column"
    })} 
`
const ProductDetail = styled.div`
    flex:2;
    display: flex;
`
const Image = styled.img`
    width: 200px;
`
const Detail = styled.div`
    padding: 20px;
    display: flex;
    flex-direction: column;
    justify-content: space-around;  
`
const ProductName = styled.span`
    
`
const ProductID = styled.span`
    
`
const ProductColor = styled.div`
    width: 20px;
    height: 20px;
    border-radius: 50%; 
    background-color: ${(props) => props.color}; 
`
const ProductSize = styled.span`
    
`
const ProductPriceDetail = styled.div`
    flex:1;
    display: flex;
    flex-direction: column; 
    align-items: center;
    justify-content: center;  
`
const ProductQuantityContainer = styled.div`
    display: flex;
    align-items: center;
    margin-bottom: 20px;

`
const ProductQuantity = styled.div`
    font-size: 24px;
    margin: 5px; 
    ${mobileResposive({
        margin: "5px 15px"
    })}
`
const ProductPrice = styled.div`
    font-size: 30px;
    font-weight: 200;
    ${mobileResposive({
        marginBottom: "20px"
    })}  
`
const Hr = styled.hr`
    background-color: #eee;
    border: none;
    height: 1px;
`
const SummaryContainer = styled.div`
    flex:1;
    border: 0.5px solid lightgray;
    border-radius: 10px;
    padding: 20px; 
    height: 55vh;
`
const SummaryTitle = styled.h1`
    font-weight: 200;
`
const SummaryItem = styled.div`
    margin: 30px 0px;
    display: flex;
    justify-content: space-between; 
    font-weight: ${props=>props.type === "total" && "500"}; 
    font-size: ${props=>props.type === "total" && "24px"}; 
`
const SummaryItemText = styled.span`
`
const SummaryItemPrice = styled.span`
    
`
const SummaryButton = styled.button`
    width: 100%;
    padding: 10px;
    background-color: black;
    color: #fff;
    font-weight: 600;  
`

const CartPage = () => {
    return (
        <Container>
            <Promo />
            <Navbar />
            <Wrapper>
                <Title>Your Cart</Title>
                <AboveContainer>
                    <AboveButton>CONTINUE SHOPPING</AboveButton>
                    <AboveTextContainer>
                        <AboveText>Shopping cart(2)</AboveText>
                        <AboveText>Your wishlist(0)</AboveText>
                    </AboveTextContainer>
                    <AboveButton type="filled">CHECKOUT NOW</AboveButton>
                </AboveContainer>
                <BelowContainer>
                    <Info>
                        <ProductContainer>
                            <ProductDetail>
                                <Image src="https://img.freepik.com/free-photo/jeans_1203-8093.jpg?size=338&ext=jpg&ga=GA1.2.1964942655.1646467495"/>
                                <Detail>
                                    <ProductName><b>Product:</b> JEAN COOL</ProductName>
                                    <ProductID><b>ID:</b> 857463535</ProductID>
                                    <ProductColor color="black"/>
                                    <ProductSize><b>Size:</b> M </ProductSize>
                                </Detail>
                            </ProductDetail>
                            <ProductPriceDetail>
                                <ProductQuantityContainer>
                                    <Add />
                                    <ProductQuantity>2</ProductQuantity>
                                    <Remove />
                                </ProductQuantityContainer>
                                <ProductPrice>$ 300</ProductPrice>
                            </ProductPriceDetail>
                        </ProductContainer>
                        <Hr/>
                        <ProductContainer>
                            <ProductDetail>
                                <Image src="https://img.freepik.com/free-photo/black-suede-line-skirt-with-design-space-women-s-street-fashion_53876-102866.jpg?t=st=1648446173~exp=1648446773~hmac=c7c1327a8d3eaf47593508580c731f0c514a76183085aafcedceedf7b74cde66&w=740"/>
                                <Detail>
                                    <ProductName><b>Product:</b> SKIRT</ProductName>
                                    <ProductID><b>ID:</b> 857463535</ProductID>
                                    <ProductColor color="black"/>
                                    <ProductSize><b>Size:</b> M </ProductSize>
                                </Detail>
                            </ProductDetail>
                            <ProductPriceDetail>
                                <ProductQuantityContainer>
                                    <Add />
                                    <ProductQuantity>8</ProductQuantity>
                                    <Remove />
                                </ProductQuantityContainer>
                                <ProductPrice>$ 100</ProductPrice>
                            </ProductPriceDetail>   
                        </ProductContainer>
                    </Info>
                    <SummaryContainer>
                        <SummaryTitle>ORDER SUMMARY</SummaryTitle>
                        <SummaryItem>
                            <SummaryItemText>Subtotal</SummaryItemText>
                            <SummaryItemPrice>$ 60</SummaryItemPrice>
                        </SummaryItem>
                        <SummaryItem>
                            <SummaryItemText>Shipping</SummaryItemText>
                            <SummaryItemPrice>$ 20</SummaryItemPrice>
                        </SummaryItem>
                        <SummaryItem>
                            <SummaryItemText>Shipping Discount</SummaryItemText>
                            <SummaryItemPrice>$ -10</SummaryItemPrice>
                        </SummaryItem>
                        <SummaryItem type="total">
                            <SummaryItemText>Total</SummaryItemText>
                            <SummaryItemPrice>$ 70</SummaryItemPrice>
                        </SummaryItem>
                        <SummaryButton>CHECKOUT NOW</SummaryButton>
                    </SummaryContainer>
                </BelowContainer>
            </Wrapper>
            <Footer />
        </Container>
    )
}

export default CartPage