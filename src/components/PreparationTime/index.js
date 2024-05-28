import React from 'react';
import styled from 'styled-components';
import H2 from 'components/H2';
import Wrapper from './Wrapper';

const StyledPreparationTime = styled.div`
    margin: 32px 32px;
`;

const StyledH2 = styled(H2)`
    font-weight: 400;
    font-family: 'Young Serif';
    margin: 0;
    color: ${(props) => props.theme.darkRaspberry};
`;

const StyledUl = styled.ul`
    margin: 0;
    padding-left: 15px;
`;

const StyledLi = styled.li`
    margin: 15px;
    padding-left: 15px;
    &::marker {
        color: ${(props) => props.theme.darkRaspberry};
    }
`;

const StyledSpan = styled.span`
    font-weight: 800;
    color: ${(props) => props.theme.wengeBrown};
`;

function PreparationTime() {
    return (
        <Wrapper className="section">
            <StyledPreparationTime className="prepration-time">
                <StyledH2>Preparation time</StyledH2>
                <StyledUl>
                    <StyledLi>
                        <StyledSpan>Total:</StyledSpan> Approximately 10 minutes
                    </StyledLi>
                    <StyledLi>
                        <StyledSpan>Preparation:</StyledSpan> 5 minutes
                    </StyledLi>
                    <StyledLi>
                        <StyledSpan>Cooking:</StyledSpan> 5 minutes
                    </StyledLi>
                </StyledUl>
            </StyledPreparationTime>
        </Wrapper>
    );
}

PreparationTime.propTypes = {};

export default PreparationTime;
