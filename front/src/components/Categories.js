import styled from "styled-components";
import { categories } from "../data";
import { mobileResposive } from "../responsive";
import CategoryItem from "./CategoryItem";


const Container = styled.div`
    display: flex;
    padding: 20px;
    justify-content: space-between;
    ${mobileResposive({
        padding: "0px",
        flexDirection: "column",
        marginTop: "40px"
    })} 
`

const Categories = () => {
    return (
        <Container>
            { categories.map(item=>(
                <CategoryItem item={ item } key={ item.id }/>
            ))}
        </Container>
    )
}

export default Categories