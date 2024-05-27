import styled from "styled-components";
import H1 from "components/H1";
import Wrapper from "./Wrapper";

const StyledH1 = styled(H1)`
    margin: 0;
    font-size: 2.5em;
    color: ${(props) => props.theme.nutmeg};
`;

const StyledUl = styled.ul`
    margin: 0;
    padding-left: 15px;
`;

const StyledLi = styled.li`
    margin: 15px;
    padding-left: 15px;
    &::marker {
        color: ${(props) => props.theme.nutmeg};
    }
`;

const Ingredients = () => {
    return (
        <Wrapper className="section border-b">
            <StyledH1>Ingredients</StyledH1>
            <StyledUl>
                <StyledLi>2-3 large eggs</StyledLi>
                <StyledLi>Salt, to taste</StyledLi>
                <StyledLi>Pepper, to taste</StyledLi>
                <StyledLi>1 tablespoon of butter or oil</StyledLi>
                <StyledLi>Optional filStyledLings: cheese, diced vegetables, cooked meats, herbs</StyledLi>
            </StyledUl>
        </Wrapper>
    );
};

export default Ingredients;
