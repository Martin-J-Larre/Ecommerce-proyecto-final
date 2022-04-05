import {
    Facebook,
    Instagram,
    MailOutline,
    Phone,
    Pinterest,
    Room,
    Twitter,
} from "@material-ui/icons";
import styled from "styled-components";
import { mobile } from "../responsive";
import { Link } from "react-router-dom";

const Container = styled.div`
    display: flex;
    ${mobile({ flexDirection: "column" })}
`;

const Left = styled.div`
    flex: 1;
    display: flex;
    flex-direction: column;
    padding: 20px;
`;

const Logo = styled.h1`
    font-family: 'Source Serif Pro', serif;
    margin-left:30px;
`;

const Desc = styled.p`
    margin: 10px 30px;
`;

const SocialContainer = styled.div`
    display: flex;
    margin: 5px 40px;
`;

const SocialIcon = styled.div`
    width: 40px;
    height: 40px;
    border-radius: 50%;
    color: white;
    background-color: #${(props) => props.color};
    display: flex;
    align-items: center;
    justify-content: center;
    margin-right: 20px;
`;

const Center = styled.div`
    flex: 1;
    padding: 20px;
    ${mobile({ display: "none" })}
`;

const Title = styled.h3`
    margin-bottom: 30px;
`;

const List = styled.ul`
    margin: 0;
    padding: 0;
    list-style: none;
    display: flex;
    flex-wrap: wrap;
`;

const ListItem = styled.li`
    width: 100%;
`;

const Right = styled.div`
    flex: 1;
    padding: 20px;
    ${mobile({ backgroundColor: "#fff8f8" })}
`;

const ContactItem = styled.div`
    margin-bottom: 20px;
    display: flex;
    align-items: center;
`;

const Payment = styled.img`
    width: 50%;
`;

const Footer = () => {
    return (
        <Container>
            <Left>
                <Logo>Kirei</Logo>
                <Desc>
                    Lorem Ipsum has been the industry's standard dummy text ever
                    since the 1500s, when an unknown printer took a galley of
                    type and scrambled it to make a type specimen book. 
                </Desc>
                <SocialContainer>
                    <SocialIcon color="3B5999">
                        <Facebook />
                    </SocialIcon>
                    <SocialIcon color="E4405F">
                        <Instagram />
                    </SocialIcon>
                    <SocialIcon color="55ACEE">
                        <Twitter />
                    </SocialIcon>
                    <SocialIcon color="E60023">
                        <Pinterest />
                    </SocialIcon>
                </SocialContainer>
            </Left>
            <Center>
                <Title>Useful Links</Title>
                <List>
                    <Link
                        to="/"
                        style={{
                            color: "black",
                            textDecoration: "none",
                            width: "50%",
                            marginBottom: "10px",
                        }}
                    >
                        <ListItem>Home</ListItem>
                    </Link>
                    <Link
                        to="/products/T-shirts"
                        style={{
                            color: "black",
                            textDecoration: "none",
                            width: "50%",
                            marginBottom: "10px",
                        }}
                    >
                        <ListItem>T-shirts</ListItem>
                    </Link>
                    <Link
                        to="/products/Dresses"
                        style={{
                            color: "black",
                            textDecoration: "none",
                            width: "50%",
                            marginBottom: "10px",
                        }}
                    >
                        <ListItem>Dresses</ListItem>
                    </Link>
                    <Link
                        to="/products/Jeans"
                        style={{
                            color: "black",
                            textDecoration: "none",
                            width: "50%",
                            marginBottom: "10px",
                        }}
                    >
                        <ListItem>Jeans</ListItem>
                    </Link>
                    <Link
                        to="/products/Coats"
                        style={{
                            color: "black",
                            textDecoration: "none",
                            width: "50%",
                            marginBottom: "10px",
                        }}
                    >
                        <ListItem>Coats</ListItem>
                    </Link>
                    <Link
                        to="/products/Jackets"
                        style={{
                            color: "black",
                            textDecoration: "none",
                            width: "50%",
                            marginBottom: "10px",
                        }}
                    >
                        <ListItem>Jackets</ListItem>
                    </Link>
                    <Link
                        to="/products/Sweaters"
                        style={{
                            color: "black",
                            textDecoration: "none",
                            width: "50%",
                            marginBottom: "10px",
                        }}
                    >
                        <ListItem>Sweaters</ListItem>
                    </Link>
                    <Link
                        to="/cart"
                        style={{
                            color: "black",
                            textDecoration: "none",
                            width: "50%",
                            marginBottom: "10px",
                        }}
                    >
                        <ListItem>Cart</ListItem>
                    </Link>
                </List>
            </Center>
            <Right>
                <Title>Contact</Title>
                <ContactItem>
                    <Room style={{ marginRight: "10px" }} /> Some address, Lake
                    Banks 2, 2046
                </ContactItem>
                <ContactItem>
                    <Phone style={{ marginRight: "10px" }} /> +(000) 12 123 000
                    / +(000) 93 011 000
                </ContactItem>
                <ContactItem>
                    <MailOutline style={{ marginRight: "10px" }} />{" "}
                    kirei-contact@kirei.com
                </ContactItem>
                <Payment src="https://i.ibb.co/Qfvn4z6/payment.png" />
            </Right>
        </Container>
    );
};

export default Footer;
