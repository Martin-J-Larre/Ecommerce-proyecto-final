import { mobileResposive } from "../responsive";
import styled from "styled-components";

const Container = styled.div`
    width: 100vw;
    height: 100vh;
    background: linear-gradient(
        rgba(255, 255, 255, 0.1),
        rgba(255, 255, 255, 0.1)
    ), 
    url("https://img.freepik.com/free-photo/two-young-beautiful-girlfriends-are-walking-style-loft-showroom-stylish-things-with-gift-bags-smiling-each-other_496169-2354.jpg?t=st=1648437309~exp=1648437909~hmac=d9f0f0e3ed455ed50647c677e461e477bea359ae1c5bd3628b030f27b5e5193d&w=740") center;
    background-repeat: no-repeat;
    background-size: cover;
    display: flex;
    align-items: center;
    justify-content: center;  

`
const Wrapper = styled.div`
    width: 40%;
    padding: 20px;
    background-color: #fff; 
    ${mobileResposive({
        width: "80%"
    })}
`
const Title = styled.h1`
    text-align: center; 
    font-size: 24px;
    font-weight: 500;  
`
const Form = styled.form`
    display: flex;
    flex-wrap: wrap; 
`
const Input = styled.input`
    flex: 1;
    min-width: 40%; 
    margin: 20px 10px 0px 0px;
    padding: 10px;
`
const Button = styled.button`
    width: 40%;
    border: none;
    margin: 20px auto;
    padding: 15px 20px;
    background-color: teal;
    color: white;
    cursor: pointer; 
`

const Register = () => {
    return (
        <Container>
            <Wrapper>
                <Title>CREATE A ACCOUNT</Title>
                <Form>
                    <Input placeholder="name" />
                    <Input placeholder="last name" />
                    <Input placeholder="username" />
                    <Input placeholder="email" />
                    <Input placeholder="password" />
                    <Input placeholder="confirm password" />
                    <Button>CREATE</Button>
                </Form>
            </Wrapper>
        </Container>
    )
}

export default Register