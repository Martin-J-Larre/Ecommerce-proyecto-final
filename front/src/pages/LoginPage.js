import { mobileResposive } from "../responsive";
import styled from "styled-components";

const Container = styled.div`
    width: 100vw;
    height: 100vh;
    background: linear-gradient(
        rgba(255, 255, 255, 0.1),
        rgba(255, 255, 255, 0.1)
    ), 
    url("https://img.freepik.com/free-photo/fashion-clothing-hangers-show_1153-5383.jpg?w=740") center;
    background-repeat: no-repeat;
    background-size: cover;
    display: flex;
    align-items: center;
    justify-content: center;  

`
const Wrapper = styled.div`
    width: 25%;
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
    flex-direction: column; 
`
const Input = styled.input`
    flex: 1;
    min-width: 40%; 
    margin: 10px 0px;
    padding: 10px;
`
const Button = styled.button`
    width: 40%;
    border: none;
    margin: 10px auto;
    padding: 15px 20px;
    background-color: teal;
    color: white;
    cursor: pointer; 
`
const Link = styled.a`
    margin: 5px auto; 
    font-size: 12px;
    text-decoration: underline; 
    cursor: pointer;

`

const Login = () => {
    return (
        <Container>
        <Wrapper>
            <Title>SIGN IN</Title>
            <Form>
                <Input placeholder="username" />
                <Input placeholder="password" />
                <Button>LOGIN</Button>
                <Link>FORGOT PASSWORD? click here</Link>
                <Link>CREATE A NEW ACCOUNT, click here</Link>
            </Form>
        </Wrapper>
    </Container>
    )
}

export default Login