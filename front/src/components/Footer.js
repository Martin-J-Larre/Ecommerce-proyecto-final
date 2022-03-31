import { Facebook, Instagram, MailOutline, Phone, Room, Twitter, YouTube } from "@material-ui/icons";
import { FaCcMastercard, FaCcPaypal, FaCcVisa } from 'react-icons/fa';
import { SiAmericanexpress } from 'react-icons/si';
import styled from "styled-components"
import { mobileResposive } from '../responsive';

const FooterContainer = styled.div`
    display: flex;
    ${mobileResposive({
        flexDirection: 'column'
    })}
    `
const FooterLeft = styled.div`
    flex: 1;
    display: flex;
    flex-direction: column;
    padding: 20px; 
`
const Logo = styled.h1`
${mobileResposive({
    textAlign: "center",
    fontSize: "24px"
})}
`

const Desc = styled.p`
    margin: 20px 0px;
`
const SocialMediaContainer = styled.div`
    display: flex;
    ${mobileResposive({
        width: "100%",
        justifyContent:'space-between'
    })}
`
const IconContainer = styled.div`
    width: 40px;
    height: 40px;
    border-radius: 50%;
    color: #fff;
    background-color: red; //! Cambiar color
    display: flex;
    align-items: center;
    justify-content: center; 
    margin-right: 20px;  
`

const FooterCenter = styled.div`
    flex: 1;
    padding: 20px;
    ${mobileResposive({
        display: "none"
    })} 
`
const Title = styled.h3`
    margin-bottom: 30px;
    ${mobileResposive({
        textAlign: "center"
    })}
`
const List = styled.ul`
    margin: 0;
    padding: 0;
    list-style: none; 
    display: flex;
    flex-wrap: wrap; 
`
const ListItem = styled.li`
    width: 50%;
    margin-bottom: 10px; 
`

const FooterRight = styled.div`
    flex: 1;
    padding: 20px;
    ${mobileResposive({
        backgroundColor: "#eee"
    })}
`

const ContactItem = styled.div`
    margin: 20px;
    display: flex;
    align-items: center;
`
const Payment = styled.div`
    width: 50%;
    margin-left: 15px; 
    display: flex;
    justify-content: space-evenly;
    color: red;
    font-size: 30px;
    ${mobileResposive({
        width: "100%",
        marginLeft: "0"
    })} 
`

const Footer = () => {
    return (
        <FooterContainer>
            <FooterLeft>
                <Logo>ECOMMERCE CODERHOUSE</Logo>
                <Desc>Lorem lorem lorem lorem lorem lorem Lorem lorem lorem lorem lorem lorem Lorem lorem lorem lorem lorem lorem Lorem lorem lorem lorem lorem lorem</Desc>
                <SocialMediaContainer>
                    <IconContainer>
                        <Facebook />
                    </IconContainer>
                    <IconContainer>
                        <Instagram />
                    </IconContainer>
                    <IconContainer>
                        <Twitter />
                    </IconContainer>
                    <IconContainer>
                        <YouTube />
                    </IconContainer>
                </SocialMediaContainer>
            </FooterLeft>
            <FooterCenter>
                <Title>Useful Links</Title>
                <List>
                    <ListItem>Home</ListItem>
                    <ListItem>Cart</ListItem>
                    <ListItem>Woman1</ListItem>
                    <ListItem>Women2</ListItem>
                    <ListItem>Accessories</ListItem>
                    <ListItem>My Acount</ListItem>
                    <ListItem>Order Traking</ListItem>
                    <ListItem>WishList</ListItem>
                    <ListItem>Terms</ListItem>
                    <ListItem>Terms</ListItem>
                </List>
            </FooterCenter>
            <FooterRight>
                <Title>Contact</Title>
                <ContactItem><Room style={{marginRight:"10px"}}/> 2345 lorem, New York, New York.</ContactItem>
                <ContactItem><Phone style={{marginRight:"10px"}}/> +1234-56789</ContactItem>
                <ContactItem><MailOutline style={{marginRight:"10px"}}/> proyecto-coderhouse@gmail.com</ContactItem>
                <Payment>
                    <FaCcMastercard/>
                    <FaCcPaypal/>
                    <SiAmericanexpress />
                    <FaCcVisa />
                    <FaCcPaypal/>
                </Payment>
            </FooterRight>
        </FooterContainer>
    )
}

export default Footer