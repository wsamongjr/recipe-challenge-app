import styled from 'styled-components';
import H1 from 'components/H1';
import Wrapper from './Wrapper';

const StyledH1 = styled(H1)`
    font-family: 'Young Serif', serif;
    margin: 0;
    font-size: 2.5em;
    color: ${(props) => props.theme.nutmeg};
`;

const StyledOl = styled.ol`
    margin: 0;
    padding-left: 15px;
`;

const StyledLi = styled.li`
    margin: 15px;
    padding-left: 15px;
    &::marker {
        font-weight: 800;
        color: ${(props) => props.theme.nutmeg};
    }
`;

const StyledSpan = styled.span`
    font-weight: 800;
    color: ${(props) => props.theme.wengeBrown};
`;

const Instructions = () => {
    return (
        <Wrapper className="section border-b">
            <StyledH1>Instructions</StyledH1>
            <StyledOl type="1">
                <StyledLi>
                    <StyledSpan>Beat the eggs:</StyledSpan> In a bowl, beat the eggs with a pinch of salt and pepper until they are well mixed. You can add a tablespoon of water or milk for a fluffier
                    texture.
                </StyledLi>
                <StyledLi>
                    <StyledSpan>Heat the pan:</StyledSpan> Place a non-stick frying pan over medium heat and add butter or oil.
                </StyledLi>
                <StyledLi>
                    <StyledSpan>Cook the omelette:</StyledSpan> Once the butter is melted and bubbling, pour in the eggs. Tilt the pan to ensure the eggs evenly coat the surface.
                </StyledLi>
                <StyledLi>
                    <StyledSpan>Add fillings (optional):</StyledSpan> When the eggs begin to set at the edges but are still slightly runny in the middle, sprinkle your chosen fillings over one half of
                    the omelette.
                </StyledLi>
                <StyledLi>
                    <StyledSpan>Fold and serve:</StyledSpan> As the omelette continues to cook, carefully lift one edge and fold it over the fillings. Let it cook for another minute, then slide it
                    onto a plate.
                </StyledLi>
                <StyledLi>
                    <StyledSpan>Enjoy:</StyledSpan> Serve hot, with additional salt and pepper if needed.
                </StyledLi>
            </StyledOl>
        </Wrapper>
    );
};

export default Instructions;
