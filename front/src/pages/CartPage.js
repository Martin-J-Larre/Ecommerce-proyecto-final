import { mobileResposive } from "../responsive";//
import styled from "styled-components";//
import Promo from "../components/Promo";//
import Navbar from "../components/Navbar";//
import Footer from "../components/Footer";//
import { Add, Remove } from "@material-ui/icons";//
import { useSelector } from "react-redux";//
import StripeCheckout from 'react-stripe-checkout';//
import { useState, useEffect } from "react";//
import { userReq } from "../reqMethods";
import { useHistory } from "react-router";

const KEY = process.env.REACT_APP_STRIPE;

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

    const cart = useSelector((state) => state.cart);
    const [stripeToken, setStripeToken] = useState(null);
    const history = useHistory()

    const onToken = (token) => { 
        setStripeToken(token);
    }

    useEffect(() => {
        const makeReq = async () => {
            try {
                const res = await userReq.post("/checkout/payment",{
                    tokenId: stripeToken.id,
                    amount: 500,
                })
                history.push("/success",{
                    stripeData: res.data,
                    products: cart,
                });
            } catch (err) {
                console.log(err);
            }
        }
        stripeToken && makeReq();
    }, [stripeToken, cart.total, history])

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
                        {cart.products.map((product) => (<ProductContainer>
                            <ProductDetail>
                                <Image src={ product.img }/>
                                <Detail>
                                    <ProductName><b>Product:</b>{ product.title }</ProductName>
                                    <ProductID><b>ID:</b>{ product._id }</ProductID>
                                    <ProductColor color={ product.color }/>
                                    <ProductSize><b>Size:</b>{ product.size }</ProductSize>
                                </Detail>
                            </ProductDetail>
                            <ProductPriceDetail>
                                <ProductQuantityContainer>
                                    <Add />
                                    <ProductQuantity>{ product.quantity }</ProductQuantity>
                                    <Remove />
                                </ProductQuantityContainer>
                                <ProductPrice>$ { product.price * product.quantity }</ProductPrice>
                            </ProductPriceDetail>
                        <Hr/>
                        </ProductContainer> ))}
                    </Info>
                    <SummaryContainer>
                        <SummaryTitle>ORDER SUMMARY</SummaryTitle>
                        <SummaryItem>
                            <SummaryItemText>Subtotal</SummaryItemText>
                            <SummaryItemPrice>$ { cart.total }</SummaryItemPrice>
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
                            <SummaryItemPrice>$ { cart.total }</SummaryItemPrice>
                        </SummaryItem>
                        <StripeCheckout
                            name="Test CoderHouse"
                            image="https://img.freepik.com/free-vector/realistic-isolated-glass-beer-with-drops_1284-41687.jpg?size=338&ext=jpg&ga=GA1.2.1964942655.1646467495"
                            billingAddress
                            shippingAddress
                            description={`Your total is $${cart.total}`}
                            amount={cart.total*100}
                            token={onToken}
                            stripeKey={KEY}
                        >
                        <SummaryButton>CHECKOUT NOW</SummaryButton>
                        </StripeCheckout>
                    </SummaryContainer>
                </BelowContainer>
            </Wrapper>
            <Footer />
        </Container>
    )
}

export default CartPage