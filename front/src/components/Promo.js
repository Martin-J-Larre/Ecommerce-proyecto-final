import styled from 'styled-components'

const Container = styled.div`
    height: 30px;
    background-color: #5E615E;
    color: #fff;
    display: flex;
    align-items: center;
    justify-content: center; 
    font-size: 14px;
    font-weight: 500;   
`

const Promo = () => {
    return (
        <Container> Super Promo! Free Shipping first five orders !!!</Container>
    )
}

export default Promo