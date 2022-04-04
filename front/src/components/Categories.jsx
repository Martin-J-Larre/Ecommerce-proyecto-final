import styled from "styled-components";
import { season } from "../data";
import { mobile } from "../responsive";
import CategoryItemSeason from "./CategoryItemSeason";

const Container = styled.div`
  display: flex;
  padding: 20px;
  justify-content: space-between;
  flex-wrap: wrap;
  ${mobile({ padding: "0px", flexDirection:"column" })}

`;

const CategoriesSummer = () => {
  return (
    <Container>
      <CategoryItemSeason item={season[0]} key={season[0].id} />
      <CategoryItemSeason item={season[1]} key={season[1].id} />
    </Container>
  );
};

export default CategoriesSummer;
