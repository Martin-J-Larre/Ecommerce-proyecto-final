import { mobileResposive } from "../responsive";//
import styled from "styled-components";//
import { useState } from "react";//
import { login } from "../redux/apiCalls";//
import { useDispatch, useSelector } from "react-redux";//

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
    &:disabled{
        color: green;
        cursor: not-allowed;
    } 
`
const Link = styled.a`
    margin: 5px auto; 
    font-size: 12px;
    text-decoration: underline; 
    cursor: pointer;
`
const Error = styled.span`
    color: red;
    margin: 2px auto; 
    font-size: 12px;
    background-color: #f8d7da; 
    padding: 5px
`;

const LoginPage = () => {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const dispatch = useDispatch();
    const { isFetching, error } = useSelector((state) => state.user)

    
    const handleBtn = (e) => {
        e.preventDefault()
        login(dispatch,{ username, password})
    }
    return (
        <Container>
        <Wrapper>
            <Title>SIGN IN</Title>
            <Form>
                <Input placeholder="username" onChange={(e)=>setUsername(e.target.value)} />
                <Input placeholder="password" type="password" onChange={(e)=>setPassword(e.target.value)} />
                <Button onClick={ handleBtn }
                        disabled={ isFetching } >
                    LOGIN
                </Button>
                {error && <Error>Something went wrong...</Error>}
                <Link>FORGOT PASSWORD? click here</Link>
                <Link>CREATE A NEW ACCOUNT, click here</Link>
            </Form>
        </Wrapper>
    </Container>
    )
}

export default LoginPage;